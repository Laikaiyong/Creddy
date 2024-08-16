import Contact from "./Contact";
export default function Footer() {
    return (
        <footer className="px-4 bg-black lg:px-10 flex flex-col justify-between items-center text-[8px] lg:text-sm py-4 text-purple-200 border-t border-gray-300">
            <Contact />
            <div className="flex w-full flex-row justify-between">
                <p className="w-1/3 text-start font-semibold">
                    Creddy
                </p>
                <p className="w-1/3 text-center">
                    Copyright 2024 © All Rights Reserved 
                </p>
                <p className="w-1/3 text-end">
                    Matchi Muchi
                </p>
            </div>
        </footer>
    );
}