import { useContext, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Layout } from '../../components/layout/layout';
import { Card } from '../../components/card/Card';
import { ProductDetail} from '../../components/product-detail/product-detail';
import { ShoppingCartContext } from '../../context/ShoppingCartContext';
import { CATEGORY_BY_PATH } from '../../utils/utils';

function Home() {
    const context = useContext(ShoppingCartContext);
    const { setSearchByCategory } = context;
    const { pathname } = useLocation();

    // La categoría sale de la URL: así el filtro se mantiene al recargar o al entrar por un enlace
    useEffect(() => {
        setSearchByCategory(CATEGORY_BY_PATH[pathname] ?? null)
    }, [pathname, setSearchByCategory]);

    const renderView = () => {
        if (context.isLoading) {
          return <div>Loading products...</div>
        }
        if (context.loadError) {
          return <div>We couldn&apos;t load the products. Please try again later.</div>
        }
        if (context.filteredItems.length > 0) {
          return (
            context.filteredItems.map(item => (
              <Card key={item.id} product={item} />
            ))
          )
        }
        return (
          <div>We don&apos;t have anything :(</div>
        )
    }
    return (
        <Layout>
            <div className='flex items-center justify-center relative w-80 mb-4'>
                <h1 className='font-medium text-xl'>Exclusive Products</h1>
            </div>
            <input 
                type='text' 
                placeholder='Search a product' 
                className='rounded-lg border border-black w-80 p-4 mb-4 focus:outline-none'
                onChange={(event) => context.setSearchByTitle(event.target.value)} />
            <div className='grid gap-4 grid-cols-4 w-full max-w-screen-lg'>
                { renderView() }
            </div>
            <ProductDetail/>
        </Layout>
    )
}

export default Home
