
import Image from "next/image";
import bg from "../public/Background/Home.webp";
import RenderModel from "@/Components/RenderModel";
import Navigation from "@/Components/Navigation/index";
import dynamic from "next/dynamic";
const SpiderMans = dynamic(() => import('@/Components/Models/SpiderMans'), {ssr: false,})

export default function Home() {
  return (
      <main className="flex flex-col h-screen items-center justify-between relative">
      <Image priority sizes="100vw" src={bg} alt="background-image" className="w-full h-full object-cover object-center opacity-90 -z-10 " fill/>
      <div className="h-screen w-full">
        <Navigation/>
        <RenderModel>
          <SpiderMans/>
        </RenderModel>
      </div>
      </main>
  );
}
