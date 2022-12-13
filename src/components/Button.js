import React from 'react'

const Button = (props) => {
  return (
    <button onClick={props.onClick} className={` ${props.theme === 'light' ? ' text-black' : 'text-white'} text-2xl text-white flex justify-center items-center font-[Poppins] py-2 px-6 rounded md:ml-8 hover:text-gray-200 
    duration-500`}>
      {props.children}
    </button>
  )
}

export default Button