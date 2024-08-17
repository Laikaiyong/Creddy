<<<<<<< HEAD
"use client";

import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";
const team = [
    {
        id: 1,
        name: "Lai Kai Yong",
        image: "https://avatars.githubusercontent.com/u/76078213?v=4",
        role: "zkKing",
        link: "https://www.linkedin.com/in/lai-kai-yong/",
    },
    {
        id: 2,
        name: "Looi Wei En",
        image: "https://avatars.githubusercontent.com/u/93825624?v=4",
        role: "zkKing",
        link: "https://www.linkedin.com/in/looi-wei-en/",
    },
    {
        id: 3,
        name: "Johnson Chin",
        image: "https://avatars.githubusercontent.com/u/107231772?v=4",
        role: "zkKing",
        link: "https://www.linkedin.com/in/johnson-chin1009/",
    },
    {
        id: 4,
        name: "Tan Wei Hup",
        image: "https://media.licdn.com/dms/image/v2/D5603AQErINuui8DiQA/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1703865131897?e=1729123200&v=beta&t=36W0JynxmaodR88rlGfI4wTq-wngdrLV0J2fIlEMkD0",
        role: "zkKing",
        link: "https://www.linkedin.com/in/tan-wei-hup",
    }

];

export default function MeetOurTeam() {
    return (
        <>
            <Carousel>
                <CarouselContent className="flex lg:items-center lg:justify-center lg:space-x-10">
                    {team.map((member) => (
                        <CarouselItem key={member.id} className="basis-[44%] min-w-[220px] lg:max-w-[280px] lg:basis-1/4">
                         <a href={member.link} target="_blank">
                            <img src={member.image} alt={member.name} className="w-full h-auto rounded-full border-[3px] border-purple-600"/>
                         </a>
                         <h3 className="font-bold pt-2 lg:text-[20px]">{member.name}</h3>
                         <p className="">{member.role}</p>
                        </CarouselItem>
                    ))}
                </CarouselContent>
            </Carousel>
                
            
        </>
=======

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
>>>>>>> 3ec72abc066cbb41b4741f1915d6549b82449969
    )
}