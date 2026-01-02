export default function ContactUs() {
  return (
    <div className="min-h-screen bg-background-app">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-4xl font-bold mb-4 text-text-primary">
          Contact Us
        </h1>
        <p className="text-text-secondary mb-8">
          Have questions or need support? We'd love to hear from you.
        </p>

        <div className="bg-background-card rounded-xl p-8">
          <div className="space-y-6">
            <div>
              <h2 className="text-2xl font-semibold mb-4 text-text-primary">
                Get in Touch
              </h2>
              <p className="text-text-secondary mb-6">
                Reach out to us via email and we'll get back to you as soon as
                possible.
              </p>
            </div>

            <div className="flex items-center space-x-4">
              <span className="text-text-secondary">Email:</span>
              <a
                href="mailto:singh99amitoj@gmail.com"
                className="text-primary-teal hover:text-primary-tealDark font-medium text-lg transition-colors duration-200"
              >
                singh99amitoj@gmail.com
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
