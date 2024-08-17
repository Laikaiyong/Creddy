import ProfileChart from "@/components/custom/ProfileChart";
import { RecentTransactions } from "@/components/custom/RecentTransactions";
import NFTCarousel from "@/components/custom/NFTCarousel";
import SchoolList from "@/components/custom/SchoolList";
import VotingSystem from "@/components/scroll/VotingComponent";

export default function UserHome() {
    return (
        <div className="md:mx-24 mx-12">
            <h1 className="text-4xl mt-4 py-2 font-semibold">Welcome back, wallet_id</h1>
            <p className="text-gray-600">Take a look at your recent progress.</p>
            <VotingSystem />
            <UserDashboard />
        </div>
    );
}


function UserDashboard() {
    return (
        <div className="grid grid-cols-1 md:grid-cols-5 gap-2 py-4 mt-4 min-h-screen">
            <div className="p-8 bg-white rounded-xl grid md:col-span-2 drop-shadow-lg">
                <div className="flex flex-col items-center space-y-2 pb-[32px]"> {/* User Profile Section */}
                <h1 className="font-semibold self-start">Profile</h1>
                    <div className="w-[200px] h-[200px]">
                    <img src="https://avatars.githubusercontent.com/u/76078213?v=4" alt="zkKing" className="w-full h-full rounded-full" />
                    </div>
                    <h1 className="font-bold">0x_zkKing</h1>
                    <p className="italic">Bio: Food and Swags is what makes an event great</p>
                </div>
                <div className="flex flex-col items-center space-y-4"> {/* Radar Chart Session */}
                    <div className="self-start">
                    <h1 className="font-semibold">Radar Chart</h1>
                    <h3 className="text-[14px]">Based on the NFT(s) you earned:</h3>
                    </div>
                <ProfileChart />
                </div>
            </div>

            <div className="grid md:col-span-3 gap-2"> {/* Credit Conversion  */}
                <div className="grid md:grid-cols-2 gap-2">
                    <div className="flex relative py-8 bg-gray-200 rounded-xl">
                        <div className="relative z-10 max-w-screen-xl text-gray-600 sm:px-4 md:px-8">
                            <h3 className="font-semibold self-start text-cyan-800 pb-2">Credit Conversion</h3>
                            <SchoolList />
                        </div>
                        <div
                            className="absolute inset-0 blur-[118px] max-w-lg h-[800px] mx-auto sm:max-w-3xl sm:h-[400px]"
                            style={{
                                background:
                                    "linear-gradient(106.89deg, rgba(192, 132, 252, 0.11) 15.73%, rgba(14, 165, 233, 0.41) 15.74%, rgba(232, 121, 249, 0.26) 56.49%, rgba(79, 70, 229, 0.4) 115.91%)",
                            }}
                        ></div>
                    </div>

                    <div className="flex relative p-8 bg-gray-200 rounded-xl"> {/* Recent Transactions Section */}
                        <div className="flex flex-col justify-center items-center space-y-2">
                        <h1 className="font-semibold self-start text-cyan-800">Recent Activity</h1>
                        <RecentTransactions />
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

                <div className="flex relative py-8 bg-gray-200 rounded-xl"> {/* Display NFT section */}
                    <div className="relative z-10 max-w-screen-xl text-gray-600 sm:px-4 md:px-8">
                            <h3 className="text-cyan-800 font-semibold self-start pb-2">Credentials</h3>
                        <NFTCarousel />
                    </div>

                    <div
                        className="absolute inset-0 blur-[118px] max-w-lg h-[800px] mx-auto sm:max-w-3xl sm:h-[400px]"
                        style={{
                            background:
                                "linear-gradient(106.89deg, rgba(192, 132, 252, 0.11) 15.73%, rgba(14, 165, 233, 0.41) 15.74%, rgba(232, 121, 249, 0.26) 56.49%, rgba(79, 70, 229, 0.4) 115.91%)",
                        }}
                    ></div> {/* The cool cool gradient part */}
                </div>
            </div>
        </div>
    );
}