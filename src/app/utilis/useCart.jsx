import React, { useContext, useEffect, useState } from 'react'
import { productCtx } from '../component/Provider'

export const useCart = () => {

    const { cartItem, setCartItem } = useContext(productCtx)
    const [cartCount, setCartCount] = useState(0)
    const [cartTotal, setCartTotal] = useState(0)

    useEffect(() => {
        setCartCount(cartItem.length)
        findTotalPrice()
        populateCartItem()
    }, [cartItem])

    const populateCartItem = () => {
        if (cartItem.length == 0) {
            const products = localStorage.getItem('products')
            if (products) {
                const temp = JSON.parse(products)
                setCartItem(temp)
            }

        }

    }

    const findTotalPrice = () => {
        let amount = 0
        cartItem.forEach(item => {
            // amount += (item.price / 100) * item.quantity
            amount += (item.price / 100) * item.quantity
        })
        setCartTotal(amount)
    }


    //     const findTotalPrice = () => {
    //     let amount = 0
    //     cartItem.forEach(item => {
    //         amount += item.price * item.quantity
    //     })
    //     setCartTotal(amount)
    // }

    const addItem = (product) => {
        const existingProductIndex = cartItem.findIndex((item) => item.id == product.id)
        const updatedCart = [...cartItem]
        if (existingProductIndex != -1) {
            updatedCart[existingProductIndex].quantity += 1
        } else {
            updatedCart.push({ ...product, quantity: 1 })
        }

        localStorage.setItem('products', JSON.stringify(updatedCart))
        setCartItem(updatedCart)
    }

    const deleteById = (productId) => {
        const newProducts = cartItem.filter((product) => productId !== product.id)
        setCartItem(newProducts)
        if (newProducts.length == 0) {
            localStorage.removeItem('products')
        } else {
            localStorage.setItem('products', JSON.stringify(newProducts))
        }
    }

    const deleteAllItem = () => {
        localStorage.removeItem('products')
        setCartItem([])
    }

    const IncrementCartItem = (productId) => {
        const newProducts = cartItem.map(item => {
            if (item.id == productId) {
                return {
                    ...item,
                    quantity: item.quantity + 1
                }
            } else {
                return item
            }
        })
        localStorage.setItem('products', JSON.stringify(newProducts))
        setCartItem(newProducts)

    }

    const DecrementCartItem = (productId) => {
        const newProducts = cartItem.map(item => {
            if (item.id == productId && item.quantity > 1) {
                return {
                    ...item,
                    quantity: item.quantity - 1

                }
            } else {
                return item
            }
        })
        localStorage.setItem('products', JSON.stringify(newProducts))
        setCartItem(newProducts)

    }




    return { cartCount, cartTotal, addItem, deleteById, deleteAllItem, IncrementCartItem, DecrementCartItem, cartItem }
}



// import { useContext, useEffect, useState } from 'react'
// import { productCtx } from '../component/Provider'

// export const useCart = () => {

//     const { cartItem, setCartItem } = useContext(productCtx)

//     const [cartCount, setCartCount] = useState(0)
//     const [cartTotal, setCartTotal] = useState(0)

//     // ✅ Update count + total whenever cart changes
//     useEffect(() => {
//         setCartCount(cartItem.length)

//         let total = 0
//         cartItem.forEach(item => {
//             total += (item.price / 100) * item.quantity
//         })
//         setCartTotal(total)

//     }, [cartItem])

//     // ✅ Add item
//     const addItem = (product) => {
//         const existingIndex = cartItem.findIndex(item => item.id === product.id)

//         let updatedCart = [...cartItem]

//         if (existingIndex !== -1) {
//             updatedCart[existingIndex].quantity += 1
//         } else {
//             updatedCart.push({ ...product, quantity: 1 })
//         }

//         localStorage.setItem('products', JSON.stringify(updatedCart))
//         setCartItem(updatedCart)
//     }

//     // ✅ Delete single item
//     const deleteById = (productId) => {
//         const updatedCart = cartItem.filter(item => item.id !== productId)

//         if (updatedCart.length === 0) {
//             localStorage.removeItem('products')
//         } else {
//             localStorage.setItem('products', JSON.stringify(updatedCart))
//         }

//         setCartItem(updatedCart)
//     }

//     // ✅ Clear all cart
//     const deleteAllItem = () => {
//         localStorage.removeItem('products')
//         setCartItem([])
//     }

//     // ✅ Increment quantity
//     const incrementCartItem = (productId) => {
//         const updatedCart = cartItem.map(item =>
//             item.id === productId
//                 ? { ...item, quantity: item.quantity + 1 }
//                 : item
//         )

//         localStorage.setItem('products', JSON.stringify(updatedCart))
//         setCartItem(updatedCart)
//     }

//     // ✅ Decrement quantity
//     const decrementCartItem = (productId) => {
//         const updatedCart = cartItem.map(item =>
//             item.id === productId && item.quantity > 1
//                 ? { ...item, quantity: item.quantity - 1 }
//                 : item
//         )

//         localStorage.setItem('products', JSON.stringify(updatedCart))
//         setCartItem(updatedCart)
//     }

//     return {
//         cartItem,
//         cartCount,
//         cartTotal,
//         addItem,
//         deleteById,
//         deleteAllItem,
//         incrementCartItem,
//         decrementCartItem
//     }
// }