import ButtonPrimary from '../ButtonPimary'
import InputFilter from '../InputFilter'
import './styles.css'

const BoxFilter = () => {

    return (
        <div className="container">
            <div className="box-filter">
                <form className='form-box-filter'>
                    <div className="form-items-filter"><InputFilter text='Preço mínimo' textFilter={(num: number)=> (console.log(num))}></InputFilter></div>
                    <div className="form-items-filter"><InputFilter text='Preço máximo' textFilter={(num: number) => (console.log(num))}></InputFilter></div>
                    <div className="form-items-filter"><ButtonPrimary text='Filtrar'></ButtonPrimary></div>
                </form>
            </div>
        </div>
    )
}

export default BoxFilter