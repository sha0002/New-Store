'use client'
import React, { createContext, useState } from 'react'

export const productCtx = createContext(null)

const Provider = ({ children }) => {

    const [cartItem, setCartItem] = useState([])

    return (
        <productCtx.Provider value={{ cartItem, setCartItem }}>
            {children}
        </productCtx.Provider>
    )
}

export default Provider 