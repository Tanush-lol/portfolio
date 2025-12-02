import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import Masonry from "@/components/Masonry";

export default function About() {
  const items = [
  {
    "id": "1",
    "img": "https://picsum.photos/id/1015/600/900?grayscale",
    "url": "https://www.behance.net/tanushroy",
    "height": 400
  },
  {
    "id": "2",
    "img": "https://picsum.photos/id/1011/600/750?grayscale",
    "url": "https://github.com/Tanush-lol",
    "height": 250
  },
  {
    "id": "3",
    "img": "https://picsum.photos/id/1020/600/800?grayscale",
    "url": "https://soundcloud.com/x-100",
    "height": 400
  },
  {
    "id": "4",
    "img": "https://picsum.photos/800/900?grayscale",
    "url": "https://www.instagram.com/blast_radial/",
    "height": 700
  },
  {
    "id": "5",
    "img": "https://picsum.photos/801/900?grayscale",
    "url": "https://in.pinterest.com/tanushroy1/",
    "height": 600
  },
  {
    "id": "6",
    "img": "https://picsum.photos/802/900?grayscale",
    "url": "https://www.behance.net/tanushroy",
    "height": 600
  },
  {
    "id": "7",
    "img": "https://picsum.photos/803/900?grayscale",
    "url": "https://github.com/Tanush-lol",
    "height": 250
  },
  {
    "id": "8",
    "img": "https://picsum.photos/804/900?grayscale",
    "url": "https://www.instagram.com/blast_radial/",
    "height": 400
  },
  {
    "id": "9",
    "img": "https://picsum.photos/810/900?grayscale",
    "url": "https://in.pinterest.com/tanushroy1/",
    "height": 550
  },
  {
    "id": "10",
    "img": "https://picsum.photos/811/900?grayscale",
    "url": "https://soundcloud.com/x-100",
    "height": 600
  },
  {
    "id": "11",
    "img": "https://picsum.photos/812/900?grayscale",
    "url": "https://github.com/Tanush-lol",
    "height": 350
  },
  {
    "id": "12",
    "img": "https://picsum.photos/814/900?grayscale",
    "url": "https://www.behance.net/tanushroy",
    "height": 400
  },
  {
    "id": "13",
    "img": "https://picsum.photos/820/900?grayscale",
    "url": "https://soundcloud.com/x-100",
    "height": 400
  },
  {
    "id": "14",
    "img": "https://picsum.photos/822/900?grayscale",
    "url": "https://www.instagram.com/blast_radial/",
    "height": 200
  },
  {
    "id": "15",
    "img": "https://picsum.photos/824/900?grayscale",
    "url": "https://github.com/Tanush-lol",
    "height": 100
  },
  {
    "id": "16",
    "img": "https://picsum.photos/826/900?grayscale",
    "url": "https://in.pinterest.com/tanushroy1/",
    "height": 50
  }
]



  return (
    <>
      <Navbar />

      {/* 2 Column Layout */}
      <div className="w-full min-h-screen bg-black text-white flex gap-10 px-10 py-20">
        
        {/* LEFT - MASONRY GRID */}
        <div className="w-[45%] mt-20">
          <Masonry
          className="mt-100"
            items={items}
            ease="power3.out"
            duration={0.6}
            stagger={0.05}
            animateFrom="bottom"
            scaleOnHover={true}
            hoverScale={0.95}
            blurToFocus={true}
            colorShiftOnHover={false}
          />
        </div>

        {/* RIGHT - ABOUT CONTENT */}
        <section className="w-[55%] flex items-center">
          <div className="space-y-8">
            <h1 className="text-4xl md:text-6xl font-bold">About Me</h1>

            <p className="text-lg text-gray-300 leading-relaxed">
              Hello! I'm a relentlessly curious developer with one mission:
              learn everything I can about technology and build things that matter.
            </p>

            <p className="text-lg text-gray-300 leading-relaxed">
              My goals: reach 1600+ Elo in chess,
              solve 800+ LeetCode problems,
              and eventually build my own OS kernel in Rust —
              just like how Linus created Linux.
            </p>

            <p className="text-lg text-gray-300 leading-relaxed">
              I want to build a tech business that actually changes lives —
              something meaningful, bold, and future-driven.
            </p>

            <p className="text-gray-500 text-sm mt-8">— This is just the beginning.</p>
          </div>
        </section>

      </div>

      <Footer />
    </>
  );
}
