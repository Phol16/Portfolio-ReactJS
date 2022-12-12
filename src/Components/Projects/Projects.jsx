import React from 'react';
import ProjectsComponent from './ProjectsComponent';
import pokedex0 from '../../assets/pokedex/pokedex-0.png';
import pokedex1 from '../../assets/pokedex/pokedex-1.png';
import pokedex2 from '../../assets/pokedex/pokedex-2.png';
import movienotepad0 from '../../assets/movienotepad/movienotepad0.png';
import movienotepad1 from '../../assets/movienotepad/movienotepad1.png';
import movienotepad2 from '../../assets/movienotepad/movienotepad2.png';
import mazegame0 from '../../assets/mazegame/mazegame0.png';
import mazegame1 from '../../assets/mazegame/mazegame1.png';
import mazegame2 from '../../assets/mazegame/mazegame2.png';

const Projects = () => {
  return (
    <div className="p-1 flex justify-center items-center py-10">
      <div className="flex flex-col ">
        <h1 className="text-sky-500 font-bold text-xl 2xl:text-2xl mb-10">Projects</h1>
        <section className="flex flex-col justify-center items-center self-center ">
          <ProjectsComponent title={'MovieNotepad'} redirect={'https://movienotepad-clientside.onrender.com/'} image={[movienotepad0, movienotepad1, movienotepad2]} description={'A simple application where you can view all the movies/series and can add it to your watchlist, once added you can view all your listed movies and can add notes to it.'} />
          <ProjectsComponent title={'TheMazeGame'} redirect={'#'} image={[mazegame0, mazegame1, mazegame2]} description={'A very simple maze game where you can select difficulty from easy to hard and the objective of the game is to make it to the finish line.'} />
          <ProjectsComponent title={'PokeDex'} redirect={'https://reactjs-pokedex.onrender.com/'} image={[pokedex0, pokedex1, pokedex2]} description={'A very simple application where you can see all of the pokemons by their type and it also has a feature where you can capture them and be able to see all of the captured pokemon on your inventory at MyPokemon button.'} />
        </section>
      </div>
    </div>
  );
};

export default Projects;
