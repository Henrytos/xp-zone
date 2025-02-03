"use client"

import { cn } from "@/lib/utils"
import { Marquee } from "./ui/marquee"
import Image from "next/image"

export function CarrouselVideoGamesPlatforms() {
    const videoGamePlatforms = [{
        src: "/images/nintendo.png",
        platform: "Nintendo"
    },
    {
        src: "/images/ps4.png",
        platform: "PlayStation"
    },
    {
        src: "/images/xbox-one.png",
        platform: "Xbox One"
    },
    {
        src: "/images/wii.png",
        platform: "Wii"
    },
    {
        src: "/images/xbox-360.png",
        platform: "Xbox 360"
    }
    ] as const
    return (<>
        <Marquee reverse pauseOnHover className="[--duration:20s] absolute bottom-10 left-0 right-0">
            {videoGamePlatforms.map((videoGamePlatform) => (
                <Image
                    key={videoGamePlatform.platform}
                    src={videoGamePlatform.src}
                    alt={videoGamePlatform.platform}
                    width={280}
                    height={56}
                    quality={100}
                    className={cn("h-14 w-72 object-contain",
                        "filter grayscale hover:filter-none")}
                />
            ))}
        </Marquee>
    </>)
}