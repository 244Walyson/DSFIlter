import { useContext } from 'react'
import './styles.css'
import { ValueContext } from '../../utils/minValueContext'


const Header = () => {

    const {productQuant} = useContext(ValueContext)

    return (
    <header>
        <div className="container content-header">
        <h1>DSFilter</h1>
        <p>{productQuant} produto(s)</p>
        </div>
    </header>
  )
}

export default Header