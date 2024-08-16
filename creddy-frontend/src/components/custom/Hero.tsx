"use client";

import Creddy from "../../public/creddy-logo.png"
import { useInView } from "framer-motion"
import { cloneElement, useRef } from "react";
import Link from "next/link";
import { useState, useEffect } from "react";
import Navbar
 from "@/components/custom/Navbar";
import Footer from "@/components/custom/Footer";
import Image from "next/image";

const Hero = () => (
    <section>
      <Navbar />
        <div className="custom-screen py-28">
            <LayoutEffect className="duration-1000 delay-300"
                isInviewState={{
                    trueState: "opacity-1",
                    falseState: "opacity-0"
                }}
            >
                <div>
                    <div className="space-y-5 max-w-3xl mx-auto text-center">
                        <h1 className="text-4xl bg-clip-text text-transparent bg-gradient-to-r font-extrabold mx-auto sm:text-6xl"
                            style={{
                                backgroundImage: "linear-gradient(179.1deg, #FFFFFF 0.77%, rgba(255, 255, 255, 0) 182.09%)"
                            }}
                        >
                            Creddy: Empowering Education with Verifiable Credentials
                        </h1>
                        <p className="max-w-xl mx-auto text-gray-300">
                        A decentralized platform that uses NFTs to tokenize and authenticate educational credentials and co-curricular achievements, ensuring transparency, integrity, and ease of credit conversion.
                        </p>
                        <div className="flex justify-center font-medium text-sm">
                            <NavLink
                                href="/#pricing"
                                className="flex items-center text-white bg-purple-600 hover:bg-purple-500 active:bg-purple-700 "
                            >
                                Get Started
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
                                    <path fillRule="evenodd" d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z" clipRule="evenodd" />
                                </svg>
                            </NavLink>
                        </div>
                    </div>
                    <GradientWrapper className="mt-16 sm:mt-28" wrapperClassName="max-w-3xl h-[250px] top-12 inset-0 sm:h-[300px] lg:h-[650px]">
                        {/* TODO: Image to be changed */}
                        <Image
                            src={Creddy}
                            className="shadow-lg rounded-2xl"
                            alt="Creddy"
                        />
                    </GradientWrapper>
                </div>
            </LayoutEffect>
        </div>
    </section>
  )
  
  const GradientWrapper = ({ children, className, wrapperClassName, ...props }: {
    children: any,
    className: string,

    wrapperClassName: string,
    props?: object
  }) => (
    <div
        {...props}
        className={`relative ${className || ""}`}>
        <div className={`absolute m-auto blur-[160px] ${wrapperClassName || ""}`}
            style={{
                background:
                    "linear-gradient(180deg, #7C3AED 0%, rgba(152, 103, 240, 0.984375) 0.01%, rgba(237, 78, 80, 0.2) 100%)",
            }}>
  
        </div>
        <div className="relative">
            {children}
        </div>
    </div>
  )
  
  const NavLink = ({ children, href, className, ...props }: {
    children: any,
    href: string,
    className: string,
    props?: object
  }) => (
    <Link href={href} {...props}  className={`py-2.5 px-4 text-center rounded-full duration-150 ${className || ""}`}>
        {children}
    </Link>
  )
  
  
  const LayoutEffect = ({ children,
    className,
    isInviewState: { trueState = "", falseState = "" }
  }: {
    children: any,
    className: string,
    isInviewState: {
        trueState: string,
        falseState: string
    }
  }) => {
  
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true })
  
    return cloneElement(children, {
        ref,
        className: `${children.props.className || ""} ${className || ""} ${isInView ? trueState : falseState}`
    })
  }
  

  export default Hero;