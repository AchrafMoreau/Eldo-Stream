"use client"

import { useState, useEffect, useCallback, useTransition } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Menu } from "lucide-react"
import { cn } from "@/lib/utils"
import { ModeToggle } from "./ui/toggel-mode"
import Image from "next/image"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "./ui/dropdown-menu"
import LoadingOverlay from "./loading"
import { usePathname } from "@/i18n/navigation"
import { useRouter } from "next/navigation"
import { useLocale } from "next-intl"
import { useTranslations } from "use-intl"

// Throttle function to limit how often a function can be called
function throttle(func: Function, delay: number) {
  let lastCall = 0
  return (...args: any[]) => {
    const now = Date.now()
    if (now - lastCall >= delay) {
      lastCall = now
      return func(...args)
    }
  }
}
// Utility function for smooth scrolling to sections
export function smoothScrollToSection(sectionId: string) {
  const element = document.getElementById(sectionId)
  if (element) {
    const offsetTop = element.getBoundingClientRect().top + window.pageYOffset
    window.scrollTo({
      top: offsetTop - 80, // Account for navbar height
      behavior: "smooth",
    })
  }
}


export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState("home")
  const [scrollProgress, setScrollProgress] = useState(0)

  // Smooth scroll to section with improved behavior
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

  // Handle scroll events with throttling for better performance
  useEffect(() => {
    const handleScroll = throttle(() => {
      // Calculate scroll progress for potential visual effects
      const scrollY = window.scrollY
      const docHeight = document.body.scrollHeight - window.innerHeight
      const progress = scrollY / docHeight
      setScrollProgress(progress)

      // Change navbar background with a threshold
      setIsScrolled(scrollY > 10)

      // Update active section based on scroll position with improved detection
      const sections = ["home", "about", "plans", "how-to-use", "why-us", "testimonials"]

      // Find the section that is currently most visible in the viewport
      let currentSection = "home"
      let maxVisibility = 0

      sections.forEach((sectionId) => {
        const element = document.getElementById(sectionId)
        if (element) {
          const rect = element.getBoundingClientRect()
          const viewportHeight = window.innerHeight

          // Calculate how much of the section is visible in the viewport
          const visibleHeight = Math.min(rect.bottom, viewportHeight) - Math.max(rect.top, 0)
          const visibleRatio = visibleHeight / element.offsetHeight

          if (visibleRatio > maxVisibility && visibleRatio > 0.2) {
            maxVisibility = visibleRatio
            currentSection = sectionId
          }
        }
      })

      if (currentSection !== activeSection) {
        setActiveSection(currentSection)
      }
    }, 100) // Throttle to run at most every 100ms

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [activeSection])



  const navItems = [
    { label: "Home", id: "home" },
    { label: "About", id: "about" },
    { label: "Plans", id: "plans" },
    { label: "How It Works", id: "how-to-use" },
    { label: "Why Us", id: "why-us" },
    { label: "Testimonials", id: "testimonials" },
  ]

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
        isScrolled
          ? "bg-background/95 backdrop-blur-md border-b border-primary/10 shadow-sm py-2"
          : "bg-transparent py-4",
      )}
    >
      <div className="container px-4 md:px-6 mx-auto">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2 transition-transform duration-300 hover:scale-105">
            <Image src="/logo.png" alt="Logo" width={60} height={60} className="rounded-full" />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-1">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={cn(
                  "px-3 py-2 rounded-md text-sm font-medium transition-all duration-300 relative",
                  activeSection === item.id
                    ? "text-primary"
                    : isScrolled
                      ? "text-foreground hover:text-primary hover:bg-primary/5"
                      : "text-white/90 hover:text-white hover:bg-white/10",
                )}
              >
                {item.label}
                {activeSection === item.id && (
                  <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1/2 h-0.5 bg-primary rounded-full" />
                )}
              </button>
            ))}
          </nav>



          {/* Mobile Menu Button */}
          <div className="flex items-center gap-2">
            <Button
              size="sm"
              className="md:block bg-gradient-to-r from-primary to-primary/30 text-white dark:text-primary-foreground hover:bg-primary/90 transition-all duration-300 hover:shadow-md hover:scale-105"
            >
              Get Started
            </Button>
            <LanguageSelector />
            <ModeToggle />

            <Sheet>
              <SheetTrigger asChild>
                <Button
                  variant="ghost"
                  size="icon"
                  className="md:hidden transition-colors duration-300 hover:bg-white/10"
                  aria-label="Toggle Menu"
                >
                  <Menu
                    className={cn(
                      "h-6 w-6 transition-colors duration-300",
                      isScrolled ? "text-foreground" : "text-white",
                    )}
                  />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[80%] sm:w-[350px] pt-12">
                <div className="flex flex-col space-y-4">
                  {navItems.map((item) => (
                    <button
                      key={item.id}
                      onClick={() => scrollToSection(item.id)}
                      className={cn(
                        "flex items-center py-2 px-4 rounded-md text-left text-lg font-medium transition-all duration-300",
                        activeSection === item.id ? "bg-primary/10 text-primary" : "hover:bg-muted",
                      )}
                    >
                      {item.label}
                      {activeSection === item.id && <span className="ml-auto w-1.5 h-1.5 rounded-full bg-primary" />}
                    </button>
                  ))}
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  )
}



function LanguageSelector() {
  const [isPending, startTransition] = useTransition();
  const router = useRouter();
  const pathname = usePathname();
  const [loadingProgress, setLoadingProgress] = useState(0)
  const localeActive = useLocale();
  const t = useTranslations();

  // const onSelectChange = (nextLocale: string) => {
  //   startTransition(() => {
  //     const newPathname = pathname.replace(/^\/(en|fr|es|de|it)/, '');
  //     router.replace(`/${nextLocale}${newPathname}`);
  //   });
  // };
  const onSelectChange = (nextLocale: string) => {
    setLoadingProgress(0)
    startTransition(() => {
      router.replace(`/${nextLocale}${pathname}`);
      setLoadingProgress(50)
    });
    setLoadingProgress(100)

  };

  const getFlag = () => {
    switch(localeActive) {
      case "fr": return "/fr.svg";
      case "es": return "/es.svg";
      case "de": return "/de.svg";
      case "it": return "/it.svg";
      default: return "/gb.svg";
    }
  };

  return isPending ? <LoadingOverlay progress={loadingProgress} language={localeActive} /> : (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" className="bg-background border-transparent hover:bg-primary" size="icon">
          <Image
            src={getFlag()}
            alt="Language"
            width={20}
            height={20}
          />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" >
        <DropdownMenuItem onClick={() => onSelectChange("en")} className="hover:bg-primary">
          <Image src="/gb.svg" width={20} height={20} alt="English" className="mr-2" />
          {t("english")}
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => onSelectChange("es")}>
          <Image src="/es.svg" width={20} height={20} alt="Spanish" className="mr-2" />
          {t("spanish")}
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => onSelectChange("fr")}>
          <Image src="/fr.svg" width={20} height={20} alt="French" className="mr-2" />
          {t("french")}
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => onSelectChange("de")}>
          <Image src="/de.svg" width={20} height={20} alt="German" className="mr-2" />
          {t("dutch")}
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => onSelectChange("it")}>
          <Image src="/it.svg" width={20} height={20} alt="Italian" className="mr-2" />
          {t("italy")}
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}