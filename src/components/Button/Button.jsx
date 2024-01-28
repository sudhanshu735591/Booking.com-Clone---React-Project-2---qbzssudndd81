import { Children } from "react"
import "./Button.css";

function Button(props){
    const {text,className} = props 
    return (
        <button className={className} type="button">{text}</button>
    )
}

export default Button;