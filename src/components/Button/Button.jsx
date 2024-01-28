import { Children } from "react"
import "./Button.css";

function Button(props){
    const {text,className, onClick} = props 
    return (
        <button onClick={onClick} className={className} type="button">{text}</button>
    )
}

export default Button;