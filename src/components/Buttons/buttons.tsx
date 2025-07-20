import Styles from "./buttons.module.css"

interface ButtonsProps {
    label: string
}

export default function Buttons({label}: ButtonsProps){
    return(
        <button className={Styles.button}>{label}</button>
    )
}
