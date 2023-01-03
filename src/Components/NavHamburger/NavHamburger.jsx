import React, { useRef } from 'react';
import { Drawer, DrawerOverlay, DrawerContent, DrawerCloseButton, useDisclosure, Button, Input } from '@chakra-ui/react';
import NavButton from '../NavButton/NavButton.jsx';
import Cv from '@/assets/PholibertLim_CV.pdf';
import NavHamburgerFooter from './NavHamburgerFooter/NavHamburgerFooter.jsx';

const NavHamburger = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = useRef();

  return (
    <div className="lg:hidden">
      <Button ref={btnRef} bg="transparent" onClick={onOpen}>
        <svg width="38" height="30" viewBox="0 0 58 50" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M2.04082 9.18367H55.102C56.2292 9.18367 57.1429 8.27003 57.1429 7.14286V2.04082C57.1429 0.913648 56.2292 0 55.102 0H2.04082C0.913648 0 0 0.913648 0 2.04082V7.14286C0 8.27003 0.913648 9.18367 2.04082 9.18367ZM2.04082 29.5918H55.102C56.2292 29.5918 57.1429 28.6782 57.1429 27.551V22.449C57.1429 21.3218 56.2292 20.4082 55.102 20.4082H2.04082C0.913648 20.4082 0 21.3218 0 22.449V27.551C0 28.6782 0.913648 29.5918 2.04082 29.5918ZM2.04082 50H55.102C56.2292 50 57.1429 49.0864 57.1429 47.9592V42.8571C57.1429 41.73 56.2292 40.8163 55.102 40.8163H2.04082C0.913648 40.8163 0 41.73 0 42.8571V47.9592C0 49.0864 0.913648 50 2.04082 50Z" fill="white" />
        </svg>
      </Button>
      <Drawer isOpen={isOpen} placement="right" onClose={onClose} finalFocusRef={'stay'}>
        <DrawerOverlay />
        <DrawerContent bg="#262626" className="flex justify-between items-center gap-5">
          <DrawerCloseButton color="white"/>
            <h1 className="text-white p-3">Phol</h1>
            <section className="flex flex-col gap-5 items-center">
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
            <NavHamburgerFooter />
        </DrawerContent>
      </Drawer>
    </div>
  );
};

export default NavHamburger;
