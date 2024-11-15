import connectDB from "./DataBase/db.js";
import dotenv from "dotenv"

dotenv.config ({
    path: './env'
})



connectDB()