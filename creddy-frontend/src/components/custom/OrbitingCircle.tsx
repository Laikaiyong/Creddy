"use client";

import { useEffect, useState } from 'react';
import OrbitingCircles from "@/components/magicui/orbiting-circles";

const useResponsiveRadius = (defaultRadius: number) => {
  const [radius, setRadius] = useState(defaultRadius);

  useEffect(() => {
    const updateRadius = () => {
      const width = window.innerWidth;
      if (width < 640) {
        const newRadius = defaultRadius * 0.7;
        setRadius(newRadius);
      } else if (width < 1024) {
        const newRadius = defaultRadius * 0.85;
        setRadius(newRadius);
      } else {
        setRadius(defaultRadius);
      }
    };

    window.addEventListener('resize', updateRadius);
    updateRadius();

    return () => window.removeEventListener('resize', updateRadius);
  }, []);

  return radius;
};

export default function OrbitingCirclesFunc() {
  const innerResponsiveRadius = useResponsiveRadius(80);
  const outerResponsiveRadius = useResponsiveRadius(190);
  return (
    <div className="relative flex h-[500px] max:lg-[200px] w-full flex-col items-center justify-center overflow-hidden rounded-lg">
      <span className="pointer-events-none whitespace-pre-wrap bg-gradient-to-b from-purple-600 to-purple-950 bg-clip-text text-center text-3xl lg:text-8xl font-semibold leading-none text-transparent dark:from-white">
        Creddy
      </span>

      {/* Inner Circles */}
      <OrbitingCircles
        className="size-[35px] border-none bg-transparent"
        duration={20}
        delay={20}
        radius={innerResponsiveRadius}
      >
        <Icons.vercel />
      </OrbitingCircles>
      <OrbitingCircles
        className="size-[35px] border-none bg-transparent"
        duration={20}
        delay={10}
        radius={innerResponsiveRadius}
      >
        <Icons.aptos />
      </OrbitingCircles>

      {/* Outer Circles (reverse) */}
      <OrbitingCircles
        className="size-[50px] border-none bg-transparent"
        radius={outerResponsiveRadius}
        duration={20}
        reverse
      >
        <Icons.magicUi />
      </OrbitingCircles>
      <OrbitingCircles
        className="size-[50px] border-none bg-transparent"
        radius={outerResponsiveRadius}
        duration={20}
        delay={20}
        reverse
      >
        <Icons.nextJS />
      </OrbitingCircles>
      <OrbitingCircles
        className="size-[50px] border-none bg-transparent"
        radius={outerResponsiveRadius}
        duration={10}
        delay={30}
        reverse
      >
        <Icons.googleCloud />
      </OrbitingCircles>
    </div>
  );
}

const Icons = {
  nextJS: () => (
    <img src="https://cdn.worldvectorlogo.com/logos/next-js.svg" alt="NextJS logo" />
  ),
  aptos: () => (
    <img src="https://cryptologos.cc/logos/aptos-apt-logo.png" alt="Aptos Logo" />
  ),
  vercel: () => (
    <img src="https://assets.vercel.com/image/upload/v1588805858/repositories/vercel/logo.png" alt="Vercel Logo" />
  ),
  magicUi: () => (
    <img src="https://avatars.githubusercontent.com/u/166878038?s=200&v=4" alt="MagicUI Logo" />
  ),
  googleCloud: () => (
    <img src="https://static-00.iconduck.com/assets.00/google-cloud-icon-2048x1646-7admxejz.png" alt="Google Cloud Icon" />
  ),
};

