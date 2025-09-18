import Image from "next/image";
import Navbar from "./components/Navbar";
import Navbar2 from "./components/Nabar2";
import Homepage from "./components/Homepage";
import Temporary from "./components/Temporary";
import Contact from "./components/Contact";
import ImageSlider from "./components/ImageSlider";
import Counter from "./components/Counter";
import Timer from "./components/Timer";
import SetTimer from "./components/SetTimer";
import StopWatch from "./components/StopWatch";

export default function Home() {
  return (
    <>
      <div className="  w-full h-full">
        <Navbar />
      </div>

      {/* <Temporary /> */}
      <div className="w  ">
        <div className="">
          <Navbar2 />
        </div>

        {/* <div className=" w-full h-full">
          <ImageSlider />
        </div> */}

        <Homepage />
      </div>

      <p>Home page</p>
      <Contact />

      <Counter />
      <Timer />
      <SetTimer />
      {/* <StopWatch /> */}
    </>
  );
}
