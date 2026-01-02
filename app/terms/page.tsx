export default function TermsOfService() {
  return (
    <div className="min-h-screen bg-background-app">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-4xl font-bold mb-4 text-text-primary">Terms of Service</h1>
        <p className="text-text-secondary mb-8">Last Updated: January 2025</p>

        <div className="space-y-8">
          <Section
            title="1. Acceptance of Terms"
            content={
              <p>
                By accessing or using the MyFitMinder application ("App"), you agree to be bound by these Terms of Service ("Terms"). If you do not agree to these Terms, you may not use the App.
              </p>
            }
          />

          <Section
            title="2. Eligibility"
            content={
              <p>
                MyFitMinder is available to users of all ages. By using the App, you represent and warrant that you are legally capable of entering into a binding agreement, or that you have obtained appropriate parental or guardian consent if required by applicable law.
              </p>
            }
          />

          <Section
            title="3. Fitness Commitments & Health Disclaimer"
            content={
              <>
                <p className="mb-4">
                  MyFitMinder is a fitness accountability tool designed to help users stay consistent with their workout goals. The App does not provide medical advice, fitness coaching, or health guarantees.
                </p>
                <p>
                  You are solely responsible for determining whether participating in fitness activities is safe for you. Always consult a qualified healthcare professional before beginning any exercise program.
                </p>
              </>
            }
          />

          <Section
            title="4. Payments, Commitments & Fees"
            content={
              <>
                <p className="mb-4">
                  MyFitMinder allows users to add funds as a commitment balance for the purpose of participating in goal-based fitness commitments.
                </p>
                <p className="mb-4">
                  These commitment funds are not a general-purpose wallet, bank account, or stored-value account, and can only be used within the App according to your selected fitness goals.
                </p>
                <p className="mb-4">
                  All payments, deposits, and payouts are processed securely through Stripe, a third-party payment processor. MyFitMinder does not store or have access to your full payment card or bank details.
                </p>
                <p className="mb-4">
                  MyFitMinder is not responsible for any fees charged by Stripe, payment providers, banks, or card issuers. This includes, but is not limited to, transaction fees, payout fees, currency conversion fees, foreign exchange differences, or payment delays.
                </p>
                <p>
                  All currency conversions are handled by Stripe or your financial institution. The final amount deposited or received may vary based on applicable exchange rates and fees.
                </p>
              </>
            }
          />

          <Section
            title="5. Subscriptions & App Fees"
            content={
              <>
                <p className="mb-4">
                  MyFitMinder may offer paid features or subscription plans. Pricing, billing frequency, and features will be clearly disclosed at the time of purchase.
                </p>
                <p>
                  Subscriptions are billed through Apple's In-App Purchase system where applicable and are subject to Apple's terms and policies.
                </p>
              </>
            }
          />

          <Section
            title="6. Refunds & Cancellation"
            content={
              <>
                <p className="mb-4">
                  Refunds are only available for deposits that have not been used for penalties, and are subject to our refund policy.
                </p>
                <p>
                  Refunds for App Store purchases are handled by Apple in accordance with their refund policies. Commitment funds used for penalties are non-refundable once applied.
                </p>
              </>
            }
          />

          <Section
            title="7. Data & HealthKit Usage"
            content={
              <>
                <p className="mb-4">
                  MyFitMinder integrates with Apple HealthKit to verify workout completion. We only access data that you explicitly authorize and use it solely for goal verification.
                </p>
                <p>
                  Health data is never sold, used for advertising, or shared with third parties except as required to provide the service.
                </p>
              </>
            }
          />

          <Section
            title="8. Data Retention"
            content={
              <p>
                We retain your information only as long as necessary to provide the service or comply with legal obligations. When you delete your account, your personal and health-related data is permanently removed within a reasonable timeframe.
              </p>
            }
          />

          <Section
            title="9. Account Termination"
            content={
              <p>
                You may delete your account at any time. MyFitMinder reserves the right to suspend or terminate accounts that violate these Terms, abuse the system, or engage in fraudulent activity.
              </p>
            }
          />

          <Section
            title="10. Limitation of Liability"
            content={
              <p>
                To the maximum extent permitted by law, MyFitMinder shall not be liable for any indirect, incidental, consequential, or special damages, including loss of funds, data, or fitness outcomes.
              </p>
            }
          />

          <Section
            title="11. Changes to Terms"
            content={
              <p>
                We may update these Terms from time to time. Continued use of the App after changes are posted constitutes acceptance of the updated Terms.
              </p>
            }
          />

          <Section
            title="12. Contact Us"
            content={
              <>
                <p className="mb-4">
                  If you have any questions about these Terms, please contact us at singh99amitoj@gmail.com
                </p>
                <p>
                  By providing your contact information, you agree that we may use it to contact you regarding your account, service updates, or other matters related to MyFitMinder.
                </p>
              </>
            }
          />
        </div>
      </div>
    </div>
  )
}

function Section({ title, content }: { title: string; content: React.ReactNode }) {
  return (
    <div className="space-y-4">
      <h2 className="text-2xl font-semibold text-text-primary">{title}</h2>
      <div className="text-text-secondary leading-relaxed">
        {content}
      </div>
    </div>
  )
}

