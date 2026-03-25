import Link from "next/link";
import ProductCart from "./component/ProductCart";
import { getProduct } from "./services/ProductService";

// export const revalidate = 30


export default async function Page() {

  const product = await getProduct(5)
  // console.log(product)

    console.log('Home page returned')


  return (

    <div>
      {/* Banner */}
      <div className="bg-slate-700 flex justify-center items-center w-full h-72">
        <h1 className="text-white text-5xl">India Most Loved <span className="text-rose-600">Fashion</span>  Platform For <span className="text-yellow-500">Coder!</span> </h1>
      </div>

      {/* carts */}

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 p-4">

        {
          product.data.map((item) => {
           return <ProductCart item={item} key={item.id}/>

          })
        }
      </div>
      <Link href={"/products"} className="text-orange-700 text-3xl hover:text-red-600 transition p-4 hover:underline"> <p className="ps-8">
        All View {">"}
      </p>
      </Link>

    </div>
  )
}