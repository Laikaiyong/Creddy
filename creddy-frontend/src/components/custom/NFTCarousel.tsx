"use client";

import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";

const NFTs = [
    {
        id: 1,
        title: "zkKing",
        image: "https://avatars.githubusercontent.com/u/76078213?v=4",
        date: "Aug 2024",
    },
    {
        id: 2,
        title: "zkKing",
        image: "https://avatars.githubusercontent.com/u/76078213?v=4",
        date: "Aug 2024",
    },
    {
        id: 3,
        title: "zkKing",
        image: "https://avatars.githubusercontent.com/u/76078213?v=4",
        date: "Aug 2024",
    },
    {
        id: 4,
        title: "zkKing",
        image: "https://avatars.githubusercontent.com/u/76078213?v=4",
        date: "Aug 2024",
    },
    {
        id: 5,
        title: "zkKing",
        image: "https://avatars.githubusercontent.com/u/76078213?v=4",
        date: "Aug 2024",
    },
]

export default function NFTCarousel() {
    return (
        <>
            <Carousel className="max-w-screen">
                <CarouselContent className="flex space-x-4">
                    {NFTs.map((nft) => (
                        <CarouselItem key={nft.id} className="relative group basis-1/5">
                            <img src={nft.image} alt={nft.title} className="w-[150px] h-[150px] object-cover rounded-lg" />
                            <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-75 transition-opacity duration-300 flex items-center justify-center rounded-lg">
                                <span className="text-white text-lg font-semibold">{nft.title}</span>
                            </div>
                        </CarouselItem>
                    ))}
                </CarouselContent>
            </Carousel>
        </>
    )
}