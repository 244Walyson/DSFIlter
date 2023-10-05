import { useState } from 'react'
import ButtonPrimary from '../ButtonPimary'
import InputFilter from '../InputFilter'
import './styles.css'
import { ProductDTO } from '../../models/ProductDTO'
import { findByPrice } from '../../services/product-service'
import ListProducts from '../ListProducts'


const BoxFilter = () => {

    const [minValue, setMinValue] = useState(0)
    const [maxValue, setMaxValue] = useState(Number.MAX_VALUE)
    const [products, setProducts] = useState<ProductDTO[]>(findByPrice(minValue, maxValue))

    const handleClick = () => {
        setProducts(findByPrice(minValue, maxValue))
    }

    return (
        <>
            <div className="container">
                <div className="box-filter">
                    <form className='form-box-filter' onSubmit={(e) => e.preventDefault()}>
                        <div className="form-items-filter"><InputFilter text='Preço mínimo' textFilter={(num: number) => (setMinValue(num))}></InputFilter></div>
                        <div className="form-items-filter"><InputFilter text='Preço máximo' textFilter={(num: number) => (setMaxValue(num))}></InputFilter></div>
                        <div className="form-items-filter" onClick={handleClick}><ButtonPrimary text='Filtrar'></ButtonPrimary></div>
                    </form>
                </div>
            </div>
            <ListProducts productsFilter={() => (products)}></ListProducts>
        </>
    )
}

export default BoxFilter