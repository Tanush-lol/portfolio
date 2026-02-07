"use client";

import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import InfiniteMenu from "@/components/InfiniteMenu";
import { useState, useEffect } from "react";

export default function Projects() {
    const [loading, setLoading] = useState(true);

  const items = [
  {
    image: 'https://picsum.photos/599/600?grayscale',
    link: 'https://dressup-frontend-gamma.vercel.app/',
    title: 'Dressup',
    description: 'A Ecommerce webapp made using MERN'
  },
  {
    image: 'https://picsum.photos/400/600?grayscale',
    link: 'https://github.com/Tanush-lol/SqlApi',
    title: 'Postgressql API',
    description: 'yuh so i did the cpp code from pqxx did the golang one from the sql package and yt videos and implemented the rollback function using deepseek'
  },
  {
    image: 'https://picsum.photos/598/600?grayscale',
    link: 'https://tic-tac-toe-gamma-sage.vercel.app/',
    title: 'tic-tac-toe',
    description: 'tic-tac-toe using reactjs'
  },
  {
    image: 'https://picsum.photos/597/600?grayscale',
    link: 'https://testing-out-deployment.vercel.app/',
    title: 'Notes App',
    description: 'Notes App using reactjs'
  },
  {
    image: 'https://picsum.photos/596/600?grayscale',
    link: 'https://vercel.com/tanushs-projects-4b5ee10c/book-store-user',
    title: 'book-store-app',
    description: 'book store application using nextjs'
  },
  {
    image: 'https://picsum.photos/600/600?grayscale',
    link: 'https://github.com/Tanush-lol/VigilKernel',
    title: 'UEBA',
    description: 'Kernel level UEBA using python and c'
  }
];

  useEffect(() => {
    const loadImages = async () => {
      const promises = items.map(
        (item) =>
          new Promise((resolve) => {
            const img = new Image();
            img.src = item.image;
            img.onload = resolve;
            img.onerror = resolve;
          })
      );
      await Promise.all(promises);
      setLoading(false);
    };

    loadImages();
  }, []);

  return (
    <div className=" bg-black lex items-center justify-center">
      <Navbar />

      <section className=" bg-black text-white flex items-center justify-center px-6 py-32">
        <div className="max-w-3xl text-center space-y-8">

          <h1 className="text-4xl md:text-6xl font-bold">What I Build</h1>

          <p className="text-lg text-gray-300 leading-relaxed">
            I’m a developer who loves building end-to-end products — from designing efficient backends
            to crafting smooth and engaging user interfaces.
          </p>


        </div>

      </section>
          <div className="text-white ml-105" style={{ height: '800px',width:'1100px', }}>
            <InfiniteMenu items={items}/>
          </div>

      <Footer />
    </div>
  );
}
