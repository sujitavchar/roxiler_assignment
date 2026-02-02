import dotenv from "dotenv";
import {db} from "./src/db.js";
import app from "./app.js"

dotenv.config({
    path: "./.env"
});
 
app.listen(process.env.PORT, ()=>{
    console.log(`Server listening at port ${process.env.PORT}`);
})