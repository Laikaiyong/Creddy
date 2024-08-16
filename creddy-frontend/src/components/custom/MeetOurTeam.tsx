
import Image from "next/image"

export default function MeetOurTeam (){

    const team = [
        {
            avatar: "https://images.unsplash.com/photo-1511485977113-f34c92461ad9?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&ixid=eyJhcHBfaWQiOjE3Nzg0fQ",
            name: "Martiana dialan",
            title: "Product designer",
            linkedin: "javascript:void(0)",
            twitter: "javascript:void(0)",
        },
        {
            avatar: "https://api.uifaces.co/our-content/donated/xZ4wg2Xj.jpg",
            name: "Micheal colorand",
            title: "Software engineer",
            linkedin: "javascript:void(0)",
            twitter: "javascript:void(0)",
        },
        {
            avatar: "https://randomuser.me/api/portraits/women/79.jpg",
            name: "Brown Luis",
            title: "Full stack engineer",
            linkedin: "javascript:void(0)",
            twitter: "javascript:void(0)",
        },
        {
            avatar: "https://randomuser.me/api/portraits/women/63.jpg",
            name: "Lysa sandiago",
            title: "Head of designers",
            linkedin: "javascript:void(0)",
            twitter: "javascript:void(0)",
        },
    ]

    return (
        <section className="py-14">
            <div className="max-w-screen-xl mx-auto px-4 md:px-8 text-center">
                <div className="max-w-xl mx-auto">
                    <h3 className="text-purple-600 font-semibold">
                        Team
                    </h3>
                    <h3 className="text-gray-800 py-2 text-3xl font-semibold sm:text-4xl">
                        Meet our team
                    </h3>
                    <p className="text-gray-600 mt-3">
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum has been the industrys standard dummy.
                    </p>
                </div>
                <div className="mt-12">
                    <ul className="grid mx-auto gap-8 grid-cols-4">
                        {
                            team.map((item, idx) => (
                                <li key={idx}>
                                    <div className="w-20 h-20 mx-auto">
                                        <img
                                            src={item.avatar}
                                            className="w-full h-full rounded-full"
                                            alt=""
                                        />
                                    </div>
                                    <div className="mt-2">
                                        <h4 className="text-gray-700 font-semibold sm:text-lg">{item.name}</h4>
                                        <p className="text-indigo-600">{item.title}</p>
                                    </div>
                                </li>
                            ))
                        }
                    </ul>
                </div>
            </div>
        </section>
    )
}