import { Schema, model } from "mongoose";

export interface NoteDocument{
    title: string,
    discription?: string
}


const noteSchema = new Schema({
    title: {
        type:String,
        required: true,
        trim:true
    },
    discription:{
        type:String,
        trim:true,
    }
});

export default model<NoteDocument>("Note", noteSchema);