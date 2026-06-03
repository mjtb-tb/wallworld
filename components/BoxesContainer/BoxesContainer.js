import styles from './BoxesContainer.module.css';
import WallpaperBox from '../WallpaperBox/WallpaperBox';




export default function BoxesContainer({data,error,message}){

    console.log(data)
    return (
        <>
            <div className={styles.BoxesContainer}>
                <div className={styles.BoxesContainer_container}>
                    {
                        error?(
                            <div>
                                {message}
                            </div>
                        ):
                        data.map((w)=>{
                            return(
                                <WallpaperBox name={w.name} category={w.category} ></WallpaperBox>
                            )
                        })                            
                        
                    }
                </div>
            </div>
        </>
    )
} 