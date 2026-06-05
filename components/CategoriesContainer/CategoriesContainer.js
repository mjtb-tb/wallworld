import styles from './CategoriesContainer.module.css'
import Link from 'next/link'

export default function CategoriesContainer({data,error,message}){
    console.log(data)
    return(
        <>
            <div className={styles.CategoryBox_container}>
                {data.map((categoryName)=>{
                    return(
                        <div className={styles.category_card}>
                            <div className={styles.card_bg}></div>
                            <div className={styles.card_content}>
                                <h3>{categoryName}</h3>
                                <Link href={`/categories/${categoryName}`}>
                                    <button>مشاهده</button>
                                </Link>
                                
                            </div>
                        </div>
                    )
                })
                }
            </div>
        </>
    )
}