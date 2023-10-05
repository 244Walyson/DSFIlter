import { createContext } from 'react'

export type ValueContextType = {
    productQuant: number;
    setProductQuant: (num: number) => void
}

export const ValueContext = createContext<ValueContextType>({
        productQuant: 0,
        setProductQuant: () => {}
})
