import Banner from "@/components/ui/Banner";
import Link from "next/link";
import {BookOpenIcon, UserCircleIcon} from "@heroicons/react/16/solid";

export default function Home() {
  return (
    <main>
        <Banner />
        <menu className="flex justify-evenly pt-20">
          <Link href="/transcription" className="flex flex-col items-center justify-center font-bold">
            <BookOpenIcon className="h-[100px] w-[100px]" />
            <div className="">성경 필사</div>
          </Link>
          <Link href="" className="flex flex-col items-center justify-center font-bold">
            <UserCircleIcon className="h-[100px] w-[100px]" />
            <div className="">내 활동</div>
          </Link>
        </menu>
    </main>
  );
}
