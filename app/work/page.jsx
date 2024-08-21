"use client"
import {motion} from 'framer-motion'
import {Swiper, SwiperSlide} from 'swiper/react'
import "swiper/css"

import { BsArrowUpRight, BsGithub } from 'react-icons/bs';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@radix-ui/react-tooltip';
import {Link} from "next/link"
import Image from "next/image"
import { useState } from 'react';
const projects = [
    {
        num: '01',
        category: 'frontweb',
        title: 'project 1',
        description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Inventore, id quod. Dolores dolorum autem voluptates iste odit dolor sunt sapiente!',
        stack:[{name: "Html 5"}, {name:"Css 3"}, {name:"Javascript"}],
        image: '/assets/work/thumb1.png',
        github: ""
    },
    {
        num: '01',
        category: 'frontweb',
        title: 'project 1',
        description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Inventore, id quod. Dolores dolorum autem voluptates iste odit dolor sunt sapiente!',
        stack:[{name: "Html 5"}, {name:"Css 3"}, {name:"Javascript"}],
        image: '/assets/work/thumb1.png',
        github: ""
    },
    {
        num: '01',
        category: 'frontweb',
        title: 'project 1',
        description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Inventore, id quod. Dolores dolorum autem voluptates iste odit dolor sunt sapiente!',
        stack:[{name: "Html 5"}, {name:"Css 3"}, {name:"Javascript"}],
        image: '/assets/work/thumb1.png',
        github: ""
    },
]

const work = () => {



    const [project, setProject] = useState(projects[0])
    return (
        <div>
            Work
        </div>
    );
};

export default work;