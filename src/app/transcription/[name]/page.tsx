"use client"

import React, { useRef, useState } from "react"
import {useSearchParams} from "next/navigation";
import { ArrowLeftCircleIcon } from "@heroicons/react/16/solid"

function Page() {
  const textareaRef = useRef<HTMLTextAreaElement | null>(null);
  const searchParams = useSearchParams()

  const [text, setText] = useState("");
  const [chapterText, setChapterText] = useState("태초에 하나님이 천지를 창조하시니라");

  const chapter = searchParams.get("chapter") ?? 1

  const chapters = []
  for (let i = 1; i < 51; i++) {
    chapters.push(`${i}장`)
  }

  const onChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setText(e.currentTarget.value);
    // textarea 높이 조절
    if (textareaRef && textareaRef.current) {
      textareaRef.current.style.height = "0px";
      const scrollHeight = textareaRef.current.scrollHeight;
      textareaRef.current.style.height = scrollHeight + "px";
    }
  }

  const submit = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      if (text.trim() === chapterText.trim()) {
        alert("성공")
      } else {
        alert("실패")
      }
    }
  }

  return (
    <div className="flex justify-center items-center mt-10 max-w-screen-xl mx-auto">
      <div className="flex flex-col justify-center items-start w-[100%] h-[100%]rounded">
        <div className="-mb-4 ml-5 text-2xl font-bold z-0 bg-white px-4">창세기 {chapter} 장</div>
        <div className="w-[100%] h-auto pt-10 pb-7 px-7 border-solid border-2 border-primary rounded">
            {chapters.map((chapter,idx) => {
              return <button key={idx} className="text-primary font-bold py-2 px-4 border-solid border-2 border-primary m-2 rounded">{chapter}</button>
            })}
          <div className="border-solid border-b-2 border-primary my-10" />
          <div className="flex flex-col items-start">
            <div className="text-xl">{chapterText}</div>
            <div className="flex justify-evenly items-center h-auto w-[100%] mx-auto mt-[20px] rounded border-solid border-2 border-primary py-5">
              <textarea className="w-[85%] h-auto focus:outline-0 text-xl resize-none" spellCheck="false" rows={1} onChange={onChange} ref={textareaRef} value={text} onKeyDown={submit}/>
              <ArrowLeftCircleIcon className="w-[50px] h-[50px] cursor-pointer text-primary" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Page;