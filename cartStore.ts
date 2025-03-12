import { create } from "zustand";
import { CartItem } from "./src/types/CardItem";

type CartStore = {
    cart: CartItem[];
    allTotalPrice: number;
    addToCard: (product: CartItem) => void;
    clearCard: () => void;
    removeItem: (product: CartItem) => void;
};

export const useCartStore = create<CartStore>((set) => {
    const calculateTotalPrice = (cart: CartItem[]) =>
        cart.reduce((sum, item) => sum + item.price * item.qty, 0);

    return {
        cart: [],
        allTotalPrice: 0,

        addToCard: (product) =>
            set((state) => {
                const updatedCart = state.cart.some((item) => item.id === product.id)
                    ? state.cart.map((item) =>
                          item.id === product.id ? { ...item, qty: item.qty + 1 } : item
                      )
                    : [...state.cart, { ...product, qty: 1 }];

                return { cart: updatedCart, allTotalPrice: calculateTotalPrice(updatedCart) };
            }),

        clearCard: () => set(() => ({ cart: [], allTotalPrice: 0 })),

        removeItem: (product) =>
            set((state) => {
                const updatedCart = state.cart.filter((item) => item.id !== product.id);
                return { cart: updatedCart, allTotalPrice: calculateTotalPrice(updatedCart) };
            }),
    };
});
