// "use client"
// import React from 'react'
// import { MinusIcon, PlusIcon, TrashIcon, XCircleIcon } from '@heroicons/react/24/solid'
// import Link from 'next/link';
// import { useCart } from '../utilis/useCart';

// const page = () => {
//     const { cartCount, cartItem,cartTotal,DecrementCartItem,IncrementCartItem } = useCart()
//     return (
//         <div className='m-5 px-20'>
//             {
//                 cartCount < 0 ? (
//                     <>
//                         <h2 className='text-4xl'>Cart Item : {cartCount}</h2>
//                         <button className='text-orange-700 font-bold hover:text-red-600 transition'>
//                             Clear All
//                             <TrashIcon className='w-4 h-4 inline-block font-bold' />
//                         </button>
//                     </>
//                 ) : (
//                     <>
//                         <h2 className='transition text-4xl'>
//                             Your Shopping Cart is Empty!
//                         </h2>
//                         <Link href={"/products"} className='text-orange-700 text-2xl hover:text-red-600 transition underline'>Shop Here</Link>
//                     </>
//                 )
//             }

//             {
//                 cartCount < 0 && (
//                     <>


//                         <div className="w-full my-5 bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 p-4">
//                             {
//                                 cartItem.map((item) => {
//                                     return (
//                                         <div key={item.id} className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">

//                                             {/* Product Info */}
//                                             <Link
//                                                 href={`/products/${item.id}`}
//                                                 className="flex items-center gap-4 group"
//                                             >
//                                                 <div className="w-20 h-20 overflow-hidden rounded-xl bg-gray-100">
//                                                     <img
//                                                         src={item.images[0]}
//                                                         alt={item.name}
//                                                         className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
//                                                     />
//                                                 </div>

//                                                 <div>
//                                                     <p className="text-lg font-semibold text-gray-800 group-hover:text-indigo-600 transition-colors">
//                                                         {item.name}
//                                                     </p>
//                                                     <p className="text-sm text-gray-500">{item.descrition}</p>
//                                                 </div>
//                                             </Link>

//                                             {/* Controls */}
//                                             <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6">

//                                                 {/* Quantity Selector */}
//                                                 <div className="flex items-center bg-gray-100 rounded-full px-3 py-1 shadow-inner">
//                                                     <button className="p-1 text-gray-600 hover:text-indigo-600 transition">
//                                                         <MinusIcon className="w-5 h-5" />
//                                                     </button>

//                                                     <span className="px-3 text-md font-semibold text-gray-800">
//                                                         {item.quantity}
//                                                     </span>

//                                                     <button  className="p-1 text-gray-600 hover:text-indigo-600 transition">
//                                                         <PlusIcon className="w-5 h-5" />
//                                                     </button>
//                                                 </div>

//                                                 {/* Price */}
//                                                 <p className="text-lg font-bold text-gray-800">
//                                                     $<span className="text-indigo-600"> {item.price}</span>
//                                                 </p>

//                                                 {/* Remove Button */}
//                                                 <button className="text-red-500 hover:text-red-600 transition transform hover:scale-110">
//                                                     <XCircleIcon className="w-6 h-6" />
//                                                 </button>

//                                             </div>
//                                         </div>
//                                     )
//                                 })
//                             }

//                         </div>
//                         <div className="flex flex-col items-end space-y-2 p-4">
//                             <p className="text-lg font-semibold text-gray-800">
//                                 Total: <span className="text-blue-600 text-xl font-bold">{cartTotal}/-</span>
//                             </p>
//                             <button className="bg-blue-600 text-white px-6 py-2 rounded-md font-medium hover:bg-blue-700 transition-colors">
//                                 Check Out
//                             </button>
//                         </div>
//                     </>
//                 )
//             }

//         </div>
//     )
// }

// export default page

"use client"
import React, { useEffect } from 'react'
import { MinusIcon, PlusIcon, TrashIcon, XCircleIcon } from '@heroicons/react/24/solid'
import Link from 'next/link';
import { useCart } from '../utilis/useCart';
import { handleCheckout } from '../services/checkout-cart';
import toast, { Toaster } from 'react-hot-toast';
import { useRouter } from 'next/navigation';
// import { URLSearchParams } from 'next/dist/compiled/@edge-runtime/primitives/url';

// import { formatAmount } from '../utilis/stripe';

