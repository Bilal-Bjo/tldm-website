'use client'

import { ArrowLeft, Mic } from 'lucide-react'
import Link from 'next/link'

export default function Privacy() {
  return (
    <div className="min-h-screen bg-[#08080c] text-white">
      {/* Background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div
          className="absolute w-[800px] h-[800px] -top-[200px] -left-[200px] opacity-20"
          style={{
            background: 'radial-gradient(circle, rgba(91, 127, 255, 0.4) 0%, transparent 60%)',
            filter: 'blur(100px)',
          }}
        />
      </div>

      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50" style={{ backdropFilter: 'blur(20px)', background: 'rgba(8, 8, 12, 0.8)' }}>
        <div className="max-w-4xl mx-auto px-6">
          <div className="h-20 flex items-center justify-between">
            <Link href="/" className="flex items-center gap-3">
              <div
                className="w-10 h-10 rounded-xl flex items-center justify-center"
                style={{ background: 'linear-gradient(135deg, #5b7fff 0%, #3b5bdb 100%)' }}
              >
                <Mic className="w-5 h-5 text-white" />
              </div>
              <span className="font-bold text-lg">TLDM</span>
            </Link>
            <Link href="/" className="flex items-center gap-2 text-sm text-white/50 hover:text-white transition-colors">
              <ArrowLeft className="w-4 h-4" />
              Back to Home
            </Link>
          </div>
        </div>
      </nav>

      {/* Content */}
      <main className="relative pt-32 pb-20">
        <div className="max-w-4xl mx-auto px-6">
          <h1 className="text-4xl font-bold mb-4">Privacy Policy</h1>
          <p className="text-white/40 mb-12">Last updated: December 2024</p>

          <div className="prose prose-invert max-w-none space-y-8">
            <section>
              <h2 className="text-2xl font-semibold mb-4 text-white">1. Introduction</h2>
              <p className="text-white/60 leading-relaxed">
                TLDM ("we", "our", or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, and safeguard your information when you use our desktop and mobile applications.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-white">2. Information We Collect</h2>

              <h3 className="text-lg font-medium mb-2 text-white/90">Account Information</h3>
              <p className="text-white/60 leading-relaxed mb-4">
                When you create an account, we collect your email address and name for authentication purposes.
              </p>

              <h3 className="text-lg font-medium mb-2 text-white/90">Meeting Data</h3>
              <p className="text-white/60 leading-relaxed mb-4">
                We process audio recordings to generate transcriptions, summaries, and action items. Meeting data (transcripts, summaries, action items) is stored securely in our cloud infrastructure powered by Supabase.
              </p>

              <h3 className="text-lg font-medium mb-2 text-white/90">Usage Data</h3>
              <p className="text-white/60 leading-relaxed">
                We collect meeting counts and duration for subscription management and to provide you with usage statistics.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-white">3. How We Use Your Information</h2>
              <ul className="list-disc list-inside text-white/60 space-y-2">
                <li>To provide and maintain our service</li>
                <li>To process your meeting recordings and generate AI-powered insights</li>
                <li>To manage your subscription and account</li>
                <li>To communicate with you about service updates</li>
                <li>To improve our products and services</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-white">4. Third-Party Services</h2>
              <p className="text-white/60 leading-relaxed mb-4">
                We use OpenAI's API for transcription and AI analysis. When you use TLDM:
              </p>
              <ul className="list-disc list-inside text-white/60 space-y-2">
                <li><strong className="text-white/80">Desktop App:</strong> Audio is sent directly to OpenAI using your own API key. We never see or store your audio.</li>
                <li><strong className="text-white/80">Mobile App:</strong> Audio is processed through our servers using OpenAI's API. We handle this securely and do not retain raw audio after processing.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-white">5. Data Storage & Security</h2>
              <p className="text-white/60 leading-relaxed mb-4">
                We implement industry-standard security measures to protect your data:
              </p>
              <ul className="list-disc list-inside text-white/60 space-y-2">
                <li>All data is encrypted in transit using TLS</li>
                <li>Cloud data is encrypted at rest using Supabase's security infrastructure</li>
                <li>Your OpenAI API key (if used) is stored securely on your device only</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-white">6. Legal Basis for Processing (GDPR)</h2>
              <p className="text-white/60 leading-relaxed mb-4">
                If you are located in the European Economic Area (EEA), we process your personal data based on the following legal grounds:
              </p>
              <ul className="list-disc list-inside text-white/60 space-y-2">
                <li><strong className="text-white/80">Contract:</strong> Processing necessary to provide the TLDM service you requested</li>
                <li><strong className="text-white/80">Consent:</strong> Where you have given explicit consent for specific processing activities</li>
                <li><strong className="text-white/80">Legitimate Interests:</strong> To improve our services, prevent fraud, and ensure security</li>
                <li><strong className="text-white/80">Legal Obligation:</strong> To comply with applicable laws and regulations</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-white">7. Your Rights Under GDPR</h2>
              <p className="text-white/60 leading-relaxed mb-4">
                If you are located in the EEA, you have the following rights regarding your personal data. You can exercise these rights directly in the app under Settings &gt; Account &gt; Data & Privacy:
              </p>
              <ul className="list-disc list-inside text-white/60 space-y-2">
                <li><strong className="text-white/80">Right of Access:</strong> Request a copy of all personal data we hold about you</li>
                <li><strong className="text-white/80">Right to Rectification:</strong> Correct any inaccurate or incomplete personal data</li>
                <li><strong className="text-white/80">Right to Erasure:</strong> Request deletion of your account and all associated data</li>
                <li><strong className="text-white/80">Right to Data Portability:</strong> Export your data in a machine-readable format (JSON)</li>
                <li><strong className="text-white/80">Right to Restrict Processing:</strong> Request limitation of how we use your data</li>
                <li><strong className="text-white/80">Right to Object:</strong> Object to processing based on legitimate interests</li>
                <li><strong className="text-white/80">Right to Withdraw Consent:</strong> Withdraw consent at any time where processing is based on consent</li>
              </ul>
              <p className="text-white/60 leading-relaxed mt-4">
                To exercise any of these rights, use the in-app settings or contact us at{' '}
                <a href="mailto:privacy@tldm.app" className="text-[#5b7fff] hover:underline">privacy@tldm.app</a>.
                We will respond to your request within 30 days.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-white">8. How to Delete Your Account & Data</h2>
              <p className="text-white/60 leading-relaxed mb-4">
                You can delete your account and all associated data at any time:
              </p>
              <ul className="list-disc list-inside text-white/60 space-y-2">
                <li><strong className="text-white/80">In the App:</strong> Go to Settings &gt; Account &gt; Data & Privacy &gt; Delete Account</li>
                <li><strong className="text-white/80">Via Email:</strong> Send a request to <a href="mailto:privacy@tldm.app" className="text-[#5b7fff] hover:underline">privacy@tldm.app</a></li>
              </ul>
              <p className="text-white/60 leading-relaxed mt-4">
                When you delete your account, we will permanently delete all your personal data including your profile, meetings, transcripts, summaries, and action items within 30 days. Any active subscriptions will be cancelled automatically.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-white">9. How to Export Your Data</h2>
              <p className="text-white/60 leading-relaxed mb-4">
                You can download a copy of all your data at any time:
              </p>
              <ul className="list-disc list-inside text-white/60 space-y-2">
                <li><strong className="text-white/80">In the App:</strong> Go to Settings &gt; Account &gt; Data & Privacy &gt; Export My Data</li>
                <li><strong className="text-white/80">Via Email:</strong> Send a request to <a href="mailto:privacy@tldm.app" className="text-[#5b7fff] hover:underline">privacy@tldm.app</a></li>
              </ul>
              <p className="text-white/60 leading-relaxed mt-4">
                Your data export will include your profile information, all meetings with transcripts, summaries, action items, and usage history in JSON format.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-white">10. Data Retention</h2>
              <p className="text-white/60 leading-relaxed mb-4">
                We retain your data for as long as your account is active. Specifically:
              </p>
              <ul className="list-disc list-inside text-white/60 space-y-2">
                <li><strong className="text-white/80">Account Data:</strong> Retained until you delete your account</li>
                <li><strong className="text-white/80">Meeting Data:</strong> Retained until you delete individual meetings or your account</li>
                <li><strong className="text-white/80">Usage Data:</strong> Retained for subscription management and billing purposes</li>
                <li><strong className="text-white/80">After Deletion:</strong> All data is permanently deleted within 30 days</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-white">11. International Data Transfers</h2>
              <p className="text-white/60 leading-relaxed">
                Your data may be transferred to and processed in countries outside your country of residence, including the United States. We ensure appropriate safeguards are in place for such transfers, including Standard Contractual Clauses approved by the European Commission.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-white">12. Children's Privacy</h2>
              <p className="text-white/60 leading-relaxed">
                TLDM is not intended for children under 16 (or 13 in certain jurisdictions). We do not knowingly collect personal information from children. If you believe we have collected data from a child, please contact us immediately.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-white">13. Changes to This Policy</h2>
              <p className="text-white/60 leading-relaxed">
                We may update this Privacy Policy from time to time. We will notify you of significant changes by email or in-app notification at least 30 days before they take effect. Continued use of the service after changes constitutes acceptance.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-white">14. Contact Us & Data Protection Officer</h2>
              <p className="text-white/60 leading-relaxed mb-4">
                For privacy-related inquiries or to exercise your rights:
              </p>
              <ul className="list-disc list-inside text-white/60 space-y-2">
                <li><strong className="text-white/80">General Support:</strong> <a href="mailto:support@tldm.app" className="text-[#5b7fff] hover:underline">support@tldm.app</a></li>
                <li><strong className="text-white/80">Privacy Requests:</strong> <a href="mailto:privacy@tldm.app" className="text-[#5b7fff] hover:underline">privacy@tldm.app</a></li>
              </ul>
              <p className="text-white/60 leading-relaxed mt-4">
                If you are in the EEA and believe your data protection rights have been violated, you have the right to lodge a complaint with your local Data Protection Authority.
              </p>
            </section>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="relative py-12 border-t border-white/5">
        <div className="max-w-4xl mx-auto px-6">
          <div className="flex items-center justify-between">
            <p className="text-sm text-white/30">
              © {new Date().getFullYear()} TLDM. All rights reserved.
            </p>
            <div className="flex items-center gap-6 text-sm text-white/40">
              <Link href="/privacy" className="text-white">Privacy</Link>
              <Link href="/terms" className="hover:text-white transition-colors">Terms</Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
