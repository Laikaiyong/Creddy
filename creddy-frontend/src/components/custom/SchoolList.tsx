"use client";

import { Button } from "@/components/ui/button";

export default function SchoolList() {
  return (
    <div className="space-y-5 w-full">
      {schools.map((school) => (
        <div key={school.id} className="bg-white p-5 rounded-lg w-full">
          <div className="w-full flex justify-between items-center">
            <img src={school.image} alt={school.name} className="w-[50%] h-auto object-contain" />
            <Button>Convert</Button>
          </div>
        </div>
      ))}
    </div>
  );
}

const schools = [
  {
    id: 1,
    name: "Asia Pacific University",
    image: "https://www.apu.edu.my/sites/all/themes/APU/logo.png",
    link: "https://www.apu.edu.my/",
  },
  {
    id: 2,
    name: "Sunway University",
    image: "https://en.your-uni.com/assets/images/university/sunway-university.webp?v=1697960431",
    link: "https://sunwayuniversity.edu.my/",
  },
  {
    id: 3,
    name: "Taylor's University",
    image: "https://seeklogo.com/images/T/taylors-university-logo-83FAEEB91F-seeklogo.com.png",
    link: "https://university.taylors.edu.my/en.html",
  },
  {
    id: 4,
    name: "Monash University",
    image: "https://ddfoqzqsu0zvp.cloudfront.net/media/documents/monash_logo.png",
    link: "https://www.monash.edu/open-day?utm_campaign=OPDAY_BRA&utm_source=google&utm_medium=paidsearch&utm_content=OPENDAYSEM_AU_WAV_UGSTUDENTT&gad_source=1&gclid=Cj0KCQjwlIG2BhC4ARIsADBgpVS0oDlmbltmBbZOTEoA3Po74FX4zS7caUe8X5dONd2VVhimNmRqZZIaAg8qEALw_wcB&gclsrc=aw.ds",
  }
];
