"use client";

import OrbitingCircles from "@/components/magicui/orbiting-circles";

export default function OrbitingCirclesFunc() {
  return (
    <div className="relative flex h-[500px] max:lg-[200px] lg:w-full flex-col items-center justify-center overflow-hidden rounded-lg">
      <span className="pointer-events-none whitespace-pre-wrap bg-gradient-to-b from-purple-600 to-purple-950 bg-clip-text text-center text-8xl font-semibold leading-none text-transparent dark:from-white">
        Creddy
      </span>

      {/* Inner Circles */}
      <OrbitingCircles
        className="size-[35px] border-none bg-transparent"
        duration={20}
        delay={20}
        radius={80}
      >
        <Icons.vercel />
      </OrbitingCircles>
      <OrbitingCircles
        className="size-[35px] border-none bg-transparent"
        duration={20}
        delay={10}
        radius={80}
      >
        <Icons.aptos />
      </OrbitingCircles>

      {/* Outer Circles (reverse) */}
      <OrbitingCircles
        className="size-[50px] border-none bg-transparent"
        radius={190}
        duration={20}
        reverse
      >
        <Icons.magicUi />
      </OrbitingCircles>
      <OrbitingCircles
        className="size-[50px] border-none bg-transparent"
        radius={190}
        duration={20}
        delay={20}
        reverse
      >
        <Icons.nextJS />
      </OrbitingCircles>
      <OrbitingCircles
        className="size-[50px] border-none bg-transparent"
        radius={190}
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
    <img src="https://static-00.iconduck.com/assets.00/nextjs-icon-2048x2048-x6n5t31i.png" alt="NextJS logo" />
  ),
  aptos: () => (
    <img src="https://cryptologos.cc/logos/aptos-apt-logo.png" alt="Aptos Logo" />
  ),
  vercel: () => (
    <img src="https://static-00.iconduck.com/assets.00/vercel-icon-512x449-3422jidz.png" alt="Vercel Logo" />
  ),
  magicUi: () => (
    <img src="https://avatars.githubusercontent.com/u/166878038?s=200&v=4" alt="MagicUI Logo" />
  ),
  googleCloud: () => (
    <img src="https://static-00.iconduck.com/assets.00/google-cloud-icon-2048x1646-7admxejz.png" alt="Google Cloud Icon" />
  ),
};
