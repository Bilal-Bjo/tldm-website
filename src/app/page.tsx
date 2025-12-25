'use client'

import { useEffect, useState } from 'react'
import { Mic, FileText, CheckSquare, ArrowRight, Monitor, Smartphone, Check, Menu, X } from 'lucide-react'

export default function Home() {
  const [mounted, setMounted] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [billingPeriod, setBillingPeriod] = useState<'monthly' | 'yearly'>('yearly')

  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <div className="min-h-screen bg-[#08080c] text-white overflow-x-hidden">
      {/* Fluid Background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div
          className="absolute w-[1000px] h-[1000px] -top-[300px] -left-[300px] opacity-30"
          style={{
            background: 'radial-gradient(circle, rgba(91, 127, 255, 0.5) 0%, transparent 60%)',
            filter: 'blur(120px)',
            animation: 'float 25s ease-in-out infinite',
          }}
        />
        <div
          className="absolute w-[800px] h-[800px] top-[30%] -right-[200px] opacity-20"
          style={{
            background: 'radial-gradient(circle, rgba(59, 91, 219, 0.5) 0%, transparent 60%)',
            filter: 'blur(100px)',
            animation: 'float 30s ease-in-out infinite reverse',
          }}
        />
        <div
          className="absolute w-[600px] h-[600px] bottom-[10%] left-[20%] opacity-15"
          style={{
            background: 'radial-gradient(circle, rgba(59, 130, 246, 0.5) 0%, transparent 60%)',
            filter: 'blur(80px)',
            animation: 'float 20s ease-in-out infinite',
          }}
        />
        {/* Grid overlay */}
        <div
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
                              linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
            backgroundSize: '100px 100px',
          }}
        />
      </div>

      {/* Grain Overlay */}
      <div
        className="fixed inset-0 pointer-events-none opacity-[0.02]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
        }}
      />

      {/* Navigation */}
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'}`}
        style={{ backdropFilter: 'blur(20px)', background: 'rgba(8, 8, 12, 0.8)' }}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="h-20 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="relative">
                <div className="absolute inset-0 bg-[#5b7fff] blur-xl opacity-50" />
                <div
                  className="relative w-11 h-11 rounded-2xl flex items-center justify-center"
                  style={{ background: 'linear-gradient(135deg, #5b7fff 0%, #3b5bdb 100%)' }}
                >
                  <Mic className="w-5 h-5 text-white" />
                </div>
              </div>
              <span className="font-bold text-xl tracking-tight">TLDM</span>
            </div>

            <div className="hidden md:flex items-center gap-8">
              <a href="#platforms" className="text-sm text-white/50 hover:text-white transition-colors">
                Platforms
              </a>
              <a href="#features" className="text-sm text-white/50 hover:text-white transition-colors">
                Features
              </a>
              <a href="#pricing" className="text-sm text-white/50 hover:text-white transition-colors">
                Pricing
              </a>
              <a href="#download" className="text-sm text-white/50 hover:text-white transition-colors">
                Download
              </a>
              <a
                href="#download"
                className="h-10 px-5 rounded-full text-sm font-medium flex items-center gap-2 transition-all hover:scale-105 hover:shadow-lg hover:shadow-[#5b7fff]/25"
                style={{ background: 'linear-gradient(135deg, #5b7fff 0%, #3b5bdb 100%)' }}
              >
                Get Started
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2 rounded-lg hover:bg-white/10 transition-colors"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <div className="md:hidden py-4 border-t border-white/10">
              <div className="flex flex-col gap-4">
                <a
                  href="#platforms"
                  className="text-sm text-white/70 hover:text-white transition-colors py-2"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Platforms
                </a>
                <a
                  href="#features"
                  className="text-sm text-white/70 hover:text-white transition-colors py-2"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Features
                </a>
                <a
                  href="#pricing"
                  className="text-sm text-white/70 hover:text-white transition-colors py-2"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Pricing
                </a>
                <a
                  href="#download"
                  className="text-sm text-white/70 hover:text-white transition-colors py-2"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Download
                </a>
                <a
                  href="#download"
                  className="h-10 px-5 rounded-full text-sm font-medium flex items-center justify-center gap-2 w-full mt-2"
                  style={{ background: 'linear-gradient(135deg, #5b7fff 0%, #3b5bdb 100%)' }}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Get Started
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center pt-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 py-20 lg:py-32">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-20 items-center">
            {/* Left Content */}
            <div className={`transition-all duration-1000 delay-200 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.1] tracking-tight mb-6 sm:mb-8">
                <span className="block text-white/90">Never forget</span>
                <span
                  className="block bg-clip-text text-transparent pb-1"
                  style={{ backgroundImage: 'linear-gradient(135deg, #5b7fff 0%, #3b5bdb 100%)' }}
                >
                  a meeting again.
                </span>
              </h1>

              <p className="text-base sm:text-lg lg:text-xl text-white/40 leading-relaxed max-w-lg mb-8 sm:mb-10">
                TLDM captures every word, extracts action items, and delivers instant summaries so you can focus on the conversation, not your keyboard.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <a
                  href="#download"
                  className="group h-14 px-8 rounded-2xl font-medium flex items-center justify-center gap-3 transition-all hover:scale-105 hover:shadow-2xl hover:shadow-[#5b7fff]/20"
                  style={{ background: 'linear-gradient(135deg, #5b7fff 0%, #3b5bdb 100%)' }}
                >
                  Try Free - No Card Required
                  <ArrowRight className="w-5 h-5" />
                </a>
                <a
                  href="#pricing"
                  className="group h-14 px-8 rounded-2xl font-medium flex items-center justify-center gap-3 transition-all hover:bg-white/10"
                  style={{ background: 'rgba(255, 255, 255, 0.05)', border: '1px solid rgba(255, 255, 255, 0.1)' }}
                >
                  See Pricing
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </a>
              </div>

              {/* Platform badges */}
              <div className="flex items-center gap-6 text-sm text-white/30">
                <div className="flex items-center gap-2">
                  <Monitor className="w-4 h-4" />
                  <span>macOS & Windows</span>
                </div>
                <div className="flex items-center gap-2">
                  <Smartphone className="w-4 h-4" />
                  <span>iOS & Android</span>
                </div>
              </div>
            </div>

            {/* Right - Audio Visualization */}
            <div className={`relative transition-all duration-1000 delay-500 ${mounted ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-8 scale-95'}`}>
              <div className="relative aspect-square max-w-lg mx-auto">
                {/* Pulsing Glow */}
                <div
                  className="absolute inset-0 rounded-full"
                  style={{
                    background: 'radial-gradient(circle, rgba(91, 127, 255, 0.4) 0%, transparent 60%)',
                    filter: 'blur(60px)',
                    animation: 'glow-pulse 4s ease-in-out infinite',
                  }}
                />

                {/* Rotating Outer Ring */}
                <div
                  className="absolute inset-0 rounded-full"
                  style={{
                    border: '2px solid transparent',
                    borderTopColor: 'rgba(91, 127, 255, 0.5)',
                    borderRightColor: 'rgba(91, 127, 255, 0.2)',
                    animation: 'spin-slow 8s linear infinite',
                  }}
                />

                {/* Counter-rotating Ring */}
                <div
                  className="absolute inset-8 rounded-full"
                  style={{
                    border: '1px solid transparent',
                    borderTopColor: 'rgba(91, 127, 255, 0.3)',
                    borderLeftColor: 'rgba(91, 127, 255, 0.1)',
                    animation: 'spin-slow 12s linear infinite reverse',
                  }}
                />

                {/* Pulsing Middle Ring */}
                <div
                  className="absolute inset-16 rounded-full"
                  style={{
                    border: '1px solid rgba(91, 127, 255, 0.2)',
                    animation: 'pulse-ring 2s ease-in-out infinite',
                  }}
                />

                {/* Inner Glow Ring */}
                <div
                  className="absolute inset-24 rounded-full"
                  style={{
                    background: 'radial-gradient(circle, rgba(91, 127, 255, 0.15) 0%, transparent 70%)',
                    animation: 'pulse-ring 2s ease-in-out infinite 0.5s',
                  }}
                />

                {/* Center Circle with Breathing Effect */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div
                    className="w-28 h-28 lg:w-36 lg:h-36 rounded-full flex items-center justify-center"
                    style={{
                      background: 'linear-gradient(135deg, rgba(91, 127, 255, 0.3) 0%, rgba(59, 91, 219, 0.15) 100%)',
                      border: '1px solid rgba(91, 127, 255, 0.4)',
                      boxShadow: '0 0 80px rgba(91, 127, 255, 0.4), inset 0 0 40px rgba(91, 127, 255, 0.2)',
                      animation: 'breathe 3s ease-in-out infinite',
                    }}
                  >
                    <Mic className="w-10 h-10 lg:w-14 lg:h-14 text-[#5b7fff]" style={{ animation: 'icon-pulse 2s ease-in-out infinite' }} />
                  </div>
                </div>

                {/* Orbiting Particles */}
                <div className="absolute inset-0" style={{ animation: 'spin-slow 20s linear infinite' }}>
                  <div className="absolute top-4 left-1/2 w-2 h-2 rounded-full bg-[#5b7fff] opacity-60" style={{ boxShadow: '0 0 10px rgba(91, 127, 255, 0.8)' }} />
                  <div className="absolute bottom-8 right-8 w-1.5 h-1.5 rounded-full bg-[#3b5bdb] opacity-50" style={{ boxShadow: '0 0 8px rgba(59, 91, 219, 0.8)' }} />
                  <div className="absolute top-1/3 left-4 w-1 h-1 rounded-full bg-[#5b7fff] opacity-40" style={{ boxShadow: '0 0 6px rgba(91, 127, 255, 0.8)' }} />
                </div>

                {/* Floating Labels */}
                <div
                  className="absolute -left-4 top-1/4 px-4 py-2.5 rounded-xl text-xs font-medium backdrop-blur-sm"
                  style={{
                    background: 'rgba(16, 16, 24, 0.95)',
                    border: '1px solid rgba(91, 127, 255, 0.3)',
                    boxShadow: '0 4px 24px rgba(0, 0, 0, 0.4)',
                    animation: 'float-label 5s ease-in-out infinite',
                  }}
                >
                  <span className="text-[#5b7fff]">Real-time</span>
                  <span className="text-white/60"> transcription</span>
                </div>

                <div
                  className="absolute -right-4 top-2/3 px-4 py-2.5 rounded-xl text-xs font-medium backdrop-blur-sm"
                  style={{
                    background: 'rgba(16, 16, 24, 0.95)',
                    border: '1px solid rgba(91, 127, 255, 0.3)',
                    boxShadow: '0 4px 24px rgba(0, 0, 0, 0.4)',
                    animation: 'float-label 5s ease-in-out infinite 2.5s',
                  }}
                >
                  <span className="text-[#5b7fff]">AI</span>
                  <span className="text-white/60"> summaries</span>
                </div>

                <div
                  className="absolute left-1/4 -bottom-2 px-4 py-2.5 rounded-xl text-xs font-medium backdrop-blur-sm"
                  style={{
                    background: 'rgba(16, 16, 24, 0.95)',
                    border: '1px solid rgba(91, 127, 255, 0.3)',
                    boxShadow: '0 4px 24px rgba(0, 0, 0, 0.4)',
                    animation: 'float-label 5s ease-in-out infinite 1.25s',
                  }}
                >
                  <span className="text-[#5b7fff]">Action</span>
                  <span className="text-white/60"> items</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Platform Section */}
      <section id="platforms" className="relative py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="text-center mb-16">
            <p className="text-[#5b7fff] text-sm font-semibold tracking-widest uppercase mb-4">Works Everywhere You Meet</p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-6">
              Zoom calls or coffee chats.
              <br />
              <span className="text-white/40">We've got both covered.</span>
            </h2>
            <p className="text-lg text-white/40 max-w-2xl mx-auto">
              Desktop captures your virtual meetings. Mobile records in-person conversations. Same powerful AI, any situation.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-6">
            {/* Desktop Card */}
            <div
              className="group relative p-8 lg:p-10 rounded-3xl transition-all duration-500 hover:-translate-y-1 flex flex-col"
              style={{
                background: 'linear-gradient(135deg, rgba(91, 127, 255, 0.08) 0%, rgba(91, 127, 255, 0.02) 100%)',
                border: '1px solid rgba(91, 127, 255, 0.2)',
              }}
            >
              <div className="absolute top-0 right-0 w-64 h-64 opacity-20" style={{
                background: 'radial-gradient(circle, rgba(91, 127, 255, 0.4) 0%, transparent 70%)',
                filter: 'blur(40px)',
              }} />

              <div className="relative flex flex-col flex-1">
                <div className="flex items-center gap-4 mb-6">
                  <div
                    className="w-14 h-14 rounded-2xl flex items-center justify-center"
                    style={{ background: 'linear-gradient(135deg, #5b7fff 0%, #3b5bdb 100%)' }}
                  >
                    <Monitor className="w-7 h-7 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold">TLDM Desktop</h3>
                    <p className="text-white/40">macOS & Windows</p>
                  </div>
                </div>

                <p className="text-lg text-white/50 mb-8 leading-relaxed">
                  Join any Zoom, Meet, Teams, or Discord call. TLDM runs quietly in the background, capturing everything without interrupting your flow.
                </p>

                <div className="space-y-3 flex-1">
                  <div className="flex items-center gap-3 text-white/70">
                    <Check className="w-5 h-5 text-[#5b7fff]" />
                    <span>Works with any app, no extensions needed</span>
                  </div>
                  <div className="flex items-center gap-3 text-white/70">
                    <Check className="w-5 h-5 text-[#5b7fff]" />
                    <span>Your data stays on your device</span>
                  </div>
                  <div className="flex items-center gap-3 text-white/70">
                    <Check className="w-5 h-5 text-[#5b7fff]" />
                    <span>Use your own API key (BYOK)</span>
                  </div>
                  <div className="flex items-center gap-3 text-white/70">
                    <Check className="w-5 h-5 text-[#5b7fff]" />
                    <span>Included with Lifetime plan</span>
                  </div>
                </div>

                <a
                  href="#pricing"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-medium transition-all hover:bg-white/10 mt-8 w-fit bg-white/5 border border-white/10"
                >
                  See Pricing
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>

            {/* Mobile Card */}
            <div
              className="group relative p-8 lg:p-10 rounded-3xl transition-all duration-500 hover:-translate-y-1 flex flex-col"
              style={{
                background: 'linear-gradient(135deg, rgba(91, 127, 255, 0.08) 0%, rgba(91, 127, 255, 0.02) 100%)',
                border: '1px solid rgba(91, 127, 255, 0.2)',
              }}
            >
              <div className="absolute top-0 right-0 w-64 h-64 opacity-20" style={{
                background: 'radial-gradient(circle, rgba(91, 127, 255, 0.4) 0%, transparent 70%)',
                filter: 'blur(40px)',
              }} />

              <div className="relative flex flex-col flex-1">
                <div className="flex items-center gap-4 mb-6">
                  <div
                    className="w-14 h-14 rounded-2xl flex items-center justify-center"
                    style={{ background: 'linear-gradient(135deg, #5b7fff 0%, #3b5bdb 100%)' }}
                  >
                    <Smartphone className="w-7 h-7 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold">TLDM Mobile</h3>
                    <p className="text-white/40">iOS & Android</p>
                  </div>
                </div>

                <p className="text-lg text-white/50 mb-8 leading-relaxed">
                  Client meetings, lectures, interviews. Just tap record and stay present. TLDM handles the notes so you don't have to.
                </p>

                <div className="space-y-3 flex-1">
                  <div className="flex items-center gap-3 text-white/70">
                    <Check className="w-5 h-5 text-[#5b7fff]" />
                    <span>One tap to start, no setup required</span>
                  </div>
                  <div className="flex items-center gap-3 text-white/70">
                    <Check className="w-5 h-5 text-[#5b7fff]" />
                    <span>Syncs across all your devices</span>
                  </div>
                  <div className="flex items-center gap-3 text-white/70">
                    <Check className="w-5 h-5 text-[#5b7fff]" />
                    <span>Start free with 3 meetings/month</span>
                  </div>
                  <div className="flex items-center gap-3 text-white/70">
                    <Check className="w-5 h-5 text-[#5b7fff]" />
                    <span>Upgrade anytime for $10/month</span>
                  </div>
                </div>

                <div className="flex items-center gap-4 mt-8">
                  <a
                    href="https://apps.apple.com"
                    className="inline-flex items-center gap-2 px-5 py-3 rounded-xl font-medium transition-all hover:scale-105 bg-white/5 border border-white/10 hover:bg-white/10"
                  >
                    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
                    </svg>
                    App Store
                  </a>
                  <a
                    href="https://play.google.com"
                    className="inline-flex items-center gap-2 px-5 py-3 rounded-xl font-medium transition-all hover:scale-105 bg-white/5 border border-white/10 hover:bg-white/10"
                  >
                    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z"/>
                    </svg>
                    Play Store
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="relative py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="text-center mb-16">
            <p className="text-[#5b7fff] text-sm font-semibold tracking-widest uppercase mb-4">How It Works</p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight">
              Record. Review.
              <br />
              <span className="text-white/40">Get things done.</span>
            </h2>
          </div>

          <div className="grid lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <FeatureCard
              icon={<Mic className="w-6 h-6" />}
              title="Capture Everything"
              description="Real-time transcription catches every word. You'll never miss a detail."
              delay={0}
            />
            <FeatureCard
              icon={<FileText className="w-6 h-6" />}
              title="Instant Clarity"
              description="AI summaries distill hour-long meetings into key takeaways in seconds."
              delay={100}
            />
            <FeatureCard
              icon={<CheckSquare className="w-6 h-6" />}
              title="Know What's Next"
              description="Action items extracted automatically. Check them off as you go."
              delay={200}
            />
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="relative py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="text-center mb-12">
            <p className="text-[#5b7fff] text-sm font-semibold tracking-widest uppercase mb-4">Pricing</p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-6">
              Simple, transparent pricing.
            </h2>
            <p className="text-lg text-white/40 max-w-2xl mx-auto">
              Start free, upgrade when you need more.
            </p>
          </div>

          {/* Billing Toggle */}
          <div className="flex items-center justify-center gap-4 mb-12">
            <span className={`text-sm font-medium transition-colors ${billingPeriod === 'monthly' ? 'text-white' : 'text-white/40'}`}>
              Monthly
            </span>
            <button
              onClick={() => setBillingPeriod(billingPeriod === 'monthly' ? 'yearly' : 'monthly')}
              className="relative w-14 h-8 rounded-full transition-colors"
              style={{
                background: billingPeriod === 'yearly'
                  ? 'linear-gradient(135deg, #5b7fff 0%, #3b5bdb 100%)'
                  : 'rgba(255, 255, 255, 0.1)',
              }}
            >
              <div
                className="absolute top-1 w-6 h-6 rounded-full bg-white shadow-md transition-transform duration-200"
                style={{
                  transform: billingPeriod === 'yearly' ? 'translateX(28px)' : 'translateX(4px)',
                }}
              />
            </button>
            <span className={`text-sm font-medium transition-colors ${billingPeriod === 'yearly' ? 'text-white' : 'text-white/40'}`}>
              Yearly
            </span>
          </div>

          <div className="grid lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {/* Free Tier */}
            <div
              className="relative p-8 rounded-3xl flex flex-col"
              style={{
                background: 'rgba(255, 255, 255, 0.02)',
                border: '1px solid rgba(255, 255, 255, 0.08)',
              }}
            >
              {/* Spacer for badge alignment */}
              <div className="h-0" />

              <div className="mb-4">
                <h3 className="text-xl font-bold mb-1">Free</h3>
                <p className="text-white/40 text-sm">Try before you commit</p>
              </div>

              {/* Fixed height price section */}
              <div className="h-16 mb-6">
                <span className="text-4xl font-bold">$0</span>
                <span className="text-white/40">/month</span>
              </div>

              {/* Fixed height label */}
              <p className="text-sm text-white/50 mb-4 h-5">What's included:</p>

              <div className="space-y-3 flex-1">
                <div className="flex items-center gap-3 text-white/60">
                  <Check className="w-5 h-5 text-white/40 flex-shrink-0" />
                  <span>3 meetings per month</span>
                </div>
                <div className="flex items-center gap-3 text-white/60">
                  <Check className="w-5 h-5 text-white/40 flex-shrink-0" />
                  <span>15 minutes per meeting</span>
                </div>
                <div className="flex items-center gap-3 text-white/60">
                  <Check className="w-5 h-5 text-white/40 flex-shrink-0" />
                  <span>AI summaries & action items</span>
                </div>
                <div className="flex items-center gap-3 text-white/60">
                  <Check className="w-5 h-5 text-white/40 flex-shrink-0" />
                  <span>Desktop & mobile apps</span>
                </div>
              </div>

              <a
                href="#download"
                className="block w-full py-3 rounded-xl font-medium text-center transition-all hover:bg-white/10 bg-white/5 border border-white/10 mt-8"
              >
                Get Started Free
              </a>
            </div>

            {/* Pro Tier */}
            <div
              className="relative p-8 rounded-3xl flex flex-col"
              style={{
                background: 'linear-gradient(135deg, rgba(91, 127, 255, 0.1) 0%, rgba(91, 127, 255, 0.02) 100%)',
                border: '1px solid rgba(91, 127, 255, 0.3)',
              }}
            >
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full text-xs font-semibold bg-[#5b7fff] text-white">
                Most Popular
              </div>

              <div className="mb-4">
                <h3 className="text-xl font-bold mb-1">Pro</h3>
                <p className="text-white/40 text-sm">For busy professionals</p>
              </div>

              {/* Fixed height price section */}
              <div className="h-16 mb-6">
                {billingPeriod === 'monthly' ? (
                  <>
                    <span className="text-4xl font-bold">$15</span>
                    <span className="text-white/40">/month</span>
                  </>
                ) : (
                  <>
                    <span className="text-4xl font-bold">$10</span>
                    <span className="text-white/40">/month</span>
                    <div className="text-sm text-white/30 mt-1">$120 billed yearly</div>
                  </>
                )}
              </div>

              {/* Fixed height label */}
              <p className="text-sm text-white/50 mb-4 h-5">Everything in Free, plus:</p>

              <div className="space-y-3 flex-1">
                <div className="flex items-center gap-3 text-white/70">
                  <Check className="w-5 h-5 text-[#5b7fff] flex-shrink-0" />
                  <span>10 hours of meeting time/month</span>
                </div>
                <div className="flex items-center gap-3 text-white/70">
                  <Check className="w-5 h-5 text-[#5b7fff] flex-shrink-0" />
                  <span>Unlimited meetings</span>
                </div>
                <div className="flex items-center gap-3 text-white/70">
                  <Check className="w-5 h-5 text-[#5b7fff] flex-shrink-0" />
                  <span>Priority support</span>
                </div>
                <div className="flex items-center gap-3 text-white/70">
                  <Check className="w-5 h-5 text-[#5b7fff] flex-shrink-0" />
                  <span>Cloud sync across devices</span>
                </div>
              </div>

              <a
                href="#download"
                className="block w-full py-3 rounded-xl font-medium text-center transition-all hover:scale-105 mt-8"
                style={{ background: 'linear-gradient(135deg, #5b7fff 0%, #3b5bdb 100%)' }}
              >
                Start Free Trial
              </a>
            </div>

            {/* Lifetime / Desktop BYOK */}
            <div
              className="relative p-8 rounded-3xl flex flex-col"
              style={{
                background: 'rgba(255, 255, 255, 0.02)',
                border: '1px solid rgba(255, 255, 255, 0.08)',
              }}
            >
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full text-xs font-semibold bg-white/10 text-white border border-white/20">
                Best Value
              </div>

              <div className="mb-4">
                <h3 className="text-xl font-bold mb-1">Lifetime</h3>
                <p className="text-white/40 text-sm">One-time purchase, yours forever</p>
              </div>

              {/* Fixed height price section */}
              <div className="h-16 mb-6">
                <span className="text-4xl font-bold">$149</span>
                <span className="text-white/40"> once</span>
              </div>

              {/* Fixed height label */}
              <p className="text-sm text-white/50 mb-4 h-5">Everything, unlimited:</p>

              <div className="space-y-3 flex-1">
                <div className="flex items-center gap-3 text-white/60">
                  <Check className="w-5 h-5 text-white/40 flex-shrink-0" />
                  <span>Desktop + mobile apps</span>
                </div>
                <div className="flex items-center gap-3 text-white/60">
                  <Check className="w-5 h-5 text-white/40 flex-shrink-0" />
                  <span>Unlimited meetings & duration</span>
                </div>
                <div className="flex items-center gap-3 text-white/60">
                  <Check className="w-5 h-5 text-white/40 flex-shrink-0" />
                  <span>No subscription, ever</span>
                </div>
                <div className="flex items-center gap-3 text-white/60">
                  <Check className="w-5 h-5 text-white/40 flex-shrink-0" />
                  <span>Use your own OpenAI API key</span>
                </div>
              </div>

              <a
                href="#download"
                className="block w-full py-3 rounded-xl font-medium text-center transition-all hover:bg-white/10 bg-white/5 border border-white/10 mt-8"
              >
                Buy Lifetime License
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Download Section */}
      <section id="download" className="relative py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div
            className="relative rounded-3xl sm:rounded-[2.5rem] p-8 sm:p-12 lg:p-16 overflow-hidden"
            style={{
              background: 'linear-gradient(135deg, rgba(91, 127, 255, 0.12) 0%, rgba(59, 91, 219, 0.04) 100%)',
              border: '1px solid rgba(91, 127, 255, 0.2)',
            }}
          >
            {/* Background Glow */}
            <div
              className="absolute top-0 right-0 w-[600px] h-[600px] opacity-30"
              style={{
                background: 'radial-gradient(circle, rgba(91, 127, 255, 0.4) 0%, transparent 70%)',
                filter: 'blur(100px)',
              }}
            />

            <div className="relative text-center max-w-3xl mx-auto mb-8 sm:mb-12">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-4 sm:mb-6">
                Your next meeting
                <br />
                could be your best yet.
              </h2>
              <p className="text-lg text-white/40">
                Download the app and start for free. Upgrade anytime.
              </p>
            </div>

            {/* App Store Buttons */}
            <div className="relative flex flex-col sm:flex-row justify-center gap-4 max-w-md mx-auto">
              <a
                href="https://apps.apple.com"
                className="group flex items-center gap-4 px-6 py-4 rounded-2xl font-medium transition-all hover:scale-105"
                style={{ background: 'linear-gradient(135deg, #5b7fff 0%, #3b5bdb 100%)' }}
              >
                <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
                </svg>
                <div className="text-left">
                  <div className="text-xs text-white/70">Download on the</div>
                  <div className="text-lg font-semibold">App Store</div>
                </div>
              </a>
              <a
                href="https://play.google.com"
                className="group flex items-center gap-4 px-6 py-4 rounded-2xl font-medium transition-all hover:scale-105 bg-white/5 border border-white/10 hover:bg-white/10"
              >
                <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z"/>
                </svg>
                <div className="text-left">
                  <div className="text-xs text-white/70">Get it on</div>
                  <div className="text-lg font-semibold">Google Play</div>
                </div>
              </a>
            </div>

          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative py-16 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="flex items-center gap-3">
              <div
                className="w-10 h-10 rounded-xl flex items-center justify-center"
                style={{ background: 'linear-gradient(135deg, #5b7fff 0%, #3b5bdb 100%)' }}
              >
                <Mic className="w-5 h-5" />
              </div>
              <span className="font-bold text-lg">TLDM</span>
            </div>

            <div className="flex items-center gap-8 text-sm text-white/40">
              <a href="/privacy" className="hover:text-white transition-colors">Privacy</a>
              <a href="/terms" className="hover:text-white transition-colors">Terms</a>
              <a href="mailto:support@tldm.app" className="hover:text-white transition-colors">Contact</a>
            </div>

            <p className="text-sm text-white/30">
              © {new Date().getFullYear()} TLDM. All rights reserved.
            </p>
          </div>
        </div>
      </footer>

      {/* CSS Animations */}
      <style jsx global>{`
        @keyframes float {
          0%, 100% { transform: translate(0, 0) rotate(0deg); }
          33% { transform: translate(30px, -30px) rotate(5deg); }
          66% { transform: translate(-20px, 20px) rotate(-5deg); }
        }

        @keyframes glow-pulse {
          0%, 100% { opacity: 0.3; transform: scale(1); }
          50% { opacity: 0.5; transform: scale(1.1); }
        }

        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }

        @keyframes pulse-ring {
          0%, 100% { transform: scale(1); opacity: 1; }
          50% { transform: scale(1.08); opacity: 0.4; }
        }

        @keyframes breathe {
          0%, 100% { transform: scale(1); box-shadow: 0 0 80px rgba(91, 127, 255, 0.4), inset 0 0 40px rgba(91, 127, 255, 0.2); }
          50% { transform: scale(1.05); box-shadow: 0 0 100px rgba(91, 127, 255, 0.6), inset 0 0 60px rgba(91, 127, 255, 0.3); }
        }

        @keyframes icon-pulse {
          0%, 100% { transform: scale(1); opacity: 1; }
          50% { transform: scale(1.1); opacity: 0.8; }
        }

        @keyframes float-label {
          0%, 100% { transform: translateY(0) translateX(0); opacity: 0.9; }
          50% { transform: translateY(-8px) translateX(4px); opacity: 1; }
        }
      `}</style>
    </div>
  )
}

function FeatureCard({ icon, title, description, delay }: { icon: React.ReactNode; title: string; description: string; delay: number }) {
  return (
    <div
      className="group p-8 rounded-2xl transition-all duration-500 hover:-translate-y-1 hover:bg-white/[0.03]"
      style={{
        background: 'rgba(255, 255, 255, 0.01)',
        border: '1px solid rgba(255, 255, 255, 0.06)',
        animationDelay: `${delay}ms`,
      }}
    >
      <div
        className="w-14 h-14 rounded-2xl flex items-center justify-center mb-6 transition-transform group-hover:scale-110"
        style={{ background: 'rgba(91, 127, 255, 0.1)', border: '1px solid rgba(91, 127, 255, 0.2)' }}
      >
        <div className="text-[#5b7fff]">{icon}</div>
      </div>
      <h3 className="text-lg font-semibold mb-3">{title}</h3>
      <p className="text-white/40 leading-relaxed">{description}</p>
    </div>
  )
}
