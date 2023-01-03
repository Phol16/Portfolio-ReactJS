import React from 'react';
import SkillsIcons from './SkillsIcon/SkillsIcons';
import style from './style.module.css'

const AboutMe = () => {
  return (
    <div className="flex justify-center bg-sky-700 " id='AboutMe'>
      <section className="bg-neutral-800 sm:w-4/5 flex flex-col justify-evenly items-center gap-16 py-20 px-2">
        <div className={`${style.topContainer} xl:3/12 lg:w-6/12 sm:w-9/12 leading-8 `}>
          <h1 className="text-sky-500 font-bold mb-3 text-xl 2xl:text-2xl" >About Me</h1>
          <p className='sm:text-sm 2xl:text-base indent-5'> My name is Pholibert U. Lim Jr. I spend time learning new things specifically in coding because I'm passionate about learning things or tools that are necessary to improve my knowledge in the tech world. currently I’m knowledgeable in using MERN stack. below are more details about me.</p>
        </div>
        <div className={`${style.bottomContainer} flex md:flex-row sm:w-9/12 sm:justify-between lg:justify-around gap-5`}>
          <section className='mr-1'>
            <h1 className="text-sky-500 font-bold mb-3 sm:text-base 2xl:text-xl">Education</h1>
            <li className='sm:text-sm 2xl:text-base m-1'>Tertiary</li>
            <p className='mb-5 sm:text-xs 2xl:text-base'>
              Ateneo de Zamboanga University <br />
              LaPurisima St., Zamboanga City <br /> Bachelor of Science in Computer Engineering <br /> (June 2015 - March 2021)
            </p>
            <li className='sm:text-sm 2xl:text-base m-1'>Secondary</li>
            <p className='mb-5 sm:text-xs 2xl:text-base'>
              Pilar College of Zamboanga City, Inc <br />
              RT. Lim Boulevard, Zamboanga City
              <br />
              (June 2011 - March 2015)
            </p>
            <li className='sm:text-sm 2xl:text-base m-1'>Elementary</li>
            <p className='sm:text-xs 2xl:text-base '>
              Pilar College of Zamboanga City, Inc <br />
              RT. Lim Boulevard, Zamboanga City
              <br />
              (June 2004 - March 2011)
            </p>
          </section>
          <section className='flex flex-col justify-around gap-5'>
            <div>
              <h1 className="text-sky-500 font-bold  mb-3 sm:text-base 2xl:text-xl md:text-center">Training</h1>
              <li className='sm:text-sm 2xl:text-base'>Uplift CodeCamp</li>
              <p className='sm:text-xs 2xl:text-base'>July 16, 2022 - Dec 23, 2022 (MERN stack)</p>
            </div>
            <div>
              <h1 className="text-sky-500 font-bold  mb-3 sm:text-base 2xl:text-xl md:text-center">Skills</h1>
              <SkillsIcons/>
            </div>
          </section>
        </div>
      </section>
    </div>
  );
};

export default AboutMe;
