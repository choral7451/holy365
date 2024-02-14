import React from "react"
import { ArrowLeftIcon } from "@heroicons/react/24/outline"
import Link from "next/link"

const LoginContainer = () => {
  return (
    <div className="flex flex-col mt-[60px] mx-auto h-[600px] w-[500px] pt-[50px] px-[30px] border-primary border-solid border-2">
      <div className="flex justify-start items-center ">
        <ArrowLeftIcon className="w-[30px] h-[30px] cursor-pointer"/>
        <div className="ml-[10px] text-2xl">로그인</div>
      </div>
      <div className="text-4xl font-bold py-[30px]">HOLY365</div>
      <div className="text-primary">아이디</div>
      <input className="h-10 my-[10px] focus:outline-none focus:border-primary border-solid border-b-2" placeholder="아이디를 입력해 주세요"/>
      <div className="text-primary mt-[20px]">비밀번호</div>
      <input className="h-10 my-[10px] focus:outline-none focus:border-primary border-solid border-b-2" placeholder="비밀번호를 입력해 주세요"/>
      <button className="bg-primary text-white w-[70%] py-[10px] text-xl mx-auto rounded-xl mt-[40px]">로그인</button>
      <div className="flex justify-evenly w-[50%] mx-auto mt-[20px]">
        <Link href="">아이디 찾기</Link>
        <Link href="">비밀번호 재설정</Link>
      </div>
      <Link href="" className="mx-auto mt-[10px] underline">HOLY365 회원가입</Link>
    </div>
  )
}

export default LoginContainer