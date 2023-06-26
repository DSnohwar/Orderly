import { AuthProvider } from '@/context/AuthContext';
import { CartProvider } from '@/context/CartContext';
import React from 'react'
import { ToastContainer } from 'react-toastify';
export function GlobalProvider({ children }) {
    return (
        <>
            <ToastContainer position='bottom-right' />
            <AuthProvider>
                <CartProvider>{children}</CartProvider>
            </AuthProvider>
        </>
    )
};

