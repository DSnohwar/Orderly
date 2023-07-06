"use client";

import { useRouter } from "next/navigation";
import { createContext, useState, useEffect } from "react";

const CartContext = createContext();

export const CartProvider = ({ children }) => {
    const [cart, setcart] = useState([]);

    const router = useRouter();
    useEffect(() => {
        setCartToState()
    }, [])


    const setCartToState = () => {
        setcart(localStorage.getItem('cart') ? JSON.parse(localStorage.getItem('cart')) : [])
    };
    const addToCart = ({
        product,
        name,
        price,
        image,
        stock,
        seller,
        quantity = 1

    }) => {
        const item = {
            product,
            name,
            price,
            image,
            stock,
            seller,
            quantity,
        }
        const doesItemExistInCart = cart?.cartItems?.find((i) => i.product === item.product)
        let newCartitems;
        if (doesItemExistInCart) {
            newCartitems = cart?.cartItems?.map((i) => i.product === item.product ? item : i)
        } else {
            newCartitems = [...(cart?.cartItems || []), item]
        }
        localStorage.setItem("cart", JSON.stringify({ cartItems: newCartitems }))
        setCartToState();
    };
    const deleteFromCart = (id) => {
        const newCartitems = cart?.cartItems?.filter((i) => i.product !== id); //product is the id of that product
        localStorage.setItem("cart", JSON.stringify({ cartItems: newCartitems }))
        setCartToState();
    };

    const saveOnCheckout = ({ amount, tax, totalAmount }) => {
        const checkoutInfo = {
            amount,
            tax,
            totalAmount,
        };

        const newCart = { ...cart, checkoutInfo };

        localStorage.setItem("cart", JSON.stringify(newCart));
        setCartToState();
        router.push("/shipping");
    };
    return (
        <CartContext.Provider
            value={
                {
                    cart,
                    addToCart,
                    deleteFromCart,
                    saveOnCheckout,

                }
            }
        >{children}</CartContext.Provider>
    )
};

export default CartContext;
