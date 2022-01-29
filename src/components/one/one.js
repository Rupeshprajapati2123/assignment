import React from 'react';
import './one.css'
export default function One(props) {
  return <div className='one'>
      <p className='head1'>{props.num}</p>
      <p className='head2'>{props.about}</p>
  </div>;
}
