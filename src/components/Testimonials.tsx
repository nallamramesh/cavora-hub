import React, { useState, useEffect, useCallback, useRef } from 'react';
import {
  Star,
  ChevronLeft,
  ChevronRight,
  Quote,
  Sparkles,
  Play,
  Pause,
  BadgeCheck,
  TrendingUp,
  LayoutGrid,
  Sliders,
  MessageSquarePlus,
  X,
  CheckCircle2,
  MapPin,
  Calendar,
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { siteConfig } from '../data/siteConfig';
import { TestimonialItem } from '../types';

export const Testimonials: React.FC = () => {
  const [testimonials, setTestimonials] = useState<TestimonialItem[]>(siteConfig.testimonials);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState<1 | -1>(1);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isHovered, setIsHovered] = useState(false);
  const [viewMode, setViewMode] = useState<'carousel' | 'grid'>('carousel');
  const [isReviewModalOpen, setIsReviewModalOpen] = useState(false);
  const [reviewSubmitted, setReviewSubmitted] = useState(false);

  // New review form state
  const [newReview, setNewReview] = useState({
    name: '',
    role: '',
    company: '',
    handle: '',
    rating: 5,
    tag: 'Video Editing',
    content: '',
    metricValue: '',
    metricLabel: '',
  });

  const AUTO_PLAY_INTERVAL = 6000;
  const progressRef = useRef<HTMLDivElement>(null);

  const nextTestimonial = useCallback(() => {
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  }, [testimonials.length]);

  const prevTestimonial = useCallback(() => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  }, [testimonials.length]);

  const goToSlide = (index: number) => {
    setDirection(index > currentIndex ? 1 : -1);
    setCurrentIndex(index);
  };

  // Auto-play timer
  useEffect(() => {
    if (!isPlaying || isHovered || viewMode !== 'carousel') return;

    const timer = setInterval(() => {
      nextTestimonial();
    }, AUTO_PLAY_INTERVAL);

    return () => clearInterval(timer);
  }, [isPlaying, isHovered, viewMode, nextTestimonial]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (viewMode !== 'carousel') return;
      if (e.key === 'ArrowLeft') {
        prevTestimonial();
      } else if (e.key === 'ArrowRight') {
        nextTestimonial();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [viewMode, nextTestimonial, prevTestimonial]);

  const current = testimonials[currentIndex] || testimonials[0];

  const handleReviewSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newReview.name || !newReview.content) return;

    const createdTestimonial: TestimonialItem = {
      id: `user-rev-${Date.now()}`,
      name: newReview.name,
      role: newReview.role || 'Client & Creator',
      company: newReview.company,
      handle: newReview.handle ? (newReview.handle.startsWith('@') ? newReview.handle : `@${newReview.handle}`) : undefined,
      avatar: `https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=240&q=80`,
      rating: newReview.rating,
      content: newReview.content,
      tag: newReview.tag,
      verified: true,
      date: 'Just now',
      location: 'Verified Reviewer',
      metric: newReview.metricValue
        ? { value: newReview.metricValue, label: newReview.metricLabel || 'Outcome Achieved' }
        : undefined,
    };

    setTestimonials([createdTestimonial, ...testimonials]);
    setCurrentIndex(0);
    setReviewSubmitted(true);

    setTimeout(() => {
      setReviewSubmitted(false);
      setIsReviewModalOpen(false);
      setNewReview({
        name: '',
        role: '',
        company: '',
        handle: '',
        rating: 5,
        tag: 'Video Editing',
        content: '',
        metricValue: '',
        metricLabel: '',
      });
    }, 1800);
  };

  // Slide animation variants
  const slideVariants = {
    enter: (dir: number) => ({
      x: dir > 0 ? 50 : -50,
      opacity: 0,
      scale: 0.98,
    }),
    center: {
      x: 0,
      opacity: 1,
      scale: 1,
      transition: {
        x: { type: 'spring', stiffness: 320, damping: 32 },
        opacity: { duration: 0.28 },
      },
    },
    exit: (dir: number) => ({
      x: dir > 0 ? -50 : 50,
      opacity: 0,
      scale: 0.98,
      transition: {
        x: { type: 'spring', stiffness: 320, damping: 32 },
        opacity: { duration: 0.22 },
      },
    }),
  };

  return (
    <section
      id="testimonials"
      className="py-24 sm:py-32 relative overflow-hidden"
      aria-label="Client Testimonials and Feedback"
    >
      {/* Background ambient lighting */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-gradient-to-tr from-purple-900/15 via-pink-900/10 to-cyan-900/15 blur-[140px] rounded-full pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-16 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple-500/10 border border-purple-500/20 text-xs font-semibold text-purple-300 mb-4">
              <Sparkles className="w-3.5 h-3.5 text-pink-400" />
              <span>Real Client Stories</span>
            </div>
            <h2 className="font-display font-extrabold text-3xl sm:text-4xl lg:text-5xl text-white tracking-tight">
              Trusted by Creators, <br className="hidden sm:inline" />
              Founders & Global Brands
            </h2>
            <p className="text-base sm:text-lg text-zinc-400 mt-3 max-w-2xl leading-relaxed">
              Read authentic feedback from high-growth YouTubers, D2C brands, and commercial creative directors who rely on Cavora Hub.
            </p>
          </div>

          {/* View mode toggle & Submit review trigger */}
          <div className="flex items-center gap-3 flex-wrap">
            <div className="inline-flex items-center p-1 rounded-xl bg-white/[0.04] border border-white/10 backdrop-blur-md">
              <button
                type="button"
                onClick={() => setViewMode('carousel')}
                className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
                  viewMode === 'carousel'
                    ? 'bg-purple-600 text-white shadow-sm'
                    : 'text-zinc-400 hover:text-white'
                }`}
                aria-label="Switch to Carousel view"
              >
                <Sliders className="w-3.5 h-3.5" />
                <span>Carousel</span>
              </button>
              <button
                type="button"
                onClick={() => setViewMode('grid')}
                className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
                  viewMode === 'grid'
                    ? 'bg-purple-600 text-white shadow-sm'
                    : 'text-zinc-400 hover:text-white'
                }`}
                aria-label="Switch to Grid view"
              >
                <LayoutGrid className="w-3.5 h-3.5" />
                <span>All Reviews ({testimonials.length})</span>
              </button>
            </div>

            <button
              type="button"
              onClick={() => setIsReviewModalOpen(true)}
              className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-semibold text-white bg-white/[0.06] hover:bg-white/10 border border-white/15 transition-all"
            >
              <MessageSquarePlus className="w-3.5 h-3.5 text-pink-400" />
              <span>Leave Feedback</span>
            </button>
          </div>
        </div>

        {/* MODE 1: CAROUSEL VIEW */}
        {viewMode === 'carousel' && (
          <div
            className="max-w-4xl mx-auto relative"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            {/* Carousel Container Card */}
            <div className="relative rounded-3xl p-6 sm:p-10 lg:p-12 bg-gradient-to-b from-[#111118]/95 to-[#0B0B10]/95 border border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.6)] backdrop-blur-2xl overflow-hidden min-h-[420px] flex flex-col justify-between">
              
              {/* Subtle top progress bar indicating auto-advance */}
              {isPlaying && !isHovered && (
                <div className="absolute top-0 left-0 right-0 h-[2px] bg-white/[0.06] overflow-hidden">
                  <div
                    key={currentIndex}
                    ref={progressRef}
                    className="h-full bg-gradient-to-r from-purple-500 via-pink-500 to-cyan-400 animate-[progress_6s_linear]"
                    style={{ animationDuration: `${AUTO_PLAY_INTERVAL}ms` }}
                  />
                </div>
              )}

              {/* Card Header Info */}
              <div className="flex items-center justify-between gap-4 mb-6">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-purple-500/20 via-pink-500/10 to-transparent border border-purple-500/30 flex items-center justify-center text-purple-400 shadow-inner">
                    <Quote className="w-6 h-6 rotate-180 text-pink-400" />
                  </div>
                  <div>
                    <span className="text-xs font-mono font-medium px-3 py-1 rounded-full bg-white/[0.04] border border-white/[0.08] text-purple-300">
                      {current.tag}
                    </span>
                  </div>
                </div>

                {/* Metric badge if available */}
                {current.metric && (
                  <div className="hidden sm:flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-gradient-to-r from-emerald-500/10 to-cyan-500/10 border border-emerald-500/20 text-emerald-300 text-xs font-semibold">
                    <TrendingUp className="w-3.5 h-3.5 text-emerald-400" />
                    <span>{current.metric.value}</span>
                    <span className="text-zinc-400 font-normal">{current.metric.label}</span>
                  </div>
                )}
              </div>

              {/* Animated Carousel Body */}
              <div className="relative overflow-hidden my-2 flex-grow flex items-center">
                <AnimatePresence custom={direction} mode="wait">
                  <motion.div
                    key={current.id}
                    custom={direction}
                    variants={slideVariants}
                    initial="enter"
                    animate="center"
                    exit="exit"
                    className="w-full"
                  >
                    {/* Star Rating */}
                    <div className="flex items-center gap-2 mb-5">
                      <div className="flex items-center gap-1">
                        {Array.from({ length: 5 }).map((_, i) => (
                          <Star
                            key={i}
                            className={`w-5 h-5 ${
                              i < current.rating
                                ? 'text-amber-400 fill-amber-400'
                                : 'text-zinc-600'
                            }`}
                          />
                        ))}
                      </div>
                      <span className="text-xs font-mono font-bold text-zinc-300 ml-1.5">
                        {current.rating}.0 Verified Rating
                      </span>
                      {current.verified && (
                        <span className="inline-flex items-center gap-1 text-[11px] text-cyan-400 bg-cyan-500/10 border border-cyan-500/20 px-2 py-0.5 rounded-md">
                          <BadgeCheck className="w-3 h-3 text-cyan-400" />
                          <span>Verified Client</span>
                        </span>
                      )}
                    </div>

                    {/* Testimonial Quote Text */}
                    <blockquote className="text-lg sm:text-2xl font-medium text-zinc-100 leading-relaxed tracking-normal">
                      “{current.content}”
                    </blockquote>

                    {/* Mobile metric display if hidden above */}
                    {current.metric && (
                      <div className="sm:hidden mt-4 inline-flex items-center gap-2 px-3 py-1 rounded-lg bg-emerald-500/10 border border-emerald-500/20 text-emerald-300 text-xs font-medium">
                        <TrendingUp className="w-3.5 h-3.5 text-emerald-400" />
                        <span>
                          <strong>{current.metric.value}</strong> {current.metric.label}
                        </span>
                      </div>
                    )}
                  </motion.div>
                </AnimatePresence>
              </div>

              {/* Footer: Author details & Controls */}
              <div className="pt-6 border-t border-white/[0.08] mt-6 flex items-center justify-between flex-wrap gap-4">
                {/* Author Info */}
                <div className="flex items-center gap-4">
                  <div className="relative">
                    <img
                      src={current.avatar}
                      alt={current.name}
                      className="w-13 h-13 sm:w-14 sm:h-14 rounded-full object-cover ring-2 ring-purple-500/40 shadow-lg"
                      loading="lazy"
                    />
                    <div className="absolute -bottom-1 -right-1 w-5 h-5 rounded-full bg-[#0D0D12] border border-cyan-400/40 flex items-center justify-center">
                      <BadgeCheck className="w-3.5 h-3.5 text-cyan-400" />
                    </div>
                  </div>
                  <div>
                    <h4 className="font-display font-bold text-base sm:text-lg text-white">
                      {current.name}
                    </h4>
                    <p className="text-xs text-zinc-400">
                      {current.role} {current.company ? `• ${current.company}` : ''}
                    </p>
                    <div className="flex items-center gap-3 mt-1 text-[11px] text-zinc-500">
                      {current.handle && (
                        <span className="font-mono text-purple-400 font-medium">
                          {current.handle}
                        </span>
                      )}
                      {current.location && (
                        <span className="hidden sm:inline-flex items-center gap-1">
                          <MapPin className="w-3 h-3 text-zinc-500" />
                          {current.location}
                        </span>
                      )}
                      {current.date && (
                        <span className="hidden sm:inline-flex items-center gap-1">
                          <Calendar className="w-3 h-3 text-zinc-500" />
                          {current.date}
                        </span>
                      )}
                    </div>
                  </div>
                </div>

                {/* Controls: Play/Pause, Prev, Next */}
                <div className="flex items-center gap-2">
                  {/* Play/Pause Toggle */}
                  <button
                    type="button"
                    onClick={() => setIsPlaying(!isPlaying)}
                    className="p-2.5 rounded-full bg-white/[0.04] hover:bg-white/10 text-zinc-400 hover:text-white border border-white/10 transition-colors"
                    aria-label={isPlaying ? 'Pause carousel auto-play' : 'Start carousel auto-play'}
                    title={isPlaying ? 'Pause Auto-Cycle' : 'Resume Auto-Cycle'}
                  >
                    {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4 text-emerald-400" />}
                  </button>

                  {/* Previous Arrow */}
                  <button
                    type="button"
                    onClick={prevTestimonial}
                    className="p-3 rounded-full bg-white/[0.05] hover:bg-white/15 text-zinc-300 hover:text-white border border-white/10 active:scale-95 transition-all shadow-md"
                    aria-label="Previous testimonial"
                  >
                    <ChevronLeft className="w-5 h-5" />
                  </button>

                  {/* Next Arrow */}
                  <button
                    type="button"
                    onClick={nextTestimonial}
                    className="p-3 rounded-full bg-white/[0.05] hover:bg-white/15 text-zinc-300 hover:text-white border border-white/10 active:scale-95 transition-all shadow-md"
                    aria-label="Next testimonial"
                  >
                    <ChevronRight className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </div>

            {/* Bottom Dots & Quick Thumbnails Selector */}
            <div className="mt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
              {/* Dots Indicator */}
              <div className="flex items-center gap-2">
                {testimonials.map((_, idx) => (
                  <button
                    key={idx}
                    type="button"
                    onClick={() => goToSlide(idx)}
                    className={`h-2.5 rounded-full transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-purple-500 ${
                      currentIndex === idx
                        ? 'w-9 bg-gradient-to-r from-purple-500 to-pink-500'
                        : 'w-2.5 bg-zinc-700 hover:bg-zinc-500'
                    }`}
                    aria-label={`Go to testimonial ${idx + 1}`}
                  />
                ))}
              </div>

              {/* Quick Thumbnail Jump Bar */}
              <div className="flex items-center gap-2 overflow-x-auto py-1 max-w-full">
                {testimonials.map((item, idx) => (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => goToSlide(idx)}
                    className={`relative p-0.5 rounded-full transition-all duration-200 ${
                      currentIndex === idx
                        ? 'ring-2 ring-purple-500 ring-offset-2 ring-offset-[#080808] scale-110'
                        : 'opacity-50 hover:opacity-100 hover:scale-105'
                    }`}
                    aria-label={`View feedback from ${item.name}`}
                    title={`${item.name} (${item.role})`}
                  >
                    <img
                      src={item.avatar}
                      alt={item.name}
                      className="w-8 h-8 rounded-full object-cover"
                    />
                  </button>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* MODE 2: GRID VIEW (ALL REVIEWS) */}
        {viewMode === 'grid' && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 animate-in fade-in duration-300">
            {testimonials.map((item, idx) => (
              <div
                key={item.id}
                className="rounded-2xl p-6 bg-[#111116] border border-white/10 hover:border-purple-500/40 transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-4">
                    <span className="text-[11px] font-mono px-2.5 py-1 rounded-full bg-white/[0.04] border border-white/[0.08] text-purple-300">
                      {item.tag}
                    </span>
                    <div className="flex items-center gap-1">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <Star
                          key={i}
                          className={`w-3.5 h-3.5 ${
                            i < item.rating
                              ? 'text-amber-400 fill-amber-400'
                              : 'text-zinc-600'
                          }`}
                        />
                      ))}
                    </div>
                  </div>

                  <blockquote className="text-sm sm:text-base font-normal text-zinc-200 leading-relaxed mb-6">
                    “{item.content}”
                  </blockquote>

                  {item.metric && (
                    <div className="mb-6 inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-emerald-500/10 border border-emerald-500/20 text-emerald-300 text-xs font-semibold">
                      <TrendingUp className="w-3 h-3 text-emerald-400" />
                      <span>{item.metric.value}</span>
                      <span className="text-zinc-400 font-normal">{item.metric.label}</span>
                    </div>
                  )}
                </div>

                <div className="pt-4 border-t border-white/[0.06] flex items-center gap-3">
                  <img
                    src={item.avatar}
                    alt={item.name}
                    className="w-10 h-10 rounded-full object-cover border border-purple-500/30"
                  />
                  <div>
                    <h4 className="font-display font-bold text-sm text-white flex items-center gap-1">
                      <span>{item.name}</span>
                      {item.verified && <BadgeCheck className="w-3.5 h-3.5 text-cyan-400 inline" />}
                    </h4>
                    <p className="text-[11px] text-zinc-400">
                      {item.role}
                    </p>
                    {item.handle && (
                      <span className="text-[10px] font-mono text-purple-400">
                        {item.handle}
                      </span>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Brand Guarantee / Social Trust Banner */}
        <div className="mt-16 text-center border-t border-white/[0.06] pt-10">
          <div className="inline-flex items-center gap-4 sm:gap-8 flex-wrap justify-center text-xs sm:text-sm text-zinc-400">
            <div className="flex items-center gap-2">
              <BadgeCheck className="w-4 h-4 text-emerald-400" />
              <span>100% Satisfaction Guarantee</span>
            </div>
            <div className="w-1 h-1 rounded-full bg-zinc-700 hidden sm:block" />
            <div className="flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-purple-400" />
              <span>Unlimited Creative Revisions</span>
            </div>
            <div className="w-1 h-1 rounded-full bg-zinc-700 hidden sm:block" />
            <div className="flex items-center gap-2">
              <Star className="w-4 h-4 text-amber-400 fill-amber-400" />
              <span>4.98 / 5.0 Average Client Rating</span>
            </div>
          </div>
        </div>
      </div>

      {/* FEEDBACK SUBMISSION MODAL */}
      {isReviewModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in">
          <div className="relative w-full max-w-lg rounded-3xl p-6 sm:p-8 bg-[#111116] border border-white/10 shadow-2xl">
            <button
              type="button"
              onClick={() => setIsReviewModalOpen(false)}
              className="absolute top-5 right-5 p-2 rounded-full text-zinc-400 hover:text-white bg-white/[0.05] hover:bg-white/10"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>

            {reviewSubmitted ? (
              <div className="py-12 text-center">
                <div className="w-14 h-14 rounded-full bg-emerald-500/20 border border-emerald-500/40 text-emerald-400 flex items-center justify-center mx-auto mb-4">
                  <CheckCircle2 className="w-7 h-7" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Thank You for Your Feedback!</h3>
                <p className="text-sm text-zinc-400">
                  Your review has been added to our live testimonials reel.
                </p>
              </div>
            ) : (
              <div>
                <div className="mb-6">
                  <h3 className="font-display font-bold text-xl sm:text-2xl text-white">
                    Share Your Experience
                  </h3>
                  <p className="text-xs sm:text-sm text-zinc-400 mt-1">
                    Help other creators and founders discover Cavora Hub’s creative services.
                  </p>
                </div>

                <form onSubmit={handleReviewSubmit} className="space-y-4 text-sm">
                  {/* Rating Selector */}
                  <div>
                    <label className="block text-xs font-medium text-zinc-300 mb-1.5">
                      Your Rating
                    </label>
                    <div className="flex items-center gap-2">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <button
                          key={star}
                          type="button"
                          onClick={() => setNewReview({ ...newReview, rating: star })}
                          className="p-1 text-amber-400 hover:scale-110 transition-transform"
                        >
                          <Star
                            className={`w-6 h-6 ${
                              star <= newReview.rating ? 'fill-amber-400' : 'text-zinc-600'
                            }`}
                          />
                        </button>
                      ))}
                      <span className="text-xs font-mono text-zinc-400 ml-2">
                        {newReview.rating} of 5 Stars
                      </span>
                    </div>
                  </div>

                  {/* Name and Role */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="block text-xs font-medium text-zinc-300 mb-1">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={newReview.name}
                        onChange={(e) => setNewReview({ ...newReview, name: e.target.value })}
                        placeholder="e.g. Alex Morgan"
                        className="w-full px-3.5 py-2.5 rounded-xl bg-white/[0.04] border border-white/10 text-white placeholder-zinc-500 focus:outline-none focus:border-purple-500"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-medium text-zinc-300 mb-1">
                        Role / Title
                      </label>
                      <input
                        type="text"
                        value={newReview.role}
                        onChange={(e) => setNewReview({ ...newReview, role: e.target.value })}
                        placeholder="e.g. Creator / Founder"
                        className="w-full px-3.5 py-2.5 rounded-xl bg-white/[0.04] border border-white/10 text-white placeholder-zinc-500 focus:outline-none focus:border-purple-500"
                      />
                    </div>
                  </div>

                  {/* Company and Handle */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="block text-xs font-medium text-zinc-300 mb-1">
                        Channel / Handle
                      </label>
                      <input
                        type="text"
                        value={newReview.handle}
                        onChange={(e) => setNewReview({ ...newReview, handle: e.target.value })}
                        placeholder="@alexcreates"
                        className="w-full px-3.5 py-2.5 rounded-xl bg-white/[0.04] border border-white/10 text-white placeholder-zinc-500 focus:outline-none focus:border-purple-500"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-medium text-zinc-300 mb-1">
                        Service Category
                      </label>
                      <select
                        value={newReview.tag}
                        onChange={(e) => setNewReview({ ...newReview, tag: e.target.value })}
                        className="w-full px-3 py-2.5 rounded-xl bg-[#1A1A22] border border-white/10 text-white focus:outline-none focus:border-purple-500"
                      >
                        <option value="Video Editing">Video Editing</option>
                        <option value="Photo Retouching">Photo Retouching</option>
                        <option value="Graphic Design">Graphic Design</option>
                        <option value="Social Media Content">Social Media Content</option>
                        <option value="Brand Film">Brand Film</option>
                      </select>
                    </div>
                  </div>

                  {/* Review Text */}
                  <div>
                    <label className="block text-xs font-medium text-zinc-300 mb-1">
                      Your Feedback *
                    </label>
                    <textarea
                      required
                      rows={3}
                      value={newReview.content}
                      onChange={(e) => setNewReview({ ...newReview, content: e.target.value })}
                      placeholder="How did Cavora Hub help your creative goals and project results?"
                      className="w-full px-3.5 py-2.5 rounded-xl bg-white/[0.04] border border-white/10 text-white placeholder-zinc-500 focus:outline-none focus:border-purple-500 resize-none"
                    />
                  </div>

                  {/* Optional Metric */}
                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label className="block text-xs font-medium text-zinc-300 mb-1">
                        Result Stat (Optional)
                      </label>
                      <input
                        type="text"
                        value={newReview.metricValue}
                        onChange={(e) => setNewReview({ ...newReview, metricValue: e.target.value })}
                        placeholder="e.g. +40% views"
                        className="w-full px-3.5 py-2 rounded-xl bg-white/[0.04] border border-white/10 text-white placeholder-zinc-500 text-xs focus:outline-none"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-medium text-zinc-300 mb-1">
                        Metric Label
                      </label>
                      <input
                        type="text"
                        value={newReview.metricLabel}
                        onChange={(e) => setNewReview({ ...newReview, metricLabel: e.target.value })}
                        placeholder="e.g. Growth in 14 days"
                        className="w-full px-3.5 py-2 rounded-xl bg-white/[0.04] border border-white/10 text-white placeholder-zinc-500 text-xs focus:outline-none"
                      />
                    </div>
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3 mt-2 rounded-xl text-sm font-semibold text-white bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500 shadow-lg shadow-purple-600/30 active:scale-[0.99] transition-all"
                  >
                    Post Testimonial
                  </button>
                </form>
              </div>
            )}
          </div>
        </div>
      )}
    </section>
  );
};
