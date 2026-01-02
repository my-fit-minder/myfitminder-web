'use client'

import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'

export default function Navbar() {
  const pathname = usePathname()

  return (
    <nav className="bg-background-card border-b border-background-card/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="flex items-center space-x-3">
            <Image
              src="/AppLogo.png"
              alt="MyFitMinder Logo"
              width={40}
              height={40}
              className="rounded-lg"
            />
            <span className="text-2xl font-bold text-primary-teal">MyFitMinder</span>
          </Link>
          
          <div className="flex items-center space-x-6">
            <Link
              href="/"
              className={`text-sm font-medium transition-colors ${
                pathname === '/'
                  ? 'text-primary-teal'
                  : 'text-text-secondary hover:text-text-primary'
              }`}
            >
              How It Works
            </Link>
            <Link
              href="/privacy"
              className={`text-sm font-medium transition-colors ${
                pathname === '/privacy'
                  ? 'text-primary-teal'
                  : 'text-text-secondary hover:text-text-primary'
              }`}
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms"
              className={`text-sm font-medium transition-colors ${
                pathname === '/terms'
                  ? 'text-primary-teal'
                  : 'text-text-secondary hover:text-text-primary'
              }`}
            >
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </nav>
  )
}

