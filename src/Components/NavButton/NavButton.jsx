import React from 'react'

const NavButton = ({icon, text, redirect}) => {
  return (
      <a href={redirect}><button className='flex-col bg-transparent px-5 py-2'>
        <div className='flex justify-center'>{icon}</div>
        <p className='text-xs text-center text-white'>{text}</p>
        </button>
        </a>
  )
}

export default NavButton