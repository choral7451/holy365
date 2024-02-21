import React from "react"

const Card = () => {
  return (
    <div className='flex flex-col justify-around w-[260px] h-[180px]  border-solid border border-primary rounded-2xl cursor-pointer m-[10px] shadow-md'>
      <div className="flex items-center justify-center h-[40%] text-2xl font-bold">
        성동교회
      </div>
      <div className='absolute text-center w-[258px] text-xs mb-[30px] text-gray-500/50'>2024.02.21</div>
      <div className='mx-4 border-t border-primary' />
      <div className="flex items-center justify-evenly h-[40%] text-1xl">
        <div>
          <div className='text-center mb-2'>강원특별자치도</div>
          <div className='text-center'>장로회 합동</div>
        </div>
        <div>
          <div className='text-center'>소프라노</div>
          <div className='text-center'>목사</div>
          <div className='text-center'>부목사</div>
        </div>
      </div>
    </div>
  )
}

export default Card