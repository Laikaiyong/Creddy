"use client";

import Feature from "@/components/custom/Feature";
import { motion } from "framer-motion";
import React from "react";
import { AuroraBackground } from "../components/ui/aurora-background";
import MeetOurTeam from "@/components/custom/MeetOurTeam";
import Link from "next/link";
import Navbar from "@/components/custom/Navbar";
import OrbitingCirclesFunc from "@/components/custom/OrbitingCircle";

export default function LandingPage() {
    const animations = {
      initial:{ opacity: 0.0, y: 40 },
      whileInView:{ opacity: 1, y: 0 },
      transition:{
        delay: 0.3,
        duration: 0.8,
        ease: "easeInOut",
      }
    }
    
    return (
        <>
            <main className="bg-white text-black">       
                <Navbar />         
                {/* Hero Section */}
                <section id="hero" className="px-4 lg:px-10 text-center pt-5 lg:pt-10 space-y-4g h-[80vh] w-full flex flex-col items-center justify-center">
                <AuroraBackground>
                <motion.div
                  {...animations}
                  className="relative flex flex-col gap-4 items-center justify-center px-4"
                >
                    <h1 className="text-4xl bg-clip-text text-transparent bg-gradient-to-r font-extrabold mx-auto my-2 sm:text-6xl"
                            style={{
                                backgroundImage: "linear-gradient(179.1deg, #2e0452 0.77%, rgba(255, 255, 255, 0) 182.09%)",
                                paddingBottom: "0.1em"
                            }}
                        >
                        Creddy
                    </h1>
                    <p className="text-[16px] my-2">
                        Empowering Education with Verifiable Credentials
                    </p>
                    <div className="flex justify-center font-medium text-sm my-2">
                      <Link href="#feature">
                        <button
                            className="flex items-center gap-2 px-5 py-3 text-sm text-white duration-150 bg-purple-700 rounded-3xl hover:bg-purple-500 active:bg-purple-700"
                        >
                          Get Started
                          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="size-4">
                            <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                          </svg>

                        </button>
                      </Link>
                    </div>
                  </motion.div>
                  </AuroraBackground>
                </section>

                {/* About Section */}
                <section className="px-4 lg:px-10 py-20 text-center">
                  <h1 className="font-bold text-[30px]">What is <span className="text-purple-600">Creddy?</span></h1>
                  <p className="pt-6 text-[18px] lg:text-2xl lg:w-[800px] mx-auto">Creddy uses <span className="font-bold text-purple-600">NFTs</span> to tokenize and authenticate <span className="font-bold text-purple-600">educational credentials</span> and co-curricular achievements, ensuring <span className="font-bold text-purple-600">transparency</span>, <span className="font-bold text-purple-600">integrity</span>, and <span className="font-bold text-purple-600">ease of credit conversion</span>.</p>
                </section>

                {/* Features Section */}
                <section id="features" className="px-4 lg:px-10 py-20">
                  <h1 className="font-bold text-[30px] text-center">Unleash your <span className="text-purple-600">Potential</span></h1>
                  <div className="pt-4 lg:pt-10">
                    <Feature />
                  </div>
                </section>
                
                {/* Techstack Section */}
                <section id="techstack" className="px-4 lg:px-10 text-center pt-[30px] pb-20">
                  <h1 className="text-[30px] font-bold">The <span className="text-purple-600">&ldquo;Stack&rdquo;</span></h1>
                  <p className="pt-2 text-[18px] lg:text-2xl">Creddy is built on multiple cutting edge technologies, primarily: <span className="font-bold italic">Aptos</span>.</p>
                  <div className="pt-4 lg:pt-10">
                    <OrbitingCirclesFunc />
                  </div>
                </section>
                
                {/* Team Section */}
                <section id="team" className="px-4 lg:px-10 text-center py-[60px]">
                  <h1 className="text-[30px] font-bold">The Team</h1>
                  <div className="pt-4 lg:pt-10">
                    <MeetOurTeam />
                  </div>
                </section>

            </main>
        </>
    )
}