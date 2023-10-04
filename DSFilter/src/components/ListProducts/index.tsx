import './styles.css'
import ProductCard from '../ProductCard'

const ListProducts = () => {
    return (
        <div className="container">
            <div className="list-products">
                <div className="card-product-list"><ProductCard></ProductCard></div>
                <div className="card-product-list"><ProductCard></ProductCard></div>
                <div className="card-product-list"><ProductCard></ProductCard></div>
                <div className="card-product-list"><ProductCard></ProductCard></div>

            </div>
        </div>
    )
}

export default ListProducts