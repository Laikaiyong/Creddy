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
    )
}