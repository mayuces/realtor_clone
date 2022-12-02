import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

export default function Header() {
  const location = useLocation();
  const navigate = useNavigate();

  const pathMatchRoute = (route: string) => {
    if (route === location.pathname) {
      return true;
    }
  };

  return (
    <div className='bg-white border-b shadow-sm sticky top-0 z-50'>
      <header className='flex justify-between items-center px-3 max-w-6xl mx-auto'>
        <div className="logo">
          <img 
            src="https://static.rdc.moveaws.com/images/logos/rdc-logo-default.svg" 
            alt="logo"
            className='h-5 cursor-pointer'
            onClick={() => navigate('/')}
          />
        </div>
        <div className="menu">
          <ul className='flex space-x-10'>
            <li 
              className={`py-3 
              text-sn 
              font-semibold 
              text-gray-400 
              border-b-[3px] 
              border-b-transparent
              cursor-pointer 
              ${pathMatchRoute('/') && 'text-black border-b-red-500'}`}
              onClick={() => navigate('/')}
            >
                Home
            </li>
            <li 
              className={`py-3 
              text-sn 
              font-semibold 
              text-gray-400 
              border-b-[3px] 
              border-b-transparent 
              cursor-pointer
              ${pathMatchRoute('/offers') && 'text-black border-b-red-500'}`}
              onClick={() => navigate('/offers')}
            >
                Offers
            </li>
            <li 
              className={`py-3 
              text-sn 
              font-semibold 
              text-gray-400 
              border-b-[3px] 
              border-b-transparent 
              cursor-pointer
              ${pathMatchRoute('/sign-in') && 'text-black border-b-red-500'}`}
              onClick={() => navigate('/sign-in')}
            >
                Sign In
            </li>
          </ul>
        </div>
      </header>
    </div>
  )
}
