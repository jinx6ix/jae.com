import Link from "next/link"
import { Button } from "@/components/ui/button"

export function Navigation() {
  const navItems = [
    { label: "Home", href: "/" },
    { label: "Tours", href: "/tours" },
    { label: "Destinations", href: "/destinations" },
    { label: "Disability Tours", href: "/disabilities-accessible-tours" },
    { label: "Vehicle Hire", href: "/vehicle-hire" },
    { label: "Blog", href: "/blog" },
    { label: "About", href: "/about" },
    { label: "Contact", href: "/contact" },
  ]

  return (
    <nav className="bg-orange-500 text-white sticky top-0 z-50 shadow-md">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="font-bold text-2xl hover:text-orange-100 transition-colors">
            Jae Travel
          </Link>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center gap-1">
            {navItems.map((item) => (
              <Link key={item.href} href={item.href}>
                <Button variant="ghost" className="text-white hover:bg-orange-600 hover:text-white transition-colors">
                  {item.label}
                </Button>
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <details className="md:hidden group">
            <summary className="cursor-pointer list-none">
              <Button variant="ghost" className="text-white hover:bg-orange-600">
                ☰ Menu
              </Button>
            </summary>
            <div className="absolute right-0 top-16 bg-orange-600 w-48 rounded-lg shadow-lg">
              {navItems.map((item) => (
                <Link key={item.href} href={item.href} className="block">
                  <Button variant="ghost" className="w-full justify-start text-white hover:bg-orange-700 rounded-none">
                    {item.label}
                  </Button>
                </Link>
              ))}
            </div>
          </details>
        </div>
      </div>
    </nav>
  )
}
