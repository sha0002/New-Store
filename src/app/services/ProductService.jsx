import { stripe } from "../utilis/stripe";

export const getProduct = async (limit) => {
    let products = {
        data: []
    }
    try {
        products = await stripe.products.list({
            limit: limit || 10,
            expand: ['data.default_price']
        })
        // console.log(JSON.stringify(products,null,2))
    } catch (err) {
        console.log("error form stripe", err)
    }
    return products

}

export const getProductById = async (productId) => {
    let product = null
    try {
        product = await stripe.products.retrieve(productId, {
            expand: ['default_price']
        })
        // console.log(JSON.stringify(products,null,2))  
    } catch (err) {
        console.log("error form stripe", err)
    }
    return product

}