import React from 'react';
import image from '../../public/images/lorem.png'
import './lorem.css'
export default function Lorem() {
  return <div className='main' style={{marginTop:"-10rem" , marginBottom:"5rem"}}>
      <p>Featured in the Press</p>
      <div className='lorem'>
      <img className="i"src={image} />
      <img className="i"src={image} />
      <img className="i"src={image} />
      <img className="i"src={image} />
      <img className="i"src={image} />
      <img className="i"src={image} />
      </div>
      <p className='a'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. At ipsum quae in. Illum repellendus veritatis ipsa assumenda in laudantium quo exercitationem minima autem repellat voluptatibus est sunt cupiditate tenetur eligendi neque eos dolores totam voluptatum ducimus explicabo, nobis doloribus provident. Asperiores voluptas iste cupiditate cum itaque placeat, ad doloribus, accusantium magnam aspernatur id aperiam nam minima nisi commodi eligendi eaque numquam sit fugit reiciendis rerum iusto mollitia hic! Ullam, possimus?</p>
      <p className='a'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi fugiat enim labore recusandae aperiam aut sed inventore, illum ducimus sunt repellat necessitatibus minus sint consequuntur, debitis libero, eligendi numquam. Dicta dignissimos doloribus assumenda reprehenderit fugit expedita sit distinctio molestias nobis, animi nisi tempore ratione quos. Accusantium voluptatem optio sit reiciendis magni quas harum iure, repellat velit ipsa, reprehenderit ad consequatur debitis autem expedita error voluptas magnam ratione minima nostrum enim!</p>
  </div>;
}
