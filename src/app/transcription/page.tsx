"use client"

import React, {useState} from 'react';
import {MagnifyingGlassIcon} from "@heroicons/react/16/solid";

import THE_OLD_TESTAMENT from "../../constatns/THE_OLD_TESTAMENT"
import THE_NEW_TESTAMENT from "../../constatns/THE_NEW_TESTAMENT"
import {useRouter} from "next/navigation";

function Page() {
  const router = useRouter();

  const [searchKeyword, setSearchKeyword] = useState("");
  const [oldTestament, setOldTestament] = useState([...THE_OLD_TESTAMENT])
  const [newTestament, setNewTestament] = useState([...THE_NEW_TESTAMENT])
  const searchBible = () => {
    setNewTestament([...THE_NEW_TESTAMENT.filter(bible => bible.includes(searchKeyword))])
    setOldTestament([...THE_OLD_TESTAMENT.filter(bible => bible.includes(searchKeyword))])
  };

  return (
    <div>
      <div className="flex justify-center items-center h-[60px] w-[500px] mx-auto mt-[20px] rounded-full border-solid border-2 border-primary">
        <input className="w-[80%] h-[70%] focus:outline-0"
               onChange={(e) => setSearchKeyword(e.target.value)}
               onKeyUp={searchBible}
        />
        <MagnifyingGlassIcon className="w-[10%] h-[70%] cursor-pointer text-primary" />
      </div>
      <div className="flex justify-evenly max-w-screen-xl mx-auto pt-14">
        <div className="flex flex-col justify-center items-start w-[45%] h-[100%]rounded">
          <div className="-mb-4 ml-5 text-2xl font-bold z-0 bg-white px-4">구약</div>
          <div className="w-[100%] h-[100%] pt-10 pb-7 px-7 border-solid border-2 border-primary rounded">
            {oldTestament.map((bible,idx) => {
              return <button key={idx} className="bg-primary text-white py-2 px-4 rounded m-2"
                             onClick={() => router.push("/transcription/genesis/1")}
              >{bible}</button>
            })}
          </div>
        </div>
        <div className="flex flex-col justify-center items-start w-[45%] rounded">
          <div className="-mb-4 ml-5 text-2xl font-bold z-0 bg-white px-4">신약</div>
          <div className="w-[100%] h-[100%] pt-10 pb-7 px-7 border-solid border-2 border-primary rounded">
            {newTestament.map((bible,idx) => {
              return <button key={idx} className="bg-primary text-white py-2 px-4 rounded m-2"
                             onClick={() => router.push("/transcription/genesis/1")}
              >{bible}</button>
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Page;