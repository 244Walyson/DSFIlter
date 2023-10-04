import './styles.css'
import ProductCard from '../ProductCard'
import { findByPrice } from '../../services/product-service'

const ListProducts = () => {

    const products = findByPrice(0, Number.MAX_VALUE)

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