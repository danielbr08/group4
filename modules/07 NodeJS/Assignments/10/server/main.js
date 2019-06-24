const express = require('express');
const cors = require('cors');

const app = express();
app.use(express.json());
app.use(cors());

const port = 7777;
const url = `http://localhost:${port}`;
const MAX_POSSIBLE_SCORE = 100;
const top = 10;

let currentIndex = -1;
const scores = [
    { name: "Daniel", score: 10},
    { name: "Amiel", score: 20},
    { name: "Ori", score: 30},
    { name: "Uriel", score: 5},    { name: "Daniel", score: 10},
    { name: "Amiel", score: 20},
    { name: "Ori", score: 30},
    { name: "Uriel", score: 5},    { name: "Daniel", score: 10},
    { name: "Amiel", score: 20}
];

let minScore = MAX_POSSIBLE_SCORE;
let minIndex = 0;


app.get('/score',(req,res)=>{
    const score = req.query.score;
    const minObj = getMin();
    console.log(score,minObj);
    if( scores.length === top && score < minObj.min ){
        res.status(200).send({ isNameSendNeeded : false, data: scores});
        return;
    }
    scores.splice(minObj.minIndex,1);
    res.status(200).send({ isNameSendNeeded : true });
});

app.get('/scores',(req,res)=>{
        res.status(200).send({ data: scores });
});

app.post('/score',(req,res)=>{
    const scoreToAdd = req.body;
    scores.push(scoreToAdd);
    res.status(200).send({ data: scores });
});

const getMin = ()=> {
    let min = scores[0].score;
    let minIndex = 0;
    for(let i=1; i < scores.length; i++){
        if( scores[i].score < min ){
            min = scores[i].score;
            minIndex = i;
        }
    }
    return { minIndex,min };
}

app.listen(port,()=>console.log(`Server is running in port ${port}!`));