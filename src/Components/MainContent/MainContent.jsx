import React from 'react';
import style from './style.module.css';
import Me from '../../assets/me-nobg.png';

const MainContent = () => {
  return (
    <section className="flex flex-col justify-center items-center mb-1">
      <div className={`${style.container} sm:flex-col 2xl:flex-row`}>
        <img src={Me} alt="Me" className="h-2/6 m-16 hidden sm:block" />
        <div className={`lg:text-4xl leading-normal self-center tracking-wide ${style.textContainer}`}>
          <p>Hi! My name is Phol</p>
          <span className="flex">
            I am a
            <ul className={`text-sky-500 ml-4 font-extrabold ${style.dynamicText}`}>
              <li>
                <span>PROGRAMMER</span>
              </li>
              <li>
                <span>COMPUTER GAMER</span>
              </li>
              <li>
                <span>MOVIE ENTHUSIAST</span>
              </li>
            </ul>
          </span>
        </div>
      </div>
      <a href='#AboutMe'>
      <button className="bg-neutral-800 border-none">
        <svg width="20" height="30" viewBox="0 0 41 50" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M17.9446 25.0321L0.884373 7.9719C-0.294791 6.79274 -0.294791 4.886 0.884373 3.71938L3.71938 0.884373C4.89855 -0.294791 6.80528 -0.294791 7.9719 0.884373L20.0646 12.9771L32.1573 0.884373C33.3365 -0.294791 35.2432 -0.294791 36.4098 0.884373L39.2699 3.70684C40.4491 4.886 40.4491 6.79274 39.2699 7.95935L22.2097 25.0196C21.0305 26.2113 19.1238 26.2113 17.9446 25.0321V25.0321ZM22.2097 49.1172L39.2699 32.0569C40.4491 30.8778 40.4491 28.971 39.2699 27.8044L36.4349 24.9694C35.2557 23.7903 33.349 23.7903 32.1824 24.9694L20.0771 37.0496L7.98444 24.9569C6.80528 23.7777 4.89855 23.7777 3.73193 24.9569L0.884373 27.7919C-0.294791 28.971 -0.294791 30.8778 0.884373 32.0444L17.9446 49.1046C19.1238 50.2964 21.0305 50.2963 22.2097 49.1172Z" fill="#0077B6" />
        </svg>
      </button>
      </a>
    </section>
  );
};

export default MainContent;
