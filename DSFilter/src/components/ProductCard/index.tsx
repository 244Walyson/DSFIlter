import './styles.css'

type props = {
    name: string;
    price: number;
}

const ProductCard = ({name, price}: props) => {
  return (
    <div className="card-product">
        <h3>{name}</h3>
        <h2>R$ {price}</h2>
    </div>
  )
}

export default ProductCard