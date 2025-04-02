"use client";
import { getPopularMovies, getPopularTvShow } from "@/lib/tmdb";
import { ThreeDMarquee } from "./ui/3d-marque";
import { useEffect, useState } from "react";
import { Button } from "./ui/button";
import { ArrowRight, Loader2 } from 'lucide-react';

export default function HeroSection() {
  const [tv, setTv] = useState([]);
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [imagesLoaded, setImagesLoaded] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [tvData, moviesData] = await Promise.all([
          getPopularTvShow(),
          getPopularMovies()
        ]);
        
        setTv(tvData.results);
        setMovies(moviesData.results);
        setIsLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    if (!isLoading && (movies.length > 0 || tv.length > 0)) {
      // Preload images
      const imageUrls = [
        ...movies.map((item) => `https://image.tmdb.org/t/p/w500${item.poster_path}`),
        ...tv.map((item) => `https://image.tmdb.org/t/p/w500${item.poster_path}`),
      ];
      
      let loadedCount = 0;
      const totalImages = imageUrls.length;
      
      imageUrls.forEach((src) => {
        const img = new Image();
        img.crossOrigin = "anonymous";
        img.onload = () => {
          loadedCount++;
          if (loadedCount === totalImages) {
            setImagesLoaded(true);
          }
        };
        img.onerror = () => {
          loadedCount++;
          if (loadedCount === totalImages) {
            setImagesLoaded(true);
          }
        };
        img.src = src;
      });
    }
  }, [isLoading, movies, tv]);

  const handelFreeTrail = () => {
    const formattedPhone = "+212713720920";
    const message = `i need free trail please`;
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${formattedPhone}?text=${encodedMessage}`;
    window.open(whatsappUrl, "_blank");
  };

  const images = [
    ...movies.map((item) => `https://image.tmdb.org/t/p/w500${item.poster_path}`),
    ...tv.map((item) => `https://image.tmdb.org/t/p/w500${item.poster_path}`),
  ];

  if (isLoading || !imagesLoaded) {
    return (
      <div className="flex h-screen w-full items-center justify-center bg-black">
        <div className="flex flex-col items-center gap-4">
          <Loader2 className="h-12 w-12 animate-spin text-primary" />
          <p className="text-neutral-200">Loading amazing content for you...</p>
        </div>
      </div>
    );
  }

  return (
    <section id="home">
      <div className="relative mx-auto flex h-screen w-full flex-col items-center justify-center overflow-hidden">
        <h2 className="relative z-20 mx-auto max-w-4xl text-center text-2xl font-bold text-balance text-white md:text-4xl lg:text-6xl !leading-[50px] md:!leading-[70px]">
          Unlimited{" "}
          <span className="relative z-20 inline-block rounded-xl bg-primary/40 px-4 py-1 text-white underline decoration-primary decoration-[6px] underline-offset-[16px] backdrop-blur-sm">
            Entertainment
          </span>{" "}
          at Your Fingertips
        </h2>
        <p className="relative z-20 mx-auto max-w-2xl py-5 text-center text-sm text-neutral-200 md:text-base">
          Access thousands of live TV channels, Movies, Tv Show and shows from around the world. High-definition quality,
          reliable streams, and 24/7 customer support.
        </p>

        <div className="relative z-20 flex flex-wrap items-center justify-center gap-4 pt-4">
          <Button
            size="lg"
            className="group bg-primary text-primary-foreground hover:bg-primary/90 btn-primary-glow"
            onClick={() => {
              const plansSection = document.getElementById("plans");
              if (plansSection) {
                const offsetTop = plansSection.getBoundingClientRect().top + window.pageYOffset;
                window.scrollTo({
                  top: offsetTop - 80, // Account for navbar height
                  behavior: "smooth",
                });
              }
            }}
          >
            Buy It Now
            <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Button>
          <button
            onClick={handelFreeTrail}
            className="rounded-md border border-white/20 bg-white/10 px-6 py-2.5 text-sm font-medium text-white backdrop-blur-sm transition-colors hover:bg-white/20 focus:ring-2 focus:ring-white/20 focus:ring-offset-2 focus:ring-offset-black focus:outline-none"
          >
            Free Trail
          </button>
        </div>

        {/* overlay */}
        <div className="absolute inset-0 z-10 h-full w-full bg-black/80 dark:bg-black/80" />
        <ThreeDMarquee className="pointer-events-none absolute inset-0 h-full w-full" images={images} />
      </div>
    </section>
  );
}