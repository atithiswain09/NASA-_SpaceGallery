import React from "react";
import { useState } from "react";
import ImageCard from "./components/ImageCard";
import DatePicker from "./components/DatePicker";
export default function App() {
  const [date, setdate] = useState("");

  return (
    <>
      <div className="min-h-screen w-full bg-gradient-to-b from-zinc-900 to-black text-white flex flex-col items-center justify-center  py-8 px-2">
        {/* Header */}
        <header className="mb-8 text-center">
          <h1 className="text-4xl font-bold tracking-wide mb-2">
            Space Picture Viewer
          </h1>
          <p className="text-lg text-zinc-300 max-w-xl mx-auto">
            Explore the universe! Select a date to view NASA's Astronomy Picture
            of the Day, complete with details and description.
          </p>
        </header>

        <DatePicker setdate={setdate}></DatePicker>
          {
            date==''?<>
            <p className="text-red-600 font-bold">No More Data</p>
            </>: <ImageCard Data={date}></ImageCard>
          }
       
      </div>
    </>
  ); 
}
