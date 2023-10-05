import './styles.css'
import ProductCard from '../ProductCard'
import { useContext } from 'react'
import { ValueContext } from '../../utils/ValueContext'
import { ProductDTO } from '../../models/ProductDTO'

type props = {
    productsFilter: () => ProductDTO[];
}

const ListProducts = ({productsFilter}: props) => {

    const { setProductQuant } = useContext(ValueContext)
    const products = productsFilter();

    if(!products){
        setProductQuant(0)
    }else{
        setProductQuant(products.length)
    }

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