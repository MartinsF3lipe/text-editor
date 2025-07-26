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
                        <RiInboxArchiveLine fontSize="28px"/>
                        All files
                    </Link>
                    <Link href='/favorites' className={pathname === '/favorites' ? Styles.active : ''}>
                        <RiHeart2Line fontSize="28px" />
                        Favorites
                    </Link>
                    <Link href='/editor' className={pathname === '/editor' ? Styles.active : ''}>
                        <RiEdit2Line fontSize="28px" />
                        Editor
                    </Link>
                </li>
            </ul>
        </nav>
    );
};
