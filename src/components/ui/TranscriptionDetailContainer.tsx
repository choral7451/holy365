"use client"

import React, {useEffect, useRef, useState} from 'react';
import {useParams, useRouter} from "next/navigation";
import {ArrowLeftCircleIcon} from "@heroicons/react/16/solid";
import { useQuery } from "@tanstack/react-query"
import { completeVerse, countChapters, getChapterList, getVerseList } from "@/apis/bible"

function TranscriptionDetailContainer() {
  const router = useRouter()
  const { title, chapter } = useParams()

  const textareaRef = useRef<HTMLTextAreaElement | null>(null);

  const [text, setText] = useState('')
  const [currentVerse, setCurrentVerse] = useState()
  const [verseList, setVerseList] = useState()


  const { data: chapters } = useQuery(
    {
      queryKey: ["getChapters", title],
      queryFn: () => getChapterList(title),
    },
  )

  const { data: verses } = useQuery({
      queryKey: ["getVerseList", title, chapter],
      queryFn: () => getVerseList(title, chapter),
    },
  )

  useEffect(() => {
    setVerseList(verses)

    if (verses) {
      for (let verseObj of verses) {
        if (!verseObj.isCompleted) {
          setCurrentVerse(verseObj)
          break;
        }
      }
    }
  }, [chapters, verses, verseList])

  const onChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setText(e.currentTarget.value)
    if (textareaRef && textareaRef.current) {
      textareaRef.current.style.height = "0px"
      const scrollHeight = textareaRef.current.scrollHeight
      textareaRef.current.style.height = scrollHeight + "px"
    }
  }

  const submit = async (e) => {
    if (e.key === "Enter" || e.type === "click") {
      e.preventDefault()
      if (text.trim() === currentVerse.text.trim()) {
        await completeVerse(title, chapter, currentVerse.verse)
        alert("성공")
        setText("")
        setVerseList(prev => {
          return [...prev.map(verseObj => {
            if(!verseObj.isCompleted && verseObj.verse > currentVerse.verse) setCurrentVerse(verseObj);
            if(verseObj.verse === currentVerse.verse) verseObj.isCompleted = true;
            return verseObj;
          })]
        })
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
          {chapters?.map((chapterObj, idx) => {
            if (chapterObj.chapter === Number(chapter)) {
              return <button key={idx}
                             className="text-primary font-bold py-2 px-4 border-solid border-2 border-primary m-2 rounded bg-primary text-white"
                             onClick={() => router?.push(`/transcription/genesis/${chapterObj.chapter}`)}>{chapterObj.chapter} 장</button>
            } else {
              return <button key={idx}
                             className="text-primary font-bold py-2 px-4 border-solid border-2 border-primary m-2 rounded"
                             onClick={() => router?.push(`/transcription/genesis/${chapterObj.chapter}`)}>{chapterObj.chapter} 장</button>
            }

          })}
          <div className="border-solid border-b-2 border-primary my-10" />
          <div className="flex flex-col items-start">
            {verseList?.map((verseObj, idx) => {
              if(verseObj.isCompleted) {
                return <div key={idx} className="flex justify-start items-center py-3 w-[100%]">
                  <button
                    className="text-primary font-bold border-solid border-2 border-primary rounded w-[5%] mr-5 bg-primary text-white">{verseObj.verse}</button>
                  <div className="text-xl w-[95%]">{verseObj.text}</div>
                </div>
              } else {
                if(verseObj.verse === currentVerse?.verse) {
                  return <div className="flex flex-col items-start w-[100%]">
                    <div key={idx} className="flex justify-start items-center py-3 w-[100%]">
                      <button
                        className="text-primary font-bold border-solid border-2 border-primary rounded w-[5%] mr-5 bg-whate text-primary">{verseObj.verse}</button>
                      <div className="text-xl w-[95%]">{verseObj.text}</div>
                    </div>
                    <div className="flex justify-evenly items-center h-auto w-[100%] mx-auto my-[20px] rounded border-solid border-2 border-primary py-2">
                      <textarea className="w-[90%] h-auto focus:outline-0 text-xl resize-none" spellCheck="false" rows={1}
                                onChange={onChange}  value={text} onKeyDown={submit} />
                      <ArrowLeftCircleIcon className="w-[30px] h-[30px] cursor-pointer text-primary" onClick={submit} />
                    </div>
                  </div>
                } else {
                  return <div key={idx} className="flex justify-start items-center py-3 w-[100%]">
                      <button
                        className="text-primary font-bold border-solid border-2 border-primary rounded w-[5%] mr-5 bg-whate text-primary">{verseObj.verse}</button>
                      <div className="text-xl w-[95%]">{verseObj.text}</div>
                  </div>
                }
              }
            })}
          </div>
        </div>
      </div>
    </div>
  )
}

export default TranscriptionDetailContainer;