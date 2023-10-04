import { useEffect, useState } from 'react';
import './styles.css'

type props = {
    text: string;
    textFilter: (num: number)=>void;
}
const InputFilter = ({text, textFilter}: props) => {

    const [value, setValue] = useState('')

    const handleChange = (e) => {
        e.preventDefault()
        setValue(e.target.value)
        textFilter(Number(value))
    }

  return (
    <div className="input-filter">
        <input onChange={handleChange} type="text" placeholder={text} value={value}/>
    </div>
  )
}

export default InputFilter