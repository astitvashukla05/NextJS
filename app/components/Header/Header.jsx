import Image from "next/image";
 import logo from '@/assets/logo.png';
 import styles from './header.module.css'
import Link from "next/link";
import HeaderBG from "./Header-bg";
import NavLink from "./nav-link";

export default function Header(){
   
    return (
        <>
        <HeaderBG/>
        <header className={styles.header}>
            <Link href="/" className={styles.logo}>
                <Image src={logo} alt="Food Mood" priority />
                Next Level Food
            </Link>
            <nav className={styles.nav}>
                <ul>
                    <li>
                        <NavLink href='/meals'>Browse Meals</NavLink>
                    </li>
                    <li>
                         <NavLink href='/community'>Join community</NavLink>
                        
                    </li>
                </ul>
            </nav>
        </header>
        </>
    ) 
}