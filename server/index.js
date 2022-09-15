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

if (process.env.NODE_ENV === 'production') {
    // Exprees will serve up production assets
    app.use(express.static('client/build'));
  
    // Express serve up index.html file if it doesn't recognize route
    app.get('*', (req, res) => {
      res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
    });
  }
  //if (process.env.NODE_ENV === 'production') {

// app.use(express.static(path.resolve(__dirname, './client/')))

// app.get('*', (req, res) => {
//   res.sendFile(path.resolve(__dirname, '../client/public/', 'index.html'))
// })
  //}

app.listen(7000,()=>{
    console.log(`Server is ALIVE on ${port}!`)
})
