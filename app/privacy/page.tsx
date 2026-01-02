export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-background-app">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-4xl font-bold mb-4 text-text-primary">Privacy Policy</h1>
        <p className="text-text-secondary mb-8">Last Updated: January 2025</p>

        <div className="space-y-8">
          <Section
            title="1. Information We Collect"
            content={
              <>
                <p className="mb-4">We collect only the information necessary to provide MyFitMinder's fitness commitment services, including:</p>
                <ul className="list-none space-y-2 ml-4">
                  <BulletPoint text="Account information such as your email address and authentication credentials" />
                  <BulletPoint text="Fitness goals you set within the app" />
                  <BulletPoint text="Workout and activity data from Apple HealthKit that you explicitly authorize" />
                  <BulletPoint text="Payment and transaction metadata related to commitments and penalties (payment details are processed by Stripe and never stored by us)" />
                </ul>
              </>
            }
          />

          <Section
            title="2. How We Use Your Information"
            content={
              <>
                <p className="mb-4">We use your information solely to operate and improve MyFitMinder, including to:</p>
                <ul className="list-none space-y-2 ml-4">
                  <BulletPoint text="Track your fitness goals and verify completion using authorized HealthKit data" />
                  <BulletPoint text="Calculate commitment outcomes, penalties, and refunds" />
                  <BulletPoint text="Process payments and manage your commitment balance" />
                  <BulletPoint text="Send important service-related notifications and updates" />
                </ul>
              </>
            }
          />

          <Section
            title="3. HealthKit Data"
            content={
              <>
                <p className="mb-4">
                  MyFitMinder integrates with Apple HealthKit to read workout and activity data only after you grant explicit permission. Health data is used exclusively to verify whether your fitness goals are met.
                </p>
                <p>
                  We do not use HealthKit data for advertising, analytics, or marketing purposes. You may revoke HealthKit access at any time through your device settings.
                </p>
              </>
            }
          />

          <Section
            title="4. Payments & Financial Data"
            content={
              <>
                <p className="mb-4">
                  MyFitMinder processes payments securely through Stripe, a third-party payment processor. We do not store or have access to your full credit or debit card details.
                </p>
                <p className="mb-4">
                  Funds committed in the app are used only for goal-based penalties or refunds according to your selected commitments and our stated policies.
                </p>
                <p>
                  MyFitMinder is not responsible for any fees charged by Stripe, payment providers, banks, or card issuers, including but not limited to transaction fees, payout fees, currency conversion fees, or foreign exchange differences. Any such fees are determined and applied by the respective financial institutions.
                </p>
              </>
            }
          />

          <Section
            title="5. Data Security"
            content={
              <p>
                We use industry-standard security measures to protect your information. All data is encrypted in transit and at rest. Access to personal and health-related data is restricted to authorized systems only.
              </p>
            }
          />

          <Section
            title="6. Data Sharing"
            content={
              <>
                <p className="mb-4">
                  We do not sell, rent, or share your personal or health information with advertisers or data brokers.
                </p>
                <p>
                  We share limited data only with trusted service providers (such as Stripe for payment processing) who are contractually required to protect your information and use it only to provide services to MyFitMinder.
                </p>
              </>
            }
          />

          <Section
            title="7. Your Rights & Choices"
            content={
              <>
                <p className="mb-4">You have full control over your data. You may:</p>
                <ul className="list-none space-y-2 ml-4">
                  <BulletPoint text="Access and update your account information" />
                  <BulletPoint text="Revoke HealthKit permissions at any time" />
                  <BulletPoint text="Request deletion of your account and associated data" />
                  <BulletPoint text="Request a copy of your personal data" />
                </ul>
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
            title="9. Contact Us"
            content={
              <>
                <p className="mb-4">
                  If you have any questions or concerns about this Privacy Policy or your data, please contact us at singh99amitoj@gmail.com.
                </p>
                <p>
                  By providing your contact information, you agree that we may use it to contact you regarding your account, service updates, or other matters related to MyFitMinder.
                </p>
              </>
            }
          />

          <Section
            title="10. GDPR & CCPA Compliance"
            content={
              <>
                <p className="mb-4">
                  If you are located in the European Economic Area (EEA), United Kingdom, or California, you have additional rights under applicable data protection laws.
                </p>
                <ul className="list-none space-y-2 ml-4 mb-4">
                  <BulletPoint text="Right to access your personal data" />
                  <BulletPoint text="Right to correct inaccurate data" />
                  <BulletPoint text="Right to request deletion of your data" />
                  <BulletPoint text="Right to data portability" />
                  <BulletPoint text="Right to object to certain data processing" />
                </ul>
                <p>
                  California residents have the right to know what personal data is collected and to request deletion. We do not sell personal data.
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

function BulletPoint({ text }: { text: string }) {
  return (
    <li className="flex items-start">
      <span className="text-primary-teal mr-2">•</span>
      <span>{text}</span>
    </li>
  )
}

