import app from "./src/app.js";
import { connectdb } from "./src/config/database.js";




connectdb();

app.listen(5050, ()=>{
    console.log("server is live...")
})



