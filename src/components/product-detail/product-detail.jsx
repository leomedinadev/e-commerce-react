import { XMarkIcon } from '@heroicons/react/24/solid'
import { useContext } from 'react'
import { ShoppingCartContext } from '../../context/ShoppingCartContext'
import { firstImage } from '../../utils/utils'

function ProductDetail() {
  const context = useContext(ShoppingCartContext);

  return (
    <aside className={`${context.isProductDetailOpen ? 'flex' : 'hidden'} product-detail flex-col fixed right-0 border border-black rounded-lg bg-white`}>
      <div className='flex justify-between items-center p-6'>
        <h2 className='font-medium text-xl'>Detail</h2>
        <div>
          <XMarkIcon className='h-6 w-6 text-black cursor-pointer' onClick={() => context.closeProductDetail()}></XMarkIcon>
        </div>
      </div>
      <figure className='px-6'>
        <img className='w-full h-full rounded-lg' src={firstImage(context.productToShow)} alt={context.productToShow?.title}></img>
      </figure>
      <p className='flex flex-col p-6'>
        <span className='font-medium text-2xl mb-2'>${context.productToShow?.price}</span>
        <span className='font-medium text-md'>{context.productToShow?.title}</span>
        <span className='font-medium text-sm'>{context.productToShow?.description}</span>

      </p>
    </aside>
  )
}

export { ProductDetail }