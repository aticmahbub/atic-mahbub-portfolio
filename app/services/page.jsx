"use client"
import { BsArrowDownRight } from 'react-icons/bs'
import { Link } from 'next/link';
import { easeIn,motion } from 'framer-motion';


const Services = () => {

    const services = [
        {
            num: "01",
            title: "Web Development",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident eveniet culpa nemo fuga delectus ad itaque modi dolorum. Tenetur, minus.",
            href: "vgbhn"
        },
        {
            num: "02",
            title: "UI/UX Designer",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident eveniet culpa nemo fuga delectus ad itaque modi dolorum. Tenetur, minus.",
            href: "kmjkm"
        },
        {
            num: "03",
            title: "SEO",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident eveniet culpa nemo fuga delectus ad itaque modi dolorum. Tenetur, minus.",
            href: "njmkl"
        },
        {
            num: "04",
            title: "Security Researcher",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident eveniet culpa nemo fuga delectus ad itaque modi dolorum. Tenetur, minus.",
            href: "bhnjkm"
        },
    ]
    return (
        <section className='min-h-[80] flex flex-col justify-center py-12 xl:py-0'>
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
                                        <a href={service.href}><BsArrowDownRight/></a>
                                        {/* <h2>hiii</h2> */}
                                    </div>
                                <h2>{service.title}</h2>
                                <p>{service.description}</p>
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