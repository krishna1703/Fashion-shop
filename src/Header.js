import React from 'react'
import { useSelector } from 'react-redux'


import { Link } from 'react-router-dom'


const Header = () => {


 
 const CartItem = useSelector(store => store.Cart.items)
// console.log(CartItem);

  return (
    <div className='flex justify-around mt-5 bg-purple-400 items-center text-white  shadow-2xl shadow-purple-200 p-5'>

      <Link to={"/"}><h2 className='text-2xl font-bold'>Fashion_shop</h2></Link>



      <ul className='flex gap-14 text-lg font-bold'>

        <li>
          <Link to="/">  Home </Link>
        </li>
        <li>
          <Link to="/about">  About </Link>
        </li>
        <li>

          <Link to="/cart">

            <span> Cart  {CartItem.length} </span>

          </Link>

        </li>

      </ul>
    </div>


  )
}

export default Header