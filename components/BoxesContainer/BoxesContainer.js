import styles from './BoxesContainer.module.css';
import WallpaperBox from '../WallpaperBox/WallpaperBox';




export default function BoxesContainer({data,error,message,backgroundColor='#263238'}){

    console.log(data)
    return (
        <>
            <div style={{backgroundColor:backgroundColor}} className={styles.BoxesContainer}>
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