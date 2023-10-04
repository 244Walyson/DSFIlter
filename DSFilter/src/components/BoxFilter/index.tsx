import { useContext } from 'react'
import ButtonPrimary from '../ButtonPimary'
import InputFilter from '../InputFilter'
import './styles.css'
import { ValueContext } from '../../utils/minValueContext'


const BoxFilter = () => {

    const {setMinValue, setMaxValue} = useContext(ValueContext)

    return (
        <div className="container">
            <div className="box-filter">
                <form className='form-box-filter'>
                    <div className="form-items-filter"><InputFilter text='Preço mínimo' textFilter={(num: number)=> (setMinValue(num))}></InputFilter></div>
                    <div className="form-items-filter"><InputFilter text='Preço máximo' textFilter={(num: number) => (setMaxValue(num))}></InputFilter></div>
                    <div className="form-items-filter"><ButtonPrimary text='Filtrar'></ButtonPrimary></div>
                </form>
            </div>
        </div>
    )
}

export default BoxFilter