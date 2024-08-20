"use client"

import { FaHtml5, FaCss3, FaNodeJs, FaReact,FaGithub, } from "react-icons/fa";
import {SiTailwindcss, SiMongodb, SiJavascript, SiFirebase} from 'react-icons/si'
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { ScrollArea } from "@radix-ui/react-scroll-area";
import {animate, easeIn, motion} from 'framer-motion'
const Resume = () => {
    const about = {
        title: "About me",
        description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolor natus corrupti praesentium numquam nesciunt. Vel libero ex velit eum in.",
        info: [
        {
            fieldName: "Name",
            fieldValue: "Atic Mahbub"
        },
        
        {
            fieldName: "Age",
            fieldValue: "26"
        },
        {
            fieldName: "Location",
            fieldValue: "Bangladesh"
        },
        {
            fieldName: "Phone",
            fieldValue: "+8801795849206"
        },
        {
            fieldName: "Email",
            fieldValue: "aticcmahbub@gmail.com"
        },
        {
            fieldName: "Profession",
            fieldValue: "Web Developer"
        },
        {
            fieldName: "Education",
            fieldValue: "Hons in Development Studies"
        },

        ]
    }

    const experience = {
        icon: '/assets/resume/badge.svg',
        title: 'My experience',
        description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Error beatae blanditiis vero voluptatum. Tempore quod mollitia esse sint beatae at!",
        items: [
            {
                company: "SofolIT",
                position: "MERN Developer",
                duration: "2023- Present"
            }
        ]
    }

    const education = {
        icon: '/assets/resume/cap.svg',
        title: 'Education',
        description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Error beatae blanditiis vero voluptatum. Tempore quod mollitia esse sint beatae at!",
        items: [
            {
                institution: "Hajee Mohammad Danesh Science and Technology University, Dinajpur",
                degree: "Hons in Development Studies",
                passing: "2024"
            }
        ]
    }

    const skills= {
        title: "My skills",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor quas sed delectus error iure obcaecati nesciunt iste rem a quia.",
        skillset:[
            {
                icon: <FaHtml5/>,
                name: "html 5"
            },
            
            {
                icon: <FaCss3/>,
                name: "css 3"
            },
            {
                icon: <SiJavascript/>,
                name: "javascript"
            },
            {
                icon: <FaReact/>,
                name: "react"
            },
            {
                icon: <FaNodeJs/>,
                name: "nodejs"
            },
            {
                icon: <SiMongodb/>,
                name: "html5"
            },
            {
                icon: <FaGithub/>,
                name: "github"
            },
            {
                icon: <SiTailwindcss/>,
                name: "tailwindcss"
            },
            {
                icon: <SiFirebase/>,
                name: "firebase"
            },

        ]
    }



    return (
        <motion.div
        initial={{opacity:0}}
        animate={{
            opacity:1,
            transition:{delay:2.4, duration: 0.4, ease:easeIn}
        }}
        className="min-h-[80vh] flex items-center justify-center py-12 xl:py-0"
        >
            <div className="container mx-auto"></div>
            </motion.div>
    );
};

export default Resume;