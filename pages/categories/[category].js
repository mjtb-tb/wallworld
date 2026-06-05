import BoxesContainer from "@/components/BoxesContainer/BoxesContainer"

export async function getStaticProps(context){
    const categoryParam = context.params.category
    try{
        let response = await fetch('https://wallworld.onrender.com/api/wallpapers')
        if(!response.ok){
            throw new error('error')
        }
        let data = await response.json()
        let filteredData = data.filter((wallpaper)=>{
            return (wallpaper.category==categoryParam)
        })
        console.log(filteredData)
        return {
            props:{
                data:filteredData,
                error:false,
                message:'everything is ok'
            }
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


export async function getStaticPaths(){
    return {
        paths:[
            {params:{category:'space'}},
            {params:{category:'nature'}},
            {params:{category:'art'}},
        ],
        fallback:false
    }
}



export default function Category({data,error,message}){

    return (
        <>
            {
                error?(
                    <div>{message}</div>
                ):(
                    <BoxesContainer data={data} error={error} message={message}></BoxesContainer>
                )
            }
        </>
    )
}