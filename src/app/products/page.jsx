import Button_alert from '../component/button'
import ProductCart from '../component/ProductCart'
import { getProduct } from '../services/ProductService'

// export const revalidate = 30



const Products = async () => {

    const product = await getProduct()

    console.log('product page returned')

    return (
        <div >
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 p-4">
                {
                    product.data.map((item) => {
                        return <ProductCart item={item} key={item.id} />

                    })
                }

            </div>

            {/* <Button_alert /> */}
        </div>

    )
}

export default Products