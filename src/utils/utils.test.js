import { describe, expect, it } from 'vitest'
import { CATEGORY_BY_PATH, filterProducts, firstImage, totalPrice } from './utils'

const products = [
    { id: 1, title: 'Classic Red Shirt', price: 29.99, category: { name: 'Clothes' } },
    { id: 2, title: 'Wireless Headphones', price: 29.99, category: { name: 'Electronics' } },
    { id: 3, title: 'Red Sofa', price: 250, category: { name: 'Furniture' } },
    { id: 4, title: null, price: 5 },
]

describe('totalPrice', () => {
    it('sums the prices without floating point noise', () => {
        expect(totalPrice(products.slice(0, 2))).toBe(59.98)
    })

    it('returns 0 for an empty cart', () => {
        expect(totalPrice([])).toBe(0)
    })
})

describe('filterProducts', () => {
    it('returns every product when there are no filters', () => {
        expect(filterProducts(products)).toHaveLength(4)
        expect(filterProducts(products, { title: '', category: null })).toHaveLength(4)
    })

    it('filters by title ignoring case', () => {
        expect(filterProducts(products, { title: 'RED' }).map(p => p.id)).toEqual([1, 3])
    })

    it('filters by category', () => {
        expect(filterProducts(products, { category: CATEGORY_BY_PATH['/furnitures'] }).map(p => p.id)).toEqual([3])
    })

    it('combines title and category', () => {
        expect(filterProducts(products, { title: 'red', category: 'clothes' }).map(p => p.id)).toEqual([1])
    })

    it('does not fail with products without title or category', () => {
        expect(filterProducts(products, { title: 'x', category: 'y' })).toEqual([])
        expect(filterProducts(undefined, { title: 'x' })).toEqual([])
    })
})

describe('firstImage', () => {
    it('returns the first image url', () => {
        expect(firstImage({ images: ['https://img.test/a.png', 'https://img.test/b.png'] })).toBe('https://img.test/a.png')
    })

    it('cleans urls that the API returns wrapped as JSON text', () => {
        expect(firstImage({ images: ['["https://img.test/a.png"'] })).toBe('https://img.test/a.png')
        expect(firstImage({ images: ['["https://img.test/a.png"]'] })).toBe('https://img.test/a.png')
    })

    it('returns an empty string when there are no images', () => {
        expect(firstImage({})).toBe('')
        expect(firstImage(undefined)).toBe('')
    })
})
