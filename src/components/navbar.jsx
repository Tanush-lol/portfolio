"use client";

import { memo } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import GlassSurface from "./GlassSurface";
import GooeyNav from "./GooeyNav";

const items = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Projects", href: "/projects" },
  { label: "Socials", href: "/socials" },
];

const Navbar = () => {

  const pathname = usePathname();

  const activeIndex = items.findIndex(item => item.href === pathname);

  return (
    <div className="fixed top-4 left-0 w-full z-50 flex items-center justify-center">
      
      {/* Logo */}
      <Link 
        href="/"
        className="absolute left-6 text-white font-bold text-6xl tracking-wide"
        style={{ fontFamily: "var(--font-inter-sans)" }}
      >
        Tanush<span className="text-green-400">.</span>
      </Link>

      <GlassSurface
        width={600}
        height={60}
        borderRadius={27}
        displace={25}
        distortionScale={-250}
        opacity={0.8}
        blur={7}
        mixBlendMode="screen"
      >
        <GooeyNav
          items={items}
          initialActiveIndex={activeIndex !== -1 ? activeIndex : 0}
          particleCount={15}
          particleDistances={[90, 10]}
          particleR={100}
          animationTime={600}
          timeVariance={300}
          colors={[1, 2, 3, 1, 2, 3, 1, 4]}
        />
      </GlassSurface>
    </div>
  );
};

export default memo(Navbar);
