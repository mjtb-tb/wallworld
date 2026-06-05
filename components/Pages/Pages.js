import styles from "./Pages.module.css"
import Link from "next/link"
import { useState } from "react"
import { FaHeart,FaHome,FaListAlt } from 'react-icons/fa';


export default function Pages(){
    const [selectedPage , useSelectedPage] = useState('home');

    function clickHandler(pageName){
        useSelectedPage(pageName)
    }

    return (
        <>
            <div className={styles.pages}>
                <div className={styles.pages_container}>
                    <div className={styles.pages_centeContainer}>
                        <Link href='/favorites' onClick={()=>clickHandler('favorites')}>
                            <div className={`${styles.pages_favorites} ${selectedPage=='favorites'?styles.selected:''}`}>
                                <FaHeart />
                                {/* <img src="/icons/heart.svg" className={styles.pages_favorites_img}></img> */}
                            </div>                        
                        </Link>

                        <Link href='/home' onClick={()=>clickHandler('home')}>
                            <div className={`${styles.pages_home} ${selectedPage=='home'?styles.selected:''}`}>
                                {/* <img src="/icons/home.svg" className={styles.pages_home_img}></img> */}
                                <FaHome />
                            </div>                        
                        </Link>

                        <Link href='/categories' onClick={()=>clickHandler('categories')}>
                            <div className={`${styles.pages_categories} ${selectedPage=='categories'?styles.selected:''}`}>
                                {/* <img src="/icons/categories.svg" className={styles.pages_categories_img}></img> */}
                                <FaListAlt />
                            </div>                       
                        </Link>

                    
                    </div>
                </div>
            </div>
        
        </>
    )
} 