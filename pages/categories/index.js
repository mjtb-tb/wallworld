import CategoriesContainer from "@/components/CategoriesContainer/CategoriesContainer"

export async function getStaticProps(){
    try{
        // const response = await fetch('http://localhost:3000/api/categories')
        const response = await fetch('https://wallworld.onrender.com/api/categories')
        if(!response.ok){
            throw new Error('failed to fetch')
        }
        const data = await response.json()
        console.log('data==>',data)
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
                data:[],
                error:true,
                message:'there is a problem'
            }
        }
    }
}

export default function Categories(p){
    return (
        <>
            <CategoriesContainer data={p.data} error={p.error} message={p.message} ></CategoriesContainer>
        </>
    )
} 