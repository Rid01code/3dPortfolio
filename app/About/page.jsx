"use client"
import Image from "next/image";
import bg from "../../public/Background/AboutBackground.jpeg"
import RenderModel from "@/Components/RenderModel";
import HomeBtn from "@/Components/HomeBtn";
import { ReactTyped } from "react-typed";
import AboutDetails from "@/Components/About/index";
import { Poppins } from 'next/font/google'
import dynamic from "next/dynamic";
const SpiderMan = dynamic(() => import('@/Components/Models/SpiderMan'), {ssr: false,})

const poppins = Poppins({
    weight: '800',
    subsets:['latin']
    })


export default function About() {
    return (
        <main className="flex min-h-screen flex-col items-center justify-center px-3 xs:px-16 lg:px-32 py-20">
            <Image priority  sizes="100vw" src={bg} alt="background-image" className="fixed top-0 left-0 h-full w-full object-cover object-center opacity-30 -z-50"/>
            <div className="w-full h-4/5 xs:h-3/4 sm:h-screen absolute top-72 sm:top-80 -translate-y-1/2 left-0">
                <RenderModel>
                    <SpiderMan />
                </RenderModel>
            </div>
            <div className="relative w-full h-screen flex flex-col items-center justify-center">
                <div className="w-full absolute flex flex-col justify-center items-center text-center top-1/2 sm:top-[60%] left-1/2 -translate-y-1/2 -translate-x-1/2">
                    <h1 className={`font-extrabold text-6xl xs:text-7xl sm:text-8xl lg:text-9xl text-accent ${poppins.className}`}>Rid01Code</h1>
                    <div className="flex gap-1 w-full items-center justify-center">
                        <h1 className={`text-md xs:text-2xl sm:text-3xl font-semibold text-white ${poppins.className}`}>Hello, I am </h1><ReactTyped className={`text-md xs:text-2xl sm:text-3xl font-semibold text-white ${poppins.className}`} strings={[" Ridwan Rahaman😎", " a Full-stack Developer👨‍💻", " a Designer🪄", " a Passionate Cricketer🏏", " a Fan of Marvel Universe🍿"]} typeSpeed={40} backSpeed={50} loop />
                    </div>
                </div>
            </div>

            <div className="w-full flex justify-center items-center">
                <button className="text-black font-bold text-xl bg-accent w-40 h-12 rounded-lg absolute top-[75%] sm:top-[88%] hover:text-accent hover:bg-transparent hover:cursor-pointer hover:border-2 border-accent">
                    Hire Me
                </button>
            </div>


            <AboutDetails />
            <div className="fixed top-4 left-4"><HomeBtn/></div>
        </main>
    );
}