import React from 'react';
import { useState } from 'react';
import { getInvoices } from '../../store/data';
import {Link, useLocation} from "react-router-dom";


function Main() {

  const params = useLocation();
  console.log(params.pathname)

  let data = getInvoices();
  
  const [noOfElement, setNoOfElement] = useState(4);
  let newData = data.slice(0, noOfElement);

  if(params.pathname === "/") {
    newData = data.slice(0, 4);
  }

const loadMore = () => {
     setNoOfElement(noOfElement + data.length)
}

  return (
  <div>
    <h2 className='text-white font-bold text-2xl '>Günlük Müzik İhtiyacın</h2>
    <Link to="daily" className='absolute right-11 text-neutral-400 font-bold tracking-widest text-xs hover:border-b-[1px] hover:text-neutral-400' onClick={() => loadMore()}>SEE ALL</Link>     
    <div className='card-container '>
      {newData.map((item, i)=> {
        return (
          <div className='card group' key={i}>
            <img src={item.image} className='card-img' alt={item.title}></img>
            <button className='h-10 w-10 bg-green-500 rounded-full absolute bottom-24 right-5 opacity-0 group-hover:opacity-100 transition-all flex items-center justify-center'>
            <svg role="img" height="24" width="24" viewBox="0 0 24 24" fill='#fff'><path d="M7.05 3.606l13.49 7.788a.7.7 0 010 1.212L7.05 20.394A.7.7 0 016 19.788V4.212a.7.7 0 011.05-.606z"/></svg>
            </button>
            <div className='card-title'>{item.title}</div>
            <div className='card-text'>{item.desc}</div>
          </div>
        )
      })} 
    </div>
    {/* <Outlet /> */}
  </div>
    )
 } 

export default Main;
