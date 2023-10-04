import './styles.css'

type props = {
    text: string;
}

const ButtonPrimary = ({text}: props) => {
  return (
    <button className='button-primary'>{text}</button>
  )
}

export default ButtonPrimary