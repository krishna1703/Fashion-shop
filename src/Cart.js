import React from 'react'


import { useSelector } from 'react-redux';
import CartItems from './CartItems';


const Cart = () => {

  const cartItems = useSelector((store) => store.Cart.items);

  console.log(cartItems);



  return (
    <div>
      {

        cartItems.map((res) => {

          return (
            <CartItems AllCartsItem={res} />

          )

        })



      }
    </div>
  )
}

export default Cart;
