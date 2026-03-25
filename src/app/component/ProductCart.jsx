import Link from 'next/link'
import React from 'react'
import { formatAmount } from '../utilis/stripe'

const ProductCart = ({ item }) => {
    return (
        <Link
            key={item.id}
            href={`/products/${item.id}`}
            className="max-w-sm rounded-2xl border border-gray-200 shadow-sm hover:shadow-xl transition duration-300 overflow-hidden bg-white group"
        >
            <div className="w-full aspect-square overflow-hidden">
                <img
                    src={item.images}
                    alt={item.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition duration-300"
                    loading='lazy'
                />
            </div>

            <div className="p-5 space-y-3">
                <div>
                    <h2 className="text-lg font-semibold text-gray-800">
                        {item.name}
                    </h2>
                    <p className="text-sm text-gray-500">

                        {item.description}
                    </p>
                </div>

                {/* Improved Pricing Design */}
                <div className="flex items-center justify-between pt-2">
                    <span className="text-sm text-gray-400">
                        Starting from
                    </span>
                    <span className="text-xl font-bold text-black">
                        {formatAmount(item.default_price.unit_amount)}
                    </span>
                </div>
            </div>
        </Link>
    )
}

export default ProductCart