"use client"

import { FaHtml5, FaCss3, FaNodeJs, FaReact, FaGithub, } from "react-icons/fa";
import { SiTailwindcss, SiMongodb, SiJavascript, SiFirebase } from 'react-icons/si'
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { ScrollArea } from "@radix-ui/react-scroll-area";
import { animate, easeIn, motion } from 'framer-motion'
const Resume = () => {
    const about = {
        title: "About me",
        description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolor natus corrupti praesentium numquam nesciunt. Vel libero ex velit eum in.",
        items: [
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

    const skills = {
        title: "My skills",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor quas sed delectus error iure obcaecati nesciunt iste rem a quia.",
        items: [
            {
                icon: <FaHtml5 />,
                name: "html 5"
            },

            {
                icon: <FaCss3 />,
                name: "css 3"
            },
            {
                icon: <SiJavascript />,
                name: "javascript"
            },
            {
                icon: <FaReact />,
                name: "react"
            },
            {
                icon: <FaNodeJs />,
                name: "nodejs"
            },
            {
                icon: <SiMongodb />,
                name: "html5"
            },
            {
                icon: <FaGithub />,
                name: "github"
            },
            {
                icon: <SiTailwindcss />,
                name: "tailwindcss"
            },
            {
                icon: <SiFirebase />,
                name: "firebase"
            },

        ]
    }



    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{
                opacity: 1,
                transition: { delay: 2.4, duration: 0.4, ease: easeIn }
            }}
            className="min-h-[80vh] flex items-center justify-center py-12 xl:py-0"
        >
            <div className="container mx-auto">
                <Tabs
                    defaultValue="experience"
                    className="flex flex-col xl:flex-row gap-[60]">
                    <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6">
                        <TabsTrigger value="experience">Experience</TabsTrigger>
                        <TabsTrigger value="education">Education</TabsTrigger>
                        <TabsTrigger value="skills">Skills</TabsTrigger>
                        <TabsTrigger value="about">About</TabsTrigger>
                    </TabsList>
                    <div className="min-h-[70vh] w-full">
                        <TabsContent value="experience" className="w-full ">
                            <div className="flex flex-col gap-30 text-center xl:text-left">
                                <h3 className="text-4xl font-bold">{experience.title}</h3>
                                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">{experience.description}</p>
                                <ScrollArea className="h-[400px]">
                                    <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                                        {
                                            experience.items.map((item, index) => {
                                                return <li
                                                    className="bg-#232329 h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start  gap-1 "
                                                    key={index}>
                                                    <span className="text-accent">{item.duration}</span>
                                                    <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">{item.position}</h3>
                                                    <div className="flex items-center gap-3">
                                                        <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                                                        <p className="text-white/60">{item.company}</p>
                                                    </div>
                                                </li>
                                            })
                                        }
                                    </ul>
                                </ScrollArea>
                            </div>
                        </TabsContent>
                        <TabsContent value="education" className="w-full ">
                            <div className="flex flex-col gap-30 text-center xl:text-left">
                                <h3 className="text-4xl font-bold">{education.title}</h3>
                                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">{education.description}</p>
                                <ScrollArea className="h-[400px]">
                                    <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                                        {
                                            education.items.map((item, index) => {
                                                return <li
                                                    className="bg-#232329 h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start  gap-1 "
                                                    key={index}>
                                                    <span className="text-accent">{item.passing}</span>
                                                    <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">{item.degree}</h3>
                                                    <div className="flex items-center gap-3">
                                                        <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                                                        <p className="text-white/60">{item.institution}</p>
                                                    </div>
                                                </li>
                                            })
                                        }
                                    </ul>
                                </ScrollArea>
                            </div>
                        </TabsContent>
                        <TabsContent value="skills" className="w-full ">
                            <div className="flex flex-col gap-[30px]">
                                <div className="flex flex-col gap-[30x] text-center xl:text-left">
                                    <h3 className="text-4xl font-bold ">{skills.title}</h3>
                                    <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">{skills.description}</p>
                                </div>
                                <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 xl:gap-[30px] ">
                                    {
                                        skills.items.map((item,index) =>{
                                            return <li key={index}>
                                                <TooltipProvider delayDuration={100}>
                                                    <Tooltip>
                                                        <TooltipTrigger className="w-full h-[150px] bg-[#232329] rounded-xl flex justify-center items-center group">
                                                            <div className="text-6xl group-hover:text-accent transition-all duration-300">
                                                                {item.icon}
                                                            </div>
                                                        </TooltipTrigger>
                                                        <TooltipContent>
                                                            <p className="capitalize">{item.name}</p>
                                                        </TooltipContent>
                                                    </Tooltip>
                                                </TooltipProvider>
                                            </li>
                                        })
                                    }
                                </ul>
                            </div>
                        </TabsContent>
                        <TabsContent value="about" className="w-full ">
                            <div className="flex flex-col gap-[30px]">
                                <h3 className="text-4xl font-bold">{about.title}</h3>
                                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">{about.description}</p>    
                                <ul className="grid grid-cols-1 xl:grid-cols-2 gap-y-6 max-w-[620px] mx-auto xl:mx-0">
                                    {
                                        about.items.map((item, index) =>{
                                            return <li 
                                            className="flex items-center justify-center xl:justify-start gap-4"
                                            key={index}>
                                                <span className="text-white/60">{item.fieldName}</span>
                                                <span className="text-xl">{item.fieldValue}</span>
                                            </li>
                                        })
                                    }
                                </ul>
                            </div>
                        </TabsContent>
                    </div>
                </Tabs>
            </div>
        </motion.div>
    );
};

export default Resume;