import Image from "next/image";
import Navbar from "./movies/Navbar";
import Navbar2 from "./movies/Navbar2";
import Navbar3 from "./movies/Navbar3";
import Navbar4 from "./movies/Navbar4";
import Card from "./movies/Card";
import Homepage from "./components/Homepage";
import Temporary from "./components/Temporary";
import Contact from "./components/Contact";
import ImageSlider from "./components/ImageSlider";
import Counter from "./components/Counter";
import Timer from "./components/Timer";
import SetTimer from "./components/SetTimer";
import StopWatch from "./components/StopWatch";
import { ApiCall } from "./movies/ApiCall";
import ApiFetch from "./movies/ApiFetch";
import Footer from "./movies/Footer";
import AutoScrollMovies from "./movies/AutoScrollMovies";

export default function Home() {
  return (
    <>
      <div>
        {/* <div className="  w-full h-full">
          <Navbar />
        </div> */}

        {/* <Temporary /> */}
        {/* <div className="w  ">
          <div className="">
            <Navbar2 />
          </div> */}

        {/* <div className=" w-full h-full">
          <ImageSlider />
        </div> */}

        {/* <Homepage />
        </div> */}
        {/* 
        <p>Home page</p>
        <Contact />

        <Counter />
        <Timer />
        <SetTimer /> */}
        {/* <StopWatch /> */}
      </div>
      <div className="h-full w-full bg-[#0a0f1a]">
        <Navbar />
        <AutoScrollMovies />
        <Navbar2 />
        <Navbar3 />
        <Navbar4 />

        {/* <Card /> */}
        <ApiFetch />
        {/* <ApiCall /> */}

        <Footer />
      </div>
    </>
  );
}
