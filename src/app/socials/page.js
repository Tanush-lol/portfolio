"use client";

import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import { FaGithub, FaInstagram, FaBehance, FaSoundcloud } from "react-icons/fa";

export default function Socials() {
  const socials = [
    {
      name: "GitHub",
      icon: <FaGithub size={40} />,
      link: "https://github.com/Tanush-lol",
    },
    {
      name: "Instagram",
      icon: <FaInstagram size={40} />,
      link: "https://www.instagram.com/blast_radial/",
    },
    {
      name: "Behance",
      icon: <FaBehance size={40} />,
      link: "ttps://www.behance.net/tanushroy",
    },
    {
      name: "SoundCloud",
      icon: <FaSoundcloud size={40} />,
      link: "https://soundcloud.com/x-100 ",
    },
  ];

  return (
    <div className="bg-black min-h-screen text-white">
      <Navbar />

      <section className="flex flex-col items-center justify-center py-32 space-y-10">
        <h1 className="text-4xl md:text-6xl font-bold">Socials</h1>
        <p className="text-gray-300 text-lg text-center max-w-xl">
          Connect with me online — here are the platforms where I share what I build,
          create, and enjoy.
        </p>

        <div className="flex gap-10 mt-10">
          {socials.map((item) => (
            <a
              key={item.name}
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-400 transition-all hover:scale-110"
            >
              {item.icon}
            </a>
          ))}
        </div>
      </section>

      <Footer />
    </div>
  );
}
