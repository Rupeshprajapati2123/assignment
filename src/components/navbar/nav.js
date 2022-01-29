import React from 'react';
import img from '../../public/images/icon.png';
import './nav.css'
export default function Nav() {
  return <div className='nav'>
 <img alt="develup" src={img} style={{width:"155px" ,height:"54px"}}></img>
 <input type="text" placeholder=' Search for courses' />
  </div>;
}
