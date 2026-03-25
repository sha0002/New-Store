"use client"
import React from 'react'
import toast, { Toaster } from 'react-hot-toast';
import { useCart } from '../utilis/useCart';

const AddToCart = ({ product }) => {

    const { addItem } = useCart()

    const handleaddcart = () => {
        addItem(product)
        toast.success(` ${product.name} Item Added to Cart.`)
    }
    return (
        <div>
            <button onClick={handleaddcart} className="mt-6 w-full sm:w-auto px-8 py-3 bg-indigo-600 text-white rounded-lg shadow-md hover:bg-indigo-700 hover:shadow-lg transition duration-300">
                Add to Cart
            </button>
            <Toaster />
        </div>

    )
}

export default AddToCart