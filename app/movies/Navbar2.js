"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import axios from "axios";
import { Search } from "lucide-react"; // ✅ search icon

export default function Navbar2() {
  const [movies, setMovies] = useState([]);
  const [query, setQuery] = useState("");
  const [searchResult, setSearchResult] = useState(null);

  // 🔹 Fetch Movies from API once
  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const resp = await axios.get(
          "https://my-json-server.typicode.com/horizon-code-academy/fake-movies-api/movies"
        );
        setMovies(resp.data || []);
      } catch (error) {
        console.error("Error fetching movies:", error);
      }
    };
    fetchMovies();
  }, []);

  // 🔍 Search on button click
  const handleSearch = () => {
    if (!query.trim()) {
      setSearchResult(null);
      return;
    }

    const found = movies.find(
      (m) => m.Title.toLowerCase() === query.toLowerCase()
    );

    setSearchResult(found || "not-found");
  };

  return (
    <section>
      <nav className="bg-black text-white px-6 py-3 flex items-center justify-between shadow-md">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <div className="bg-yellow-500 text-black font-bold px-3 py-2 rounded">
            🎬 4KHDHub
          </div>
          <Link href="/" className="font-semibold hover:text-yellow-400">
            HDHub4u Home 🏠
          </Link>
        </div>

        {/* Search Bar */}
        <div className="ml-4 relative flex items-center">
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search movies..."
            className="px-3 py-2 rounded-l border border-gray-700 bg-gray-900 text-white focus:outline-none focus:ring-2 focus:ring-yellow-500"
          />
          <button
            onClick={handleSearch}
            className="bg-yellow-500 text-black px-3 py-2 rounded-r hover:bg-yellow-600"
          >
            <Search size={18} />
          </button>
        </div>
      </nav>

      {/* 🔹 Search Result Section */}
      <div className="p-6 flex justify-center">
        {searchResult && searchResult !== "not-found" && (
          <div className="w-60 bg-black border border-gray-800 shadow-md rounded overflow-hidden">
            <div className="relative w-full h-80 bg-gray-900">
              {/* Poster */}
              <img
                src={searchResult.Poster}
                alt={searchResult.Title}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-3 text-sm text-gray-200">
              <h3 className="font-semibold text-white truncate">
                {searchResult.Title}
              </h3>
              <p className="text-gray-400 text-xs mt-1">
                Year: {searchResult.Year} | Runtime: {searchResult.Runtime}
              </p>
            </div>
          </div>
        )}

        {searchResult === "not-found" && (
          <p className="text-red-500 font-semibold text-lg">
            Movie Not Found ❌
          </p>
        )}
      </div>
    </section>
  );
}
