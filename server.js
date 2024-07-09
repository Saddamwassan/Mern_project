import express from 'express'
import { MongoClient } from 'mongodb';
const app = express();
const Port = process.env.Port || 8000;
// initialize middleware 
app.use(express.json({extended:false}))
// route for db connection 
app.get('/api/articles/:name', async (req,res)=>{
    try{
        console.log('check!');
        const articleName = req.params.name;
        console.log(articleName);

        const client = await MongoClient.connect('mongodb://localhost:27017/');
        const db = client.db('merndb');
        const articleInfo = await db.collection('articles').findOne({name:articleName});
        console.log('check2!');

         res.status(200).json(articleInfo);
        client.close();
    }catch(err){
        res.status(500).json({message:'Error connecting to db by saddam',err})
    }
    
})
app.get('/',(req,res)=>{
    res.send('backEnd set!');
})
app.listen(8000,()=>{
    console.log(`server started at ${Port}`);
})