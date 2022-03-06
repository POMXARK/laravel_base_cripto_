import  express from "express"
import mongoose from "mongoose"
import router from "./router.js";
const DB_URL = 'mongodb+srv://user:user@cluster0.gvc2g.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'

const PORT = 5000;

const app = express()

app.use(express.json())
app.use('/api', router)


//app.get('/', (req, res) => {
//    console.log(req.query);
//    res.status(200).json(`Сервер работает`)
//})


async function startApp(){
    try{
        await mongoose.connect(DB_URL)
        app.listen(PORT, () => console.log('SERVER STARTED ON PORT ' + PORT))
    } catch (e){
        console.log(e)
    }
}

startApp()