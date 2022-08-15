import React  from 'react';
// import { useState } from 'react';
// import { getInvoices } from '../../store/data';
// import { Outlet, Link, Routes, Route } from "react-router-dom";
import Section1 from './Section1';
import Section2 from './Section2';
import Section3 from './Section3';


function Main() {

  return (

  <section className='h-auto bg-light w-[calc(100%-256px)] absolute left-64 top-16 p-7'> {/*top-16 left-64 */}
    <Section1 />
    <Section2 />
    <Section3 />
  </section>

    )
 } 

export default Main;




/*     <div className='h-full bg-light w-[calc(100%-256px)] absolute left-64 top-16 p-7'>
        <h1 className='text-white font-bold text-2xl '>Günlük Müzik İhtiyacın</h1>
        <button className='absolute right-11 text-neutral-400 font-bold tracking-widest text-xs hover:border-b-[1px] hover:text-neutral-400'>SEE ALL</button>
        <div className='card-container'>
          <div className='card'>
            <img src={data[0].image} className='card-img'></img>
            <div className='card-title'>Seven Kalpler</div>
            <div className='card-text'>Hassas Gonullere</div>
          </div>
          <div className='card'>
            <img src='https://scontent.fyei6-4.fna.fbcdn.net/v/t1.6435-9/59273930_10158190034665730_258446302667341824_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=x3hH9SAknIMAX-xL5p2&_nc_ht=scontent.fyei6-4.fna&oh=00_AT8ThGGRhKDumbN1Rvmgme3WmOf8Q8whfyDnWPYEXVpnqA&oe=63150719' className='card-img'></img>
            <div className='card-title'>Seven Kalpler</div>
            <div className='card-text'>Hassas Gonullere</div>
          </div>
          <div className='card'>
            <img src='https://scontent.fyei6-4.fna.fbcdn.net/v/t1.6435-9/59273930_10158190034665730_258446302667341824_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=x3hH9SAknIMAX-xL5p2&_nc_ht=scontent.fyei6-4.fna&oh=00_AT8ThGGRhKDumbN1Rvmgme3WmOf8Q8whfyDnWPYEXVpnqA&oe=63150719' className='card-img'></img>
            <div className='card-title'>Seven Kalpler</div>
            <div className='card-text'>Hassas Gonullere</div>
          </div>
          <div className='card'>
            <img src='https://scontent.fyei6-4.fna.fbcdn.net/v/t1.6435-9/59273930_10158190034665730_258446302667341824_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=x3hH9SAknIMAX-xL5p2&_nc_ht=scontent.fyei6-4.fna&oh=00_AT8ThGGRhKDumbN1Rvmgme3WmOf8Q8whfyDnWPYEXVpnqA&oe=63150719' className='card-img'></img>
            <div className='card-title'>Seven Kalpler</div>
            <div className='card-text'>Hassas Gonullere</div>
          </div>
          <div className='card'>
            <img src='https://scontent.fyei6-4.fna.fbcdn.net/v/t1.6435-9/59273930_10158190034665730_258446302667341824_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=x3hH9SAknIMAX-xL5p2&_nc_ht=scontent.fyei6-4.fna&oh=00_AT8ThGGRhKDumbN1Rvmgme3WmOf8Q8whfyDnWPYEXVpnqA&oe=63150719' className='card-img'></img>
            <div className='card-title'>Seven Kalpler</div>
            <div className='card-text'>Hassas Gonullere</div>
          </div>
        </div>
     </div> */