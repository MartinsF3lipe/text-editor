import Styles from "./sidebar.module.css"
import Buttons from "../Buttons/buttons"

export default function Sidebar() {
    return (
        <div className={Styles.container}>
            <Buttons label="Arquivos"></Buttons>
            <Buttons label="Favoritos"></Buttons>
            <Buttons label="Editor"></Buttons>
        </div>
    );
};
