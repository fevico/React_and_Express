// create a server 
import express from 'express';
import './db/';
import cors from 'cors'
import noteRouter from './router/note';

const app = express();

app.use(cors());

app.use(express.json());
app.use(express.urlencoded({extended:false}));

// localhost:8000/note/create

app.use("/note", noteRouter); 

app.listen(8000, () => {
    console.log('Listening');
});