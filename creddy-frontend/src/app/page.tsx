import Footer from "@/components/custom/Footer";
import Feature from "@/components/custom/Feature";
import MeetOurTeam from "@/components/custom/MeetOurTeam";
import Link from "next/link";
import Pricing from "@/components/custom/Pricing";
import Contact from "@/components/custom/Contact";
import Navbar from "@/components/custom/Navbar";
import TechStack from "@/components/custom/Techstack";

export default function HomePage() {
    
    return (
        <>
            <main className="bg-white text-black">       
                <Navbar />         
                {/* Hero Section */}
                {/*  */}
                <section id="hero" className="px-4 lg:px-10 text-center pt-5 lg:pt-10 space-y-4g h-[80vh] flex flex-col items-center justify-center">
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
                </section>

                {/* About Section */}
                <section className="px-4 lg:px-10 pt-[60px] pb-[120px]">
                  <h1 className="font-bold text-purple-600 text-xl">About Creddy</h1>
                  <p className="py-5">Creddy uses <span className="font-bold text-purple-600">NFTs</span> to tokenize and authenticate <span className="font-bold text-purple-600">educational credentials</span> and co-curricular achievements, ensuring <span className="font-bold text-purple-600">transparency</span>, <span className="font-bold text-purple-600">integrity</span>, and <span className="font-bold text-purple-600">ease of credit conversion</span>.</p>
                  <div className="flex items-center justify-center">
                  <iframe className="max-w-[200px]" src="https://lottie.host/embed/f1d2a6b1-ab9c-4bb9-90a7-f5b58a0e88e9/6if4ci0xmA.json"></iframe>
                  </div>
                </section>

                {/* How It Works Section            
                <section id="how-it-works" className="px-4 lg:px-10 py-[100px]">
                  <h1 className="font-bold text-purple-600 text-xl">How Creddy Works</h1>
                </section> */} 

                {/* Features Section */}
                <section id="features" className="px-4 lg:px-10">
                  <h1 className="font-bold text-purple-600 text-xl">Unlock your potential with verified skills</h1>
                  <Feature />
                </section>  
                <Pricing />
                <TechStack />
                <MeetOurTeam />
            </main>
        </>
    )
}