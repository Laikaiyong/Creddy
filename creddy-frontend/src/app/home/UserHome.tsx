export default function UserHome() {
    return (
        <div className="md:mx-24 mx-12">
            <h1 className="text-4xl mt-4 py-2 font-semibold">Welcome back, Matchi Muchi!</h1>
            <p className="text-gray-600">Take a look at your recent progress.</p>
            <Test />
        </div>
    );
}


function Test() {
    return (
        <div className="grid grid-cols-1 md:grid-cols-5 gap-2 py-4 mt-4">
            <div className="p-8 bg-white rounded-xl grid md:col-span-2 drop-shadow-lg">
                <div className="flex flex-col justify-center items-center mb-3">
                    <h1 className="text-xl font-medium mb-4">Profile</h1>
                    <div>
                        <img
                            src="https://randomuser.me/api/portraits/women/79.jpg"
                            className="w-24 h-24 rounded-full"
                        />
                    </div>
                    <div className="mt-4 text-center">
                        <span className="block text-gray-700 text-md font-medium">
                            Nikita Andrew
                        </span>
                        <span className="block text-gray-700 text-xs">
                            nikitaandrew@example.com
                        </span>
                    </div>
                </div>
                <div className="grid grid-cols-3 gap-4 drop-shadow-md my-4 mx-auto">
                    <div className="bg-white flex items-center rounded-3xl px-4">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="text-yellow-500 w-4 h-4">
                            <path fillRule="evenodd" d="M14.615 1.595a.75.75 0 0 1 .359.852L12.982 9.75h7.268a.75.75 0 0 1 .548 1.262l-10.5 11.25a.75.75 0 0 1-1.272-.71l1.992-7.302H3.75a.75.75 0 0 1-.548-1.262l10.5-11.25a.75.75 0 0 1 .913-.143Z" clipRule="evenodd" />
                        </svg>
                        <p className="ml-2">22</p>
                    </div>
                    <div className="bg-white flex items-center rounded-3xl px-3">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="text-yellow-500 w-4 h-4">
                            <path fillRule="evenodd" d="M14.615 1.595a.75.75 0 0 1 .359.852L12.982 9.75h7.268a.75.75 0 0 1 .548 1.262l-10.5 11.25a.75.75 0 0 1-1.272-.71l1.992-7.302H3.75a.75.75 0 0 1-.548-1.262l10.5-11.25a.75.75 0 0 1 .913-.143Z" clipRule="evenodd" />
                        </svg>
                        <p className="ml-2">22</p>
                    </div>
                    <div className="bg-white flex items-center rounded-3xl px-3">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="text-yellow-500 w-4 h-4">
                            <path fillRule="evenodd" d="M14.615 1.595a.75.75 0 0 1 .359.852L12.982 9.75h7.268a.75.75 0 0 1 .548 1.262l-10.5 11.25a.75.75 0 0 1-1.272-.71l1.992-7.302H3.75a.75.75 0 0 1-.548-1.262l10.5-11.25a.75.75 0 0 1 .913-.143Z" clipRule="evenodd" />
                        </svg>
                        <p className="ml-2">22</p>
                    </div>
                </div>
            </div>
            <div className="grid md:col-span-3 gap-2">
                <div className="grid md:grid-cols-2 gap-2">
                    <div className="flex relative py-8 bg-gray-200 rounded-xl">
                        <div className="relative z-10 max-w-screen-xl text-gray-600 sm:px-4 md:px-8">
                            <div className="max-w-lg space-y-3 px-4 sm:mx-auto sm:text-center sm:px-0">
                                <h3 className="text-cyan-800 font-semibold">Contact</h3>
                                <p className="text-black text-3xl font-semibold sm:text-4xl">
                                    Get in touch
                                </p>
                                <p className="text-gray-600">
                                    We&#39;d love to hear from you! Please fill out the form bellow.
                                </p>
                            </div>
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
                            <div className="max-w-lg space-y-3 px-4 sm:mx-auto sm:text-center sm:px-0">
                                <h3 className="text-cyan-800 font-semibold">Contact</h3>
                                <p className="text-black text-3xl font-semibold sm:text-4xl">
                                    Get in touch
                                </p>
                                <p className="text-gray-600">
                                    We’d love to hear from you! Please fill out the form bellow.
                                </p>
                            </div>
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

                <div className="flex relative py-8 bg-gray-200 rounded-xl">
                    <div className="relative z-10 max-w-screen-xl text-gray-600 sm:px-4 md:px-8">
                        <div className="max-w-lg space-y-3 px-4 sm:mx-auto sm:text-center sm:px-0">
                            <h3 className="text-cyan-800 font-semibold">Contact</h3>
                            <p className="text-gray-600">
                                We’d love to hear from you! Please fill out the form bellow.
                            </p>
                        </div>
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
    );
}