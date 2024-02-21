import React from "react"
import Card from "@/components/ui/recruit/Card"

const RecruitContainer = () => {
  return (
    <div className="w-[80%] pt-[50px] mx-auto">
      <div className='flex'>
        <h1 className='ml-[10px] mb-[20px] font-bold text-3xl'>구인</h1>
        <div className='flex '>
          <button>글쓰기</button>
        </div>
      </div>
      <div className='bg-amber-100 flex flex-wrap justify-between w-[100%]'>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
      </div>

    </div>
  )
}

export default RecruitContainer