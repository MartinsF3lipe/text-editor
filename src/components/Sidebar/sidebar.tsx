'use client'

import { RiInboxArchiveLine, 
    RiHeart2Line, 
    RiArrowRightCircleLine, 
    RiEdit2Line } from "react-icons/ri";


import Styles from "./sidebar.module.css"
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Sidebar() {
const pathname = usePathname()

    return (
        <nav className={Styles.nav}>
            <ul>
                <li>
                    <Link href='/' className={pathname === '/' ? Styles.active : ''}>
                        <RiInboxArchiveLine/>
                        All files
                    </Link>
                    <Link href='/favorites' className={pathname === '/favorites' ? Styles.active : ''}>
                        <RiHeart2Line />
                        Favorites
                    </Link>
                    <Link href='/editor' className={pathname === '/editor' ? Styles.active : ''}>
                        <RiEdit2Line />
                        Editor
                    </Link>
                </li>
            </ul>
        </nav>
    );
};
