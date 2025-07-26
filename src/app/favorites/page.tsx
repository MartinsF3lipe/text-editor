import Styles from "./favorites.module.css"

import Sidebar from "@/components/Sidebar/sidebar"
import ListFIles from "@/components/ListFiles/listfiles"


export default function favorites(){
    return(
        <>
            <Sidebar/>
            <ListFIles/>
        </>
    )
}