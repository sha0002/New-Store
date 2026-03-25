import Stripe from "stripe"

export const stripe = new Stripe(process.env.STRIPE_SK)

export const formatAmount = (amount)=> `₹ ${amount / 100}`

// export const formatAmount = (price) => {
//     // normalize (handle 499 vs 49900)
//     const normalized = price > 1000 ? price / 100 : price

//     return normalized.toFixed(2)
// }

