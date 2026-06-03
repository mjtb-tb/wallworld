import db from "@/db/database"

export default function categories(req,res){
    return res.json(db.categories)
}