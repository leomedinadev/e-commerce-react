import { useContext } from 'react'
import { NavLink } from 'react-router-dom'
import { ShoppingCartContext } from '../../context/ShoppingCartContext';
import { ShoppingBagIcon } from '@heroicons/react/24/solid';

function Navbar() {
    const context = useContext(ShoppingCartContext);
    const activeStyle = 'underline underline-offset-4';

    const fnIsActive = (isActive) => {
        return isActive ? activeStyle : '';
    }


  return (
    <nav className='flex justify-between items-center fixed z-10 top-0 w-full py-5 px-8 text-sm font-light'>
        <ul className='flex items-center gap-3'>
            <li className='font-semibold text-lg'><NavLink to='/'>Shopi</NavLink></li>
            <li>
                <NavLink to='/' className={({ isActive} ) => fnIsActive(isActive)}>
                    All
                </NavLink>
            </li>
            <li><NavLink to='/clothes' className={({ isActive} ) => fnIsActive(isActive)}>Clothes</NavLink></li>
            <li><NavLink to='/electronics' className={({ isActive} ) => fnIsActive(isActive)}>
                Electronics
                </NavLink>
            </li>
            <li><NavLink to='/furnitures' className={({ isActive} ) => fnIsActive(isActive)}>Furnitures</NavLink></li>
            <li><NavLink to='/toys' className={({ isActive} ) => fnIsActive(isActive)}>Toys</NavLink></li>
            <li><NavLink to='/others' className={({ isActive} ) => fnIsActive(isActive)}>Others</NavLink></li>
        </ul>
        <ul className='flex items-center gap-3'>
            <li><NavLink className='text-black/60'>leo@mail.com</NavLink></li>
            <li><NavLink to='/my-orders' className={({ isActive} ) => fnIsActive(isActive)}>My orders</NavLink></li>
            <li><NavLink to='/my-account' className={({ isActive} ) => fnIsActive(isActive)}>My account</NavLink></li>
            <li><NavLink to='/sign-in' className={({ isActive} ) => fnIsActive(isActive)}>Sign In</NavLink></li>
            <li className='flex items-center'>
                <ShoppingBagIcon className='h-6 w-6 text-black'></ShoppingBagIcon>
                <div>{context.count}</div>
            </li>
        </ul>
    </nav>
  )
}

export {Navbar}