import Landing from "@/components/Landing/Landing"
import Slidebar from "@/components/Slidebar/Slidebar"
import BoxesContainer from "@/components/BoxesContainer/BoxesContainer"

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
                data:'error',
                error:true,
                message:'there is a problem'
            }
        }
    }
}


export default function Home(p){

    console.log(p)

    return (
        <>
            <Landing></Landing>
            <Slidebar></Slidebar>
            <BoxesContainer data={p.data} error={p.error} message={p.message}></BoxesContainer>
        </>
    )
}