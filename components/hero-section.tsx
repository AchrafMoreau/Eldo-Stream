"use client";
import { getPopularMovies, getPopularTvShow } from "@/lib/tmdb";
import { ThreeDMarquee } from "./ui/3d-marque";
import { memo, useEffect, useState } from "react";
import { Button } from "./ui/button";
import { ArrowRight, Loader2 } from 'lucide-react';
import { useTranslations } from "next-intl";

function HeroSection() {
  const [isLoading, setIsLoading] = useState(true);
  const [images, setImages] = useState([])
  const t = useTranslations('hero')

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [tvData, moviesData] = await Promise.all([
          getPopularTvShow(),
          getPopularMovies()
        ]);
        
        setImages([
          ...moviesData.results.map((item) => item.poster_path && `https://image.tmdb.org/t/p/w500${item.poster_path}`),
          ...tvData.results.map((item) => item.poster_path && `https://image.tmdb.org/t/p/w500${item.poster_path}`),
          ...moviesData.results.map((item) =>  item.poster_path && `https://image.tmdb.org/t/p/w500${item.poster_path}`),
          ...tvData.results.map((item) => item.poster_path && `https://image.tmdb.org/t/p/w500${item.poster_path}`)
        ])
      } catch (error) {
        console.error("Error fetching data:", error);
      }finally{
        setIsLoading(false)
      }
    };

    fetchData();
  }, []);


  const handelFreeTrail = () => {
    const formattedPhone = "+212713720920";
    const message = `i need free trail please`;
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${formattedPhone}?text=${encodedMessage}`;
    window.open(whatsappUrl, "_blank");
  };


  return  (
    <section id="home">
      <div className="relative mx-auto flex h-[90vh] w-full flex-col items-center justify-center overflow-hidden hero drop-shadow-xl">
        <h2 className="relative z-20 mx-auto max-w-4xl text-center text-2xl font-bold text-balance text-white md:text-4xl lg:text-6xl !leading-[50px] md:!leading-[70px]">
          {t('title')} {" "}
          <span className="relative z-20 inline-block rounded-xl bg-primary/40 px-4 py-1 text-white underline decoration-primary decoration-[6px] underline-offset-[16px] backdrop-blur-sm">
            {t('entertainment')}
          </span>{" "}
          {t("finger")}
        </h2>
        <p className="relative z-20 mx-auto max-w-2xl py-5 text-center text-sm text-neutral-200 md:text-base">
          {t('description')}
        </p>

        <div className="relative z-20 flex flex-wrap items-center justify-center gap-4 pt-4">
          <Button
            size="lg"
            className="group bg-primary text-white dark:text-primary-foreground hover:bg-primary/90 btn-primary-glow"
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
            {t('buttons.buyNow')}
            <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Button>
          <button
            onClick={handelFreeTrail}
            className="rounded-md border border-white/20 bg-white/10 px-6 py-2.5 text-sm font-medium text-white backdrop-blur-sm transition-colors hover:bg-white/20 focus:ring-2 focus:ring-white/20 focus:ring-offset-2 focus:ring-offset-black focus:outline-none"
          >
            {t('buttons.freeTrial')}
          </button>
        </div>

        {/* overlay */}
        <div className="absolute inset-0 z-10 h-full w-full bg-black/80 dark:bg-black/80" />
        {images.length > 0 && <ThreeDMarquee className="pointer-events-none absolute inset-0 h-full w-full" images={images} />}
      </div>
    </section>
  );
}

export default memo(HeroSection)