"use client"
import { motion } from 'framer-motion'
import { Swiper, SwiperSlide } from 'swiper/react'
import "swiper/css"

import { BsArrowUpRight, BsGithub } from 'react-icons/bs';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@radix-ui/react-tooltip';
import Image from "next/image"
import { useState } from 'react';
const projects = [
    {
        num: '01',
        category: 'frontweb',
        title: 'project 1',
        description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Inventore, id quod. Dolores dolorum autem voluptates iste odit dolor sunt sapiente!',
        stack: [{ name: "Html 5" }, { name: "Css 3" }, { name: "Javascript" }],
        image: '/assets/work/thumb1.png',
        github: ""
    },
    {
        num: '02',
        category: 'frontweb',
        title: 'project 1',
        description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Inventore, id quod. Dolores dolorum autem voluptates iste odit dolor sunt sapiente!',
        stack: [{ name: "Html 5" }, { name: "Css 3" }, { name: "Javascript" }],
        image: '/assets/work/thumb1.png',
        github: ""
    },
    {
        num: '03',
        category: 'frontweb',
        title: 'project 1',
        description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Inventore, id quod. Dolores dolorum autem voluptates iste odit dolor sunt sapiente!',
        stack: [{ name: "Html 5" }, { name: "Css 3" }, { name: "Javascript" }],
        image: '/assets/work/thumb1.png',
        github: ""
    },
]

const work = () => {



    const [project, setProject] = useState(projects[0])

    const handleSlideChange = (swiper) =>{
        const currentIndex = swiper.activeIndex
        setProject(projects[currentIndex])
    }
    return (
        <motion.section
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className='min-h-[80vh] flex flex-col justify-center py-12 xl:px-0'>
            <div className='container mx-auto'>
                <div className='flex flex-col xl:flex-row xl:gap-[30px]'>
                    <div className='w-full xl:w-[50%] xl:h-[460px] flex flex-col xl:justify-between order-2 xl:order-none'>
                        <div className='flex flex-col gap-[30px] h-[50%]'>
                            {/* outline number */}
                            <div className='text-8xl leading-none font-extrabold text-transparent text-outline'>
                                {project.num}
                            </div>
                            {/* project category */}
                            <h2 className='text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500 capitalize'>{project.category}</h2>
                            {/* project description */}
                            <p className='text-white/60'>{project.description}</p>
                            {/* stack */}
                            <ul className='flex gap-4'>
                                {
                                    project.stack.map((item, index) => {
                                        return <li
                                            key={index}
                                            className='text-xl text-accent'
                                        >
                                            {item.name}
                                            {index !== project.stack.length - 1 && ","}
                                        </li>
                                    })
                                }
                            </ul>
                            {/* border */}
                            <div className='border border-white/20'></div>
                            {/* buttons */}
                            <div className='flex items-center gap-4'>
                                {/* live link button */}
                                <a href={project.live}>
                                    <TooltipProvider delayDuration={100}>
                                        <Tooltip>
                                            <TooltipTrigger className='w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group'>
                                                <BsArrowUpRight className='text-white text-3xl group-hover:text-accent' />
                                            </TooltipTrigger>
                                            <TooltipContent>
                                                <p>Live projects</p>
                                            </TooltipContent>
                                        </Tooltip>
                                    </TooltipProvider>
                                </a>
                                {/* github link button */}
                                <a href={project.github}>
                                    <TooltipProvider delayDuration={100}>
                                        <Tooltip>
                                            <TooltipTrigger className='w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group'>
                                                <BsGithub className='text-white text-3xl group-hover:text-accent' />
                                            </TooltipTrigger>
                                            <TooltipContent>
                                                <p>Github repository</p>
                                            </TooltipContent>
                                        </Tooltip>
                                    </TooltipProvider>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className='w-full xl:w-[50%]'>
                        <Swiper spaceBetween={30} slidesPerView={1} className='xl:h-[520px] mb-12'
                        onSlideChange={handleSlideChange}
                        >
                            {projects.map((project, index) => {
                                return <SwiperSlide 
                                key={index}
                                className='w-full'>
                                    <div className='h-[460px] relative group flex justify-center items-center bg-pink-50/20'>
                                    {/* overlay */}
                                    <div></div>
                                    {/* image */}
                                    <div className='relative w-full h-full'>
                                        <Image src={project.image} fill className='object-cover' alt=''/>
                                    </div>
                                    <div>

                                    </div>
                                    </div>
                                </SwiperSlide>
                            })}
                        </Swiper>
                    </div>
                </div>
            </div>

        </motion.section>
    );
};

export default work;