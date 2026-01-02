import Image from 'next/image'

export default function Home() {
  return (
    <div className="min-h-screen bg-background-app">
      {/* Hero Section */}
      <div className="bg-background-card border-b border-background-card/50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center">
            <div className="flex justify-center mb-8">
              <div className="relative w-64 h-64 md:w-80 md:h-80">
                <Image
                  src="/hero-logo.png"
                  alt="MyFitMinder - Fitness Accountability"
                  fill
                  className="rounded-2xl object-contain"
                  priority
                />
              </div>
            </div>
            <h1 className="text-6xl md:text-7xl font-bold mb-6 text-text-primary">
              MyFitMinder
            </h1>
            <p className="text-2xl md:text-3xl text-text-secondary mb-4 max-w-3xl mx-auto">
              Stay Accountable to Your Fitness Goals
            </p>
            <p className="text-lg text-text-secondary mb-10 max-w-2xl mx-auto">
              Set goals, track workouts automatically, and stay motivated with financial commitment.
            </p>
            <div className="flex justify-center">
              <a
                href="https://apps.apple.com/app/myfitminder"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-3 bg-primary-teal hover:bg-primary-tealDark text-white font-semibold px-8 py-4 rounded-xl transition-colors duration-200 shadow-lg hover:shadow-xl"
              >
                <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.05 20.28c-.98.95-2.05.88-3.08.4-1.09-.5-2.08-.48-3.24 0-1.44.62-2.2.44-3.06-.4C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.54 4.09l.01-.01zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z"/>
                </svg>
                <span className="text-lg">Download on the App Store</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* How It Works Section */}
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold mb-4 text-text-primary">
            How It Works
          </h2>
          <p className="text-xl text-text-secondary max-w-2xl mx-auto">
            MyFitMinder helps you stay accountable to your fitness goals through financial commitment and automatic tracking.
          </p>
        </div>

        {/* Steps */}
        <div className="space-y-8 mb-16">
          <StepCard
            number={1}
            title="Set Your Fitness Goal"
            description="Create a fitness goal by setting your target workout duration per day, the number of days per week, and the duration of your commitment. Add money to your commitment balance to get started."
          />
          
          <StepCard
            number={2}
            title="Connect Apple HealthKit"
            description="Grant MyFitMinder access to your Apple HealthKit data. We'll automatically track your workouts and verify that you're meeting your daily goals."
          />
          
          <StepCard
            number={3}
            title="Track Your Progress"
            description="Your workouts are automatically synced from HealthKit. View your progress on the dashboard and see which days you've met your goals."
          />
          
          <StepCard
            number={4}
            title="Weekly Evaluation"
            description="Every Sunday at 11:59 PM UTC, we calculate penalties for any days you didn't meet your goal. Penalties are automatically deducted from your commitment balance."
          />
          
          <StepCard
            number={5}
            title="Stay Accountable"
            description="If you complete all your goals, you can request a payout of your remaining balance. If you miss goals, penalties help keep you motivated to stay on track."
          />
        </div>

        {/* Divider */}
        <div className="border-t border-background-card mb-12"></div>

        {/* Key Features */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold mb-8 text-text-primary">Key Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <FeatureItem
              icon="⏱️"
              text="Automatic workout tracking from HealthKit"
            />
            <FeatureItem
              icon="💰"
              text="Flexible commitment amounts"
            />
            <FeatureItem
              icon="📊"
              text="Real-time progress monitoring"
            />
            <FeatureItem
              icon="🔔"
              text="Daily fitness reminders"
            />
            <FeatureItem
              icon="🔒"
              text="Secure payment processing"
            />
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-background-card rounded-2xl p-8 text-center">
          <h2 className="text-2xl font-bold mb-4 text-text-primary">
            Ready to Get Started?
          </h2>
          <p className="text-text-secondary mb-6">
            Download MyFitMinder from the App Store and start your fitness journey today.
          </p>
          <div className="flex justify-center">
            <a
              href="https://apps.apple.com/app/myfitminder"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-3 bg-primary-teal hover:bg-primary-tealDark text-white font-semibold px-8 py-4 rounded-xl transition-colors duration-200 shadow-lg hover:shadow-xl"
            >
              <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.05 20.28c-.98.95-2.05.88-3.08.4-1.09-.5-2.08-.48-3.24 0-1.44.62-2.2.44-3.06-.4C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.54 4.09l.01-.01zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z"/>
              </svg>
              <span className="text-lg">Download on the App Store</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

function StepCard({ number, title, description }: { number: number; title: string; description: string }) {
  return (
    <div className="bg-background-card rounded-xl p-6 flex items-start space-x-6">
      <div className="flex-shrink-0">
        <div className="w-12 h-12 rounded-full bg-primary-teal flex items-center justify-center">
          <span className="text-white font-bold text-lg">{number}</span>
        </div>
      </div>
      <div className="flex-1">
        <h3 className="text-xl font-semibold mb-2 text-text-primary">{title}</h3>
        <p className="text-text-secondary leading-relaxed">{description}</p>
      </div>
    </div>
  )
}

function FeatureItem({ icon, text }: { icon: string; text: string }) {
  return (
    <div className="flex items-center space-x-4">
      <span className="text-2xl">{icon}</span>
      <span className="text-text-secondary">{text}</span>
    </div>
  )
}

