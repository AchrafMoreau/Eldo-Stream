"use client"
import { Card, CardContent } from "@/components/ui/card"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Star } from "lucide-react"
import { cn } from "@/lib/utils"
import { useTranslations } from "next-intl"
import Title from "./ui/title"

type TestimonialProps = {
  quote: string
  author: {
    name: string
    role: string
    avatar?: string
  }
  rating: number
  className?: string
}

const testimonials: TestimonialProps[] = [
  {
    quote: "Bruh, this IPTV is LIT! 4K streams smoother than my barber's fade. Never buffering even when the whole squad is watching different channels!",
    author: {
      name: "DeShawn Taylor",
      role: "Streaming Enthusiast",
      avatar: "/sir.jpg"
    },
    rating: 5,
  },
  {
    quote: "¡Hostia tío! Esto es mejor que la fibra de Movistar. Tengo todos los canales del mundo y ni un corte. Los partidos en 4K son para llorar de alegría!",
    author: {
      name: "Alejandro Morales",
      role: "Football Fanatic",
      avatar: "/sir.jpg"
    },
    rating: 5,
  },
  {
    quote: "Mon reuf, cette IPTV c'est du lourd! J'ai tous les channels US, les bouquets BEIN en 4K, même les chaines adultes en full HD... bref, la totale!",
    author: {
      name: "Karim B.",
      role: "Tech Influencer",
      avatar: "/sir.jpg"
    },
    rating: 5,
  },
  {
    quote: "Alter, das ist die geilste IPTV ever! Kein Buffern bei Bundesliga in 4K, alle PPV Events dabei. Selbst Oma streamt jetzt türkische Soaps ohne Lag!",
    author: {
      name: "Jan Fischer",
      role: "IT Consultant",
      avatar: "/sir.jpg"
    },
    rating: 5,
  },
  {
    quote: "Mamma mia ragazzi! Finalmente un IPTV che non bufferizza! Ho tutti i canali Sky, DAZN e pure i regionali in Full HD. Che spettacolo dio boia!",
    author: {
      name: "Luca Romano",
      role: "Sports Blogger",
      avatar: "/sir.jpg"
    },
    rating: 5,
  },
  {
    quote: "This shit hits different! Got every NBA game, UFC PPV, and 24/7 cartoon channels for the kids. Support team actually answers tickets within minutes!",
    author: {
      name: "Tyrone Johnson",
      role: "Cord-Cutter",
      avatar: "/sir.jpg"
    },
    rating: 5,
  },
  {
    quote: "Wallah c'est ouf! J'ai testé 5 IPTV avant, aucun tient la route comme ça. Les mises à jour sont instant et y'a même les replays des émissions!",
    author: {
      name: "Mehdi T.",
      role: "Gamer/Streamer",
      avatar: "/sir.jpg"
    },
    rating: 5,
  },
  {
    quote: "No mames wey! Por fin una IPTV que sí jala al 100. Tengo HBO Max, Netflix y Disney+ integrados en la app. Hasta mi jefa lo usa para sus telenovelas!",
    author: {
      name: "Carlos M.",
      role: "Digital Nomad",
      avatar: "/sir.jpg"
    },
    rating: 5,
  },
  {
    quote: "Brudi, diese IPTV app ist krasser als Sky! Alle Bundesliga Spiele ohne VPN, 8000+ channels und EPG funktioniert perfekt. Was will man mehr?",
    author: {
      name: "Tim Wagner",
      role: "Ex-Pirate Stream User",
      avatar: "/sir.jpg"
    },
    rating: 5,
  },
  {
    quote: "Raga ma che botta! Finalmente un IPTV con i canali italiani all'estero senza lag. Pure la Rai in HD dall'Australia, roba da matti!",
    author: {
      name: "Paolo Bianchi",
      role: "Expat Chef",
      avatar: "/sir.jpg"
    },
    rating: 5,
  }
];

const TestimonialCard = ({ quote, author, rating, className }: TestimonialProps) => (
  <Card className={cn("border-none shadow-none", className)}>
    <CardContent className="p-6">
      <div className="flex mb-4">
        {Array.from({ length: 5 }).map((_, i) => (
          <Star
            key={i}
            className={cn("w-5 h-5", i < rating ? "fill-amber-400 text-amber-400" : "fill-muted text-muted")}
          />
        ))}
      </div>
      <blockquote className="text-lg mb-6 italic text-muted-foreground">"{quote}"</blockquote>
      <div className="flex items-center gap-3">
        <Avatar>
          <AvatarImage src={author.avatar} alt={author.name} />
          <AvatarFallback>{author.name.charAt(0)}</AvatarFallback>
        </Avatar>
        <div>
          <p className="font-medium">{author.name}</p>
          <p className="text-sm text-muted-foreground">{author.role}</p>
        </div>
      </div>
    </CardContent>
  </Card>
)

export default function Testimonials() {
  const t = useTranslations("testimonial")
  return (
    <section id="testimonials" className="py-12 px-4 md:px-6 lg:px-8">
      <div className="text-center mb-10">
        <Title title={t("title")} description={t("description")} />
      </div>

      <Carousel
        opts={{
          align: "start",
          loop: true,
        }}
        className="w-full max-w-5xl mx-auto"
      >
        <CarouselContent>
          {testimonials.map((testimonial, index) => (
            <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3 pl-4">
              <div className="p-1">
                <TestimonialCard {...testimonial} />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <div className="flex justify-center mt-8 gap-2">
          <CarouselPrevious className="relative static" />
          <CarouselNext className="relative static" />
        </div>
      </Carousel>
    </section>
  )
}

