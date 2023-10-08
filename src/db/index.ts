// create a server 
import mongoose from 'mongoose';

mongoose.set('strictQuery',true);

mongoose.connect("mongodb://127.0.0.1:27017/node-app").then(()=>{
    console.log("Connected to DB");
}).catch((err)=>{ 
    console.log(err);
});

