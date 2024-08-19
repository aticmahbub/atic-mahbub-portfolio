"use client"

import { FaHtml5, FaCss3, FaNodeJs, FaReact,FaGithub, } from "react-icons/fa";
import {SiTailwindcss, SiMongodb, SiJavascript} from 'react-icons/si'


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
    return (
        <div>
            Resume
        </div>
    );
};

export default Resume;