'use client'
import Image from "next/image";
import { Marquee } from "./ui/marque";
import { useEffect, useState } from "react";


export default function ChannelsSlide(){
    const channels = [
        "apple_tv.jpg",
        "arte.jpg",
        "canal.jpg",
        "disney_channel.jpg",
        "disney.jpg",
        "espn.jpg",
        "fox.jpg",
        "hbo.jpg",
        "history.jpg",
        "sky_max.jpg",
        "hulu.jpg",
        "max.jpg",
        "national_geographic.jpg",
        "nbc.jpg",
        "netflix.jpg",
        "nine.jpg",
        "paramount.jpg",
        "prime.jpg",
        "sky.jpg",
    ];


    return(
        <section >
        <div className="relative flex w-full flex-col items-center justify-center overflow-hidden">
        <Marquee pauseOnHover className="[--duration:60s]">
            {channels.map((item, i) => (
                <Image 
                    key={i}
                    src={item}
                    alt={`Channel Logo ${i + 1} - Brief description of the content`}
                    width={150}
                    height={70}
                    className="rounded-lg object-cover ring ring-gray-950/5 hover:shadow-2xl"
                />
            ))}
        </Marquee>
        <div className="pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-background"></div>
        <div className="pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l from-background"></div>
        </div>
        </section>
    )
}