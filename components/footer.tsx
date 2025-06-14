'use client'
import { Link } from "@/i18n/navigation"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Facebook, Twitter, Instagram, Youtube, Mail, Phone, MapPin } from "lucide-react"
import Image from "next/image"
import { useCallback } from "react"
import { useTranslations } from "next-intl"

export default function Footer() {
  const currentYear = new Date().getFullYear()
  const t = useTranslations()
  const navitems = [
    { id: "home", name: "Home" },
    { id: "about", name: "About Us" },
    { id: "plans", name: "Pricing Plans" },
    { id: "how-to-use", name: "How It Works" },
    { id: "testimonials", name: "Testimonials" },
    { label: "Why Us", id: "why-us" },
  ]
  const supportItems = [
    { id: "support", name: "Support" },
    { id: "device-compatibility", name: "Device Compatibility" },
    { id: "installation-guide", name: "Installation Guide" },
    { id: "faqs", name: "FAQ" },
    { id: "terms-of-service", name: "Terms of Service" },
    { id: "privacy-policy", name: "Privacy Policy" },
  ]
  const scrollToSection = useCallback((sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      const offsetTop = element.getBoundingClientRect().top + window.pageYOffset
      window.scrollTo({
        top: offsetTop - 80, // Account for navbar height
        behavior: "smooth",
      })
    }
  }, [])

  return (
    <footer className="w-full bg-secondary/5 border-t border-primary/10 px-10 md:px-20">
      <div className="container px-4 md:px-6 pt-12 pb-5 md:pt-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-1">
            <Link href="/" className="flex items-center space-x-2 mb-4">
              <Image src="/logo.png" alt="Logo" width={100} height={100} className="rounded-full" />
            </Link>
            <p className="text-muted-foreground mb-4">
              Your gateway to unlimited entertainment with thousands of channels and on-demand content.
            </p>
            <div className="flex space-x-3">
              <Link href="https://www.facebook.com/profile.php?id=61577166609291" aria-label="Facebook" className="text-muted-foreground hover:text-primary">
                <Facebook className="h-5 w-5" />
              </Link>
              <Link href="#" aria-label="Twitter" className="text-muted-foreground hover:text-primary">
                <Twitter className="h-5 w-5" />
              </Link>
              <Link href="#" aria-label="Instagram" className="text-muted-foreground hover:text-primary">
                <Instagram className="h-5 w-5" />
              </Link>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {navitems.map((item) => (
                <li key={item.id}>
                  <button  
                    className="text-muted-foreground hover:text-primary"
                    onClick={() => scrollToSection(item.id)}>
                      {t(`${item.id}`)}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Support</h3>
            <ul className="space-y-2">
              {supportItems.map((item) => (
                <li key={item.id}>
                  <Link href={item.id == 'support' ? `/${item.id}` : `/support/${item.id}`} className="text-muted-foreground hover:text-primary">
                    {t(`${item.id}`)}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-center">
                <Phone className="h-5 w-5 mr-2 text-primary flex-shrink-0" />
                <span className="text-muted-foreground">+34 604 29 49 74</span>
              </li>
              <li className="flex items-center">
                <Mail className="h-5 w-5 mr-2 text-primary flex-shrink-0" />
                <span className="text-muted-foreground">eldoiptv@gmail.com</span>
              </li>
            </ul>

            <div className="mt-6">
              <h4 className="text-sm font-medium mb-2">Subscribe to our newsletter</h4>
              <div className="flex gap-2">
                <Input
                  type="email"
                  placeholder="Your email"
                  className="max-w-[220px]"
                  aria-label="Email for newsletter"
                />
                <Button type="submit" size="sm" className="bg-primary text-primary-foreground hover:bg-primary/90">
                  Subscribe
                </Button>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-primary/10 mt-12 pt-6 flex flex-col md:flex-row justify-center items-center">
          <p className="text-sm text-muted-foreground">© {currentYear} ELDO IPTV. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
