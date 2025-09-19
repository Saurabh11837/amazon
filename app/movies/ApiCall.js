"use client";
import Card2 from "../movies/Card2";
import { useEffect, useState } from "react";
import axios from "axios";

export const ApiCall = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchdata = async () => {
      try {
        const resp = await axios.get("https://fakestoreapi.com/products");
        setData(resp.data);
      } catch (e) {
        console.error(e);
      }
    };
    fetchdata();
  }, []);

  return (
    <div className="h-screen flex flex-wrap gap-6 justify-center items-center m-[15px]">
      {data.map((item) => (
        <Card2 key={item.id} item={item} />
      ))}
    </div>
  );
};
