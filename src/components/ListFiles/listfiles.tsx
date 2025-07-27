import { getUserText } from '@/lib/hygraph'
import { formatDate } from '@/utils/format-date'

import Styles from "./listfiles.module.css"

import { IoTrashOutline } from 'react-icons/io5'
import { RiHeart2Line, RiHeart2Fill } from 'react-icons/ri'

export default async function ListFIles(){

    const data = await getUserText()
    const userTexts = data.files

    return(
        <div className={Styles.container}>
            <ul>
                {userTexts.map((item) => (
                    <li key={item.id}>
                        <div>
                            <p>{item.title}</p>
                            <span>Last Update: {formatDate(item.updatedAt).message}</span>
                        </div>
                        <div className={Styles.buttons}>
                            <RiHeart2Fill fontSize="28px"/>
                            <IoTrashOutline fontSize="28px"/>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    )
}