import React from 'react'
import Image from 'next/image'
import bg from "../../public/Background/ContactBg.webp"
import Form from '@/Components/Contact/Form'
import { Poppins } from 'next/font/google'
import { Montserrat } from 'next/font/google';
import HomeBtn from '@/Components/HomeBtn';

const poppins = Poppins({
    weight: '400',
    subsets:['latin']
})
    
const montserrat = Montserrat({
    weight: '400',
    subsets:['latin']
})

const page = () => {
    return (
        <main className='flex min-h-screen flex-col items-center justify-center px-2 sm:px-8 lg:px-32 py-5 sm:py-20'>
            <Image
                priority
                sizes='100vw'
                src={bg}
                alt='BackGround'
                className='-z-50 fixed top-0 left-0 w-full h-full object-cover object-center opacity-30'
            />
            <article className='relative w-ful h-full flex flex-col items-center justify-center space-y-8'>
                <div className='flex flex-col items-center justify-center space-y-6 w-full sm:w-3/4'>
                    <h1 className={`text-accent font-bold text-center text-4xl capitalize ${poppins.className}`}>
                    Let's Web Together! Contact Me
                    </h1>
                    <p className={`text-center font-light text-sm xs:text-lg ${montserrat.className}`}>
                    Got a web of questions or ideas? Don’t worry, I've got the spidey senses to help you out. Reach out, and let's create something amazing together! Whether you're looking for a creative partner or just need a friendly neighborhood developer to guide you, I'm here to swing into action. From untangling complex ideas to bringing web-powered dreams to life, let's team up and make something truly spectacular
                    </p>
                </div>
                <Form />
                <div className="fixed top-4 left-4"><HomeBtn/></div>
            </article>
        </main>
    )
}

export default page