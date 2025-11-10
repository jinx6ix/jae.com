import Link from "next/link"

export function Footer() {
  return (
    <footer className="bg-slate-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="font-bold text-orange-500 mb-4">Company</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="hover:text-orange-400">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-orange-400">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/blog" className="hover:text-orange-400">
                  Blog
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold text-orange-500 mb-4">Destinations</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/destinations/kenya" className="hover:text-orange-400">
                  Kenya
                </Link>
              </li>
              <li>
                <Link href="/destinations/tanzania" className="hover:text-orange-400">
                  Tanzania
                </Link>
              </li>
              <li>
                <Link href="/destinations/rwanda" className="hover:text-orange-400">
                  Rwanda
                </Link>
              </li>
              <li>
                <Link href="/destinations/uganda" className="hover:text-orange-400">
                  Uganda
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold text-orange-500 mb-4">Tours</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/tours" className="hover:text-orange-400">
                  All Tours
                </Link>
              </li>
              <li>
                <Link href="/disabilities-accessible-tours" className="hover:text-orange-400">
                  Accessible Tours
                </Link>
              </li>
              <li>
                <Link href="/vehicle-hire" className="hover:text-orange-400">
                  Vehicle Hire
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold text-orange-500 mb-4">Contact</h3>
            <p className="mb-2">Email: info@jaetravel.co.ke</p>
            <p>Phone: +254-000-000-000</p>
          </div>
        </div>
        <div className="border-t border-slate-700 pt-8 text-center">
          <p>&copy; 2025 Jae Travel Expeditions. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
