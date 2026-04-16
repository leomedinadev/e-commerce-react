export const totalPrice = (products) => {
    let sum = 0
    products.forEach(item => sum += item.price )
    return sum
}