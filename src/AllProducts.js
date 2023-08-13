import React from 'react'

const AllProducts = ({ propducts }) => {



    const { image, title, rating, price } = propducts;

    return (

        <>
            <div className='w-72 h-[340px] rounded-xl bg-white items-center text-center m-6 shadow-lg my-10
             hover:shadow-2xl'>

                <div className=' m-auto w-54 h-54 px-5 py-5 mt-5 '>
                    <img  className='w-40 h-40 p-2  m-auto' src={image} alt='img' />
                </div>
                <div className='my-4 font-normal px-1  ' >

                <h2 >{title}</h2>

                </div>

                <div className='flex justify-around    text-base font-medium  '>
                    <h3>Rating: <span className='bg-slate-400 p-1 rounded-md' >{rating.rate}⭐</span></h3>
                    <h4>Rs: {Math.round(price)*20}</h4>
                </div>


            </div>

        </>
    )
}

export default AllProducts;