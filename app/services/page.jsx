"use client"
import { BsArrowDownRight } from 'react-icons/bs'
import { Link } from 'next/link';
import { easeIn,motion } from 'framer-motion';
import Head from 'next/head';


const Services = () => {

    const services = [
        {
            num: "01",
            title: "Full-stack",
            description: "I provide end-to-end development services that cover everything from the front end to the back end. Whether it's building responsive user interfaces or developing robust server-side applications, I ensure a seamless and integrated experience tailored specific needs.",
            href: "contact"
        },
        {
            num: "02",
            title: "MERN Stack",
            description: "Specialized in MERN stack development, combining MongoDB, Express, React, and Node.js to build high-performance web applications. Focused on delivering full-featured, interactive user experiences and efficient server-side operations. ",
            href: "contact"
        },
        {
            num: "03",
            title: "Next JS",
            description: "Expertise in Next.js development, offering services for building optimized, server-rendered applications using the React framework. Solutions include static site generation, server-side rendering, and seamless API integration. ",
            href: "contact"
        },
        {
            num: "04",
            title: "Web Design",
            description: "Providing professional web design services that prioritize aesthetics, usability, and responsiveness. Focused on creating visually appealing and intuitive websites that reflect the brand's identity and engage the target audience.",
            href: "contact"
        },
    ]
    return (
        
        <section className='min-h-[80] flex flex-col justify-center py-12 xl:py-0'>
           <Head>
      <title>My page title</title>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head> 
            <div className='container mx-auto'>
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1, transition: { delay: 2.4, duration: 0.4, ease: "easeIn" } }}
                className='grid grid-cols-1 md:grid-cols-2 gap-[60px]'
                >
                    {
                        services.map((service, index) => {
                            return <div 
                            key={index}
                            className='flex-1 flex flex-col justify-center gap-6 group'
                            >
                                <div className='w-full justify-between flex items-center'>
                                    <div className='text-5xl font-extrabold text-outline text-transparent group-hover:text-outline-hover transition-all duration-500'>
                                        {service.num}</div>
                                        <a href={service.href}
                                        className='w-[70px] h-[70px] rounded-full bg-white group-hover:bg-accent transition-all duration-500 flex justify-center items-center hover:-rotate-45 '
                                        ><BsArrowDownRight className='text-primary text-3xl'/></a>
                                        {/* <h2>hiii</h2> */}
                                    </div>
                                <h2 className='text-[42] font-bold leading-none text-white group-hover:text-accent transition-all duration-500'>{service.title}</h2>
                                <p className='text-white/60'>{service.description}</p>
                                <div className='border-b border-white/20 w-full'></div>
                            </div>
                        })
                    }
                </motion.div>
            </div>
        </section>
    );
};

export default Services;