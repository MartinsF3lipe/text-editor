import Styles from "./buttonFile.module.css"

import { IoMdAdd } from "react-icons/io";

import Link from "next/link";

export default function ButtonFile(){
    return(
        <button className={Styles.button}>
            <Link href="/editor">
                <IoMdAdd fontSize="28px" />
            </Link>
        </button>
    )
}