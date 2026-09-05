import {
  ServiceItem,
  BeforeAfterPreset,
  VideoProject,
  PortfolioItem,
  TestimonialItem,
  PricingPlan,
  FAQItem,
  StatItem,
  ProcessStep,
  WhyChooseUsItem,
} from '../types';

export const siteConfig = {
  // Brand Identity
  brand: {
    name: 'Cavora',
    hubWord: 'Hub',
    subtitle: 'GRAPHICS',
    fullName: 'Cavora Hub Graphics',
    tagline: 'Design. Create. Inspire.',
    subTagline:
      'Professional video editing, high-end photo retouching, graphic design, and social media creative solutions designed to make your brand impossible to ignore.',
    foundedYear: 2024,
    location: 'Mumbai & Bangalore, India • Working Globally',
  },

  // Contact Information (Easy to customize in one place)
  contact: {
    email: 'hello@cavorahub.com',
    supportEmail: 'projects@cavorahub.com',
    phoneDisplay: '+91 80746 84574',
    phoneRaw: '+918074684574',
    whatsappNumber: '918074684574', // digits only for wa.me links
    whatsappDefaultMessage:
      'Hi Cavora Hub! I saw your website and would like to discuss a creative project.',
    address: 'Creative Hub, Bandra West, Mumbai, India',
    businessHours: 'Mon – Sat: 9:00 AM – 9:00 PM IST (24/7 Emergency Delivery)',
  },

  // Social Links
  socialLinks: {
    instagram: 'https://instagram.com/cavorahub',
    youtube: 'https://youtube.com/@cavorahub',
    linkedin: 'https://linkedin.com/company/cavora-hub',
    whatsapp: 'https://wa.me/918074684574',
    x: 'https://x.com/cavorahub',
    behance: 'https://behance.net/cavorahub',
  },

  // Trust indicators for Hero
  trustBadges: [
    { label: 'Video Editing', icon: 'Video' },
    { label: 'Photo Retouching', icon: 'Sparkles' },
    { label: 'Social Media', icon: 'Smartphone' },
    { label: 'Creative Design', icon: 'Palette' },
  ],

  // Services Section
  services: [
    {
      id: 'video-editing',
      number: '01',
      title: 'Video Editing',
      iconName: 'Film',
      tagline: 'High-Impact Cinematic & Social Edits',
      description:
        'Professional editing for YouTube videos, reels, advertisements, corporate videos and social media content.',
      features: [
        'YouTube Videos & Documentaries',
        'Instagram Reels & TikTok Shorts',
        'High-Paced Short-Form Content',
        'Promotional & Product Commercials',
        'Corporate & Executive Brand Videos',
      ],
      gradient: 'from-purple-500/20 via-indigo-500/10 to-transparent',
      badge: 'Most In-Demand',
    },
    {
      id: 'image-editing',
      number: '02',
      title: 'Image Editing',
      iconName: 'Image',
      tagline: 'Pixel-Perfect Color & Retouching',
      description:
        'Transform ordinary photographs into polished, professional visuals with editorial precision.',
      features: [
        'High-End Fashion & Skin Retouching',
        'Clean Multi-Layer Background Removal',
        'E-Commerce & Amazon Product Editing',
        'Cinematic Color Correction & Grading',
        'Dynamic Image Enhancement & Compositing',
      ],
      gradient: 'from-cyan-500/20 via-blue-500/10 to-transparent',
      badge: 'Studio Grade',
    },
    {
      id: 'graphic-design',
      number: '03',
      title: 'Graphic Design',
      iconName: 'Palette',
      tagline: 'Distinctive Visual Identity & Assets',
      description:
        'Creative designs that communicate your brand’s personality with bold layouts and striking typography.',
      features: [
        'High-CTR YouTube Thumbnails',
        'Scroll-Stopping Social Media Posts',
        'Event Posters & Digital Billboards',
        'Web & Advertising Banners',
        'Brand Graphics, Vectors & Styleguides',
      ],
      gradient: 'from-pink-500/20 via-purple-500/10 to-transparent',
      badge: 'High Engagement',
    },
    {
      id: 'social-media',
      number: '04',
      title: 'Social Media Content',
      iconName: 'Share2',
      tagline: 'Full Creative Growth Packages',
      description:
        'Consistent, engaging visual content designed specifically for modern algorithms and audience attention.',
      features: [
        'Cohesive Instagram Grid Creatives',
        'Viral Hooks & Kinetic Captions',
        'Multi-Platform Short Repurposing',
        'Brand Promotional Creatives',
        'Full Monthly Campaign Graphics',
      ],
      gradient: 'from-violet-500/20 via-fuchsia-500/10 to-transparent',
      badge: 'Growth Engine',
    },
  ] as ServiceItem[],

  // Interactive Before & After Comparisons
  beforeAfterPresets: [
    {
      id: 'cinematic-grade',
      title: 'Cinematic Color Grading & Relighting',
      category: 'Video / Color Grade',
      beforeImage:
        'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=1200&q=80&sat=-80&con=80',
      afterImage:
        'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=1200&q=80',
      beforeLabel: 'RAW Flat Log Footage',
      afterLabel: 'Color Graded + Teal & Orange',
      description:
        'Converted washed-out flat LOG camera profile into rich filmic contrast with balanced skin tones and atmospheric depth.',
      stats: '4K DaVinci Resolve Master',
    },
    {
      id: 'editorial-retouch',
      title: 'High-Fashion Portrait Retouching',
      category: 'Photo Retouch',
      beforeImage:
        'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=1200&q=80&sat=-40&con=60',
      afterImage:
        'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=1200&q=80',
      beforeLabel: 'Standard Studio Raw',
      afterLabel: 'Frequency Separation & Glow',
      description:
        'Micro-texture skin smoothing preserving pore integrity, hair flyaway cleanup, specular iris enhancement, and tone sculpting.',
      stats: 'Vogue & GQ Editorial Standards',
    },
    {
      id: 'product-cleanup',
      title: 'Luxury Product Composite & Lighting',
      category: 'Commercial Retouch',
      beforeImage:
        'https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=1200&q=80&sat=-70&con=70',
      afterImage:
        'https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=1200&q=80',
      beforeLabel: 'Unretouched Table Shot',
      afterLabel: 'Studio Reflection & Depth',
      description:
        'Dust and scratch elimination, glass refraction balancing, dial sharpness accentuation, and seamless dark studio drop.',
      stats: 'E-Commerce Conversion +340%',
    },
  ] as BeforeAfterPreset[],

  // Video Showcase Projects
  featuredVideo: {
    id: 'featured-brand-film',
    title: 'AURA: The Sound of Future Horizons',
    client: 'Hyperion Audio Labs',
    category: 'Brand Film & Sound Design',
    duration: '02:45',
    views: '1.8M+ Organic Views',
    description:
      'A cinematic brand film featuring sound-reactive 3D simulations, rapid match-cuts, customized color grading in ACES color space, and custom foley sound design.',
    thumbnail:
      'https://images.unsplash.com/photo-1536240478700-b869070f9279?auto=format&fit=crop&w=1400&q=85',
    videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
    featured: true,
    tags: ['Brand Film', 'Sound Design', '4K Master', 'Color Grading'],
  } as VideoProject,

  videoProjects: [
    {
      id: 'brand-film',
      title: 'Neon Velocity: The Electric Pulse',
      client: 'Vortex Motors',
      category: 'Brand Film',
      duration: '01:30',
      views: '840K Views',
      description:
        'High-octane commercial edit cut to kinetic beats with seamless speed ramps, customized camera shake, and hyper-stylized neon light trails.',
      thumbnail:
        'https://images.unsplash.com/photo-1508739773434-c26b3d09e071?auto=format&fit=crop&w=800&q=80',
      tags: ['Speed Ramping', 'VFX', 'Commercial'],
    },
    {
      id: 'youtube-content',
      title: '24 Hours in Tokyo: Underground Tech',
      client: 'Kavya Sharma (1.2M Subs)',
      category: 'YouTube Content',
      duration: '14:20',
      views: '2.4M Views',
      description:
        'High-retention travel documentary edit featuring animated chapter title cards, map tracking infographics, and immersive ambient audio mix.',
      thumbnail:
        'https://images.unsplash.com/photo-1503899036084-c55cdd92da26?auto=format&fit=crop&w=800&q=80',
      tags: ['YouTube Long-Form', 'Storytelling', 'Infographics'],
    },
    {
      id: 'instagram-campaign',
      title: 'Streetwear Capsule Summer Launch',
      client: 'NOIR Culture',
      category: 'Instagram Campaign',
      duration: '00:30',
      views: '3.1M Plays',
      description:
        'Snappy 9:16 vertical reels with synchronized beat drops, text animations, paper-tear transitions, and tailored typography.',
      thumbnail:
        'https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format&fit=crop&w=800&q=80',
      tags: ['9:16 Vertical', 'Reels', 'Fashion'],
    },
    {
      id: 'product-ad',
      title: 'Chronos Smartwatch: Zero Gravity',
      client: 'Aethel Watches',
      category: 'Product Advertisement',
      duration: '00:45',
      views: '620K Views',
      description:
        'Sleek 3D product integration, dynamic lighting flares, metallic surface reflections, and crisp UI screen animations.',
      thumbnail:
        'https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=800&q=80',
      tags: ['Product Showcase', '3D Motion', 'Lighting'],
    },
    {
      id: 'event-highlight',
      title: 'Apex Music Summit: Aftermovie',
      client: 'Echo Festivals',
      category: 'Event Highlight',
      duration: '03:15',
      views: '490K Views',
      description:
        'Heart-pumping concert recap blending drone aerials, crowd reaction slow-motion, laser strobe color sync, and festival basslines.',
      thumbnail:
        'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?auto=format&fit=crop&w=800&q=80',
      tags: ['Aftermovie', 'Concert', 'Drone'],
    },
    {
      id: 'short-film',
      title: 'Shadows of Varanasi: A Narrative',
      client: 'Indie Cinema Collective',
      category: 'Short Film',
      duration: '08:40',
      views: '350K Views',
      description:
        'Poetic cinematic pacing with analog 35mm film emulation, atmospheric haze grading, and delicate foley soundscapes.',
      thumbnail:
        'https://images.unsplash.com/photo-1514565131-fce0801e5785?auto=format&fit=crop&w=800&q=80',
      tags: ['Cinematic', '35mm Film Grain', 'Story'],
    },
  ] as VideoProject[],

  // Portfolio items with interactive filter & modal data
  portfolio: [
    {
      id: 'port-1',
      title: 'Midnight Mirage: Luxury Fragrance Campaign',
      category: 'Video Editing',
      tagline: 'Cannes Indie Film Finalist • Commercial Grade',
      image:
        'https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?auto=format&fit=crop&w=900&q=80',
      aspect: 'landscape',
      client: 'Atelier Noir Parfums',
      date: 'February 2026',
      description:
        'Complete post-production pipeline for a 60-second luxury fragrance commercial featuring anamorphic lens flare flares, custom color grading in DaVinci Resolve, and cinematic sound design.',
      challenge:
        'The raw footage suffered from uneven low-light ambient noise and inconsistent color temperatures between night street shots and interior sets.',
      solution:
        'We applied deep neural noise reduction, matched skin tones precisely across all 18 scenes, and graded with a custom vintage teal-magenta curve.',
      servicesUsed: ['Video Editing', 'Color Grading', 'Sound FX', 'Motion Graphics'],
      tools: ['Premiere Pro', 'DaVinci Resolve Studio', 'After Effects'],
      metrics: [
        { label: 'Conversion Lift', value: '+42%' },
        { label: 'Video Completion', value: '78%' },
        { label: 'Total Reach', value: '1.4M' },
      ],
      featured: true,
    },
    {
      id: 'port-2',
      title: 'Cyberpunk Cyberpunk: Cover Retouching',
      category: 'Photo Editing',
      tagline: 'Digital Art & Complex Compositing',
      image:
        'https://images.unsplash.com/photo-1578632767115-351597cf2477?auto=format&fit=crop&w=900&q=80',
      aspect: 'portrait',
      client: 'NEO Magazine International',
      date: 'January 2026',
      description:
        'Futuristic editorial cover photo manipulation with neon rim lighting addition, skin texture preservation, chromatic aberration accents, and holographic overlay elements.',
      challenge:
        'Retaining authentic human skin pores while blending synthetic neon holographic reflections across the cheekbones and clothing.',
      solution:
        'Used 16-bit frequency separation, dodge & burn hand sculpting, and custom alpha-channel light maps rendered in Photoshop.',
      servicesUsed: ['Photo Retouching', 'Color Grading', 'Creative Compositing'],
      tools: ['Photoshop CC', 'Capture One Pro'],
      metrics: [
        { label: 'Print Run', value: '45,000' },
        { label: 'Instagram Saves', value: '14.2K' },
        { label: 'Client Rating', value: '5.0 / 5' },
      ],
      featured: true,
    },
    {
      id: 'port-3',
      title: 'Apex Gaming Summit Visual Identity',
      category: 'Graphic Design',
      tagline: 'Banners, Stage Visuals & Key Art',
      image:
        'https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&w=900&q=80',
      aspect: 'landscape',
      client: 'Apex Esports Asia',
      date: 'December 2025',
      description:
        'Comprehensive graphic suite for an international 3-day esports tournament including YouTube stream thumbnails, live stream overlay packages, event posters, and promotional social cards.',
      challenge:
        'Creating high-energy visual assets that look crisp both on a 40-foot main stage LED wall and on a mobile phone social feed.',
      solution:
        'Engineered vector-first modular visual components with bold typographic hierarchies, high-contrast glow gradients, and unified color codes.',
      servicesUsed: ['Graphic Design', 'Thumbnails', 'Stream Overlays', 'Event Posters'],
      tools: ['Illustrator', 'Photoshop', 'Figma'],
      metrics: [
        { label: 'Live Viewers', value: '120K+' },
        { label: 'Social Engagement', value: '+310%' },
        { label: 'Brand Recall', value: '88%' },
      ],
      featured: false,
    },
    {
      id: 'port-4',
      title: '30-Day Viral Reels Content Engine',
      category: 'Social Media',
      tagline: 'High-Retention TikTok & Reels Campaign',
      image:
        'https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?auto=format&fit=crop&w=900&q=80',
      aspect: 'portrait',
      client: 'FinTech Startup "FlowPay"',
      date: 'February 2026',
      description:
        'Conceived and produced 30 short-form reels with custom kinetic motion subtitles, animated chart callouts, sound effects, and retention-engineered visual hooks.',
      challenge:
        'Financial topics are often perceived as dry and complex with high bounce rates within the first 3 seconds.',
      solution:
        'We implemented 1.5-second visual pattern interrupts, dynamic camera zooms, punchy sound drops, and clean simplified UI simulations.',
      servicesUsed: ['Short-Form Video', 'Kinetic Typography', 'Sound Design'],
      tools: ['Premiere Pro', 'After Effects', 'Audition'],
      metrics: [
        { label: 'Organic Views', value: '4.8M+' },
        { label: 'Follower Growth', value: '+68K' },
        { label: 'Average Retention', value: '84%' },
      ],
      featured: true,
    },
    {
      id: 'port-5',
      title: 'Artisan Coffee Roasters Brand Doc',
      category: 'Video Editing',
      tagline: 'Warm Organic Storytelling',
      image:
        'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=900&q=80',
      aspect: 'square',
      client: 'Monsoon Craft Coffee',
      date: 'November 2025',
      description:
        'A heartfelt 4-minute documentary taking coffee enthusiasts from beans harvested in Coorg to roasted cups in modern cafes.',
      challenge:
        'Balancing intimate dialogue with fast cafe action footage without losing emotional cadence.',
      solution:
        'Crafted a warm amber color grade, integrated custom acoustic soundtrack pacing, and used split screens to juxtapose farming with cafe craft.',
      servicesUsed: ['Video Editing', 'Documentary Pacing', 'Sound Mixing'],
      tools: ['Premiere Pro', 'DaVinci Resolve'],
      metrics: [
        { label: 'Website Time', value: '4m 12s' },
        { label: 'Brand Sentiment', value: '98% Pos.' },
        { label: 'Shares', value: '8.5K' },
      ],
      featured: false,
    },
    {
      id: 'port-6',
      title: 'Cosmetics E-Commerce Retouching Suite',
      category: 'Photo Editing',
      tagline: 'Ultra-Clean Clean Commercial Series',
      image:
        'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=900&q=80',
      aspect: 'square',
      client: 'Lumiere Skincare London',
      date: 'January 2026',
      description:
        'Over 120 e-commerce and marketing product shots retouched with pure white cutouts, custom ground drop shadows, glass reflections, and vivid ingredient pop.',
      challenge:
        'Maintaining absolute color consistency across 12 product SKUs in varying bottle materials (glass, frosted matte, brushed aluminum).',
      solution:
        'Established CMYK and RGB color standard profiles and built automated action scripts paired with meticulous hand touch-ups.',
      servicesUsed: ['Product Retouching', 'Shadow Creation', 'Color Match'],
      tools: ['Photoshop', 'Lightroom Classic'],
      metrics: [
        { label: 'SKUs Retouched', value: '120+' },
        { label: 'Store Return Rate', value: '-18%' },
        { label: 'Turnaround Time', value: '48 Hours' },
      ],
      featured: false,
    },
    {
      id: 'port-7',
      title: 'High-CTR YouTube Thumbnails Package',
      category: 'Graphic Design',
      tagline: 'CTR Optimization for Tech & Lifestyle',
      image:
        'https://images.unsplash.com/photo-1534972195531-a756b1126f24?auto=format&fit=crop&w=900&q=80',
      aspect: 'landscape',
      client: 'Top 5 Tech Creator Network',
      date: 'December 2025',
      description:
        'Series of 25 bespoke YouTube thumbnails utilizing psychology-driven focal hierarchy, expressive cutouts, 3D typography, and complementary edge-lit glow effects.',
      challenge:
        'Standing out against saturated feeds while avoiding deceptive or low-rent clickbait aesthetics.',
      solution:
        'Designed bold 3-word value-proposition typography with high-contrast character isolation and calibrated color vibrancies tested on small mobile viewports.',
      servicesUsed: ['Thumbnail Design', 'Photoshop Painting', '3D Typography'],
      tools: ['Photoshop', 'Blender', 'Illustrator'],
      metrics: [
        { label: 'Avg CTR Increase', value: '+5.4%' },
        { label: 'Total Impressions', value: '18M+' },
        { label: 'A/B Test Win Rate', value: '89%' },
      ],
      featured: false,
    },
    {
      id: 'port-8',
      title: 'Fitness App Product Launch Reels',
      category: 'Social Media',
      tagline: 'High-Tempo Workout Visuals',
      image:
        'https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&w=900&q=80',
      aspect: 'portrait',
      client: 'PulseFit Pro',
      date: 'October 2025',
      description:
        'Dynamic 15-second teaser videos combining high-intensity gym footage with heart-rate monitor HUD motion graphics, heavy bass synchronicities, and bold typographic transitions.',
      challenge:
        'Delivering key app value propositions in under 10 seconds without cluttering screen real estate.',
      solution:
        'Engineered floating semi-transparent UI callouts tracking natural athlete movement alongside custom bass drops on every exercise climax.',
      servicesUsed: ['Motion Graphics', 'Sound Design', 'Short-Form Reels'],
      tools: ['After Effects', 'Premiere Pro'],
      metrics: [
        { label: 'App Installs', value: '45,000+' },
        { label: 'ROAS', value: '4.2x' },
        { label: 'View-Through Rate', value: '64%' },
      ],
      featured: false,
    },
  ] as PortfolioItem[],

  // Why Choose Us Cards
  whyChooseUs: [
    {
      number: '01',
      title: 'Creative Thinking',
      description:
        'We don’t just edit content. We improve the story behind it, finding the emotional hooks that keep your viewers watching till the very last second.',
      iconName: 'Lightbulb',
      highlight: 'Narrative-First Strategy',
    },
    {
      number: '02',
      title: 'Attention To Detail',
      description:
        'Every frame, color tone, audio cue and visual element matters. We fine-tune micro-transitions and frequencies until the final cut feels flawless.',
      iconName: 'Layers',
      highlight: 'Pixel & Frequency Precision',
    },
    {
      number: '03',
      title: 'Fast Turnaround',
      description:
        'Professional studio quality without unnecessary delays. We adhere strictly to release deadlines so your content calendar never misses a beat.',
      iconName: 'Zap',
      highlight: '24–48h Rapid Delivery',
    },
    {
      number: '04',
      title: 'Client Focused',
      description:
        'We work closely with clients to understand their vision, providing transparent revisions, dedicated communication channels, and peace of mind.',
      iconName: 'Users',
      highlight: 'Dedicated Producer & Chat',
    },
  ] as WhyChooseUsItem[],

  // Work Process
  processSteps: [
    {
      number: '01',
      title: 'Tell Us Your Idea',
      tagline: 'Initial Vision & Brief',
      description:
        'Share your raw concept, target platform, creative references, and goals through our quote form or a direct WhatsApp chat.',
      deliverable: 'Creative Brief & Milestone Plan',
    },
    {
      number: '02',
      title: 'Share Your Content',
      tagline: 'Secure High-Speed Upload',
      description:
        'Upload your raw camera footage, audio tracks, brand assets, or image libraries to our secure high-speed Google Drive or Dropbox workspace.',
      deliverable: 'Asset Verification & Timeline Lock',
    },
    {
      number: '03',
      title: 'We Create',
      tagline: 'Editing, Grading & Motion',
      description:
        'Our specialized video editors, retouchers, and motion designers sculpt your story using industry-standard tools and tailored aesthetics.',
      deliverable: 'First High-Resolution Cut (v1)',
    },
    {
      number: '04',
      title: 'Review & Refine',
      tagline: 'Timecoded Frame Feedback',
      description:
        'Review the draft with our intuitive timecoded feedback system. We make quick precision adjustments to ensure complete satisfaction.',
      deliverable: 'Revised Polish & Color Calibration',
    },
    {
      number: '05',
      title: 'Final Delivery',
      tagline: 'Broadcast-Ready Exports',
      description:
        'Receive your final deliverables in pristine 4K, optimized 9:16 vertical formats, high-res TIFF/PNG files, and organized project packages ready to publish.',
      deliverable: 'Multi-Format Masters & Social Cuts',
    },
  ] as ProcessStep[],

  // About & Statistics
  about: {
    heading: 'We’re More Than Editors. We’re Visual Storytellers.',
    contentParagraph1:
      'Cavora Hub Graphics is a modern creative production and design studio focused on helping individuals, creators, startups and global brands transform raw concepts into visuals that connect, engage and inspire.',
    contentParagraph2:
      'Founded by an agile collective of filmmakers, colorists, and digital design artists, we bridge the gap between expensive traditional production agencies and unreliable freelancers. Guided by our motto "Design. Create. Inspire.", we operate with studio-level rigor, fast turnaround, and modern visual precision.',
    stats: [
      {
        id: 'stat-1',
        value: '50+',
        numericValue: 50,
        suffix: '+',
        label: 'Projects Completed',
        sublabel: 'Across 14 countries',
      },
      {
        id: 'stat-2',
        value: '30+',
        numericValue: 30,
        suffix: '+',
        label: 'Happy Clients',
        sublabel: 'Creators, startups & brands',
      },
      {
        id: 'stat-3',
        value: '10+',
        numericValue: 10,
        suffix: '+',
        label: 'Creative Services',
        sublabel: 'Full post-production suite',
      },
      {
        id: 'stat-4',
        value: '24/7',
        numericValue: 24,
        suffix: '/7',
        label: 'Creative Support',
        sublabel: 'Always in sync with your deadlines',
      },
    ] as StatItem[],
  },

  // Testimonials Carousel
  testimonials: [
    {
      id: 'test-1',
      name: 'Arjun Mehta',
      role: 'Content Creator',
      company: 'ArjunCreates (850K Followers)',
      handle: '@arjuncreates',
      avatar:
        'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=240&q=80',
      rating: 5,
      content:
        'Cavora Hub completely elevated our YouTube and Reels production. The pacing, kinetic sound design, and storytelling exceeded every expectation. Our audience retention shot up by 35% in just the first month.',
      tag: 'YouTube & Short-Form Video',
      metric: {
        value: '+35%',
        label: 'Retention Boost',
      },
      verified: true,
      location: 'Mumbai, India',
      date: 'February 2026',
    },
    {
      id: 'test-2',
      name: 'Priya Sundaram',
      role: 'Co-Founder & CEO',
      company: 'Pulse Retail D2C',
      handle: '@priyasundaram',
      avatar:
        'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=240&q=80',
      rating: 5,
      content:
        'Their editing and color grading made our brand launch look like a million-dollar commercial. Investors and customers immediately noticed the cinematic Polish. Cavora Hub is now our permanent creative partner.',
      tag: 'Brand Film & Product Commercial',
      metric: {
        value: '2.8x',
        label: 'Ad ROAS Increase',
      },
      verified: true,
      location: 'Bangalore, India',
      date: 'January 2026',
    },
    {
      id: 'test-3',
      name: 'Marcus Vance',
      role: 'Creative Director',
      company: 'Aura Sound Labs',
      handle: '@marcus.vance',
      avatar:
        'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=240&q=80',
      rating: 5,
      content:
        'Working with the Cavora Hub team felt like having an in-house post-production powerhouse. Turnaround was lightning fast, communication was seamless, and the creative initiative was refreshing.',
      tag: 'Commercial Launch Video',
      metric: {
        value: '1.8M+',
        label: 'Organic Views',
      },
      verified: true,
      location: 'London, UK',
      date: 'February 2026',
    },
    {
      id: 'test-4',
      name: 'Sarah Jenkins',
      role: 'Head of Brand Marketing',
      company: 'Vesper Fashion House',
      handle: '@sarahj_style',
      avatar:
        'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=240&q=80',
      rating: 5,
      content:
        'The photo retouching and graphic design team at Cavora Hub truly understands luxury aesthetics. Skin tones remained authentic while looking magazine-ready. Our return rates dropped and conversion went up significantly.',
      tag: 'Editorial Photo Retouching',
      metric: {
        value: '120+',
        label: 'SKUs Delivered on Time',
      },
      verified: true,
      location: 'New York, USA',
      date: 'January 2026',
    },
    {
      id: 'test-5',
      name: 'Devon Patel',
      role: 'Lead Tech Reviewer',
      company: 'NextGen Gadgets (1.4M Subs)',
      handle: '@devontech',
      avatar:
        'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=240&q=80',
      rating: 5,
      content:
        'Having Cavora Hub handle my weekly long-form videos and CTR-optimized thumbnails freed up 20 hours a week for me. Their custom 3D thumbnail treatments gave our channel its highest average click-through rate in three years.',
      tag: 'YouTube Long-Form & Thumbnails',
      metric: {
        value: '+5.4%',
        label: 'CTR Increase',
      },
      verified: true,
      location: 'San Francisco, USA',
      date: 'December 2025',
    },
    {
      id: 'test-6',
      name: 'Elena Rostova',
      role: 'Founder & Brand Strategist',
      company: 'Kinetix Fitness App',
      handle: '@elena_kinetix',
      avatar:
        'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=240&q=80',
      rating: 5,
      content:
        'From raw phone footage to hyper-stylized fitness ads with pulse-racing HUD graphics and kinetic sound design—Cavora Hub delivered an unforgettable ad campaign that drove over 45,000 app installs.',
      tag: 'Social Media Campaign & Reels',
      metric: {
        value: '45K+',
        label: 'App Installs Driven',
      },
      verified: true,
      location: 'Dubai, UAE',
      date: 'November 2025',
    },
  ] as TestimonialItem[],

  // Pricing Plans
  pricingNotice: 'Final pricing depends on project requirements.',
  pricing: [
    {
      id: 'starter',
      name: 'STARTER',
      subtitle: 'For individuals, creators & small projects',
      price: '2,999',
      currencySymbol: '₹',
      period: 'per project',
      popular: false,
      targetBudget: 'Under ₹5,000',
      features: [
        'Basic video editing (up to 3 min)',
        'Standard color correction',
        'Image editing & background clean up (up to 5 images)',
        '2 Social media creative graphics or thumbnails',
        'Royalty-free background music mix',
        'Standard turnaround (3–4 days)',
        '2 rounds of revisions included',
      ],
      ctaText: 'Start with Starter',
    },
    {
      id: 'creator',
      name: 'CREATOR',
      subtitle: 'For serious content creators & growing channels',
      price: '7,999',
      currencySymbol: '₹',
      period: 'per project / bundle',
      popular: true,
      targetBudget: '₹5,000 – ₹10,000',
      features: [
        'Advanced cinematic video editing (up to 10 min)',
        '3 High-energy short-form Reels / Shorts',
        '2 High-CTR click-worthy YouTube thumbnails',
        'High-end photo retouching & color grading',
        'Sound design, foley & kinetic captions',
        'Priority turnaround (48 hours)',
        'Unlimited revisions within scope',
        'Dedicated WhatsApp creative producer',
      ],
      ctaText: 'Choose Creator Plan',
    },
    {
      id: 'business',
      name: 'BUSINESS',
      subtitle: 'For brands, e-commerce & commercial agencies',
      price: 'Custom',
      currencySymbol: '',
      period: 'tailored proposal',
      popular: false,
      targetBudget: '₹25,000+',
      features: [
        'High-production brand films & commercial ads',
        'Full 30-day social media campaign rollout',
        'Multi-product e-commerce image retouching suite',
        'Comprehensive 2D/3D motion graphics & VFX',
        'Dedicated senior editor, colorist & designer',
        'Express 24-hour turnaround capability',
        'Raw project files & organized export bundles',
        'NDA protection & full commercial licensing',
      ],
      ctaText: 'Get Custom Quote',
    },
  ] as PricingPlan[],

  // FAQ Accordion
  faqs: [
    {
      id: 'faq-1',
      question: 'What type of videos do you edit?',
      answer:
        'We edit virtually every format of digital video: YouTube long-form videos, documentaries, Instagram Reels, TikTok shorts, commercial brand films, e-commerce product promos, corporate interviews, podcast video edits, and event aftermovies. We adapt our pacing and aesthetic to your exact audience.',
    },
    {
      id: 'faq-2',
      question: 'Can you edit short-form content?',
      answer:
        'Yes, short-form content (9:16 vertical) is one of our core specialties. We craft viral hooks in the first 3 seconds, dynamic zooms, kinetic subtitles with animated emojis, sound effects, and color grading optimized for smartphone screens.',
    },
    {
      id: 'faq-3',
      question: 'Do you provide thumbnail design?',
      answer:
        'Absolutely! We design high-CTR YouTube thumbnails and social covers. We use custom typography, emotional subject cutouts, 3D lighting, and psychological color framing that makes your content stand out on crowded home feeds.',
    },
    {
      id: 'faq-4',
      question: 'How do I send my files?',
      answer:
        'You can easily share raw video footage, photos, audio tracks, and reference files via Google Drive, Dropbox, WeTransfer, or Frame.io. Once you start a project, we provide a dedicated secure folder link for drag-and-drop uploading.',
    },
    {
      id: 'faq-5',
      question: 'How long does editing take?',
      answer:
        'Standard edits are delivered within 48 to 72 hours. Short-form Reels and thumbnails can often be turned around within 24 hours. Larger commercial productions or complex multi-cam documentaries typically take 4 to 6 business days.',
    },
    {
      id: 'faq-6',
      question: 'Can I request revisions?',
      answer:
        'Yes! Every project includes review rounds. We provide an easy preview link where you can click on specific video timestamps or image regions to leave notes. We prioritize quick turnaround on adjustments to make sure you love the final cut.',
    },
    {
      id: 'faq-7',
      question: 'Do you work with businesses?',
      answer:
        'Yes, we partner with startups, direct-to-consumer (D2C) brands, agencies, and enterprise marketing teams. We offer monthly content retainers, custom invoicing, NDA execution, and multi-format commercial licensing.',
    },
    {
      id: 'faq-8',
      question: 'How can I get a custom quote?',
      answer:
        'You can fill out our Project Request form below or click the "Chat With Us" WhatsApp button in the corner. Share a few details about your project scope and deadline, and we’ll respond within a few hours with a clear, transparent quote.',
    },
  ] as FAQItem[],
};
