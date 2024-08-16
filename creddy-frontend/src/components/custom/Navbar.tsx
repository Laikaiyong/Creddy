"use client";

import ClientOnly from "../ClientOnly";
import WalletButtons from "../aptos/WalletButton";
import Brand from "./Brand";

export default function Navbar() {
    return (
        <>
            <header>
                <nav className="flex px-4 md:px-8 bg-white shadow-lg sticky top-0 z-50 w-full">
                    <div className="flex justify-between items-center w-full">
                        <Brand />
                        <div>
                        <ClientOnly>
                        <WalletButtons />
                      </ClientOnly>
                        </div>
                    </div>
                </nav>
            </header>
        </>
    )
}