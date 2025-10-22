'use client';

import { useState, useEffect } from 'react';
import { Menu, X, Sparkles, BookOpen, Trophy, BarChart3, HelpCircle, Bell, Search } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from 'framer-motion';
import MagneticButton from '@/components/MagneticButton';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    setScrolled(latest > 20);
  });

  const navLinks = [
    { label: 'Features', href: '#features', icon: Sparkles },
    { label: 'Mock Tests', href: '#mock-tests', icon: BookOpen },
    { label: 'Success Stories', href: '#testimonials', icon: Trophy },
    { label: 'Analytics', href: '#analytics', icon: BarChart3 },
    { label: 'FAQ', href: '#faq', icon: HelpCircle },
  ];

  return (
    <>
      {/* Desktop & Tablet Navbar */}
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5, type: 'spring', stiffness: 300, damping: 30 }}
        className={`hidden md:block fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled 
            ? 'bg-white/95 backdrop-blur-xl shadow-lg' 
            : 'bg-white/80 backdrop-blur-md'
        }`}
        style={{
          borderBottom: scrolled ? '1px solid rgba(16, 185, 129, 0.1)' : '1px solid rgba(0, 0, 0, 0.05)',
        }}
        role="navigation"
        aria-label="Main navigation"
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo with Icon */}
            <motion.div 
              className="flex-shrink-0"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <a href="/" className="flex items-center gap-3 group" data-cursor="pointer">
                <motion.div
                  whileHover={{ y: -5, scale: 1.05 }}
                  transition={{ duration: 0.6 }}
                  className="w-12 h-12 rounded-2xl flex items-center justify-center shadow-lg relative overflow-hidden"
                  style={{
                    background: 'linear-gradient(135deg, #10B981 0%, #047857 100%)',
                  }}
                >
                  <Trophy className="w-7 h-7 text-white relative z-10" strokeWidth={2.5} />
                  
                  {/* Shine effect */}
                  <motion.div
                    className="absolute inset-0"
                    style={{
                      background: 'linear-gradient(90deg, transparent 0%, rgba(255, 255, 255, 0.3) 50%, transparent 100%)',
                    }}
                    animate={{ x: ['-100%', '200%'] }}
                    transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
                  />
                </motion.div>
                <div className="flex flex-col leading-none">
                  <span 
                    className="text-2xl font-black transition-colors"
                    style={{ color: scrolled ? '#10B981' : '#000000' }}
                  >
                    NEET
                  </span>
                  <span className="text-xs font-bold text-gray-600">Mock Tests</span>
                </div>
              </a>
            </motion.div>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-8">
              {navLinks.map((link, index) => {
                const Icon = link.icon;
                return (
                  <motion.a
                    key={link.label}
                    href={link.href}
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ y: -2 }}
                    className="group flex items-center gap-2 text-sm font-bold text-gray-700 transition-colors relative"
                    style={{
                      color: scrolled ? '#374151' : '#4B5563',
                    }}
                    data-cursor="pointer"
                    onMouseEnter={(e) => e.target.style.color = '#10B981'}
                    onMouseLeave={(e) => e.target.style.color = scrolled ? '#374151' : '#4B5563'}
                  >
                    <Icon className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" strokeWidth={2.5} />
                    {link.label}
                    <motion.div
                      className="absolute -bottom-1 left-0 right-0 h-0.5"
                      style={{ backgroundColor: '#10B981' }}
                      initial={{ scaleX: 0 }}
                      whileHover={{ scaleX: 1 }}
                      transition={{ duration: 0.3 }}
                    />
                  </motion.a>
                );
              })}
            </div>

            {/* Desktop CTA Buttons */}
            <div className="hidden lg:flex items-center gap-6">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="text-sm font-bold text-gray-800 transition-colors px-4 py-2 rounded-xl"
                style={{
                  color: '#0c0d0d',
                }}
                onMouseEnter={(e) => e.target.style.color = '#10B981'}
                onMouseLeave={(e) => e.target.style.color = '#0c0d0d'}
                data-cursor="pointer"
              >
                SignIn
              </motion.button>
              
              <MagneticButton
                size="sm"
                className="text-white rounded-2xl px-8 py-3 text-sm font-black relative overflow-hidden"
                style={{
                  background: 'linear-gradient(90deg, #10B981 0%, #047857 100%)',
                  boxShadow: '0 4px 14px rgba(16, 185, 129, 0.4)',
                }}
              >
                <motion.div
                  className="absolute inset-0"
                  style={{
                    background: 'linear-gradient(90deg, transparent 0%, rgba(255, 255, 255, 0.2) 50%, transparent 100%)',
                  }}
                  animate={{ x: ['-100%', '200%'] }}
                  transition={{ duration: 2, repeat: Infinity, repeatDelay: 2 }}
                />
                <span className="flex items-center gap-2 relative z-10">
                  <Sparkles className="w-4 h-4" strokeWidth={2.5} />
                  Dive In
                </span>
              </MagneticButton>
            </div>

            {/* Tablet menu button */}
            <motion.button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden relative w-12 h-12 rounded-2xl flex items-center justify-center transition-all"
              style={{
                backgroundColor: isOpen ? '#10B981' : '#F3F4F6',
              }}
              whileTap={{ scale: 0.95 }}
              aria-expanded={isOpen}
              aria-label="Toggle menu"
              data-cursor="pointer"
            >
              <AnimatePresence mode="wait">
                {isOpen ? (
                  <motion.div
                    key="close"
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <X className="w-6 h-6 text-white" strokeWidth={2.5} />
                  </motion.div>
                ) : (
                  <motion.div
                    key="menu"
                    initial={{ rotate: 90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: -90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Menu className="w-6 h-6 text-gray-800" strokeWidth={2.5} />
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.button>
          </div>
        </div>

        {/* Tablet Navigation Menu */}
        <AnimatePresence>
          {isOpen && (
            <>
              {/* Backdrop */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="lg:hidden fixed inset-0 bg-black/60 backdrop-blur-sm top-20"
                onClick={() => setIsOpen(false)}
              />
              
              {/* Menu Panel */}
              <motion.div
                initial={{ opacity: 0, y: -20, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -20, scale: 0.95 }}
                transition={{ duration: 0.3, type: 'spring', stiffness: 300, damping: 30 }}
                className="absolute top-full left-4 right-4 mt-2 bg-white rounded-3xl shadow-2xl overflow-hidden"
                style={{ border: '2px solid rgba(16, 185, 129, 0.2)' }}
              >
                <div className="p-6 space-y-2">
                  {navLinks.map((link, index) => {
                    const Icon = link.icon;
                    return (
                      <motion.a
                        key={link.label}
                        href={link.href}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 }}
                        onClick={() => setIsOpen(false)}
                        className="flex items-center gap-4 px-6 py-4 text-base font-bold text-gray-700 hover:bg-gray-50 rounded-2xl transition-all group"
                        whileTap={{ scale: 0.98 }}
                      >
                        <div 
                          className="w-10 h-10 rounded-xl flex items-center justify-center transition-all"
                          style={{
                            backgroundColor: 'rgba(16, 185, 129, 0.1)',
                          }}
                        >
                          <Icon className="w-5 h-5 transition-colors" style={{ color: '#10B981' }} strokeWidth={2.5} />
                        </div>
                        {link.label}
                      </motion.a>
                    );
                  })}
                  
                  <div className="pt-4 mt-4 border-t border-gray-200 space-y-3">
                    <Button
                      variant="outline"
                      className="w-full border-2 border-gray-200 text-gray-700 hover:bg-gray-50 rounded-2xl py-6 text-base font-bold"
                      onClick={() => setIsOpen(false)}
                    >
                      Sign In
                    </Button>
                    
                    <Button
                      className="w-full text-white rounded-2xl py-6 text-base font-black"
                      style={{
                        background: 'linear-gradient(90deg, #10B981 0%, #047857 100%)',
                        boxShadow: '0 10px 30px rgba(16, 185, 129, 0.3)',
                      }}
                      onClick={() => setIsOpen(false)}
                    >
                      <Sparkles className="w-5 h-5 mr-2" strokeWidth={2.5} />
                      Get Started Free
                    </Button>
                  </div>
                </div>
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </motion.nav>

      {/* Mobile App-Like Navbar */}
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5, type: 'spring', stiffness: 300, damping: 30 }}
        className="md:hidden fixed top-0 left-0 right-0 z-50 bg-white shadow-lg"
        style={{
          paddingTop: 'env(safe-area-inset-top)',
          borderBottom: '1px solid rgba(16, 185, 129, 0.1)',
        }}
        role="navigation"
        aria-label="Mobile navigation"
      >
        <div className="px-4 py-3">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <motion.a 
              href="/" 
              className="flex items-center gap-2.5"
              whileTap={{ scale: 0.95 }}
            >
              <motion.div
                whileTap={{ rotate: 180 }}
                transition={{ duration: 0.4 }}
                className="w-10 h-10 rounded-xl flex items-center justify-center shadow-md relative overflow-hidden"
                style={{
                  background: 'linear-gradient(135deg, #10B981 0%, #047857 100%)',
                }}
              >
                <Trophy className="w-5 h-5 text-white relative z-10" strokeWidth={2.5} />
              </motion.div>
              <div className="flex flex-col leading-none">
                <span className="text-xl font-black" style={{ color: '#10B981' }}>
                  NEET
                </span>
                <span className="text-[10px] font-bold text-gray-500">Mock Tests</span>
              </div>
            </motion.a>

            {/* Right Actions */}
            <div className="flex items-center gap-2">
              {/* Search Button */}
              <motion.button
                whileTap={{ scale: 0.9 }}
                className="w-10 h-10 rounded-xl flex items-center justify-center"
                style={{ backgroundColor: 'rgba(16, 185, 129, 0.1)' }}
                aria-label="Search"
              >
                <Search className="w-5 h-5" style={{ color: '#10B981' }} strokeWidth={2.5} />
              </motion.button>

              {/* Notifications */}
              <motion.button
                whileTap={{ scale: 0.9 }}
                className="relative w-10 h-10 rounded-xl flex items-center justify-center"
                style={{ backgroundColor: 'rgba(16, 185, 129, 0.1)' }}
                aria-label="Notifications"
              >
                <Bell className="w-5 h-5" style={{ color: '#10B981' }} strokeWidth={2.5} />
                <motion.div
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="absolute top-1 right-1 w-2 h-2 rounded-full"
                  style={{ backgroundColor: '#EF4444' }}
                />
              </motion.button>

              {/* Menu Button */}
              <motion.button
                onClick={() => setIsOpen(!isOpen)}
                whileTap={{ scale: 0.9 }}
                className="w-10 h-10 rounded-xl flex items-center justify-center"
                style={{
                  background: isOpen ? 'linear-gradient(135deg, #10B981 0%, #047857 100%)' : 'rgba(16, 185, 129, 0.1)',
                }}
                aria-label="Menu"
              >
                <AnimatePresence mode="wait">
                  {isOpen ? (
                    <motion.div
                      key="close"
                      initial={{ rotate: -90, opacity: 0 }}
                      animate={{ rotate: 0, opacity: 1 }}
                      exit={{ rotate: 90, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <X className="w-5 h-5 text-white" strokeWidth={2.5} />
                    </motion.div>
                  ) : (
                    <motion.div
                      key="menu"
                      initial={{ rotate: 90, opacity: 0 }}
                      animate={{ rotate: 0, opacity: 1 }}
                      exit={{ rotate: -90, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <Menu className="w-5 h-5" style={{ color: '#10B981' }} strokeWidth={2.5} />
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.button>
            </div>
          </div>
        </div>

        {/* Mobile Full-Screen Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', stiffness: 300, damping: 30 }}
              className="fixed inset-0 bg-white z-50"
              style={{ 
                top: 'calc(env(safe-area-inset-top) + 64px)',
                paddingBottom: 'env(safe-area-inset-bottom)',
              }}
            >
              <div className="h-full overflow-y-auto px-4 py-6">
                {/* User Profile Card */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 }}
                  className="p-6 rounded-3xl mb-6 relative overflow-hidden"
                  style={{
                    background: 'linear-gradient(135deg, #10B981 0%, #047857 100%)',
                  }}
                >
                  <motion.div
                    className="absolute inset-0"
                    style={{
                      background: 'linear-gradient(90deg, transparent 0%, rgba(255, 255, 255, 0.1) 50%, transparent 100%)',
                    }}
                    animate={{ x: ['-100%', '200%'] }}
                    transition={{ duration: 3, repeat: Infinity, repeatDelay: 2 }}
                  />
                  
                  <div className="relative z-10">
                    <div className="text-white/80 text-sm font-semibold mb-1">Welcome back! 👋</div>
                    <div className="text-white text-2xl font-black mb-4">Start Learning</div>
                    <Button
                      className="bg-white text-black hover:bg-gray-100 rounded-xl px-6 py-3 text-sm font-black w-full"
                      onClick={() => setIsOpen(false)}
                    >
                      Sign In to Continue
                    </Button>
                  </div>
                </motion.div>

                {/* Navigation Links */}
                <div className="space-y-2 mb-6">
                  {navLinks.map((link, index) => {
                    const Icon = link.icon;
                    return (
                      <motion.a
                        key={link.label}
                        href={link.href}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.1 + index * 0.05 }}
                        onClick={() => setIsOpen(false)}
                        className="flex items-center gap-4 p-4 rounded-2xl transition-all active:scale-95"
                        style={{ backgroundColor: 'rgba(16, 185, 129, 0.05)' }}
                      >
                        <div
                          className="w-12 h-12 rounded-xl flex items-center justify-center"
                          style={{ backgroundColor: 'rgba(16, 185, 129, 0.1)' }}
                        >
                          <Icon className="w-6 h-6" style={{ color: '#10B981' }} strokeWidth={2.5} />
                        </div>
                        <div className="flex-1">
                          <div className="font-black text-black text-base">{link.label}</div>
                          <div className="text-xs text-gray-500 font-semibold">Explore section</div>
                        </div>
                      </motion.a>
                    );
                  })}
                </div>

                {/* Quick Stats */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                  className="grid grid-cols-2 gap-3 mb-6"
                >
                  {[
                    { value: '50K+', label: 'Students' },
                    { value: '95%', label: 'Success' },
                  ].map((stat, index) => (
                    <div
                      key={index}
                      className="p-4 rounded-2xl text-center"
                      style={{
                        backgroundColor: 'rgba(16, 185, 129, 0.05)',
                        border: '1px solid rgba(16, 185, 129, 0.1)',
                      }}
                    >
                      <div className="text-2xl font-black" style={{ color: '#10B981' }}>
                        {stat.value}
                      </div>
                      <div className="text-xs text-gray-600 font-bold">{stat.label}</div>
                    </div>
                  ))}
                </motion.div>

                {/* CTA Button */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                >
                  <Button
                    className="w-full text-white rounded-2xl py-6 text-lg font-black relative overflow-hidden"
                    style={{
                      background: 'linear-gradient(90deg, #10B981 0%, #047857 100%)',
                      boxShadow: '0 10px 30px rgba(16, 185, 129, 0.3)',
                    }}
                    onClick={() => setIsOpen(false)}
                  >
                    <Sparkles className="w-6 h-6 mr-2" strokeWidth={2.5} />
                    Get Started Free
                  </Button>
                </motion.div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>
    </>
  );
}
