import db from "@/db/database"

export default function wallpapers(req,res){
    return res.json(db.wallpapers)
}