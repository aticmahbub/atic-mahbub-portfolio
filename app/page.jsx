/* eslint-disable react/no-unescaped-entities */
import { Button } from '@/components/ui/button';
import { FiDownload } from 'react-icons/fi';
import React from 'react';
import Social from '@/components/Social';
import Photo from '@/components/Photo';
import Stats from '@/components/Stats';

const Home = () => {
  return <section className='h-full'>
    <div className="container mx-auto h-full">
      <div className='flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pb-24'>
        {/* text */}
        <div className='text-center xl:text-left order-2 xl:order-none'>
          <span className='text-xl'>MERN Developer</span>
          <h1>
            Hello I'm <br /> <span className='text-accent'>Atic Mahbub</span>
          </h1>
          <p className='max-w-[500px] mb-9 text-white/80'>I am proficient in building web apps which solves problems we face in our daily life
          </p>
          {/* button and socials */}
          <div className='flex flex-col xl:flex-row items-center gap-2'>
          <Button variant="outline"
                  size="lg"
                  className="uppercase flex  items-center gap-2"
              >
            <span>Download CV</span>
            <FiDownload className='text-xl'/>
          </Button>
          <div className='mb-8 xl:mb-0'>
            <Social 
            containerStyles="flex gap-6"
            iconStyles="w-9 h-9 border border-accent rounded-full flex justify-center items-center text-accent hover:bg-accent hover:text-primary hover:transition-all duration-500"
            
            />
          </div>
          </div>
        </div>
        <div className='order-1 xl:order-none '>
          <Photo/>
        </div>
      </div>
          <Stats/>
    </div>
  </section>
    ;
};

export default Home;