import React, { useEffect } from 'react';
import ProjectsComponent from './ProjectsComponent';
import pokedex0 from '@/assets/pokedex/pokedex-0.png';
import pokedex1 from '@/assets/pokedex/pokedex-1.png';
import pokedex2 from '@/assets/pokedex/pokedex-2.png';
import movienotepad0 from '@/assets/movienotepad/movienotepad0.png';
import movienotepad1 from '@/assets/movienotepad/movienotepad1.png';
import movienotepad2 from '@/assets/movienotepad/movienotepad2.png';
import mazegame0 from '@/assets/mazegame/mazegame0.png';
import mazegame1 from '@/assets/mazegame/mazegame1.png';
import mazegame2 from '@/assets/mazegame/mazegame2.png';
import weatherapp0 from '@/assets/weatherapp/weatherApp0.png';
import weatherapp1 from '@/assets/weatherapp/weatherApp1.png';
import weatherapp2 from '@/assets/weatherapp/weatherApp2.png';
import eatstagram0 from '@/assets/eatstagram/eatstagram0.png';
import eatstagram1 from '@/assets/eatstagram/eatstagram1.png';
import eatstagram2 from '@/assets/eatstagram/eatstagram2.png';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useAnimation } from 'framer-motion';

const Projects = () => {
  const { ref, inView } = useInView({ threshold: 0.2 });
  const animation = useAnimation();

  useEffect(() => {
    if (inView) {
      animation.start({
        x: 0,
        transition: {
          type: 'spring',
          duration: 1.5,
          bounce: 0.1,
        },
      });
    }
    if (!inView) {
      animation.start({
        x: '-100vw',
        transition: {
          duration: 1,
        },
      });
    }

    console.log('inView:', inView);
  }, [inView]);
  return (
    <div ref={ref} className='p-1 flex justify-center items-center py-10' id='Projects'>
      <div className='flex flex-col '>
        <h1 className='text-sky-500 font-bold text-xl 2xl:text-2xl mb-10'>Projects</h1>
        <motion.section animate={animation} className='flex flex-col justify-center items-center self-center '>
          <ProjectsComponent title={'MovieNotepad'} tools={'HTML : CSS : JS : ReactJS : ExpressJS : MongoDB : MUI'} redirect={'https://movienotepad-clientside.onrender.com/'} image={[movienotepad0, movienotepad1, movienotepad2]} description={'A simple application where you can view all the movies/series and can add it to your watchlist, once added you can view all your listed movies and can add notes to it.'} />
          <ProjectsComponent title={'TheMazeGame'} tools={'HTML : CSS : JS '} redirect={'https://phol16.github.io/TheMazeGame/startingPage.html'} image={[mazegame0, mazegame1, mazegame2]} description={'A very simple maze game where you can select difficulty from easy to hard and the objective of the game is to make it to the finish line.'} />
          <ProjectsComponent title={'PokeDex'} tools={'HTML : CSS : JS : ReactJS : MUI'} redirect={'https://reactjs-pokedex.onrender.com/'} image={[pokedex0, pokedex1, pokedex2]} description={'A very simple application where you can see all of the pokemons by their type and it also has a feature where you can capture them and be able to see all of the captured pokemon on your inventory at MyPokemon button.'} />
          <ProjectsComponent title={'Eatstagram'} tools={'HTML : CSS : JS : ReactJS : ExpressJS : MongoDb : Cloudinary : Auth0 '} redirect={'https://proj6-fe.onrender.com/'} image={[eatstagram0, eatstagram1, eatstagram2]} description={`Eatstagram is a mobile view application where you can login into your account and post or upload/publish photos of your favorite foods you can also view other user's posts and can interact on the posts of other user profile, you can also follow other user profile.`} />
          <ProjectsComponent title={'WeatherApp'} tools={'HTML : CSS : JS : ReactJS'} redirect={'https://weather-app-7009.onrender.com/'} image={[weatherapp0, weatherapp1, weatherapp2]} description={'A simple application where it tells you the air tempreature, air pressure, cloud area fraction, relative humidity, wind from direction and wind speed of zamboanga city '} />
        </motion.section>
      </div>
    </div>
  );
};

export default Projects;
