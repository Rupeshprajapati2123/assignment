import React from 'react';
import './footer.css'
export default function Footer() {
  return <div className='cd'>
      <div className='upp'>
          <div style={{marginBottom:"1rem"}}>
      <p style={{fontSize:"1.5rem"}}>Sign up and stay updated on your career</p>
      <input style={{borderRadius:"0px", width:"15rem"}}type="mail" placeholder='Email' />
      </div>
      <div>
      <p style={{fontSize:"1.5rem"}}>Stay Connnectd on social</p>
      <a href="#" class="fa fa-facebook icon"></a>
<a href="#" class="fa fa-twitter icon"></a>
<a href="#" class="fa fa-google icon"></a>
<a href="#" class="fa fa-linkedin icon"></a>
{/* <a href="#" class="fa fa-youtube"></a> */}
<a href="#" class="fa fa-instagram icon"></a>
      </div>
      </div>
      <div className='p'>
          <ul>
              <li><p className='t'>POPULAR COURSES</p></li>
              <li><p className='u'>Lorem Ipsum</p></li>
              <li><p className='u'>Lorem Ipsum</p></li>
              <li><p className='u'>Lorem Ipsum</p></li>
              <li><p className='u'>Lorem Ipsum</p></li>
              <li><p className='u'>Lorem Ipsum</p></li>

          </ul>
          <ul>
              <li><p className='t'>Top Careers</p></li>
              <li><p className='u'>Lorem Ipsum</p></li>
              <li><p className='u'>Lorem Ipsum</p></li>
              <li><p className='u'>Lorem Ipsum</p></li>
              <li><p className='u'>Lorem Ipsum</p></li>
              <li><p className='u'>Lorem Ipsum</p></li>

          </ul>
          <ul>
              <li><p className='t'>Top Companies</p></li>
              <li><p className='u'>Lorem Ipsum</p></li>
              <li><p className='u'>Lorem Ipsum</p></li>
              <li><p className='u'>Lorem Ipsum</p></li>
              <li><p className='u'>Lorem Ipsum</p></li>
              <li><p className='u'>Lorem Ipsum</p></li>

          </ul>
          <ul>
              <li><p className='t'>DEVELUP</p></li>
              <li><p className='u'>About</p></li>
              <li><p className='u'>Contact</p></li>
              <li><p className='u'>terms</p></li>
              <li><p className='u'>Privacy Policy</p></li>
              <li><p className='u'>Blog</p></li>

          </ul>
      </div>
      <p className='t'>contact us</p>
      <p style={{fontSize:"1rem"}}>
      21/23 MG Road,<br />
Sampangi Ramnagar,<br />
Bangalore, Karnataka<br />
560001<br /><br />
Mobile: +91 98000 98000<br /><br />
Whats App: +91 98000 98000<br /><br />
Email: hello@develup.in<br /><br />
© Develup education pvt ltd 2021<br />
CIN: L01631KA2010PTC096843
      </p>
  </div>;
}
