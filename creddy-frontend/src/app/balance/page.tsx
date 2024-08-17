"use client";

import Navbar from "@/components/custom/Navbar";
import Footer from "@/components/custom/Footer";
import Feature from "@/components/custom/Feature";
import MeetOurTeam from "@/components/custom/MeetOurTeam";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function BalancePage() {
  const [userRole, setUserRole] = useState("");

  useEffect(() => {
    let value = localStorage.getItem("userRole") || ""
    setUserRole(value)
  }, [])
    return (
        <>
            <main className="bg-white text-black">
            <Navbar />
            <h1>Balance</h1>
            </main>
        </>
    )
}