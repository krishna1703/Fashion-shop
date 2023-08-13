import React, { useEffect, useState } from 'react'
import AllProducts from './AllProducts';
import { Link } from 'react-router-dom';


const ProductCart = () => {


  const [product, setproduct] = useState([])
  const [FilterProduct, setFilterProduct] = useState([])
  const [searchlistofProduct, setsearchlistofProduct] = useState("")
  const [searchResult, setSearchResult] = useState(true);

  useEffect(() => {
    Productfetch();
  }, [])

  const Productfetch = async () => {

    const Responce = await fetch('https://fakestoreapi.com/products');

    const Data = await Responce.json()

    console.log(Data);


    setproduct(Data);
    setFilterProduct(Data);

  }



  return (
    <>

      <div className="flex justify-center items-center p-5  bg-purple-200  gap-20  mb-10 mt-10">
        <h2 className='text-2xl font-semibold font-serif text-purple-400'>Welcome to <span className='text-green-500'>Fashion_shop</span></h2>
        <div>
          <input type='text' placeholder='search product ....' value={searchlistofProduct} className='bg-gray-100 outline-none p-1.5 rounded-lg  px-20'
            onChange={(e) => {
              setsearchlistofProduct(e.target.value);

            }}

          ></input>
          <button className='bg-purple-500 px-4 p-1.5 mx-5 text-white text-base rounded-lg'
            onClick={() => {
              const SearchProduct = product.filter((res) => {

                return res.title.toLowerCase().trim().includes(searchlistofProduct.toLowerCase().trim());

              })

              if (SearchProduct.length) {
                setSearchResult(true);
              } else setSearchResult(false);

              setFilterProduct(SearchProduct);
            }}


          >Search Product </button>
        </div>

       

      </div>


      <section className='flex'>

      <div className=' w-52  mx-10 h-1/3 mt-5  p-1  flex items-center flex-col justify-around   text-white text-base '>
          <div><h2 className='  text-black px-5 p-4 font-semibold text-xl rounded-lg '>Filter</h2></div>
          <div className='flex w-44  flex-col gap-5'>

            <button className='bg-gray-400 px-5 p-2.5 rounded-lg mx-5 '
              onClick={() => {
                const ListofMens = product;
                setFilterProduct(ListofMens)

              }}
            >All product</button> 


            <button className='bg-gray-400 px-5 p-2.5 rounded-lg mx-5 '
              onClick={() => {
                const ListofMens = product.filter((res) => res.category === "men's clothing")
                setFilterProduct(ListofMens)

              }}
            >Mens</button>


            <button className='bg-gray-400 px-5 p-2.5 rounded-lg mx-5'
              onClick={() => {
                const ListofFemale = product.filter((res) => res.category === "women's clothing")
                setFilterProduct(ListofFemale)
              }}
            >Female </button>
            <button className='bg-gray-400 px-5 p-2.5 rounded-lg mx-5 '
              onClick={() => {
                const electronics = product.filter((res) => res.category === "electronics")

                setFilterProduct(electronics)
              }}

            >Electronics</button>




            <button className='bg-gray-400 px-5 p-2.5 rounded-lg mx-5 '

              onClick={() => {
                const jewelery = product.filter((res) => res.category === "jewelery")
                setFilterProduct(jewelery)
              }}

            >Jewelery</button>
            <button className='bg-gray-400 px-5 p-2.5 rounded-lg mx-5 '

              onClick={() => {
                const jewelery = product.filter((res) => res.rating.rate >= 4)
                setFilterProduct(jewelery)
              }}

            >4⭐Rating </button>

            <button className='bg-gray-400 px-5 p-2.5 rounded-lg mx-5 '

              onClick={() => {
                const jewelery = product.filter((res) => res.rating.rate <= 3)
                setFilterProduct(jewelery)
              }}

            >3⭐Rating </button>
          </div>
        </div>

        <div className='w-auto  m-auto flex flex-wrap mx-10 my-5    justify-center py-10 '>

          {searchResult ? (
            FilterProduct.map((res) => {

              return (
                <Link to={"/products/" + res.id} key={res.id}>
                  <AllProducts propducts={res} />
                </Link>

              )
            })

          ) : (

            <div className="w-3/4 p-4 mt-2 mb-2 shadow-2xl shadow-slate-400 flex justify-center">
              <img
                className="w-[60%] "
                src="https://cdn.dribbble.com/users/1883357/screenshots/6016190/search_no_result.png" alt='img' />
              {/* this is the function for  no search  found */}
            </div>
          )



          }

        </div>

      </section>

    </>

  )
}
export default ProductCart
