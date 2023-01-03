import React from 'react';
import NavButton from '../NavButton/NavButton.jsx';
import NavHamburger from '../NavHamburger/NavHamburger.jsx';
import Cv from '@/assets/PholibertLim_CV.pdf'
import style from './style.module.css';

const NavBar = () => {
  return (
    <nav className="bg-sky-700 h-20 ">
      <section className="text-2xl font-extrabold absolute flex items-center h-20 w-2/4 justify-end ml-5">Phol</section>
      <div className="flex justify-between items-center h-20 px-6">
        <section>
          <svg width="40" height="40" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M8.33334 37.5C7.18751 37.5 6.20695 37.0924 5.39168 36.2771C4.57501 35.4604 4.16668 34.4792 4.16668 33.3333V10.4167C4.16668 9.27083 4.57501 8.28958 5.39168 7.47292C6.20695 6.65764 7.18751 6.25 8.33334 6.25H41.6667C42.8125 6.25 43.7938 6.65764 44.6104 7.47292C45.4257 8.28958 45.8333 9.27083 45.8333 10.4167V33.3333C45.8333 34.4792 45.4257 35.4604 44.6104 36.2771C43.7938 37.0924 42.8125 37.5 41.6667 37.5H8.33334ZM8.33334 33.3333H41.6667V10.4167H8.33334V33.3333ZM4.16668 43.75C3.5764 43.75 3.08195 43.55 2.68334 43.15C2.28334 42.7514 2.08334 42.2569 2.08334 41.6667C2.08334 41.0764 2.28334 40.5819 2.68334 40.1833C3.08195 39.7833 3.5764 39.5833 4.16668 39.5833H45.8333C46.4236 39.5833 46.9181 39.7833 47.3167 40.1833C47.7167 40.5819 47.9167 41.0764 47.9167 41.6667C47.9167 42.2569 47.7167 42.7514 47.3167 43.15C46.9181 43.55 46.4236 43.75 45.8333 43.75H4.16668ZM8.33334 33.3333V10.4167V33.3333Z" fill="white" />
          </svg>
        </section>
        <NavHamburger />
        <section className={`${style.navButton} lg:block`}>
          <NavButton
            icon={
              <svg width="20" height="20" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M21.0938 0H28.9062C30.2051 0 31.25 1.04492 31.25 2.34375V18.75H39.8145C41.5527 18.75 42.4219 20.8496 41.1914 22.0801L26.3379 36.9434C25.6055 37.6758 24.4043 37.6758 23.6719 36.9434L8.79883 22.0801C7.56836 20.8496 8.4375 18.75 10.1758 18.75H18.75V2.34375C18.75 1.04492 19.7949 0 21.0938 0V0ZM50 36.7188V47.6562C50 48.9551 48.9551 50 47.6562 50H2.34375C1.04492 50 0 48.9551 0 47.6562V36.7188C0 35.4199 1.04492 34.375 2.34375 34.375H16.6699L21.4551 39.1602C23.418 41.123 26.582 41.123 28.5449 39.1602L33.3301 34.375H47.6562C48.9551 34.375 50 35.4199 50 36.7188V36.7188ZM37.8906 45.3125C37.8906 44.2383 37.0117 43.3594 35.9375 43.3594C34.8633 43.3594 33.9844 44.2383 33.9844 45.3125C33.9844 46.3867 34.8633 47.2656 35.9375 47.2656C37.0117 47.2656 37.8906 46.3867 37.8906 45.3125ZM44.1406 45.3125C44.1406 44.2383 43.2617 43.3594 42.1875 43.3594C41.1133 43.3594 40.2344 44.2383 40.2344 45.3125C40.2344 46.3867 41.1133 47.2656 42.1875 47.2656C43.2617 47.2656 44.1406 46.3867 44.1406 45.3125Z"
                  fill="white"
                />
              </svg>
            }
            text={'Resume/Cv'}
            redirect={Cv}
          />
          <NavButton
            icon={
              <svg width="20" height="20" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M15.75 11.75H13.25V9.25H15.75M15.75 21.75H13.25V14.25H15.75M14.5 3C12.8585 3 11.233 3.32332 9.71646 3.95151C8.19989 4.57969 6.8219 5.50043 5.66117 6.66117C3.31696 9.00537 2 12.1848 2 15.5C2 18.8152 3.31696 21.9946 5.66117 24.3388C6.8219 25.4996 8.19989 26.4203 9.71646 27.0485C11.233 27.6767 12.8585 28 14.5 28C17.8152 28 20.9946 26.683 23.3388 24.3388C25.683 21.9946 27 18.8152 27 15.5C27 13.8585 26.6767 12.233 26.0485 10.7165C25.4203 9.19989 24.4996 7.8219 23.3388 6.66117C22.1781 5.50043 20.8001 4.57969 19.2835 3.95151C17.767 3.32332 16.1415 3 14.5 3Z" fill="white" />
              </svg>
            }
            text={'About Me'}
            redirect={'#AboutMe'}
          />
          <NavButton
            icon={
              <svg width="20" height="20" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M0 4.6875C0 3.13477 1.11979 1.875 2.5 1.875H7.5C8.88021 1.875 10 3.13477 10 4.6875V5.625H20V4.6875C20 3.13477 21.1198 1.875 22.5 1.875H27.5C28.8802 1.875 30 3.13477 30 4.6875V10.3125C30 11.8652 28.8802 13.125 27.5 13.125H22.5C21.1198 13.125 20 11.8652 20 10.3125V9.375H10V10.3125C10 10.4121 9.99479 10.5117 9.98438 10.6055L14.1667 16.875H19.1667C20.5469 16.875 21.6667 18.1348 21.6667 19.6875V25.3125C21.6667 26.8652 20.5469 28.125 19.1667 28.125H14.1667C12.7865 28.125 11.6667 26.8652 11.6667 25.3125V19.6875C11.6667 19.5879 11.6719 19.4883 11.6823 19.3945L7.5 13.125H2.5C1.11979 13.125 0 11.8652 0 10.3125V4.6875Z" fill="white" />
              </svg>
            }
            text={'Projects'}
            redirect={'#Projects'}
          />
        </section>
      </div>
    </nav>
  );
};

export default NavBar;
