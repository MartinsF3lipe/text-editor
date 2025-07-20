import Styles from "./nav.module.css"
import Botton from "../Bottons/botton";

export default function Nav() {
    return (
        <div className={Styles.container}>
            <Botton label="Arquivos"></Botton>
            <Botton label="Favoritos"></Botton>
            <Botton label="Editor"></Botton>
        </div>
    );
};
