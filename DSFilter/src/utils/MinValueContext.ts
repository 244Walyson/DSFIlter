import { createContext } from 'react'

export type ValueContextType = {
    minValue: number;
    maxValue: number;
    productQuant: number;
    setMinValue: (min: number) => void;
    setMaxValue: (max: number) => void;
    setProductQuant: (num: number) => void
}

export const ValueContext = createContext<ValueContextType>({
        minValue: (Number.MIN_VALUE),
        maxValue: (Number.MAX_VALUE),
        productQuant: 0,
        setMinValue: () => {},
        setMaxValue: () => {},
        setProductQuant: () => {}
})
