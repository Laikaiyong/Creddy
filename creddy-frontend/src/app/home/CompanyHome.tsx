import CompanyChart from "@/components/custom/CompanyChart";
import CompanyNFT from "@/components/custom/CompanyNFT"; 
import NFTComponent from "@/components/aptos/NFTComponent";
import TransferNFTDialog from "@/components/custom/TransferNFTDialog";

export default function CompanyHome() {
    return (
        <div className="md:mx-24 mx-12">
            <h1 className="text-4xl mt-4 py-2 font-semibold">Welcome back, DevVibe Solutions</h1>
            <p className="text-gray-600">Company Dashboard</p>
            <CompanyDashboard />
        </div>
    );
}


function CompanyDashboard() {
    return (
        <div className="grid grid-cols-1 md:grid-cols-5 gap-2 py-4 mt-4 min-h-screen">
            <div className="p-8 bg-white rounded-xl grid md:col-span-2 drop-shadow-lg">
                <div className="flex flex-col items-center space-y-2 pb-[32px]"> {/* User Profile Section */}
                    <h1 className="font-semibold self-start">Profile</h1>
                    <div className="w-[200px] h-[200px]">
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvpkjhMYYTMMR7jWk5JMGaMZqLplD17yyqbA&s" alt="zkKing" className="w-full h-full rounded-full" />
                    </div>
                    <h1 className="font-bold">DevVibe Solutions</h1>
                    <p className="italic">Bio: Stay Vibing</p>
                </div>
                <div className="flex flex-col items-center space-y-4"> {/* Radar Chart Section */}
                    <div className="self-start">
                        <h1 className="font-semibold">Bar Chart</h1>
                        <h3 className="text-[14px]">Track the number of users that have claimed:</h3>
                    </div>
                    <CompanyChart />
                </div>
            </div>

            <div className="grid md:col-span-3 gap-2"> {/* Right section */}
                <div className="flex relative py-8 bg-gray-200 rounded-xl"> {/* Display NFT section */}
                    <div className="relative z-10 max-w-screen-xl text-gray-600 sm:px-4 md:px-8">
                        <h3 className="text-cyan-800 font-semibold self-start pb-2">Issued NFTs (Collection)</h3>
                        <CompanyNFT />
                    </div>
                    <div
                        className="absolute inset-0 blur-[118px] max-w-lg h-[800px] mx-auto sm:max-w-3xl sm:h-[400px]"
                        style={{
                            background:
                                "linear-gradient(106.89deg, rgba(192, 132, 252, 0.11) 15.73%, rgba(14, 165, 233, 0.41) 15.74%, rgba(232, 121, 249, 0.26) 56.49%, rgba(79, 70, 229, 0.4) 115.91%)",
                        }}
                    ></div> {/* The cool cool gradient part */}
                </div>

                <div className="grid md:grid-cols-2 gap-2 mt-2"> {/* NFT Minting */}
                    <div className="flex relative py-8 bg-gray-200 rounded-xl">
                        <div className="relative z-10 max-w-screen-xl text-gray-600 sm:px-4 md:px-8">
                            <h3 className="font-semibold self-start text-cyan-800 pb-2">Mint NFT(s)</h3>
                            <NFTComponent/>
                        </div>
                        <div
                            className="absolute inset-0 blur-[118px] max-w-lg h-[800px] mx-auto sm:max-w-3xl sm:h-[400px]"
                            style={{
                                background:
                                    "linear-gradient(106.89deg, rgba(192, 132, 252, 0.11) 15.73%, rgba(14, 165, 233, 0.41) 15.74%, rgba(232, 121, 249, 0.26) 56.49%, rgba(79, 70, 229, 0.4) 115.91%)",
                            }}
                        ></div>
                    </div>

                    <div className="flex relative py-8 bg-gray-200 rounded-xl">
                        <div className="relative z-10 max-w-screen-xl text-gray-600 sm:px-4 md:px-8">
                            <h3 className="font-semibold self-start text-cyan-800 pb-2">Transfer NFT(s)</h3>
                            <TransferNFTDialog />
                        </div>
                        <div
                            className="absolute inset-0 blur-[118px] max-w-lg h-[800px] mx-auto sm:max-w-3xl sm:h-[400px]"
                            style={{
                                background:
                                    "linear-gradient(106.89deg, rgba(192, 132, 252, 0.11) 15.73%, rgba(14, 165, 233, 0.41) 15.74%, rgba(232, 121, 249, 0.26) 56.49%, rgba(79, 70, 229, 0.4) 115.91%)",
                            }}
                        ></div>
                    </div>
                </div>
            </div>
        </div>
    );
}
