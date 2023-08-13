import React from 'react'
import { useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux';
import {addItem} from './Utils/CartSlice'

const DetailsProduct = () => {

    const { ProductId } = useParams();

    const [ProductInfo, setProductInfo] = useState("")

    useEffect(() => {

        const fetchData = async () => {
            const Data = await fetch("https://fakestoreapi.com/products/" + ProductId)

            const JSON = await Data.json();


            // console.log(JSON);


            setProductInfo(JSON);

        };

        fetchData(ProductId);

    }, [ProductId]);



    const { image, title, description, price } = ProductInfo;



    const dispatch = useDispatch(ProductInfo);
 
  const  handleAddItem = (ProductInfo) =>{

    dispatch(addItem(ProductInfo));
  }




    return (
        <div className='flex w-3/4 m-auto mt-20    mb-20 justify-center px-5 gap-20  items-center text-center'>
            <div className='  mt-5 w-[40%] h-72    m-auto '>
                <img className=' w-64 h-60 m-auto  my-2 ' src={image} alt='img'></img>
            </div>
            <div className=' p-5 w-[50%]  mt-5 '>

                <h2 className='text-2xl my-5 font-bold text-purple-600'>{title}</h2>
                <h2 className='text-base  mb-5 font-normal text-black'>{description}</h2>
                <h2 className='text-xl font-semibold text-green-400'>Rs: {Math.round(price) * 20}</h2>

                    <button  className=' bg-green-500 p-2 px-10 text-white font-bold my-5 rounded-lg  hover:bg-green-600'
                    onClick={()=> handleAddItem(ProductInfo)}
                    >

                    Add to Cart 
                    
                    </button>
            </div>
        </div>
    )
}

export default DetailsProduct;