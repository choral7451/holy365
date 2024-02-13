"use client"

import React from 'react';
import {useSearchParams} from "next/navigation";
import {MagnifyingGlassIcon} from "@heroicons/react/16/solid";

function Page() {
  const searchParams = useSearchParams()
  const chapter = searchParams.get("chapter") ?? 1

  const chapters = []
  for (let i = 1; i < 51; i++) {
    chapters.push(`${i}장`)
  }

  return (
    <div className="flex justify-center items-center mt-10 max-w-screen-xl mx-auto">
      <div className="flex flex-col justify-center items-start w-[100%] h-[100%]rounded">
        <div className="-mb-4 ml-5 text-2xl font-bold z-0 bg-white px-4">창세기 {chapter} 장</div>
        <div className="w-[100%] h-[100%] pt-10 pb-7 px-7 border-solid border-2 border-primary rounded">
            {chapters.map((chapter,idx) => {
              return <button key={idx} className="text-primary font-bold py-2 px-4 border-solid border-2 border-primary m-2 rounded">{chapter}</button>
            })}
          <div className="border-solid border-b-2 border-primary my-10" />
          <div>
            <div>태초에 하나님이 천지를 창조하시니라</div>
            <div className="flex justify-center items-center h-[60px] w-[500px] mx-auto mt-[20px] rounded-full border-solid border-2 border-primary">
              <input className="w-[80%] h-[70%] focus:outline-0"
                     // onChange={(e) => setSearchKeyword(e.target.value)}
                     // onKeyUp={searchBible}
              />
              <MagnifyingGlassIcon className="w-[10%] h-[70%] cursor-pointer text-primary" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Page;