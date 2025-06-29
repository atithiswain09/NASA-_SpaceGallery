import React from "react";
import { useEffect, useState } from "react";
export default function ImageCard({ Data }) {
  console.log("Image Card Is Render!!");
  const [fetchData, setFetchData] = useState([]);

  useEffect(() => {
    async function viweData() {
      let Resposnse = await fetch(
        `https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY&date=${Data}`
      );
      const data = await Resposnse.json();
      setFetchData(data);
    }
    viweData();
  }, [Data]);

  console.log(fetchData);
  return (
    <div>
      <div className="w-full max-w-2xl flex flex-col items-center bg-zinc-800 rounded-xl shadow-lg p-6 border border-zinc-700">
        <div className="w-full aspect-video bg-zinc-700 rounded-lg flex items-center justify-center mb-4 animate-pulse">
            {fetchData.length==0?  <span className="text-zinc-400 text-xl">Image will appear here</span>:<img src={fetchData.hdurl} alt="" />}
        
          
        </div>

        <h2 className="text-2xl font-semibold mb-2 text-amber-300 text-center">
          {fetchData.title}
        </h2>

        <p className="text-sm text-zinc-400 mb-4 text-center">
          {fetchData.date}
        </p>

        <p className="text-base text-zinc-200 text-center mb-2">
          {fetchData.explanation}
        </p>

        <p className="text-xs text-zinc-500 text-center">© NASA / APOD</p>
      </div>
    </div>
  );
}
