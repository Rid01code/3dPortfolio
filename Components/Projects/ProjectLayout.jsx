"use client"
import React from 'react'
import { motion } from 'framer-motion'
import { Globe } from 'lucide-react'
import { Github } from 'lucide-react'
import Link from 'next/link'
import { Poppins } from 'next/font/google'
import { Montserrat } from 'next/font/google'

const poppins = Poppins({
    weight: '400',
    subsets:['latin']
})
    
const montserrat = Montserrat({
    weight: '400',
    subsets:['latin']
})

const item = {
    hidden: { opacity: 0, y: 100 },
    show: { opacity: 1 , y: 0 }
}

const ProjectLayout = ({ name, description, video, tools, WebsiteLink, GitHubLink }) => {

    return (
        <motion.div
            variants={item}
            className='flex flex-col xs:w-96 w-80 custom-bg pt-8 rounded-xl gap-4'>
            <div>
                <video className='w-full sm:h-44 h-40' autoPlay loop muted playsInline>
                    <source src={video} type='video/mp4' />
                </video>
            </div>
            <div className='w-full'>
                <h1 className={`w-full text-center text-accent font-bold text-2xl ${poppins.className}`}>{name}</h1>
            </div>
            <div className='w-full px-4'>
                <p className={`w-full text-center text-base font-light ${montserrat.className}`}>{description}</p>
            </div>
            <div className='w-full'>
                <p className={`w-full text-center ${montserrat.className}`}>{tools}</p>
            </div>
            <div className='border-t-2 h-20 flex items-center justify-center'>
                <div className='flex w-full justify-around items-center'>
                    <Link
                        href={WebsiteLink}
                        target='_blank'
                        rel='noopener noreferrer'
                        className='text-foreground flex items-center justify-center'>   
                            <Globe strokeWidth={2} size='35px' className='hover:text-accent hover:cursor-pointer' />
                    </Link>
                    <Link
                        href={GitHubLink}
                        target= '_blank'
                        rel='noopener noreferrer'
                        className='text-foreground flex items-center justify-center border-none'>   
                            <Github strokeWidth={1.5} size='35px' className='hover:text-accent hover:cursor-pointer' />
                    </Link>
                </div>
            </div>
        </motion.div>
    )
}

export default ProjectLayout