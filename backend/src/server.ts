import express, { urlencoded } from 'express'
import dotenv from 'dotenv'
import cors from 'cors'




const app = express();
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(cors())


const port=8080

app.listen(port,()=>{
    console.log('server runing on 8080 succesfully')
})
