'use client'

import { useEffect, useState } from 'react'
import { Mic, FileText, CheckSquare, MessageSquare, Download, ArrowRight, Shield, Monitor, Play } from 'lucide-react'

export default function Home() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <div className="min-h-screen bg-[#0a0a0f] text-white overflow-x-hidden">
      {/* Fluid Background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div
          className="absolute w-[800px] h-[800px] -top-[200px] -left-[200px] opacity-40"
          style={{
            background: 'radial-gradient(circle, rgba(91, 127, 255, 0.4) 0%, transparent 70%)',
            filter: 'blur(80px)',
            animation: 'float 20s ease-in-out infinite',
          }}
        />
        <div
          className="absolute w-[600px] h-[600px] top-[40%] -right-[100px] opacity-30"
          style={{
            background: 'radial-gradient(circle, rgba(99, 102, 241, 0.4) 0%, transparent 70%)',
            filter: 'blur(80px)',
            animation: 'float 25s ease-in-out infinite reverse',
          }}
        />
        <div
          className="absolute w-[500px] h-[500px] -bottom-[100px] left-[30%] opacity-20"
          style={{
            background: 'radial-gradient(circle, rgba(59, 91, 219, 0.5) 0%, transparent 70%)',
            filter: 'blur(60px)',
            animation: 'float 18s ease-in-out infinite',
          }}
        />
      </div>

      {/* Grain Overlay */}
      <div
        className="fixed inset-0 pointer-events-none opacity-[0.015]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
        }}
      />

      {/* Navigation */}
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'}`}
        style={{ backdropFilter: 'blur(20px)', background: 'rgba(10, 10, 15, 0.7)' }}
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

            <div className="hidden md:flex items-center gap-10">
              <a href="#features" className="text-sm text-white/60 hover:text-white transition-colors">
                Features
              </a>
              <a href="#download" className="text-sm text-white/60 hover:text-white transition-colors">
                Download
              </a>
              <a
                href="#download"
                className="h-10 px-5 rounded-full text-sm font-medium flex items-center gap-2 transition-all hover:scale-105"
                style={{ background: 'linear-gradient(135deg, #5b7fff 0%, #3b5bdb 100%)' }}
              >
                Get Started
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center pt-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 py-20 lg:py-32">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-20 items-center">
            {/* Left Content */}
            <div className={`transition-all duration-1000 delay-200 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              <h1 className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-bold leading-[0.95] tracking-tight mb-8">
                <span className="block">Meetings,</span>
                <span
                  className="block bg-clip-text text-transparent"
                  style={{ backgroundImage: 'linear-gradient(135deg, #5b7fff 0%, #818cf8 50%, #5b7fff 100%)' }}
                >
                  remembered.
                </span>
              </h1>

              <p className="text-lg lg:text-xl text-white/50 leading-relaxed max-w-lg mb-10">
                AI-powered transcription that captures every word, extracts action items, and generates summaries—so you can be present, not distracted.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="#download"
                  className="group h-14 px-8 rounded-2xl font-medium flex items-center justify-center gap-3 transition-all hover:scale-105 hover:shadow-2xl hover:shadow-[#5b7fff]/20"
                  style={{ background: 'linear-gradient(135deg, #5b7fff 0%, #3b5bdb 100%)' }}
                >
                  <Download className="w-5 h-5" />
                  Download Free
                </a>
                <a
                  href="#features"
                  className="group h-14 px-8 rounded-2xl font-medium flex items-center justify-center gap-3 transition-all hover:bg-white/10"
                  style={{ background: 'rgba(255, 255, 255, 0.05)', border: '1px solid rgba(255, 255, 255, 0.1)' }}
                >
                  <Play className="w-4 h-4" />
                  See how it works
                </a>
              </div>

            </div>

            {/* Right - Audio Visualization */}
            <div className={`relative transition-all duration-1000 delay-500 ${mounted ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-8 scale-95'}`}>
              <div className="relative aspect-square max-w-lg mx-auto">
                {/* Pulsing Glow */}
                <div
                  className="absolute inset-0 rounded-full"
                  style={{
                    background: 'radial-gradient(circle, rgba(91, 127, 255, 0.5) 0%, transparent 60%)',
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
                  <div className="absolute bottom-8 right-8 w-1.5 h-1.5 rounded-full bg-[#818cf8] opacity-50" style={{ boxShadow: '0 0 8px rgba(129, 140, 248, 0.8)' }} />
                  <div className="absolute top-1/3 left-4 w-1 h-1 rounded-full bg-[#5b7fff] opacity-40" style={{ boxShadow: '0 0 6px rgba(91, 127, 255, 0.8)' }} />
                </div>

                {/* Floating Labels */}
                <div
                  className="absolute -left-8 top-1/4 px-4 py-2.5 rounded-xl text-xs font-medium backdrop-blur-sm"
                  style={{
                    background: 'rgba(16, 16, 24, 0.9)',
                    border: '1px solid rgba(91, 127, 255, 0.3)',
                    boxShadow: '0 4px 20px rgba(0, 0, 0, 0.3)',
                    animation: 'float-label 5s ease-in-out infinite',
                  }}
                >
                  <span className="text-[#5b7fff]">Real-time</span>
                  <span className="text-white/70"> transcription</span>
                </div>

                <div
                  className="absolute -right-8 top-2/3 px-4 py-2.5 rounded-xl text-xs font-medium backdrop-blur-sm"
                  style={{
                    background: 'rgba(16, 16, 24, 0.9)',
                    border: '1px solid rgba(91, 127, 255, 0.3)',
                    boxShadow: '0 4px 20px rgba(0, 0, 0, 0.3)',
                    animation: 'float-label 5s ease-in-out infinite 2.5s',
                  }}
                >
                  <span className="text-[#5b7fff]">AI</span>
                  <span className="text-white/70"> summaries</span>
                </div>

                <div
                  className="absolute left-1/4 -bottom-4 px-4 py-2.5 rounded-xl text-xs font-medium backdrop-blur-sm"
                  style={{
                    background: 'rgba(16, 16, 24, 0.9)',
                    border: '1px solid rgba(91, 127, 255, 0.3)',
                    boxShadow: '0 4px 20px rgba(0, 0, 0, 0.3)',
                    animation: 'float-label 5s ease-in-out infinite 1.25s',
                  }}
                >
                  <span className="text-[#5b7fff]">Action</span>
                  <span className="text-white/70"> items</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Logos / Trust */}
      <section className="relative py-16 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <p className="text-center text-sm text-white/30 mb-8">Works with any meeting platform</p>
          <div className="flex flex-wrap items-center justify-center gap-8 lg:gap-16 text-white/20">
            <span className="text-lg font-semibold">Zoom</span>
            <span className="text-lg font-semibold">Google Meet</span>
            <span className="text-lg font-semibold">Microsoft Teams</span>
            <span className="text-lg font-semibold">Slack Huddles</span>
            <span className="text-lg font-semibold">Discord</span>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="relative py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="text-center mb-20">
            <p className="text-[#5b7fff] text-sm font-medium tracking-wide uppercase mb-4">Features</p>
            <h2 className="text-4xl lg:text-6xl font-bold tracking-tight">
              Everything you need,
              <br />
              <span className="text-white/40">nothing you don&apos;t.</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <FeatureCard
              icon={<Mic className="w-6 h-6" />}
              title="Real-time Transcription"
              description="Captures both microphone and system audio simultaneously. Every word, every speaker, perfectly documented."
              delay={0}
            />
            <FeatureCard
              icon={<FileText className="w-6 h-6" />}
              title="AI Summaries"
              description="Instantly generate concise summaries highlighting key decisions, discussion points, and outcomes."
              delay={100}
            />
            <FeatureCard
              icon={<CheckSquare className="w-6 h-6" />}
              title="Action Items"
              description="Automatically extract tasks and assign owners. Never lose track of commitments made in meetings."
              delay={200}
            />
            <FeatureCard
              icon={<MessageSquare className="w-6 h-6" />}
              title="Ask Your Meetings"
              description="Chat with your meeting history. Ask questions and get instant answers from your transcripts."
              delay={300}
            />
            <FeatureCard
              icon={<Monitor className="w-6 h-6" />}
              title="Universal Compatibility"
              description="Works with any app that plays audio. Virtual meetings, podcasts, lectures—capture it all."
              delay={400}
            />
            <FeatureCard
              icon={<Shield className="w-6 h-6" />}
              title="Private by Design"
              description="Your data stays on your machine. Uses your own OpenAI API key for complete privacy control."
              delay={500}
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="download" className="relative py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div
            className="relative rounded-[2rem] p-12 lg:p-20 overflow-hidden"
            style={{
              background: 'linear-gradient(135deg, rgba(91, 127, 255, 0.1) 0%, rgba(59, 91, 219, 0.05) 100%)',
              border: '1px solid rgba(91, 127, 255, 0.2)',
            }}
          >
            {/* Background Glow */}
            <div
              className="absolute top-0 right-0 w-[500px] h-[500px] opacity-30"
              style={{
                background: 'radial-gradient(circle, rgba(91, 127, 255, 0.4) 0%, transparent 70%)',
                filter: 'blur(80px)',
              }}
            />

            <div className="relative grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-4xl lg:text-5xl font-bold tracking-tight mb-6">
                  Ready to transform
                  <br />
                  your meetings?
                </h2>
                <p className="text-lg text-white/50 mb-8 max-w-md">
                  Download TLDM for free and never miss an important detail again. No account required—just install and go.
                </p>

                <div className="flex flex-col sm:flex-row gap-4">
                  <a
                    href="https://github.com/Bilal-Bjo/meeting-assistant/releases/latest/download/TLDM-1.0.3-arm64.dmg"
                    className="group flex items-center gap-4 h-16 px-6 rounded-2xl transition-all hover:scale-105"
                    style={{ background: 'rgba(255, 255, 255, 0.05)', border: '1px solid rgba(255, 255, 255, 0.1)' }}
                  >
                    <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
                    </svg>
                    <div className="text-left">
                      <div className="text-xs text-white/40">Download for</div>
                      <div className="font-semibold">macOS</div>
                    </div>
                    <ArrowRight className="w-5 h-5 text-white/40 group-hover:text-white group-hover:translate-x-1 transition-all ml-auto" />
                  </a>

                  <a
                    href="https://github.com/Bilal-Bjo/meeting-assistant/releases/latest/download/TLDM.Setup.1.0.3.exe"
                    className="group flex items-center gap-4 h-16 px-6 rounded-2xl transition-all hover:scale-105"
                    style={{ background: 'rgba(255, 255, 255, 0.05)', border: '1px solid rgba(255, 255, 255, 0.1)' }}
                  >
                    <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M3 12V6.75l6-1.32v6.48L3 12m17-9v8.75l-10 .15V5.21L20 3M3 13l6 .1v6.35l-6-1.36V13m17 .25V22l-10-1.91V13.1l10 .15z"/>
                    </svg>
                    <div className="text-left">
                      <div className="text-xs text-white/40">Download for</div>
                      <div className="font-semibold">Windows</div>
                    </div>
                    <ArrowRight className="w-5 h-5 text-white/40 group-hover:text-white group-hover:translate-x-1 transition-all ml-auto" />
                  </a>
                </div>

                <p className="mt-6 text-sm text-white/30">
                  Version 1.0.3 · Requires OpenAI API key
                </p>
              </div>

              <div
                className="p-6 rounded-2xl"
                style={{ background: 'rgba(10, 10, 15, 0.5)', border: '1px solid rgba(255, 255, 255, 0.05)' }}
              >
                <h3 className="font-semibold mb-2">Need an OpenAI API key?</h3>
                <p className="text-sm text-white/50 mb-4">
                  TLDM uses OpenAI&apos;s Whisper for transcription and GPT for summaries. Get your API key in minutes.
                </p>
                <a
                  href="https://platform.openai.com/api-keys"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-[#5b7fff] text-sm font-medium hover:underline"
                >
                  Get your API key
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative py-12 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-3">
              <div
                className="w-10 h-10 rounded-xl flex items-center justify-center"
                style={{ background: 'linear-gradient(135deg, #5b7fff 0%, #3b5bdb 100%)' }}
              >
                <Mic className="w-5 h-5" />
              </div>
              <span className="font-bold text-lg">TLDM</span>
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
      className="group p-8 rounded-2xl transition-all duration-500 hover:-translate-y-1"
      style={{
        background: 'rgba(255, 255, 255, 0.02)',
        border: '1px solid rgba(255, 255, 255, 0.05)',
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
