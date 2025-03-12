import { useCartStore } from "../../cartStore"
import { products } from "../data/products"
import Cart from "./Cart"

const Products = () => {
    const addToCard = useCartStore(state=>state.addToCard);
  return (
    <div className="grid grid-cols-2 gap-x-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 w-3/4">
            {
                products.map(product=>(
                    <div className="border border-rose-500 p-3 rounded-2xl h-fit" key={product.id}>
                        <div className="flex justify-between items-center pb-4">
                            <p className="font-bold text-lg">{product.title}</p>
                            <p className="font-bold text-lg">{product.price}</p>
                        </div>
                        <button className="px-4 py-2 text-sm rounded-2xl bg-rose-600 text-white cursor-pointer"
                            onClick={()=>addToCard({
                                id      : product.id,
                                title   : product.title,
                                price   : product.price,
                                qty     : product.qty,
                            })}>Add to card</button>
                    </div>
                ))
            }
        </div>
        <Cart/>
    </div>
  )
}

export default Products