import styles from './Landing.module.css'
import { useState , useEffect } from 'react'


export default function Landing(){
    let description = 'به این سایت خوش آمدید. این سایت یک پروژه تمرینی میباشد، امید وارم که تجربه رضایت بخشی داشته باشید '
    const [autoWriterIndex , setAutoWriterIndex ] = useState(0);

    useEffect(()=>{

        const intervalid = setInterval(()=>{
            // console.log('test')
            if(autoWriterIndex>description.length){
                setAutoWriterIndex(0)
            }else{
                setAutoWriterIndex((prevIndex)=>prevIndex+1)
            }
            
            // console.log(autoWriterIndex)
            clearInterval(intervalid)
        },150)

    },[autoWriterIndex])

    return (
        <>
            <div className={styles.landing}>
                <div className={styles.landing_container}>
                    <div className={styles.landing_title}>
                        <h1 className={styles.landing_title_text}>Wallworld</h1>
                    </div>
                    <div className={styles.landing_description}>
                        <div className={styles.landing_description_text}>{description.slice(0,autoWriterIndex)}</div>
                    </div>
                </div>
            </div>
        </>
    )
} 