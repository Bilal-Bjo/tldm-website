'use client'

import { ArrowLeft, Mic } from 'lucide-react'
import Link from 'next/link'

export default function Terms() {
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
          <h1 className="text-4xl font-bold mb-4">Terms of Service</h1>
          <p className="text-white/40 mb-12">Last updated: December 2024</p>

          <div className="prose prose-invert max-w-none space-y-8">
            <section>
              <h2 className="text-2xl font-semibold mb-4 text-white">1. Agreement to Terms</h2>
              <p className="text-white/60 leading-relaxed">
                By accessing or using TLDM ("the Service"), you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use the Service.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-white">2. Description of Service</h2>
              <p className="text-white/60 leading-relaxed">
                TLDM is an AI-powered meeting assistant that provides real-time transcription, summaries, and action item extraction for your meetings. The Service is available as a desktop application (macOS and Windows) and mobile application (iOS and Android).
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-white">3. User Accounts</h2>
              <p className="text-white/60 leading-relaxed mb-4">
                To use certain features of the Service, you must create an account. You agree to:
              </p>
              <ul className="list-disc list-inside text-white/60 space-y-2">
                <li>Provide accurate and complete information</li>
                <li>Maintain the security of your account credentials</li>
                <li>Notify us immediately of any unauthorized access</li>
                <li>Accept responsibility for all activities under your account</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-white">4. Subscriptions and Payments</h2>

              <h3 className="text-lg font-medium mb-2 text-white/90">Free Tier</h3>
              <p className="text-white/60 leading-relaxed mb-4">
                The free tier includes 3 meetings per month with a maximum of 10 minutes per meeting.
              </p>

              <h3 className="text-lg font-medium mb-2 text-white/90">Pro Subscription</h3>
              <p className="text-white/60 leading-relaxed mb-4">
                Pro subscriptions are billed monthly at $10/month and include 8 hours of meeting time. Subscriptions automatically renew unless cancelled before the renewal date.
              </p>

              <h3 className="text-lg font-medium mb-2 text-white/90">Lifetime (BYOK)</h3>
              <p className="text-white/60 leading-relaxed">
                The Lifetime plan is a one-time purchase of $50 and requires your own OpenAI API key. This gives you unlimited access to all features on all platforms. You are responsible for any API costs incurred through your OpenAI account.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-white">5. Acceptable Use</h2>
              <p className="text-white/60 leading-relaxed mb-4">
                You agree not to:
              </p>
              <ul className="list-disc list-inside text-white/60 space-y-2">
                <li>Record conversations without proper consent from all participants</li>
                <li>Use the Service for any illegal purpose</li>
                <li>Attempt to reverse engineer or hack the Service</li>
                <li>Share your account credentials with others</li>
                <li>Use the Service to harass, abuse, or harm others</li>
                <li>Upload content that infringes on intellectual property rights</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-white">6. Recording Consent</h2>
              <p className="text-white/60 leading-relaxed">
                You are solely responsible for obtaining appropriate consent from all participants before recording any meeting or conversation. Laws regarding recording consent vary by jurisdiction. It is your responsibility to understand and comply with all applicable laws.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-white">7. Intellectual Property</h2>
              <p className="text-white/60 leading-relaxed">
                The Service and its original content, features, and functionality are owned by TLDM and are protected by international copyright, trademark, and other intellectual property laws. Your meeting content remains your property.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-white">8. Disclaimer of Warranties</h2>
              <p className="text-white/60 leading-relaxed">
                The Service is provided "as is" and "as available" without warranties of any kind, either express or implied. We do not guarantee that the Service will be uninterrupted, secure, or error-free. Transcription accuracy may vary.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-white">9. Limitation of Liability</h2>
              <p className="text-white/60 leading-relaxed">
                To the maximum extent permitted by law, TLDM shall not be liable for any indirect, incidental, special, consequential, or punitive damages, or any loss of profits or revenues, whether incurred directly or indirectly.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-white">10. Cancellation and Refunds</h2>
              <p className="text-white/60 leading-relaxed mb-4">
                You may cancel your subscription at any time through your account settings or device settings:
              </p>
              <ul className="list-disc list-inside text-white/60 space-y-2">
                <li>iOS: Settings → Apple ID → Subscriptions</li>
                <li>Android: Play Store → Subscriptions</li>
              </ul>
              <p className="text-white/60 leading-relaxed mt-4">
                Cancellations take effect at the end of the current billing period. Refunds are handled according to Apple App Store and Google Play Store policies.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-white">11. Termination</h2>
              <p className="text-white/60 leading-relaxed">
                We may terminate or suspend your account and access to the Service immediately, without prior notice, for conduct that we believe violates these Terms or is harmful to other users, us, or third parties.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-white">12. Your Data Rights</h2>
              <p className="text-white/60 leading-relaxed mb-4">
                We respect your rights over your personal data. In accordance with applicable data protection laws including GDPR, you have the right to:
              </p>
              <ul className="list-disc list-inside text-white/60 space-y-2">
                <li><strong className="text-white/80">Access:</strong> Request a copy of all data we hold about you</li>
                <li><strong className="text-white/80">Export:</strong> Download your data in a portable format (JSON)</li>
                <li><strong className="text-white/80">Delete:</strong> Permanently delete your account and all associated data</li>
                <li><strong className="text-white/80">Correct:</strong> Update or correct inaccurate information</li>
              </ul>
              <p className="text-white/60 leading-relaxed mt-4">
                You can exercise these rights directly in the app under Settings &gt; Account &gt; Data & Privacy, or by contacting{' '}
                <a href="mailto:privacy@tldm.app" className="text-[#5b7fff] hover:underline">privacy@tldm.app</a>.
                For full details, see our <Link href="/privacy" className="text-[#5b7fff] hover:underline">Privacy Policy</Link>.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-white">13. Account Deletion</h2>
              <p className="text-white/60 leading-relaxed mb-4">
                You may delete your account at any time through the app settings. When you delete your account:
              </p>
              <ul className="list-disc list-inside text-white/60 space-y-2">
                <li>All your personal data will be permanently deleted within 30 days</li>
                <li>All your meetings, transcripts, summaries, and action items will be deleted</li>
                <li>Any active subscription will be cancelled (you may still need to cancel via App Store/Play Store)</li>
                <li>This action is irreversible</li>
              </ul>
              <p className="text-white/60 leading-relaxed mt-4">
                We recommend exporting your data before deleting your account if you wish to keep a copy.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-white">14. Changes to Terms</h2>
              <p className="text-white/60 leading-relaxed">
                We reserve the right to modify these Terms at any time. We will provide notice of significant changes by email or in-app notification at least 30 days before they take effect. Your continued use of the Service after changes constitutes acceptance of the new Terms.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-white">15. Governing Law</h2>
              <p className="text-white/60 leading-relaxed">
                These Terms shall be governed by and construed in accordance with the laws of the jurisdiction in which TLDM operates, without regard to its conflict of law provisions. If you are in the European Economic Area, you retain all rights granted by applicable EU consumer protection laws.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-white">16. Contact Us</h2>
              <p className="text-white/60 leading-relaxed mb-4">
                If you have any questions about these Terms, please contact us:
              </p>
              <ul className="list-disc list-inside text-white/60 space-y-2">
                <li><strong className="text-white/80">General Support:</strong> <a href="mailto:support@tldm.app" className="text-[#5b7fff] hover:underline">support@tldm.app</a></li>
                <li><strong className="text-white/80">Privacy & Data Requests:</strong> <a href="mailto:privacy@tldm.app" className="text-[#5b7fff] hover:underline">privacy@tldm.app</a></li>
              </ul>
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
              <Link href="/privacy" className="hover:text-white transition-colors">Privacy</Link>
              <Link href="/terms" className="text-white">Terms</Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
