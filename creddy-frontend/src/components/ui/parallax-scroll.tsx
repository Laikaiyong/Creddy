"use client";

import { useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { cn } from "@/lib/utils";

export const ParallaxScroll = ({
  NFTs,
  className,
}: {
  NFTs: {
    id: number;
    title: string;
    issuer: string;
    image: string;
    date: string;
  }[];
  className?: string;
}) => {
  const gridRef = useRef<any>(null);
  const { scrollYProgress } = useScroll({
    container: gridRef,
    offset: ["start start", "end start"],
  });

  const translateFirst = useTransform(scrollYProgress, [0, 1], [0, -200]);
  const translateSecond = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const translateThird = useTransform(scrollYProgress, [0, 1], [0, -200]);

  const third = Math.ceil(NFTs.length / 3);

  const firstPart = NFTs.slice(0, third);
  const secondPart = NFTs.slice(third, 2 * third);
  const thirdPart = NFTs.slice(2 * third);

  return (
    <div
      className={cn("h-[40rem] items-start overflow-y-auto w-full", className)}
      ref={gridRef}
    >
      <div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-start max-w-5xl mx-auto gap-10 py-40 px-10"
        ref={gridRef}
      >
        {[firstPart, secondPart, thirdPart].map((part, partIdx) => (
          <div className="grid gap-10" key={`grid-${partIdx}`}>
            {part.map((nft, idx) => (
              <motion.div
                style={{ y: partIdx === 0 ? translateFirst : partIdx === 1 ? translateSecond : translateThird }}
                key={nft.id}
                className="relative group"
              >
                <Image
                  src={nft.image}
                  className="w-full h-full object-cover aspect-square rounded-lg"
                  alt={nft.title}
                  layout="responsive" // Ensures the image scales while keeping its aspect ratio
                  width={400}
                  height={400}
                />
                <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-80 transition-opacity duration-300 flex items-center justify-center rounded-lg px-4 py-2">
                  <span className="text-white text-sm font-semibold">
                    {nft.title} <br />
                    <p className="text-xs font-medium">issued by {nft.issuer}</p>
                    <p className="text-xs font-medium">issued on {nft.date}</p>
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};