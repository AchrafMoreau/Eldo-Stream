'use client'
import { cn } from "@/lib/utils";
import { Marquee } from "./ui/marque";
import Image from "next/image";
import { useEffect, useState } from "react";
import { getPopularMovies, getPopularTvShow } from "@/lib/tmdb";




export default function MoviesSlide() {
  const [tv, setTv] = useState([])
  const [movie, setMovie] = useState([])
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [tvData, moviesData] = await Promise.all([
          getPopularTvShow(),
          getPopularMovies()
        
        ]);
        
        setTv([
          ...tvData.results.map((item) => `https://image.tmdb.org/t/p/w500${item.poster_path}`),
        ])
        setMovie([
          ...moviesData.results.map((item) => `https://image.tmdb.org/t/p/w500${item.poster_path}`),
        ])
      } catch (error) {
        console.error("Error fetching data:", error);
      }finally{
        setIsLoading(false)
      }
    };

    fetchData();
  }, []);
  return !isLoading && (
    <section>
        <div className="relative flex w-full flex-col items-center justify-center overflow-hidden">
        <Marquee pauseOnHover className="[--duration:60s]">
            {movie.map((item, i) => (
                <Image 
                    key={i}
                    src={item}
                    alt={`Movie Poster ${i + 1} - Brief description of the content`}
                    width={150}
                    height={250}
                    className="rounded-lg object-cover ring ring-gray-950/5 hover:shadow-2xl"
                />
            ))}
        </Marquee>
        <Marquee reverse pauseOnHover className="[--duration:60s]">
            {tv.map((item, i) => (
                <Image 
                    key={i}
                    src={item}
                    alt={`Movie Poster ${i + 1} - Brief description of the content`}
                    width={150}
                    height={250}
                    className="rounded-lg object-cover ring ring-gray-950/5 hover:shadow-2xl"
                />
            ))}
        </Marquee>
        <div className="pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-background"></div>
        <div className="pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l from-background"></div>
        </div>

    </section>
  );
}
