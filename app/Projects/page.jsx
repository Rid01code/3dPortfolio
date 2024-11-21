import Image from "next/image";
import bg from "../../public/Background/Project.webp"
import { projectsData } from "@/Components/data";
import ProjectList from "../../Components/Projects/index";
import RenderModel from "@/Components/RenderModel";
import HomeBtn from "@/Components/HomeBtn";;
import dynamic from "next/dynamic";
const SpiderManLogo = dynamic(() => import('@/Components/Models/SpiderManLogo'), { ssr: false, })
const SpiderManLogo2 = dynamic(() => import('@/Components/Models/SpiderManLogo2'), {ssr: false,})


export default function Projects() {
    return (
        <main className="flex min-h-screen flex-col items-center justify-center w-full">
            <Image priority sizes="100vw" src={bg} alt="background-image" className="fixed top-0 left-0 h-full w-full object-cover object-center opacity-30 -z-50"/>
            <div className="flex items-center">
                <div className="-mr-28 h-20 sm:h-full sm:-mt-0 -mt-3">
                    <RenderModel>
                        <SpiderManLogo/>
                    </RenderModel>
                </div>

                <h1 className="text-4xl sm:text-6xl mb-9 font-extrabold bg-spiderman-logo bg-cover bg-clip-text text-transparent">PROJECTS</h1>

                <div className="-ml-28 h-20 sm:h-full sm:-mt-0 -mt-3">
                    <RenderModel>
                        <SpiderManLogo2/>
                    </RenderModel>
                </div>
            </div>

            <div className="h-screen"><ProjectList projects={projectsData}/></div>
            <div className="fixed top-4 left-4"><HomeBtn/></div>
            
        </main>
    );
}