import { memo } from 'react';
import Navbar from './navbar';
import ThreeDmodel from './threeDmodel';
import Footer from './footer';
import DomeGallery from './DomeGallery';

const Home = () => {
  return (
<>      
        <div className="flex justify-center  w-full h-screen bg-red-600">
          <div className="mt-70">
            <h1 className="text-6xl font-medium text-white" style={{ fontFamily: "var(--font-inter-sans)" }}>
             <span className="text-8xl" > Frontend </span> that feels

              <span style={{ display: "inline-block", verticalAlign: "middle" }}>
               <ThreeDmodel
                modelPath="/models/react.glb"
                scale={0.3}
                width="100px"
                height="100px"
                rotation={[90, 45, 0]}
                polar={[0, Math.PI / 3]}
                azimuth={[-Math.PI / 4, Math.PI / 4]}
              />
               </span>

              <span className="text-8xl" >alive</span>
              
            </h1>


             <h1 className="text-4xl ml-18 font-medium text-white" style={{ fontFamily: "var(--font-inter-sans)" }}>
              Logic that 
              <span style={{ display: "inline-block", verticalAlign: "middle" }}>
               <ThreeDmodel
                modelPath="/models/javascript.glb"
                scale={0.07}
                width="100px"
                height="100px"
                rotation={[25, 25, 0]}
                polar={[2, Math.PI / 3]}
                azimuth={[-Math.PI / 4, Math.PI / 4]}
              />
               </span>
               never

              <span style={{ display: "inline-block", verticalAlign: "middle" }}>
               <ThreeDmodel
                modelPath="/models/nextjs.glb"
                scale={6}
                width="100px"
                height="100px"
                rotation={[30, 25, 0]}
                polar={[2, Math.PI / 3]}
                azimuth={[-Math.PI / 4, Math.PI / 4]}
              />
               </span>

              gets
              <span className="text-8xl" >defeated</span> 
            </h1>

            <h1 className="text-6xl font-medium text-white " style={{ fontFamily: "var(--font-inter-sans)" }}>
              <span className='text-8xl'>Data</span>  that  

              <span style={{ display: "inline-block", verticalAlign: "middle" }}>
               <ThreeDmodel
                modelPath="/models/MongoDB.glb"
                scale={6}
                width="100px"
                height="100px"
                rotation={[0, 25, 0]}
                polar={[0.5, Math.PI / 3]}
                azimuth={[-Math.PI / 4, Math.PI / 4]}
              />
               </span>
               grows with you
               
            </h1>

             <h1 className="text-5xl ml-30 font-medium text-white" style={{ fontFamily: "var(--font-inter-sans)" }}>
              Products 
              <span style={{ display: "inline-block", verticalAlign: "middle" }}>
               <ThreeDmodel
                modelPath="/models/flutter.glb"
                scale={0.5}
                width="100px"
                height="100px"
                rotation={[0, 30, 0]}
                polar={[0.5, Math.PI / 3]}
                azimuth={[-Math.PI / 4, Math.PI / 4]}
              />
               </span>
               that <span className='text-8xl'> go </span> 

              <span style={{ display: "inline-block", verticalAlign: "middle" }}>
               <ThreeDmodel
                modelPath="/models/instagram.glb"
                scale={0.5}
                width="100px"
                height="100px"
                rotation={[5, 30, 0]}
                polar={[1, Math.PI / 3]}
                azimuth={[-Math.PI / 4, Math.PI / 4]}
              />
               </span>

              Next-Level 
            </h1>

          </div>

        </div>
        <div className="w-full h-screen bg-black flex">
        
          
          <div className="w-1/2 h-full flex items-center justify-center">
            <DomeGallery />
          </div>
        
          <div className="w-1/2 h-full flex items-center justify-center">
            <h1 className="text-white text-2xl mr-10 ">I build digital experiences that blend creativity, performance, and purpose. My projects range from immersive 3D web interactions and dynamic animations to scalable full-stack applications—all designed with clean architecture and intuitive usability in mind. I thrive on solving complex challenges, constantly learning new technologies, and transforming ideas into products that feel seamless and engaging. If you’re looking for someone who brings technical skill, design sensibility, and a strong drive to create meaningful work, I’d love to help bring your vision to life.</h1>
          </div>
        
        </div>

        <Footer/>        

</>

  );
};

export default memo(Home);