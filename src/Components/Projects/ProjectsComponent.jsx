import React from 'react';
import { motion } from 'framer-motion';

const ProjectsComponent = ({ title, description, image, redirect, tools }) => {
  const intoThe = () => {
    return window.open(redirect, '_blank');
  };

  return (
    <div className='flex flex-col gap-3 my-5 justify-between items-between border border-sky-700 rounded-lg p-5 bg-zinc-900'>
      <section className='flex flex-col items-center gap-5 '>
        <motion.button whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.9 }} transition={{ type: 'spring', stiffness: 400, damping: 17 }} className='w-max bg-sky-700 w-44 h-10 text-white hover:bg-sky-900 hover:text-gray-500' onClick={intoThe}>
          <p>{title}</p>
        </motion.button>
        <p className='max-w-md text-sky-400 text-center'>{tools}</p>
        <p className='max-w-md  '>{description}</p>
      </section>
      <section className='flex items-center justify-center gap-1'>
        <img src={image[0]} alt='Photo' className='bg-sky-700 w-28 h-16 sm:w-40 sm:h-28 rounded-md' />
        <img src={image[1]} alt='Photo' className='bg-sky-700 w-28 h-16 sm:w-40 sm:h-28 rounded-md' />
        <img src={image[2]} alt='Photo' className='bg-sky-700 w-28 h-16 sm:w-40 sm:h-28 rounded-md' />
      </section>
    </div>
  );
};

export default ProjectsComponent;
