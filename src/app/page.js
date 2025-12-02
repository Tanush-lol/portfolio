import Navbar from "@/components/navbar";
import ThreeDmodel from "@/components/threeDmodel";
import Home from "@/components/home";

export default function page() {
  return (
    <div className="relative min-h-screen">
      <Navbar />
      <Home/>
    </div>
  );
}
