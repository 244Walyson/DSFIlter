import { createContext } from 'react'

export type ValueContextType = {
    minValue: number;
    maxValue: number;
    setMinValue: (min: number) => void;
    setMaxValue: (max: number) => void;
}

export const ValueContext = createContext<ValueContextType>({
        minValue: (Number.MIN_VALUE),
        maxValue: (Number.MAX_VALUE),
        setMinValue: () => {},
        setMaxValue: () => {}
        
})
