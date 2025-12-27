'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { ArrowRight, ArrowUpRight, Check } from 'lucide-react'

const fadeIn = {
  initial: { opacity: 0 },
  animate: { opacity: 1 }
}

const slideUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 }
}

export default function Home() {
  const [billingPeriod, setBillingPeriod] = useState<'monthly' | 'yearly'>('yearly')

  return (
    <div className="min-h-screen bg-[#09090b] text-[#f0f0f5]">
      {/* Navigation */}
      <motion.nav
        className="fixed top-0 left-0 right-0 z-50 bg-[#09090b]/80 backdrop-blur-sm"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="h-20 flex items-center justify-between">
            <span className="text-lg font-semibold tracking-tight">
              TLDM
            </span>

            <div className="hidden md:flex items-center gap-12">
              <a href="#features" className="text-sm text-[#a1a1aa] hover:text-[#f0f0f5] transition-colors duration-300">
                Features
              </a>
              <a href="#pricing" className="text-sm text-[#a1a1aa] hover:text-[#f0f0f5] transition-colors duration-300">
                Pricing
              </a>
              <a
                href="#download"
                className="text-sm text-[#f0f0f5] flex items-center gap-1.5 group"
              >
                Download
                <ArrowUpRight className="w-3.5 h-3.5 opacity-50 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-300" />
              </a>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Hero */}
      <section className="min-h-screen flex items-center justify-center px-6 lg:px-12">
        <div className="max-w-4xl mx-auto text-center">
          <motion.p
            className="text-sm text-[#a1a1aa] mb-8 tracking-wide"
            {...fadeIn}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Your AI notetaker
          </motion.p>

          <motion.h1
            className="text-[clamp(2.5rem,8vw,5rem)] font-semibold leading-[1] tracking-[-0.03em] mb-10"
            {...slideUp}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            Stop taking notes.
            <br />
            <span className="text-[#71717a]">Start paying attention.</span>
          </motion.h1>

          <motion.p
            className="text-lg text-[#a1a1aa] max-w-lg mx-auto mb-14 leading-relaxed"
            {...fadeIn}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            Record any meeting. Get perfect transcripts, smart summaries, and action items — automatically.
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
            {...fadeIn}
            transition={{ duration: 0.6, delay: 0.7 }}
          >
            <a
              href="#download"
              className="group inline-flex items-center gap-3 h-14 px-8 bg-[#5b7fff] hover:bg-[#4a6eef] text-white rounded-full text-sm font-medium transition-all duration-300"
            >
              Download free
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
            </a>
            <a
              href="#features"
              className="inline-flex items-center h-14 px-8 text-sm text-[#a1a1aa] hover:text-[#f0f0f5] transition-colors duration-300"
            >
              Learn more
            </a>
          </motion.div>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="py-32 lg:py-48 px-6 lg:px-12">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="grid lg:grid-cols-2 gap-20 lg:gap-32"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeIn}
            transition={{ duration: 0.8 }}
          >
            <div className="lg:sticky lg:top-32 lg:self-start">
              <p className="text-sm text-[#5b7fff] mb-4 tracking-wide">Features</p>
              <h2 className="text-4xl lg:text-5xl font-semibold tracking-[-0.02em] leading-[1.1]">
                Everything you need.
                <br />
                <span className="text-[#71717a]">Nothing you don&apos;t.</span>
              </h2>
            </div>

            <div className="space-y-16 lg:space-y-24">
              {[
                {
                  title: "Real-time transcription",
                  description: "Industry-leading speech recognition captures every word with speaker identification."
                },
                {
                  title: "AI summaries",
                  description: "Intelligent meeting summaries that highlight key decisions and important moments."
                },
                {
                  title: "Action items",
                  description: "Automatically extract tasks and follow-ups, assigned to the right people."
                },
                {
                  title: "Cloud sync",
                  description: "Access your meetings from any device. Everything syncs seamlessly."
                },
                {
                  title: "Private & secure",
                  description: "End-to-end encryption and local-first storage. Your conversations stay yours."
                }
              ].map((feature, i) => (
                <motion.div
                  key={i}
                  className="group"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.6, delay: i * 0.1 }}
                >
                  <div className="flex items-start gap-6">
                    <span className="text-sm text-[#71717a] font-mono mt-1">0{i + 1}</span>
                    <div>
                      <h3 className="text-xl font-medium mb-3 group-hover:text-[#5b7fff] transition-colors duration-300">
                        {feature.title}
                      </h3>
                      <p className="text-[#a1a1aa] leading-relaxed max-w-sm">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="py-32 lg:py-48 px-6 lg:px-12 border-t border-[#27272a]">
        <div className="max-w-5xl mx-auto">
          <motion.div
            className="text-center mb-12"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeIn}
            transition={{ duration: 0.8 }}
          >
            <p className="text-sm text-[#5b7fff] mb-4 tracking-wide">Pricing</p>
            <h2 className="text-4xl lg:text-5xl font-semibold tracking-[-0.02em]">
              Simple pricing
            </h2>
          </motion.div>

          {/* Billing Toggle */}
          <motion.div
            className="flex justify-center mb-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeIn}
            transition={{ duration: 0.8, delay: 0.1 }}
          >
            <div className="inline-flex items-center p-1 rounded-full bg-[#18181b] border border-[#27272a]">
              <button
                onClick={() => setBillingPeriod('monthly')}
                className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
                  billingPeriod === 'monthly'
                    ? 'bg-[#232332] text-[#f0f0f5]'
                    : 'text-[#71717a] hover:text-[#a1a1aa]'
                }`}
              >
                Monthly
              </button>
              <button
                onClick={() => setBillingPeriod('yearly')}
                className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 flex items-center gap-2 ${
                  billingPeriod === 'yearly'
                    ? 'bg-[#232332] text-[#f0f0f5]'
                    : 'text-[#71717a] hover:text-[#a1a1aa]'
                }`}
              >
                Yearly
                <span className="text-xs text-[#5b7fff]">-33%</span>
              </button>
            </div>
          </motion.div>

          <motion.div
            className="grid md:grid-cols-3 gap-6 lg:gap-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeIn}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {[
              {
                name: "Free",
                price: "$0",
                period: "/month",
                description: "Try it out",
                includes: "Includes:",
                features: ["3 meetings per month", "15 min per meeting", "Transcripts & summaries", "Action items"],
                cta: "Get started"
              },
              {
                name: "Pro",
                price: billingPeriod === 'yearly' ? "$10" : "$15",
                period: "/month",
                description: "For power users",
                includes: "Everything in Free, plus:",
                features: ["8 hours of recordings", "No per-meeting limits", "Cloud sync", "Priority support"],
                cta: "Go Pro",
                featured: true,
                billingNote: billingPeriod === 'yearly' ? "Billed yearly" : undefined
              },
              {
                name: "Lifetime",
                price: "$149",
                period: " once",
                description: "Own it forever",
                includes: "Everything in Pro, plus:",
                features: ["Unlimited hours forever", "Bring your own API key", "All future updates", "Desktop app included"],
                cta: "Get Lifetime"
              }
            ].map((plan, i) => (
              <motion.div
                key={i}
                className="relative group"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
              >
                {/* Glow effect for featured */}
                {plan.featured && (
                  <div className="absolute -inset-[1px] bg-gradient-to-b from-[#5b7fff] via-[#5b7fff]/50 to-transparent rounded-3xl opacity-100" />
                )}

                <div className={`relative h-full p-8 lg:p-10 rounded-3xl flex flex-col ${
                  plan.featured
                    ? 'bg-[#0d0d14]'
                    : 'bg-[#0d0d14]/50 border border-[#27272a]/50 hover:border-[#27272a] transition-colors duration-300'
                }`}>
                  {/* Popular badge */}
                  {plan.featured && (
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                      <span className="px-4 py-1.5 text-xs font-medium bg-[#5b7fff] text-white rounded-full">
                        Popular
                      </span>
                    </div>
                  )}

                  <div className="mb-6">
                    <h3 className="text-xl font-semibold mb-1">{plan.name}</h3>
                    <p className="text-sm text-[#71717a]">{plan.description}</p>
                  </div>

                  <div className="mb-8">
                    <div className="flex items-baseline gap-1">
                      <span className="text-5xl font-semibold tracking-tight tabular-nums">{plan.price}</span>
                      <span className="text-[#71717a]">{plan.period}</span>
                    </div>
                    <p className="text-xs text-[#5b7fff] mt-2 h-4">
                      {plan.billingNote || '\u00A0'}
                    </p>
                  </div>

                  <div className="flex-1">
                    <p className="text-xs text-[#71717a] uppercase tracking-wider mb-4">
                      {plan.includes}
                    </p>
                    <ul className="space-y-4">
                      {plan.features.map((feature, j) => (
                        <li key={j} className="flex items-start gap-3">
                          <div className={`mt-0.5 w-5 h-5 rounded-full flex items-center justify-center shrink-0 ${
                            plan.featured ? 'bg-[#5b7fff]/20' : 'bg-[#27272a]'
                          }`}>
                            <Check className={`w-3 h-3 ${plan.featured ? 'text-[#5b7fff]' : 'text-[#71717a]'}`} />
                          </div>
                          <span className="text-sm text-[#a1a1aa]">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <a
                    href="#download"
                    className={`block w-full py-4 rounded-xl text-center text-sm font-medium transition-all duration-300 mt-10 ${
                      plan.featured
                        ? 'bg-[#5b7fff] text-white hover:bg-[#4a6eef]'
                        : 'bg-[#18181b] text-[#f0f0f5] hover:bg-[#232332] border border-[#27272a]'
                    }`}
                  >
                    {plan.cta}
                  </a>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Download CTA */}
      <section id="download" className="py-32 lg:py-48 px-6 lg:px-12">
        <motion.div
          className="max-w-3xl mx-auto text-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeIn}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl lg:text-6xl font-semibold tracking-[-0.02em] mb-8">
            Ready to start?
          </h2>
          <p className="text-lg text-[#a1a1aa] mb-14">
            Download TLDM for free.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="https://apps.apple.com"
              className="group inline-flex items-center gap-4 h-16 px-8 bg-[#5b7fff] hover:bg-[#4a6eef] text-white rounded-2xl transition-all duration-300"
            >
              <svg className="w-7 h-7" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
              </svg>
              <div className="text-left">
                <p className="text-[10px] text-white/70 uppercase tracking-wide">Download on the</p>
                <p className="font-semibold">App Store</p>
              </div>
            </a>
            <a
              href="https://play.google.com"
              className="group inline-flex items-center gap-4 h-16 px-8 bg-[#18181b] border border-[#27272a] hover:border-[#3f3f46] rounded-2xl transition-all duration-300"
            >
              <svg className="w-7 h-7" viewBox="0 0 24 24" fill="currentColor">
                <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z"/>
              </svg>
              <div className="text-left">
                <p className="text-[10px] text-[#71717a] uppercase tracking-wide">Get it on</p>
                <p className="font-semibold">Google Play</p>
              </div>
            </a>
          </div>
        </motion.div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 lg:px-12 border-t border-[#27272a]">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <span className="text-sm font-medium">TLDM</span>

          <div className="flex items-center gap-8 text-sm text-[#a1a1aa]">
            <a href="/privacy" className="hover:text-[#f0f0f5] transition-colors duration-300">Privacy</a>
            <a href="/terms" className="hover:text-[#f0f0f5] transition-colors duration-300">Terms</a>
            <a href="mailto:support@tldm.app" className="hover:text-[#f0f0f5] transition-colors duration-300">Contact</a>
          </div>

          <p className="text-sm text-[#71717a]">
            © {new Date().getFullYear()}
          </p>
        </div>
      </footer>
    </div>
  )
}
