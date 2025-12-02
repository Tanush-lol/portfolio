"use client";

const Footer = () => {
  return (
    <footer className="w-full bg-black text-white py-10 px-6 border-t border-gray-800">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between gap-8">
        
        {/* About Section */}
        <div className="flex-1">
          <h3 className="text-lg font-semibold mb-2">About Me</h3>
          <p className="text-gray-400 text-sm leading-relaxed">
            I'm a passionate web developer who loves crafting immersive digital
            experiences. I combine art, animation, and clean coding to bring
            creative ideas to life on the web.
          </p>
        </div>

        {/* Tech Section */}
        <div className="flex-1">
          <h3 className="text-lg font-semibold mb-2">Technologies Used</h3>
          <ul className="text-gray-400 text-sm space-y-1">
            <li>Next.js</li>
            <li>React</li>
            <li>React Bits</li>
            <li>Three.js</li>
          </ul>
        </div>

      </div>

      <div className="mt-10 text-center text-xs text-gray-500">
        © {new Date().getFullYear()} Your Name. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
