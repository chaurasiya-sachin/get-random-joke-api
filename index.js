const express = require("express")
const app = express()

const jokes = require('./joke.json')

app.get("/",(req,res)=>{
    const randomJoke = jokes[Math.floor(Math.random()*jokes.length)]
    res.json(randomJoke)
})

app.get("/english",(req,res)=>{
    console.log("english api triggred");
    
    const englishJoke = jokes.filter(joke=> joke.category.toLowerCase()==="english")

    if(englishJoke.length>0){
        const randomJoke = englishJoke[Math.floor(Math.random()*englishJoke.length)]
        res.json(randomJoke);
    }else{
        res.status(404).json({error:"No english joke found !! Sorry"})
    }
})

app.get("/hindi",(req,res)=>{ 
    
    const hindiJoke = jokes.filter(joke=> joke.category.toLowerCase()==="hindi")

    if(hindiJoke.length>0){
        const randomJoke = hindiJoke[Math.floor(Math.random()*hindiJoke.length)]
        res.json(randomJoke);
    }else{
        res.status(404).json({error:"No hindi joke found !! Sorry"})
    }
})

app.get("/hinglish",(req,res)=>{
    
    const hinglishJoke = jokes.filter(joke=> joke.category.toLowerCase()==="hinglish")

    if(hinglishJoke.length>0){
        const randomJoke = hinglishJoke[Math.floor(Math.random()*hinglishJoke.length)]
        res.json(randomJoke);
    }else{
        res.status(404).json({error:"No hinglish joke found !! Sorry"})
    }
})


app.listen(5000,()=>{
    console.log('Server is running on port 5000');    
})