const page = () => {
    const { cartCount, cartItem, setCartItem, cartTotal, DecrementCartItem, IncrementCartItem, deleteAllItem, deleteById } = useCart()

    //     const formatAmout = (price) => {
    //     // normalize (handle 499 vs 49900)
    //     const normalized = price > 1000 ? price / 100 : price

    //     return normalized.toFixed(2)
    // }

    const formatAmount = (amount) => `₹${amount / 100}`

    console.log(cartCount)
    console.log(cartItem)

    const router = useRouter()

    const cartcheckout = async () => {

        try {


            const body = cartItem.map(item => {
                return {
                    price: item.price_id,
                    quantity: item.quantity
                }
            })

            const url = await handleCheckout(body)
            // console.log(url)
            router.push(url)
        } catch (error) {
            console.log("error for checkout", error)
            toast.error(`checkout failed`)
        }
    }

    useEffect(() => {
        const query = new URLSearchParams(window.location.search)
        if (query.get('success')) {
            toast.success("Order Placed! successfully")
            deleteAllItem()

        }
        if (query.get('canceled')) {
            toast.error("Order Canceled!")
        }
    }, [])


    return (
        <>
            <div className='m-5 px-20'>
                {
                    cartCount > 0 ? (
                        <>
                            <h2 className='text-4xl'>Cart Item : {cartCount}</h2>
                            <button onClick={deleteAllItem} className='text-orange-700 font-bold hover:text-red-600 transition'>
                                Clear All
                                <TrashIcon className='w-4 h-4 inline-block font-bold' />
                            </button>
                        </>
                    ) : (
                        <>
                            <h2 className='transition text-4xl'>
                                Your Shopping Cart is Empty!
                            </h2>
                            <Link href={"/products"} className='text-orange-700 text-2xl hover:text-red-600 transition underline'>Shop Here</Link>
                        </>
                    )
                }

                {
                    cartCount > 0 && (
                        <>


                            <div className="w-full my-5 bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 p-4">
                                {
                                    cartItem.map(item => {
                                        return (
                                            <div key={item.id} className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">

                                                {/* Product Info */}
                                                <Link
                                                    href={`/products/${item.id}`}
                                                    className="flex items-center gap-4 m-3 group"
                                                >
                                                    <div className="w-20 h-20 overflow-hidden rounded-xl bg-gray-100">
                                                        <img
                                                            src={item.image}
                                                            alt={item.name}
                                                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                                                        />
                                                    </div>

                                                    <div>
                                                        <p className="text-lg font-semibold text-gray-800 group-hover:text-indigo-600 transition-colors">
                                                            {item.name}
                                                        </p>
                                                        <p className="text-sm text-gray-500">{item.description}</p>
                                                    </div>
                                                </Link>

                                                {/* Controls */}
                                                <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6">

                                                    {/* Quantity Selector */}
                                                    <div className="flex items-center bg-gray-100 rounded-full px-3 py-1 shadow-inner">
                                                        <button disabled={item.quantity == 1} onClick={() => DecrementCartItem(item.id)} className="p-1 text-gray-600 hover:text-indigo-600 transition">
                                                            <MinusIcon className="w-5 h-5" />
                                                        </button>

                                                        <span className="px-3 text-md font-semibold text-gray-800">
                                                            {item.quantity}
                                                        </span>

                                                        <button onClick={() => IncrementCartItem(item.id)} className="p-1 text-gray-600 hover:text-indigo-600 transition">
                                                            <PlusIcon className="w-5 h-5" />
                                                        </button>
                                                    </div>

                                                    {/* Price */}
                                                    <p className="text-lg font-light text-gray-800">
                                                        <span className="text-indigo-600">
                                                            {/* {(item.price / 100)} */}
                                                            {/* {(item.price)} */}
                                                            {formatAmount(item.price)}
                                                        </span>
                                                    </p>

                                                    {/* Remove Button */}
                                                    <button onClick={() => deleteById(item.id)} className="text-red-500 hover:text-red-600 transition transform hover:scale-110">
                                                        <XCircleIcon className="w-6 h-6" />
                                                    </button>

                                                </div>
                                            </div>
                                        )
                                    })
                                }

                            </div>
                            <div className="flex flex-col items-end space-y-2 p-4">
                                <p className="text-lg font-semibold text-gray-800">
                                    Total: <span className="text-blue-600 text-xl font-bold">{cartTotal}/-</span>
                                </p>
                                <button onClick={cartcheckout} className="bg-blue-600 text-white px-6 py-2 rounded-md font-medium hover:bg-blue-700 transition-colors">
                                    Check Out
                                </button>
                            </div>
                        </>
                    )
                }


                <Toaster />




            </div>
            {/* demo section */}


        </>
    )
}

export default page