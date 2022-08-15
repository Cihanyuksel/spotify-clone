import React from 'react';
import { Link } from "react-router-dom";
import { useNavigate, useMatch } from "react-router-dom";
import SearchInput from './SearchInput';

function Header() {

  const navigate = useNavigate();
  const searchRoute = useMatch('/search');

  return (
    <header>

        <div className='h-16 bg-header w-[calc(100%-256px)] fixed left-64 z-10 '>

            <div className="h-16 flex justify-between items-center mx-8">

              <div className="flex gap-x-3 items-center">
                <button onClick={ () => { navigate(-1) } } type="button" className="relative h-8 w-8 rounded-full bg-black/70 mr-1"><svg xmlns="http://www.w3.org/2000/svg" height="24" width="24" fill='#b3b3b3' viewBox="0 0 24 24" className="absolute top-1 left-1"><path d="M15.957 2.793a1 1 0 010 1.414L8.164 12l7.793 7.793a1 1 0 11-1.414 1.414L5.336 12l9.207-9.207a1 1 0 011.414 0z"/></svg></button>
                <button onClick={ () => { navigate(+1) } } type="button" className="relative h-8 w-8 rounded-full bg-black/70"><svg xmlns="http://www.w3.org/2000/svg" height="24" width="24" fill='#b3b3b3' viewBox="0 0 24 24" className="absolute top-1 left-1"><path d="M8.043 2.793a1 1 0 000 1.414L15.836 12l-7.793 7.793a1 1 0 101.414 1.414L18.664 12 9.457 2.793a1 1 0 00-1.414 0z"/></svg></button>
                {searchRoute && <SearchInput/> }
              </div>


              <div className="flex gap-x-6 text-base text-neutral-400 font-bold">
                <button className="header-btn">Premium</button>
                <button className="header-btn">Support</button>
                <button className="header-btn">Download</button>
                <span   className="tracking-widest text-3xl font-thin mb-1">|</span>
                <Link to="/signup" className="tracking-widest mt-3 hover:text-neutral-100 transition-colors hover:scale-105">Sign Up</Link>
                <Link  to="/login" className="bg-white text-black py-3 px-7 rounded-3xl">Log in</Link>
              </div>
            </div>
        </div>        
    </header>
  )
}

export default Header