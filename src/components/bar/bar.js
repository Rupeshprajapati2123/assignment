import React from 'react';
import '../blog/blog.css'
import One from '../one/one'
export default function Blog() {
  return <div className='blog'>
      <p>Most Popular Courses</p>
      <div className='con'>
          <section  className='section2'>
            <One num="23549" about="No. of trainings offered"/>
            </section>
          <section className='section2'>
            <One num="159" about="Number  of training sessions conducted"/>
            </section>
          <section className='section2'>
            <One num="187" about="Number of jobs available"/>
            </section>
          <section className='section2'>
            <One num="158" about="Number of career supported"/>
            </section>
          <section className='section2'>
            <One num="2.5L" about="Number of candidated enrolled till date"/>
            </section>
          
      </div>
  </div>;
}
