import styles from './Header.module.css'
import Image from 'next/image'
import Logo from '../Logo/Logo'

export default function Header(){

    return (
        <>
            <header className={styles.header} >
                <div className={styles.header_container}>
                    <div className={styles.header_logo}>
                        {/* <img className={styles.header_logo_img} src="/icons/wallpaper.svg" alt="logo"  /> */}
                        <Logo></Logo>
                    </div>
                </div>
            </header>
        
        </>
    )
} 