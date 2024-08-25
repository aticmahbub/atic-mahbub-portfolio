"use client"

/* eslint-disable react/no-unescaped-entities */
import { Button } from '@/components/ui/button';
import { FiDownload } from 'react-icons/fi';
import React, { useEffect } from 'react';
import Social from '@/components/Social';
import Photo from '@/components/Photo';
import Stats from '@/components/Stats';
import Link from 'next/link';
import Head from 'next/head';


const Home = () => {

  useEffect(() => {
    document.title = "Atic Mahbub";
  }, []);
  return <section className='h-full'>


    <div className="container mx-auto h-full">
    <Head>
        <title>{document.title}</title>
        <meta
          name="description"
          content="example description"
        />
      </Head>
      <div className='flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pb-24'>
        {/* text */}
        <div className='text-center xl:text-left order-2 xl:order-none'>
          <span className='text-xl'>MERN Developer</span>
          <h1>
            Hello I'm <br /> <span className='text-accent'>Atic Mahbub</span>
          </h1>
          <p className='max-w-[500px] mb-9 text-white/80'>I am a passionate web developer specializing in  MERN stack, Next.js, and Web design.I offer to help businesses and individuals create modern, responsive, and user-friendly web applications. Explore my work and see how I can help bring your digital ideas to life."</p>
          {/* button and socials */}
          <div className='flex flex-col xl:flex-row items-center gap-2'>
              <Link
              href='https://drive.google.com/file/d/1q-pbQOR_GyZ31HkOYqtvmq0fiRIdCL4G/view?usp=drive_link'
              >
            <Button
              variant="outline"
              size="lg"
              className="uppercase flex  items-center gap-2"
            >
              <span>Download CV</span>
              <FiDownload className='text-xl' />
            </Button>
              </Link>
            <div className='mb-8 xl:mb-0'>
              <Social
                containerStyles="flex gap-6"
                iconStyles="w-9 h-9 border border-accent rounded-full flex justify-center items-center text-accent hover:bg-accent hover:text-primary hover:transition-all duration-500"

              />
            </div>
          </div>
        </div>
        <div className='order-1 xl:order-none '>
          <Photo />
        </div>
      </div>
      <Stats />
    </div>
  </section>
    ;
};

export default Home;