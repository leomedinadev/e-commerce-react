import { useContext } from 'react'
import { Link, useParams } from 'react-router-dom'
import { ChevronLeftIcon } from '@heroicons/react/24/solid'
import { Layout } from '../../components/layout/layout'
import { ShoppingCartContext } from '../../context/ShoppingCartContext'
import OrderCard from '../../components/order-card/OrderCard'
import { firstImage } from '../../utils/utils'

function Myorder() {

  const context = useContext(ShoppingCartContext)
  // /my-orders/:id muestra esa orden; /my-order y /my-orders/last, la más reciente
  const { id } = useParams()
  const index = id === undefined ? context.order.length - 1 : Number(id)
  const order = context.order[index]

  return (
    <Layout>
      <div className='flex items-center justify-center relative w-80 mb-6'>
        <Link to='/my-orders' className='absolute left-0'>
          <ChevronLeftIcon className='h-6 w-6 text-black cursor-pointer' />
        </Link>
        <h1>My Order</h1>
      </div>
      <div className='flex flex-col w-80'>
        {
          !order ? <p className='font-light'>Order not found.</p> : order.products.map(product => (
            <OrderCard
              key={product.id}
              id={product.id}
              title={product.title}
              imageUrl={firstImage(product)}
              price={product.price}
            />
          ))
        }
      </div>
    </Layout>
  )
}

export {Myorder}