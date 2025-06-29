import React from "react";

export default function DatePicker({ setdate }) {
  console.log("Date Card Is Render!!")
  return (
    <div>
      <div className="mb-8 flex flex-col items-center gap-2 bg-zinc-800 p-4 rounded-xl shadow-lg border border-emerald-700">
        <label
          htmlFor="selectDate"
          className="text-emerald-400 font-semibold mb-1"
        >
          Choose a Date
        </label>
        <input
          type="date"
          name="date"
          id="selectDate"
          className="w-48 px-3 py-2 rounded-md bg-zinc-900 text-white border border-zinc-600 focus:outline-none focus:ring-2 focus:ring-emerald-500"
          onChange={(input)=>{
            setdate(input.target.value);
            console.log("date")
          }}
        />
      </div>
    </div>
  );
}
