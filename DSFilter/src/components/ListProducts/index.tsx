import './styles.css'
import ProductCard from '../ProductCard'
import { findByPrice } from '../../services/product-service'
import { useContext } from 'react'
import { ValueContext } from '../../utils/minValueContext'

const ListProducts = () => {

    const {minValue, maxValue} = useContext(ValueContext)

    const products = findByPrice(minValue, maxValue)
    console.log("min: " + minValue+"max "+maxValue)

    return (
        <div className="container">
            <div className="list-products">
                {products && products.map(item => (
                    <div key={item.id} className="card-product-list">
                    <ProductCard name={item.name} price={item.price}></ProductCard>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default ListProducts