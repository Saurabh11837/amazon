"use client";
import { useEffect, useRef } from "react";
import Image from "next/image";

import Bigbos from "../movies/asset/Bigg-Boss.jpg";

export default function AutoScrollMovies() {
  const scrollRef = useRef(null);

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    let scrollAmount = 0;
    const interval = setInterval(() => {
      if (
        scrollContainer.scrollLeft >=
        scrollContainer.scrollWidth - scrollContainer.clientWidth
      ) {
        scrollAmount = 0; // reset if at end
      } else {
        scrollAmount += 200; // scroll 200px per step
      }
      scrollContainer.scrollTo({
        left: scrollAmount,
        behavior: "smooth",
      });
    }, 1000); // every 1 sec

    return () => clearInterval(interval);
  }, []);

  const movies = [
    Bigbos,
    Bigbos,
    Bigbos,
    Bigbos,
    Bigbos,
    Bigbos,
    Bigbos,
    Bigbos,
  ];

  return (
    <div className="bg-black py-6">
      <div
        ref={scrollRef}
        className="flex overflow-x-auto space-x-4 hide-scrollbar"
      >
        {movies.map((src, i) => (
          <Image
            key={i}
            src={src}
            alt={`Movie ${i}`}
            className="w-44 h-64 rounded-lg object-cover shadow-lg flex-shrink-0"
          />
        ))}
      </div>
    </div>
  );
}
