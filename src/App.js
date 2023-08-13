import React from 'react'
import Header from './Header';
import MainBody from './MainBody';
import Footer from './Footer';
import DetailsProduct from './DetailsProduct';

import { Outlet, createBrowserRouter } from 'react-router-dom';
import About from "./About"
import Cart from './Cart';
import Error from './Error';
import { Provider } from 'react-redux';
import Store from './Utils/Store';


const App = () => {
  return (
    <>
<Provider store= {Store}>
      <div>
        <Header />
        <Outlet />

      </div>
      <div>
        <Footer />
      </div>
</Provider>
    </>
  )
}



export const appRouter = createBrowserRouter([
  {

    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <MainBody />
      },

      {
        path: "/about",
        element: <About />
      },
      {
        path: "/cart",
        element: <Cart />
      },
      {
        path: "/products/:ProductId",
        element: <DetailsProduct />
      },

    ],
    errorElement: <Error />


  }
])




export default App;