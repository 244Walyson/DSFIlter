import './styles.css'

type props = {
    text: string;
}

const InputFilter = ({text}: props) => {
  return (
    <div className="input-filter">
        <input type="text" placeholder={text}/>
    </div>
  )
}

export default InputFilter