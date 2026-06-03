import Landing from "@/components/Landing/Landing"
import Slidebar from "@/components/Slidebar/Slidebar"
import BoxesContainer from "@/components/BoxesContainer/BoxesContainer"

export async function getStaticProps(){
    try{
        const response = await fetch('http://localhost:3000/api/wallpapers')
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
            }
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
            <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa animi perspiciatis corrupti debitis vero aspernatur voluptas dolorum consequatur, nesciunt obcaecati explicabo fugiat perferendis dolor voluptate? Ab soluta veniam quis, quibusdam laudantium atque quia amet perferendis minus architecto impedit nemo temporibus officia harum. Necessitatibus saepe vitae voluptatibus consequatur alias quidem veniam.</div>
        </>
    )
}