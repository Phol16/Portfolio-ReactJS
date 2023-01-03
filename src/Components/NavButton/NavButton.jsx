import React from 'react';
import { motion } from 'framer-motion';

const NavButton = ({ icon, text, redirect }) => {
  return (
    <a href={redirect}>
      <motion.button whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.9 }} transition={{ type: 'spring', stiffness: 400, damping: 17 }} className='flex-col bg-transparent px-5 py-2 border-none focus:outline-none'>
        <div className='flex justify-center'>{icon}</div>
        <p className='text-xs text-center text-white'>{text}</p>
      </motion.button>
    </a>
  );
};

export default NavButton;
