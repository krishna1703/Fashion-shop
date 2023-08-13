import React from 'react'
import { useDispatch } from 'react-redux';
import { removeItem } from './Utils/CartSlice';
const CartItems = ({ AllCartsItem }) => {

    const CartInfo = AllCartsItem;

    console.log(CartInfo);

    const { title, image, price, rating } = CartInfo;



    const dispatch = useDispatch();
 
  const  REMOVEITEM = () =>{

    dispatch(removeItem());
  }



    return (

        <div className='w-3/4  border-4 m-auto '>
        <div className='w-  border-4 '> 

            <h2>{title}</h2>
            <img className='w-44 h-44 ' src={image} alt='img'></img>
            <h3>{price}</h3>
            <h3>{rating.rate}</h3>


            <button  
            onClick={()=> REMOVEITEM()}
            >Remove item</button>

        </div>
        </div>
    )
}

export default CartItems