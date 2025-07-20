import Styles from "./botton.module.css"

interface BottonProps {
    label: string
}

export default function Botton({label}: BottonProps){
    return(
        <button className={Styles.button}>{label}</button>
    )
}
