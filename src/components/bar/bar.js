import React from 'react';
import '../blog/blog.css'
import One from '../one/one'
export default function Blog() {
  return <div className='blog'>
      <p>Most Popular Courses</p>
      <div className='con'>
          <section  className='section2'>
            <One num="187" about="No. of trainings offered"/>
            </section>
          <section className='section2'>
            <One num="23524" about="this"/>
            </section>
          <section className='section2'>
            <One num="187" about="this"/>
            </section>
          <section className='section2'>
            <One num="187" about="this"/>
            </section>
          <section className='section2'>
            <One num="187" about="this"/>
            </section>
          <section className='section2'>
            <One num="187" about="this"/>
            </section>
          <section className='section2'>
            <One num="187" about="this"/>
            </section>
          
      </div>
  </div>;
}
