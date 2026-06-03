import wallpapers from '@/pages/api/wallpapers';
import { useState , useEffect } from 'react';
import styles from './WallpaperBox.module.css';
import Image from 'next/image';
import { FaDownload , FaHeart } from 'react-icons/fa';
export default function WallpaperBox({name,category}){
    const [isFavorite,setIsFavorite] = useState(false)

    useEffect(()=>{
        if(localStorage.getItem(name)=='true'){
            setIsFavorite(true)
        }else{
            setIsFavorite(false)
        }
    },[])

    function clickHandler(){
        let favorite = (!isFavorite)
        localStorage.setItem(name,String(favorite))
        setIsFavorite(favorite)
    }

   return (
        <>
            <div className={styles.WallpaperBox}>
                <div className={styles.WallpaperBox_container}>
                    <div className={styles.WallpaperBox_downloadBtn}>
                        <FaDownload />
                    </div>
                    <div onClick={()=>clickHandler()} className={isFavorite?styles.WallpaperBox_favoriteBtn_selected:styles.WallpaperBox_favoriteBtn}>
                        <FaHeart />
                    </div>
                    <Image
                        width={300}
                        height={600}
                        src={`/wallpapers/${name}`}
                        alt='image'
                        className={styles.WallpaperBox_img}
                    />
                </div>
            </div>
        </>
    )
} 