import React from 'react'
import Image from 'next/image'
import ItemLayout from "./layout"
import Github from "../Logos/Github.png"
import LinkedIn from "../Logos/LinkedIn.png"
import Instagram from "../Logos/Instagram.png"
import Twitter from "../Logos/Twitter_x.png"
import Link from 'next/link'
import { Montserrat } from 'next/font/google'
import { Poppins } from 'next/font/google'

const montserrat = Montserrat({
    weight: '200',
    subsets:['latin']
})
    
const poppins = Poppins({
    weight: '800',
    subsets:['latin']
    })

const AboutDetails = () => {
    return (
        <section className='py-20 w-full mx-10'>
            <div className='grid grid-cols-12 gap-4 xs:gap-6 md:gap-8 w-full'>
                <ItemLayout className={"col-span-full lg:col-span-8 row-span-2 flex-col items-start"}>
                    <h2 className='text-xl md:text-2xl text-left w-full capitalize text-accent'>
                        Web-Slinging MERN Developer
                    </h2>
                    <p className={`font-light ${montserrat.className}`}>
                        Swinging into web development like Spider-Man through New York, I'm a motivated Full-Stack Developer specializing in the MERN stack. I've built interactive web apps, designed RESTful APIs, and managed databases—using my coding "spidey-sense" to solve complex problems. With a strong foundation in both front and back-end tech, I'm eager to dive into a team where I can weave my skills into real-world projects and learn alongside others passionate about tech
                    </p>
                </ItemLayout>
                <ItemLayout className={'col-span-full xs:col-span-6 lg:col-span-4'}>
                    <p className='font-semibold w-full text-left text-5xl'>
                        5+<sub className={`font-semibold text-base ${montserrat.className}`}>Projects</sub>
                    </p >
                </ItemLayout>
                <ItemLayout className={'col-span-full xs:col-span-6 lg:col-span-4 text-accent'}>
                    <sub className={`font-semibold text-base ${montserrat.className}`}>Hands-on experience in full-stack development through personal projects, building dynamic web applications with a focus on the MERN stack.</sub>
                </ItemLayout>
                <ItemLayout className="col-span-full">
                    <img className='w-full h-auto' src='https://skillicons.dev/icons?i=html,css,js,ts,bootstrap,tailwind,react,redux,next,vite,threejs,tailwind,nodejs,express,mongodb,mongodb,postgres,postman,vercel,firebase,git,github&theme=light' alt='Rid01code' loading='lazy'/>
                </ItemLayout>
                <ItemLayout className="col-span-full md:col-span-6 !p-0">
                    <img className='w-full h-auto' src='https://github-readme-stats.vercel.app/api/top-langs?username=Rid01code&theme=transparent&hide_border=true&title_color=FEFE5B&text_color=FFFFFF&icon_color=FEFE5B&text_bold=false' alt='Rid01code' loading='lazy'/>
                </ItemLayout>
                <ItemLayout className="col-span-full md:col-span-6 !p-0">
                    <img className='w-full h-full' src='https://github-readme-stats.vercel.app/api?username=Rid01code&theme=transparent&hide_border=true&title_color=FEFE5B&text_color=FFFFFF&icon_color=FEFE5B&text_bold=false' alt='Rid01code' loading='lazy'/>
                </ItemLayout>
                <ItemLayout className="col-span-full flex flex-col px-4 sm:px-20 md:px-44">
                    <h1 className={`w-full font-bold text-lg xs:text-2xl lg:text-3xl text-center ${poppins.className}`}>CATCH ME ON</h1>
                    <div className='w-full flex justify-between items-center px-1 sm:px-4 lg:px-8'>
                        <Link
                            href={'https://github.com/Rid01code'}
                            target='_blank' rel='noopener noreferrer'>
                            <Image src={Github} width={40} height={40} alt='Github' className='cursor-pointer' />
                        </Link>
                        <Link
                            href={'https://www.linkedin.com/in/ridwan-rahaman-2094b5241/'}
                            target='_blank' rel='noopener noreferrer'>
                            <Image src={LinkedIn} width={40} height={40} alt='LinkedIn' className='cursor-pointer' />
                        </Link>
                        <Link
                            href={'https://x.com/Ridwan__Rahaman'}
                            target='_blank' rel='noopener noreferrer'>
                            <Image src={Twitter} width={40} height={40} alt='Twitter' className='cursor-pointer' />
                        </Link>
                        <Link
                            href={'https://www.instagram.com/rid_x_x/?hl=bn'}
                            target='_blank' rel='noopener noreferrer'>
                            <Image src={Instagram} width={40} height={40} alt='Instagram' className='cursor-pointer' /
                            ></Link>
                    </div>
                </ItemLayout>
            </div>
        </section>
    )
}

export default AboutDetails