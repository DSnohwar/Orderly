import { CartProvider } from '@/context/CartContext';
import React from 'react'

export function GlobalProvider({ children }){
    return (
        <CartProvider>{children}</CartProvider>
    )
};

