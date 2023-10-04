import { useEffect, useState } from 'react';
import './styles.css'

type props = {
    text: string;
    textFilter: (num: number)=>void;
}

const InputFilter = ({text, textFilter}: props) => {

    const [value, setValue] = useState<number | undefined>()
    const [borderError, setBorderError] = useState(false)

    const handleChange = (e) => {
        e.preventDefault()
        setValue(parseFloat(e.target.value))
        hanldeBorderError(e)
    }
    useEffect(() => {
        if(value){
            textFilter(value)
        }
    }, [value])

    const hanldeBorderError = (e) => {
        if(value == undefined || isNaN(Number(value))){
            e.target.value = ''
            setBorderError(true)
        }else{
            setBorderError(false)
        }
    }

  return (
    <div className={borderError ? "input-filter border-red" : "input-filter"}>
        <input onChange={handleChange} type="text" placeholder={text} value={value || ''}/>
    </div>
  )
}

export default InputFilter