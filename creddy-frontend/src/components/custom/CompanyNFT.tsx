"use client";
import { ParallaxScroll } from "@/components/ui/parallax-scroll";

export default function CompanyNFT() {
  return <ParallaxScroll NFTs={NFTs} className="max-h-[500px]" />;
}

const NFTs = [
    {
      id: 1,
      title: "Deploy with Hardhat",
      issuer: "Hardhat",
      image: "https://moralis.io/wp-content/uploads/web3wiki/24hardhat/6381641b6a60932fb3c3c2d9_crsLQ2lVok-0X37hZ_7RSl62vTm5GRP0Ws4xyPt4E5I.jpeg",
      date: "Aug 2024",
    },
    {
      id: 2,
      title: "Aptos Developer",
      issuer: "Aptos Labs",
      image: "https://cryptologos.cc/logos/aptos-apt-logo.png",
      date: "Aug 2024",
    },
    {
      id: 3,
      title: "Metamask Certified",
      issuer: "Consensys",
      image: "https://thegivingblock.com/wp-content/uploads/2023/02/MetaMask-Partnership-The-Giving-Block.png",
      date: "Aug 2024",
    },
    {
      id: 3,
      title: "Scroll Certified",
      issuer: "Scroll",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRTtMWmmj_x1TEQJtBpOzkarPSZdIxZ23K-8w&s",
      date: "Aug 2024",
    },
    {
      id: 4,
      title: "Atlast 101",
      issuer: "MongoDB User Group",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2ZYtHv2OLXmthRPbkmENZRXuqBVDwlsrZ1A&s",
      date: "Aug 2024",
    },
    {
      id: 5,
      title: "AWS Cloud Architecture",
      issuer: "AWS UG KL",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2xQcwKitRgXfqdi34DYlocPSEXD2G2zZipg&s",
      date: "Aug 2024",
    },
    {
      id: 6,
      title: "GCP Cloud Architecture",
      issuer: "GDG CLoud KL",
      image: "https://cdn.prod.website-files.com/60c912417dc3bac5c9fa2616/60fb3017ed0ee6029691b71d_cloud_architect.png",
      date: "Aug 2024",
    },
  ];
