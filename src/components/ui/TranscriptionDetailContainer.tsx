"use client"

import React, {useEffect, useRef, useState} from 'react';
import {useParams, useRouter} from "next/navigation";
import {ArrowLeftCircleIcon, CheckIcon} from "@heroicons/react/16/solid";
import {useQuery} from "@tanstack/react-query";
import {countChapters, getVerseList} from "@/apis/bible";

function TranscriptionDetailContainer() {
  const router = useRouter()
  const {title,chapter} = useParams()

  const textareaRef = useRef<HTMLTextAreaElement | null>(null);

  const [text, setText] = useState("");
  const [completedVerses, setCompletedVerses] = useState();
  const [restVerses, setRestVerses] = useState();
  const [currentVerse, setCurrentVerse] = useState(0);


  const { data: count } = useQuery(
    {   queryKey: ['countChapters', title],
      queryFn: () => countChapters(title)
    }
  )

  const {data: verses} = useQuery({
    queryKey: ["getVerseList", title, chapter],
    queryFn: () => getVerseList(title, chapter)
    }
  )

  useEffect(() => {
    if (verses && verses.length > 0) {
      setCompletedVerses([...verses?.slice(0, currentVerse + 1)]);
      setRestVerses(verses?.slice(currentVerse + 1));
    }
  }, [verses, currentVerse]);

  const chapters = []
  for (let i = 1; i <= count; i++) {
    chapters.push(i)
  }

  const onChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setText(e.currentTarget.value);
    if (textareaRef && textareaRef.current) {
      textareaRef.current.style.height = "0px";
      const scrollHeight = textareaRef.current.scrollHeight;
      textareaRef.current.style.height = scrollHeight + "px";
    }
  }

  const submit = (e) => {
    if (e.key === "Enter" || e.type === "click") {
      e.preventDefault();
      if (text.trim() === completedVerses[currentVerse].text.trim()) {

        alert("성공")
        setText('');
        setCurrentVerse(prev => prev + 1);
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
          {chapters.map((chapterNum,idx) => {
            if(chapterNum === Number(chapter)) {
              return <button key={idx} className="text-primary font-bold py-2 px-4 border-solid border-2 border-primary m-2 rounded bg-primary text-white" onClick={() => router?.push(`/transcription/genesis/${chapterNum}`)}>{chapterNum} 장</button>
            } else {
              return <button key={idx} className="text-primary font-bold py-2 px-4 border-solid border-2 border-primary m-2 rounded" onClick={() => router?.push(`/transcription/genesis/${chapterNum}`)}>{chapterNum} 장</button>
            }

          })}
          <div className="border-solid border-b-2 border-primary my-10" />
          <div className="flex flex-col items-start">

            {completedVerses?.map((verse, idx) => {
              if(completedVerses.length - 1 === idx) {
                return <div key={idx} className="flex justify-start items-center py-3 w-[100%]">
                  <button className="text-primary font-bold border-solid border-2 border-primary rounded w-[5%] mr-5">{verse.verse}</button>
                  <div className="text-xl w-[95%]">{verse.text}</div>
                </div>
              } else {
                return <div key={idx} className="flex justify-start items-center py-3 w-[100%]">
                  <button className="text-primary font-bold border-solid border-2 border-primary rounded w-[5%] mr-5 bg-primary text-white">{verse.verse}</button>
                  <div className="text-xl">{verse.text}</div>
                  <CheckIcon className="w-[30px] h-[30px] ml-2"/>
                </div>
              }
            })}

            <div className="flex justify-evenly items-center h-auto w-[100%] mx-auto my-[20px] rounded border-solid border-2 border-primary py-2">
              <textarea className="w-[90%] h-auto focus:outline-0 text-xl resize-none" spellCheck="false" rows={1} onChange={onChange} ref={textareaRef} value={text} onKeyDown={submit}/>
              <ArrowLeftCircleIcon className="w-[30px] h-[30px] cursor-pointer text-primary" onClick={submit}/>
            </div>

            {restVerses?.map((verse, idx) => {
              return <div key={idx} className="flex justify-start items-center py-3 w-[100%]">
                <button className="text-primary font-bold border-solid border-2 border-primary rounded w-[5%] mr-5">{verse.verse}</button>
                <div className="text-xl w-[95%]">{verse.text}</div>
              </div>
            })}

          </div>
        </div>
      </div>
    </div>
  );
}

export default TranscriptionDetailContainer;