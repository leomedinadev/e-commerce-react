import { createContext, useState, useEffect, useMemo } from 'react'
import { filterProducts } from '../utils/utils'

const PRODUCTS_URL = 'https://api.escuelajs.co/api/v1/products'

const ShoppingCartContext = createContext();

function ShoppingCartProvider({children}) {

  const [isProductDetailOpen, setIsProductDetailOpen] = useState(false);
  const openProductDetail = () => setIsProductDetailOpen(true);
  const closeProductDetail = () => setIsProductDetailOpen(false);

  // Checkout Side Menu · Open/Close
  const [isCheckoutSideMenuOpen, setIsCheckoutSideMenuOpen] = useState(false)
  const openCheckoutSideMenu = () => setIsCheckoutSideMenuOpen(true)
  const closeCheckoutSideMenu = () => setIsCheckoutSideMenuOpen(false)

  const [productToShow, setProductToShow] = useState({});

  // Shopping Cart · Add products to cart
  const [cartProducts, setCartProducts] = useState([])
  // El contador sale del carrito: así no se desincroniza al quitar productos
  const count = cartProducts.length

  const [order, setOrder] = useState([])

  // Get products
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true)
  const [loadError, setLoadError] = useState(false)
  // Get products by title
  const [searchByTitle, setSearchByTitle] = useState(null)
  // Get products by category
  const [searchByCategory, setSearchByCategory] = useState(null)

  useEffect(() => {
    fetch(PRODUCTS_URL)
      .then(response => {
        if (!response.ok) throw new Error(`HTTP ${response.status}`)
        return response.json()
      })
      .then(data => setItems(data))
      .catch(() => setLoadError(true))
      .finally(() => setIsLoading(false))
  }, []);

  const filteredItems = useMemo(
    () => filterProducts(items, { title: searchByTitle, category: searchByCategory }),
    [items, searchByTitle, searchByCategory]
  )

  return (
    <ShoppingCartContext.Provider value={{
      count,
      openProductDetail,
      closeProductDetail,
      isProductDetailOpen,
      productToShow,
      setProductToShow,
      cartProducts,
      setCartProducts,
      isCheckoutSideMenuOpen,
      openCheckoutSideMenu,
      closeCheckoutSideMenu,
      order,
      setOrder,
      items,
      setItems,
      isLoading,
      loadError,
      searchByTitle,
      setSearchByTitle,
      filteredItems,
      searchByCategory,
      setSearchByCategory
      }}>
        {children}
    </ShoppingCartContext.Provider>
  )
}

export {ShoppingCartContext, ShoppingCartProvider}
