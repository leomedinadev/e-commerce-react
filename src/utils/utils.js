// Suma los precios redondeando a 2 decimales (evita resultados como 59.980000000000004)
export const totalPrice = (products) => {
    const sum = products.reduce((total, item) => total + item.price, 0)
    return Math.round(sum * 100) / 100
}

// Categoría que corresponde a cada ruta; '/' no filtra
export const CATEGORY_BY_PATH = {
    '/clothes': 'clothes',
    '/electronics': 'electronics',
    '/furnitures': 'furniture',
    '/toys': 'toys',
    '/others': 'others',
}

const includesText = (value, search) => (value ?? '').toLowerCase().includes(search.toLowerCase())

// Filtra por título y/o categoría; un filtro vacío no restringe
export const filterProducts = (items, { title, category } = {}) => {
    return (items ?? []).filter(item =>
        (!title || includesText(item.title, title)) &&
        (!category || includesText(item.category?.name, category))
    )
}

// La API a veces devuelve las imágenes como texto JSON ('["https://..."]') en lugar de una URL
export const firstImage = (product) => {
    const image = product?.images?.[0] ?? ''
    return image.replace(/^\["?|"?\]$/g, '').replace(/^"|"$/g, '')
}

export const formatDate = (date) => new Date(date).toLocaleDateString()
