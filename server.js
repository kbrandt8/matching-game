import express from 'express'
const app = express()
import mongoose from "mongoose"
import ScoreModel from './scoreModel.js'
import cors from 'cors'
import dotenv from 'dotenv'
import { dirname } from 'path'
import { fileURLToPath } from 'url'
import path from 'path'

dotenv.config()

const __dirname = dirname(fileURLToPath(import.meta.url))

app.use(express.json())
app.use(cors())

mongoose.connect(process.env.API)


const port = process.env.PORT || 7000




app.get("/getScores",(req,res)=>{
    ScoreModel.find({},(err,result)=>{
        if(err){
            res.json(err)
        }else{
            res.json(result)
        }
    })

})
app.post("/addScore", async (req,res)=>{
    const score = req.body 
    const newScore = new ScoreModel(score)
    await newScore.save()
    res.json(score)
})

{  
 if (process.env.production=== 'heroku') {
 app.use(express.static(path.join('client/build')));
    app.get('*', (req, res) => {
      res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
    });
}}

if(process.env.production === 'vercel')
{
 
    app.use(express.static(path.join(__dirname, "client/build")));

app.get("*", function(_, res) {
    res.sendFile(
        path.join(__dirname, "client/build/index.html"),
        function (err) {
            if(err) {
                res.status(500).send(err)
            }
        }
    )
})}


app.listen(port,()=>{
    console.log(`Server is ALIVE on ${port}!`)
})


