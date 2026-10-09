# Shopi — e-commerce con React

Tienda en línea de práctica hecha con **React 18**: catálogo con búsqueda y filtro por categoría, detalle de producto, carrito y órdenes. Los productos vienen de la API pública [Platzi Fake Store](https://fakeapi.platzi.com/).

## Qué incluye

- **Catálogo** con búsqueda por título y filtro por categoría. La categoría sale de la URL (`/clothes`, `/electronics`…), así que se mantiene al recargar.
- **Detalle de producto** en un panel lateral.
- **Carrito** con total, eliminación de productos y checkout.
- **Órdenes**: listado y detalle de cada una. Viven en memoria y se pierden al recargar.
- Estado global con **Context API**.

## Stack

- React 18 y React Router 6
- Vite
- Tailwind CSS 3
- Heroicons
- Vitest para los tests

## Cómo ejecutar

Requiere Node.js 18 o superior.

```bash
npm install
npm run dev
```

La aplicación queda en `http://localhost:5173`. Necesita conexión a internet para cargar los productos.

## Scripts

| Comando | Qué hace |
|---|---|
| `npm run dev` | Arranca en modo desarrollo |
| `npm run build` | Compila para producción en `dist/` |
| `npm run preview` | Sirve el build de producción |
| `npm test` | Tests unitarios |
| `npm run lint` | ESLint |

## Rutas

| Ruta | Página |
|---|---|
| `/` | Todos los productos |
| `/clothes`, `/electronics`, `/furnitures`, `/toys`, `/others` | Productos de esa categoría |
| `/my-orders` | Mis órdenes |
| `/my-orders/last` | Última orden |
| `/my-orders/:id` | Detalle de una orden |
| `/my-account`, `/sign-in` | Pendientes de implementar |

## Pendiente

- Cuenta de usuario e inicio de sesión (hoy son páginas vacías).
- Guardar el carrito y las órdenes (por ejemplo en `localStorage`).
- Diseño adaptable a pantallas pequeñas.
