import React from 'react'
import { CheckIcon } from '@heroicons/react/24/solid'
import Sharebtn from '../../component/Sharebtn'
import AddToCart from '../../component/AddToCart'
import { getProduct, getProductById } from '../../services/ProductService'
import { formatAmount } from '../../utilis/stripe'

// export async function generateStaticParams() {

//   const products = await getProduct()

//   return products.data.map((item) => ({
//     slug: item.id
//   }))

// }

export const dynamic = "force-dynamic" 

// export const revalidate = 30

export const dynamicParams = true

export async function generateStaticParams() {
  const product = await getProduct()


  const slugs = product.data.map(item => ({ slug: item.id }))
  return slugs
}



export async function generateMetadata({ params }) {
  const { slug } = await params;

  const product = await getProductById(slug)
  // if (!product) {
  //   NotFound()
  // }

  return {
    title: `Stylish Shirts | ${product.name}`
  }

}


// export async function generateStaticParams() {
//   const products = await getProduct();

//   return products?.data?.map((item) => ({
//     slug: String(item.id),
//   })) || [];
// }

const Shirts = async ({ params }) => {

  const { slug } = await params;
  console.log('slug server side render', slug)


  const product = await getProductById(slug)


  // console.log("Products Id:", slug);

  const clientProduct = {
    name: product.name,
    description: product.description,
    id: product.id,
    // price: product.default_price.unit_amount,
    price: product.default_price.unit_amount,
    price_id: product.default_price.id,
    currency: "INR",
    image: product.images[0]

  }

  return (


    <div className="max-w-6xl mx-auto p-4 sm:p-6 lg:p-10">
      <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition duration-300 overflow-hidden">

        <div className="flex flex-col md:flex-row items-center">

          {/* Image Section */}
          <div className="w-full md:w-1/2 overflow-hidden">
            <img
              src={product.images[0]}
              alt={product.name}
              loading="lazy"
              className="w-full aspect-square object-cover rounded-lg"
            />
          </div>

          {/* Content Section */}
          <div className="w-full md:w-1/2 p-6 md:p-10">

            <h2 className="text-2xl md:text-3xl font-bold text-gray-800">
              {product.name}
            </h2>

            <div className="flex items-center gap-3 mt-3">
              <CheckIcon className="text-lime-500 w-5 h-5" />
              <span className="font-medium text-gray-700">In stock</span>
              <Sharebtn />
            </div>

            {/* Divider */}
            <div className="border-t my-6"></div>

            {/* Price */}
            <div>
              <p className="text-gray-500 text-sm">Price</p>
              <p className="text-3xl font-extrabold text-indigo-600 mt-1">
                {formatAmount(product.default_price.unit_amount)}
              </p>
            </div>



            <div>
              <AddToCart product={clientProduct} />
            </div>

          </div>
        </div>

      </div>
      <p className='mt-8 text-2xl'>
        {product.description}
      </p>
    </div>
  )
}

export default Shirts