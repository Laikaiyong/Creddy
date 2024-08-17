"use client";

import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";
import VotingComponent from "../scroll/VotingComponentCopy";

const NFTs = [
    {
        id: 1,
        title: "Deploy with Hardhat",
        issuer: "Hardhat",
        image: "https://moralis.io/wp-content/uploads/web3wiki/24hardhat/6381641b6a60932fb3c3c2d9_crsLQ2lVok-0X37hZ_7RSl62vTm5GRP0Ws4xyPt4E5I.jpeg",
        date: "Aug 2024",
    },
    {
        id: 2,
        title: "Aptos Developer",
        issuer: "Aptos Labs",
        image: "https://cryptologos.cc/logos/aptos-apt-logo.png",
        date: "Aug 2024",
    },
    {
        id: 3,
        title: "Metamask Certified",
        issuer: "Consensys",
        image: "https://thegivingblock.com/wp-content/uploads/2023/02/MetaMask-Partnership-The-Giving-Block.png",
        date: "Aug 2024",
    },
    {
        id: 4,
        title: "Scroll Practitioner",
        issuer: "Scroll Ltd",
        image: "https://pbs.twimg.com/profile_images/1734559095523246080/g2fVlTt6_400x400.jpg",
        date: "Aug 2024",
    },
    {
        id: 5,
        title: "AWS Certified Solutions Architect",
        issuer: "AWS",
        image: "https://i.pinimg.com/736x/d4/74/7c/d4747cb7dcbecb5223b83355ea97a3be.jpg",
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
                            <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-80 transition-opacity duration-300 flex items-center justify-center rounded-lg px-4 py-2">
                                <span className="text-white text-sm font-semibold">
                                    {nft.title} <br/> 
                                     <p className="text-xs font-medium">issued by {nft.issuer}</p> <br/>
                                     <p className="text-xs font-medium">issued on {nft.date}</p> <br/>
                                </span>
                            </div>
                            <VotingComponent postId={nft.id} />
                        </CarouselItem>
                    ))}
                </CarouselContent>
            </Carousel>
        </>
    )
}