import {useCartStore} from '../../cartStore';

const Cart = () => {
    const cart = useCartStore((state)=>state.cart);
    const allTotalPrice = useCartStore((state) => state.allTotalPrice);
    const clearCard = useCartStore((state)=>state.clearCard);
    const removeItem = useCartStore((state)=>state.removeItem);
    // console.log(cart);
  return (
    <div className='w-2/4 mx-auto'>
        {
            cart?.length === 0 ? <p>No Item in your cart.</p> : (
                <>
                    <div>
                    {
                        cart.map((item) => (
                            <div key={item.id} className="grid grid-cols-5 gap-5">
                                <div className="flex space-x-1 col-span-2">
                                    <p>{item.qty} ×</p>
                                    <p>{item.title}</p>
                                </div>
                                <div>
                                <p className="text-right">{item.price * item.qty}</p> 
                                </div>
                                <button className="text-rose-600 cursor-pointer" onClick={() => removeItem(item)}>
                                    Remove
                                </button>
                            </div>
                        ))
                    }

                    </div>
                    <div className='grid grid-cols-5 gap-5 my-5 font-bold'>
                        <p className='space-x-1 col-span-2'>Total : </p>
                        <p className='text-right'>{allTotalPrice}</p>
                    </div>
                    <button className='my-3 px-4 py-2 rounded-2xl bg-rose-600 text-white cursor-pointer'
                    onClick={clearCard}>Clear Card</button>
                </>
                
            )
        }

    </div>
  )
}

export default Cart