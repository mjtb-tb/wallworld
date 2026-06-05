import styles from '@/styles/Favorites.module.css'
import BoxesContainer from '@/components/BoxesContainer/BoxesContainer'
import { useEffect ,useState } from 'react'

export async function getStaticProps(){
    try{
        // const response = await fetch('http://localhost:3000/api/wallpapers')
        const response = await fetch('https://wallworld.onrender.com/api/wallpapers')
        if(!response.ok){
            throw new Error('failed to fetch')
        }
        const data = await response.json()
        console.log(data)
        return {
            props:{
                data,
                error:false,
                message:'everything is ok'
            },
            revalidate: 60
        }
    }catch(err){
        return {
            props:{
                data:[],
                error:true,
                message:'there is a problem'
            }
        }
    }
}


export default function Favorits({data,error,message}){
    const [filteredData,setFilteredData] = useState([])
    useEffect(()=>{
        if(error==true){
        }else{
            let filter = data.filter((wallpaper)=>{
                return  localStorage.getItem(wallpaper.name) == 'true'
            })
            setFilteredData(filter)
        }        
        console.log(filteredData)
    },[])
    return(<BoxesContainer data={filteredData} error={error} message={message} backgroundColor={'#ef5350'}></BoxesContainer>)

} 