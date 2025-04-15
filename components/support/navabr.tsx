"use client"
import { useState, useEffect, useCallback, useTransition } from "react"
import { Link } from "@/i18n/navigation"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Menu } from "lucide-react"
import { cn } from "@/lib/utils"
import { ModeToggle } from "../ui/toggel-mode"
import Image from "next/image"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "../ui/dropdown-menu"
import LoadingOverlay from "../loading"
import { usePathname } from "@/i18n/navigation"
import { useRouter } from "next/navigation"
import { useLocale } from "next-intl"
import { useTranslations } from "use-intl"

// Throttle function to limit how often a function can be called
// Utility function for smooth scrolling to sections


export default function Navbar() {
  const [activeSection, setActiveSection] = useState("home")
  const pathname = usePathname()
  const t = useTranslations()
  const supportItems = [
    {
      id: "home",
      title: "Home",
      href: "/",
    },
    {
      id:"faqs",
      title: "FAQ",
      href: "/support/faqs",
    },
    {
      id:"installation-guide",
      title: "Installation Guide",
      href: "/support/installation-guide",
    },
    {
      id:"device-compatibility",
      title: "Device Compatibility",
      href: "/support/device-compatibility",
    },
    {
      id:"terms-of-service",
      title: "Terms of Service",
      href: "/support/terms-of-service",
    },
    {
      id:"privacy-policy",
      title: "Privacy Policy",
      href: "/support/privacy-policy",
    },
  ]

  useEffect(() => {
    setActiveSection(pathname || "home")
  },[pathname])

  return (
    <header
      className={cn(
        "transition-all duration-500 bg-background/95 backdrop-blur-md border-b border-primary/10 shadow-sm py-2"
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
            {supportItems.map((item) => (
                <Link
                    key={item.title}
                    href={item.href}
                    className={cn(
                        "px-3 py-2 rounded-md text-sm font-medium transition-all duration-300 relative text-white/90 hover:text-white hover:bg-white/10",
                        activeSection == item.href ? "text-primary" : "text-white/90 hover:text-white hover:bg-white/10"
                    )}
                >
                  {t(`${item.id}`)}
                    {activeSection === item.href && (
                    <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1/2 h-0.5 bg-primary rounded-full" />
                    )}
                </Link>
            ))}

            {/* <Link
                href="/"
                className={cn(
                  "px-3 py-2 rounded-md text-sm font-medium transition-all duration-300 relative text-white/90 hover:text-white hover:bg-white/10",
                )}
              >
                Home Page
            </Link> */}
          </nav>



          {/* Mobile Menu Button */}
          <div className="flex items-center gap-2">
            <Button
              size="sm"
              className="md:block bg-gradient-to-r from-primary to-primary/30 text-white dark:text-primary-foreground hover:bg-primary/90 transition-all duration-300 hover:shadow-md hover:scale-105"
            >
              {t("getStarted")}
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
                      "h-6 w-6 transition-colors duration-300 text-white",
                    )}
                  />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[80%] sm:w-[350px] pt-12">
                <div className="flex flex-col space-y-4">
                    {supportItems.map((item) => (
                        <Link
                            key={item.title}
                            href={item.href}
                            className={cn(
                                "px-3 py-2 rounded-md text-sm font-medium transition-all duration-300 relative text-white/90 hover:text-white hover:bg-white/10",
                                activeSection == item.href ? "bg-primary/10 text-primary" : "hover:bg-muted",
                            )}
                        >
                          {t(`${item.id}`)}
                            {activeSection == item.href && <span className="ml-auto w-1.5 h-1.5 rounded-full bg-primary" />}
                        </Link>
                    ))}

                    {/* <Link
                        href="/"
                        className={cn(
                        "px-3 py-2 rounded-md text-sm font-medium transition-all duration-300 relative text-white/90 hover:text-white hover:bg-white/10",
                        )}
                    >
                        Home Page
                    </Link> */}
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