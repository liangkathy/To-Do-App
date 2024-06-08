
import './ButtonComponent.css'

const ButtonComponent = ({fx, className, buttonLabel}) => {
    return (
        <button onClick={fx} className={`button ${className}`}>{buttonLabel}</button>
    )
}

export default ButtonComponent;