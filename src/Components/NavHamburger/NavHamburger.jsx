import React, { useRef } from 'react';
import { Drawer, DrawerBody, DrawerFooter, DrawerHeader, DrawerOverlay, DrawerContent, DrawerCloseButton, useDisclosure, Button, Input } from '@chakra-ui/react';
import NavButton from '../NavButton/NavButton';

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
      <Drawer isOpen={isOpen} placement="right" onClose={onClose} finalFocusRef={btnRef}>
        <DrawerOverlay />
        <DrawerContent bg="#262626" className="flex justify-center items-center gap-5">
          <DrawerCloseButton color="white" />
          <NavButton
            icon={
              <svg width="20" height="20" viewBox="0 0 30 29" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M0 29V9L15 -1L30 9V29H18.75V17.3333H11.25V29H0Z" fill="white" />
              </svg>
            }
            text={'Home'}
          />
          <NavButton
            icon={
              <svg width="20" height="20" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M15.75 11.75H13.25V9.25H15.75M15.75 21.75H13.25V14.25H15.75M14.5 3C12.8585 3 11.233 3.32332 9.71646 3.95151C8.19989 4.57969 6.8219 5.50043 5.66117 6.66117C3.31696 9.00537 2 12.1848 2 15.5C2 18.8152 3.31696 21.9946 5.66117 24.3388C6.8219 25.4996 8.19989 26.4203 9.71646 27.0485C11.233 27.6767 12.8585 28 14.5 28C17.8152 28 20.9946 26.683 23.3388 24.3388C25.683 21.9946 27 18.8152 27 15.5C27 13.8585 26.6767 12.233 26.0485 10.7165C25.4203 9.19989 24.4996 7.8219 23.3388 6.66117C22.1781 5.50043 20.8001 4.57969 19.2835 3.95151C17.767 3.32332 16.1415 3 14.5 3Z" fill="white" />
              </svg>
            }
            text={'About Me'}
          />
          <NavButton
            icon={
              <svg width="20" height="20" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M0 4.6875C0 3.13477 1.11979 1.875 2.5 1.875H7.5C8.88021 1.875 10 3.13477 10 4.6875V5.625H20V4.6875C20 3.13477 21.1198 1.875 22.5 1.875H27.5C28.8802 1.875 30 3.13477 30 4.6875V10.3125C30 11.8652 28.8802 13.125 27.5 13.125H22.5C21.1198 13.125 20 11.8652 20 10.3125V9.375H10V10.3125C10 10.4121 9.99479 10.5117 9.98438 10.6055L14.1667 16.875H19.1667C20.5469 16.875 21.6667 18.1348 21.6667 19.6875V25.3125C21.6667 26.8652 20.5469 28.125 19.1667 28.125H14.1667C12.7865 28.125 11.6667 26.8652 11.6667 25.3125V19.6875C11.6667 19.5879 11.6719 19.4883 11.6823 19.3945L7.5 13.125H2.5C1.11979 13.125 0 11.8652 0 10.3125V4.6875Z" fill="white" />
              </svg>
            }
            text={'Projects'}
          />
        </DrawerContent>
      </Drawer>
    </div>
  );
};

export default NavHamburger;
