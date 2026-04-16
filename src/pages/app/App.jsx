import { BrowserRouter, useRoutes } from 'react-router-dom'
import Home from '../home/Home'
import { Account } from '../account/Account'
import { Myorder } from '../my-order/Myorder'
import { Notfound } from '../not-found/notfound'
import { MyOrders } from '../my-orders/MyOrders'
import { Signin } from '../sign-in/Signin'
import { Navbar } from '../../components/navbar/navbar'
import { ShoppingCartProvider } from '../../context/ShoppingCartContext'
import CheckOutSideMenu from '../../components/checkoutSideMenu/CheckOutSideMenu'
import './App.css'

const AppRoutes = () => {
  const routes = useRoutes([
    { path: '/', element: <Home/> },
    { path: '/clothes', element: <Home/> },
    { path: '/electronics', element: <Home/> },
    { path: '/furnitures', element: <Home/> },
    { path: '/toys', element: <Home/> },
    { path: '/others', element: <Home/> },
    { path: '/my-account', element: <Account/> },
    { path: '/my-order', element: <Myorder/> },
    { path: '/my-orders', element: <MyOrders/> },
    { path: '/my-orders/last', element: <Myorder/> },
    { path: '/my-orders/:id', element: <Myorder/> },
    { path: '/sign-in', element: <Signin/> },
    { path: '/*', element: <Notfound/> }
  ]);
  return routes;
}

function App() {

  

  return (
    <>
      <ShoppingCartProvider>
        <BrowserRouter>
          <AppRoutes/>
          <Navbar/>
          <CheckOutSideMenu/>
        </BrowserRouter>
      </ShoppingCartProvider>
    </>
  )
}

export {App} 
