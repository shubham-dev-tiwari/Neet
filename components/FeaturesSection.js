'use client';

import { useState, useRef } from 'react';
import { 
  Clock, BarChart3, Brain, Target, Award, Zap, BookOpen, Users,
  Sparkles, Rocket, Star, ArrowRight
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const features = [
  {
    icon: Clock,
    title: 'Timed Mock Tests',
    description: 'Experience real exam conditions with precisely timed full-length tests',
    gradientFrom: '#10B981',
    gradientTo: '#047857',
    stats: '50+ Tests',
    benefits: ['Exam-like interface', 'Auto-submit', 'Time tracking'],
  },
  {
    icon: BarChart3,
    title: 'AI-Powered Analytics',
    description: 'Track your progress with intelligent performance insights and predictions',
    gradientFrom: '#000000',
    gradientTo: '#374151',
    stats: 'Real-time',
    benefits: ['Score trends', 'Weak areas', 'Improvement tips'],
  },
  {
    icon: Brain,
    title: 'Adaptive Learning',
    description: 'Smart AI adapts question difficulty based on your performance level',
    gradientFrom: '#10B981',
    gradientTo: '#047857',
    stats: 'AI-Powered',
    benefits: ['Personalized', 'Dynamic difficulty', 'Smart practice'],
  },
  {
    icon: Target,
    title: 'Goal Tracking',
    description: 'Set ambitious targets and monitor your improvement journey daily',
    gradientFrom: '#1F2937',
    gradientTo: '#111827',
    stats: 'Custom Goals',
    benefits: ['Daily targets', 'Progress tracking', 'Milestone rewards'],
  },
  {
    icon: Award,
    title: 'Leaderboards',
    description: 'Compete with peers nationwide and climb the rankings',
    gradientFrom: '#10B981',
    gradientTo: '#047857',
    stats: 'National Rank',
    benefits: ['All India rank', 'State rank', 'Batch comparison'],
  },
  {
    icon: BookOpen,
    title: 'Study Material',
    description: 'Access comprehensive notes, formulas, and video lectures',
    gradientFrom: '#000000',
    gradientTo: '#374151',
    stats: '1000+ Topics',
    benefits: ['PDF notes', 'Video lectures', 'Quick revision'],
  },
  {
    icon: Users,
    title: 'Expert Support',
    description: '24/7 doubt solving by NEET toppers and subject matter experts',
    gradientFrom: '#10B981',
    gradientTo: '#047857',
    stats: '24/7 Available',
    benefits: ['Live chat', 'Video calls', 'Response in 2hrs'],
  },
  {
    icon: Rocket,
    title: 'Quick Revision',
    description: 'Smart flashcards and MCQ practice for last-minute preparation',
    gradientFrom: '#1F2937',
    gradientTo: '#111827',
    stats: 'On-the-go',
    benefits: ['Flashcards', 'Quick MCQs', 'Formula sheets'],
  },
];

export default function SwipeableFeaturesSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [expandedCard, setExpandedCard] = useState(null);
  const constraintsRef = useRef(null);

  const handleDragEnd = (event, info) => {
    const threshold = 50;
    
    if (info.offset.x < -threshold && currentIndex < features.length - 1) {
      setCurrentIndex(currentIndex + 1);
    } else if (info.offset.x > threshold && currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  return (
    <section id="features" className="py-16 sm:py-20 lg:py-32 bg-white relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: 'radial-gradient(circle at 2px 2px, #10B981 1px, transparent 0)',
            backgroundSize: '60px 60px',
          }}
        />
      </div>

      {/* Floating particles */}
      {[...Array(5)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-2 h-2 rounded-full hidden md:block"
          style={{ 
            backgroundColor: '#10B981',
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            x: [0, Math.random() * 100 - 50],
            y: [0, Math.random() * 100 - 50],
            opacity: [0.2, 0.5, 0.2],
          }}
          transition={{
            duration: 10 + i * 2,
            repeat: Infinity,
            repeatType: 'reverse',
          }}
        />
      ))}

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 sm:mb-16"
        >
          <motion.div
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 sm:gap-3 px-6 sm:px-8 py-3 sm:py-4 text-white rounded-full text-xs sm:text-sm font-black mb-6 sm:mb-8 shadow-2xl cursor-pointer"
            style={{
              background: 'linear-gradient(90deg, #10B981 0%, #047857 100%)',
              boxShadow: '0 20px 50px rgba(16, 185, 129, 0.3)',
            }}
            data-cursor="pointer"
          >
            <Zap className="w-4 h-4 sm:w-5 sm:h-5" strokeWidth={2.5} />
            <span>Powerful Features</span>
            <Sparkles className="w-4 h-4 sm:w-5 sm:h-5" strokeWidth={2.5} />
          </motion.div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-black mb-4 sm:mb-6 px-4">
            Everything You Need
            <br />
            <span 
              className="inline-block"
              style={{
                background: 'linear-gradient(90deg, #10B981 0%, #047857 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              In One Platform
            </span>
          </h2>

          <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-2xl mx-auto mb-3 sm:mb-4 px-4">
            Built specifically for NEET aspirants with features that actually help you improve
          </p>

          {/* Desktop/Mobile indicator */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-xs sm:text-sm text-gray-500 font-semibold flex items-center justify-center gap-2"
          >
            <span className="hidden md:inline">Hover to explore</span>
            <span className="md:hidden">👉 Swipe to explore</span>
          </motion.p>
        </motion.div>

        {/* Desktop: Interactive Grid */}
        <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            const isExpanded = expandedCard === index;
            
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                whileHover={{ y: -10, scale: 1.02 }}
                onClick={() => setExpandedCard(isExpanded ? null : index)}
                className={`group relative overflow-hidden rounded-3xl p-8 cursor-pointer transition-all duration-500 ${
                  isExpanded ? 'md:col-span-2 lg:col-span-2' : ''
                }`}
                style={{
                  background: `linear-gradient(135deg, ${feature.gradientFrom} 0%, ${feature.gradientTo} 100%)`,
                }}
                data-cursor="pointer"
              >
                {/* Shimmer effect */}
                <motion.div
                  className="absolute inset-0"
                  style={{
                    background: 'linear-gradient(90deg, transparent 0%, rgba(255, 255, 255, 0.2) 50%, transparent 100%)',
                  }}
                  animate={{ x: ['-200%', '200%'] }}
                  transition={{ duration: 3, repeat: Infinity, repeatDelay: 2 }}
                />

                {/* Content */}
                <div className="relative z-10 text-white h-full flex flex-col">
                  {/* Icon with pulse effect */}
                  <motion.div
                    whileHover={{ y: -5, scale: 1.05 }}
                    transition={{ duration: 0.6 }}
                    className="w-16 h-16 rounded-2xl flex items-center justify-center mb-6 shadow-xl relative"
                    style={{ backgroundColor: 'rgba(255, 255, 255, 0.2)', backdropFilter: 'blur(10px)' }}
                  >
                    <Icon className="w-8 h-8 text-white" strokeWidth={2.5} />
                    <motion.div
                      className="absolute inset-0 rounded-2xl"
                      style={{ backgroundColor: 'rgba(255, 255, 255, 0.3)' }}
                      animate={{ scale: [1, 1.2, 1], opacity: [0.5, 0, 0.5] }}
                      transition={{ duration: 2, repeat: Infinity }}
                    />
                  </motion.div>

                  <h3 className="text-2xl font-black mb-3">{feature.title}</h3>
                  <p className="text-white/90 leading-relaxed mb-4">{feature.description}</p>

                  <div 
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-bold mb-4 w-fit"
                    style={{ backgroundColor: 'rgba(255, 255, 255, 0.2)', backdropFilter: 'blur(10px)' }}
                  >
                    <Star className="w-4 h-4" strokeWidth={2.5} />
                    {feature.stats}
                  </div>

                  <AnimatePresence>
                    {isExpanded && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        className="mt-4 space-y-2"
                      >
                        {feature.benefits.map((benefit, i) => (
                          <motion.div
                            key={i}
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: i * 0.1 }}
                            className="flex items-center gap-3"
                          >
                            <div className="w-1.5 h-1.5 bg-white rounded-full" />
                            <span className="text-white/90 text-sm font-medium">{benefit}</span>
                          </motion.div>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>

                  <motion.div
                    animate={{ y: [0, 5, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                    className="mt-auto pt-4 text-white/70 text-sm font-semibold"
                  >
                    {isExpanded ? '▲ Click to collapse' : '▼ Click to expand'}
                  </motion.div>
                </div>

                <div 
                  className="absolute top-0 right-0 w-32 h-32 rounded-full blur-3xl group-hover:scale-150 transition-transform duration-500"
                  style={{ backgroundColor: 'rgba(255, 255, 255, 0.1)' }}
                />
              </motion.div>
            );
          })}
        </div>

        {/* Mobile: Swipeable Cards - Improved */}
        <div className="md:hidden relative" ref={constraintsRef}>
          <div className="overflow-visible">
            <motion.div
              drag="x"
              dragConstraints={{ left: 0, right: 0 }}
              dragElastic={0.2}
              onDragEnd={handleDragEnd}
              animate={{ x: -currentIndex * (typeof window !== 'undefined' ? window.innerWidth - 48 : 0) }}
              transition={{ type: 'spring', stiffness: 300, damping: 30 }}
              className="flex gap-4"
              style={{ paddingLeft: '16px', paddingRight: '16px' }}
            >
              {features.map((feature, index) => {
                const Icon = feature.icon;
                const isActive = index === currentIndex;
                
                return (
                  <motion.div
                    key={index}
                    className="flex-shrink-0"
                    style={{ width: 'calc(100vw - 48px)' }}
                    animate={{
                      scale: isActive ? 1 : 0.9,
                      opacity: isActive ? 1 : 0.5,
                    }}
                    transition={{ duration: 0.3 }}
                  >
                    <div
                      className="h-full rounded-3xl p-6 sm:p-8 text-white shadow-2xl relative overflow-hidden"
                      style={{
                        background: `linear-gradient(135deg, ${feature.gradientFrom} 0%, ${feature.gradientTo} 100%)`,
                        minHeight: '450px',
                      }}
                    >
                      {/* Shimmer effect */}
                      <motion.div
                        className="absolute inset-0"
                        style={{
                          background: 'linear-gradient(90deg, transparent 0%, rgba(255, 255, 255, 0.1) 50%, transparent 100%)',
                        }}
                        animate={{ x: ['-100%', '200%'] }}
                        transition={{ duration: 3, repeat: Infinity, repeatDelay: 2 }}
                      />

                      {/* Large icon background - decorative */}
                      <div className="absolute -bottom-8 -right-8 opacity-5">
                        <Icon className="w-40 h-40 sm:w-48 sm:h-48" strokeWidth={1} />
                      </div>

                      {/* Content */}
                      <div className="relative z-10 flex flex-col h-full">
                        {/* Icon Badge */}
                        <div 
                          className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl sm:rounded-3xl flex items-center justify-center mb-5 sm:mb-6 shadow-xl"
                          style={{ backgroundColor: 'rgba(255, 255, 255, 0.2)', backdropFilter: 'blur(10px)' }}
                        >
                          <Icon className="w-8 h-8 sm:w-10 sm:h-10 text-white" strokeWidth={2.5} />
                        </div>

                        {/* Title */}
                        <h3 className="text-2xl sm:text-3xl font-black mb-3 sm:mb-4 leading-tight">
                          {feature.title}
                        </h3>

                        {/* Description */}
                        <p className="text-white/90 text-base sm:text-lg leading-relaxed mb-5 sm:mb-6">
                          {feature.description}
                        </p>

                        {/* Stats Badge */}
                        <div 
                          className="inline-flex items-center gap-2 px-4 sm:px-5 py-2.5 sm:py-3 rounded-full text-white font-bold mb-6 w-fit text-sm sm:text-base"
                          style={{ backgroundColor: 'rgba(255, 255, 255, 0.2)', backdropFilter: 'blur(10px)' }}
                        >
                          <Star className="w-4 h-4 sm:w-5 sm:h-5" strokeWidth={2.5} />
                          {feature.stats}
                        </div>

                        {/* Benefits List */}
                        <div className="mt-auto">
                          <div className="text-white/70 text-xs sm:text-sm font-bold mb-3 uppercase tracking-wide">
                            Key Benefits
                          </div>
                          <div className="space-y-3">
                            {feature.benefits.map((benefit, i) => (
                              <motion.div
                                key={i}
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: isActive ? 1 : 0.7, x: 0 }}
                                transition={{ delay: i * 0.1 }}
                                className="flex items-center gap-3"
                              >
                                <div 
                                  className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full flex-shrink-0"
                                  style={{ backgroundColor: '#FFFFFF' }}
                                />
                                <span className="text-white text-sm sm:text-base font-medium">
                                  {benefit}
                                </span>
                              </motion.div>
                            ))}
                          </div>
                        </div>

                        {/* Learn More Link */}
                        <motion.div
                          whileTap={{ scale: 0.95 }}
                          className="mt-6 flex items-center gap-2 text-white font-bold text-sm"
                        >
                          <span>Learn more</span>
                          <motion.div
                            animate={{ x: [0, 5, 0] }}
                            transition={{ duration: 1.5, repeat: Infinity }}
                          >
                            <ArrowRight className="w-4 h-4" strokeWidth={2.5} />
                          </motion.div>
                        </motion.div>
                      </div>

                      {/* Decorative gradient blob */}
                      <div 
                        className="absolute top-0 right-0 w-32 h-32 sm:w-40 sm:h-40 rounded-full blur-3xl"
                        style={{ backgroundColor: 'rgba(255, 255, 255, 0.1)' }}
                      />
                    </div>
                  </motion.div>
                );
              })}
            </motion.div>
          </div>

          {/* Enhanced Swipe Indicators */}
          <div className="flex justify-center gap-2 mt-8">
            {features.map((_, index) => (
              <motion.button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className="h-2 rounded-full transition-all duration-300"
                style={{
                  width: index === currentIndex ? '32px' : '8px',
                  backgroundColor: index === currentIndex ? '#10B981' : '#D1D5DB',
                  boxShadow: index === currentIndex ? '0 4px 14px rgba(16, 185, 129, 0.4)' : 'none',
                }}
                whileTap={{ scale: 0.9 }}
                aria-label={`Go to feature ${index + 1}`}
                data-cursor="pointer"
              />
            ))}
          </div>

          {/* Card Counter */}
          <div className="text-center mt-4 text-gray-600 font-bold text-sm">
            {currentIndex + 1} / {features.length}
          </div>

          {/* Swipe hint with animation - Only on first card */}
          <AnimatePresence>
            {currentIndex === 0 && (
              <motion.div
                initial={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="text-center text-gray-500 text-xs sm:text-sm mt-4 font-bold flex items-center justify-center gap-2"
              >
                <motion.span
                  animate={{ x: [0, 10, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  👉
                </motion.span>
                <span>Swipe to explore more</span>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
