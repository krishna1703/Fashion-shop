import React from 'react'
import { useRouteError } from 'react-router-dom'


const Error = () => {

    const err = useRouteError();

  return (
    <>
 <div className=' w-auto m-auto  my-20'>
 <h1  className='text-center'> Welcome to  {err.status} {err.statusText} page</h1>
 <img className='w-[75%] m-auto ' src= 
 {"https://static.vecteezy.com/system/resources/previews/001/857/111/original/error-404-page-not-found-landing-page-concept-for-mobile-and-pc-free-vector.jpg"} alt='img'>

 </img>
 </div>
    </>
   
  )
}

export default Error