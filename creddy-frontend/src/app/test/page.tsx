"use client";

import React from "react";
import VotingSystem from "@/components/scroll/VotingComponent";
import Navbar from "@/components/custom/Navbar";

export default function VotingTestPage() {
	return (
		<div className='bg-white text-black min-h-screen'>
			<Navbar />
			<div className='container mx-auto px-4 py-8'>
				<h1 className='text-3xl font-bold mb-6'>Voting System Test Page</h1>
				<VotingSystem />
			</div>
		</div>
	);
}
