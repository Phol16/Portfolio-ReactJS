import React from 'react';
import { useNavigate } from 'react-router-dom';

const ProjectsComponent = ({ title, description, image, redirect, tools }) => {
  const navigate = useNavigate();

  const intoThe = () => {
    return window.open(redirect,'_blank');
  };

  return (
    <div className="flex flex-col gap-3 my-5 lg:flex-row justify-between items-between border rounded-lg p-5 bg-zinc-900">
      <section className="flex flex-col items-center gap-5 ">
        <button className="w-max bg-sky-700 w-44 h-10 text-white hover:bg-sky-900 hover:text-gray-500" onClick={intoThe}>
          <p>{title}</p>
        </button>
        <p className='lg:w-60 xl:w-80 text-sky-400 text-center'>{tools}</p>
        <p className="lg:w-60 xl:w-80 ">{description}</p>
      </section>
      <section className="flex items-center justify-center gap-1">
        <img src={image[0]} alt="Photo" className="bg-sky-700 w-28 h-16 sm:w-40 sm:h-28" />
        <img src={image[1]} alt="Photo" className="bg-sky-700 w-28 h-16 sm:w-40 sm:h-28" />
        <img src={image[2]} alt="Photo" className="bg-sky-700 w-28 h-16 sm:w-40 sm:h-28" />
      </section>
    </div>
  );
};

export default ProjectsComponent;
