import './styles.css'
import ProductCard from '../ProductCard'
import { findByPrice } from '../../services/product-service'
import { useContext, useEffect, useState } from 'react'
import { ValueContext } from '../../utils/minValueContext'
import { ProductDTO } from '../../models/ProductDTO'

const ListProducts = () => {

    const {minValue, maxValue, setMaxValue} = useContext(ValueContext)
    const [products, setProducts] = useState<ProductDTO[]>()
    useEffect(() => {
        if(minValue >= maxValue){
            setMaxValue(Number.MAX_VALUE)
        }
        setProducts(findByPrice(minValue, maxValue))
    }, [maxValue, minValue])

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