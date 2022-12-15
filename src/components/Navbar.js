import React, { useState, useContext } from 'react'
import themeContext from '../context/themeContext';
import { Link } from 'react-router-dom';

const Navbar = () => {
    let Links =[
      {name:"About",link:"/about"},
      {name:"Projects",link:"/projects"},
      {name:"Resume",link:"/resume"},
      {name:"Contact",link:"/contact"},
    ];
    let [open,setOpen] = useState(false);
    const Theme = useContext(themeContext);

    const theme = Theme.state.theme;
    console.log(theme)
    // for toggling the mode of the page dark and light
    const toggleMode = ()=>{
      const mode = Theme.state.theme;
      if(mode === 'light'){
        Theme.update({"theme":"dark"})
      } else {
        Theme.update({"theme":"light"})
      }
    }


  return (
    <div className='shadow-md w-full fixed top-0 left-0 relative z-30'>
      <div className={`md:flex items-center justify-between ${ theme==='dark' ?'bg-gray-700 text-white': 'bg-white'} py-4 md:px-10 px-7`}>
      <div className='font-bold text-2xl cursor-pointer flex items-center font-[Poppins] '>
        <span className='text-3xl text-indigo-600 mr-1 pt-2'>
        {/* <ion-icon name="logo-ionic"></ion-icon> */}
        </span>
        <Link to="/">
        KR.
        </Link>
      </div>
      
      <div onClick={()=>setOpen(!open)} className='text-3xl absolute right-8 top-6 cursor-pointer md:hidden'>
      <ion-icon name={open ? 'close':'menu'}></ion-icon>
      </div>

      <ul className={`${open ? theme==='dark' ? 'bg-gray-700' :'bg-gray-600 text-white': theme==='dark' ? 'bg-gray-700' :'bg-white'} md:flex md:items-center md:pb-0 pb-12 absolute md:static md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${open ? 'top-10 ':'top-[-490px]'}`}>
        {
          Links.map((link)=>(
            <li key={link.name} className='md:ml-8 text-xl md:my-0 my-7'>
            <Link to={link.link} onClick={()=>{setOpen(false)}} className=' hover:text-gray-300 duration-500'>{link.name}</Link>
              
            </li>
          ))
        }
        <li className='md:ml-8 text-2xl md:my-0 my-7'>
        <ion-icon onClick={toggleMode} name="contrast-outline"></ion-icon>
        </li>

      </ul>
      </div>
    </div>
  )
}

export default Navbar