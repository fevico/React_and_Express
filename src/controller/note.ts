import { RequestHandler } from 'express';
import Note, { NoteDocument } from '../models/node'

export interface IncomingBody{
    title:string;
    discription?:string;
}

export const create: RequestHandler = async (req, res) => {
    //    const newNote = new Note<NoteDocument>({
    //     title: (req.body as IncomingBody).title, 
    //     discription: (req.body as IncomingBody).discription,
    // });
    // await newNote.save();
    
    const newNote = await Note.create<NoteDocument>({
         title: (req.body as IncomingBody).title, 
        discription: (req.body as IncomingBody).discription, 
    });
    
    res.json({note: {id: newNote._id, title: newNote.title,
    discription: newNote.discription} });
    
}

export const updateSingleNote: RequestHandler =  async (req, res) =>{
    const {id} = req.params;
 //     const note = await Note.findById(id);
 //     if(!note) return res.json({error: "Note not found"});
 
     const {title, discription} = req.body as IncomingBody
 //    if(title) note.title = title
 //     if(discription) note.discription = discription 
 
 const note = await Note.findByIdAndUpdate(id, 
     {title, discription}, 
     {new: true});
      
     if(!note) return res.json({error: "Note not found"});
 
     await note.save();
     res.json({ note });
 }

 export const deleteSingleNote: RequestHandler = async (req, res) =>{
    const {id} = req.params;
  
    const oldNote = await Note.findByIdAndDelete(id);
    if(!oldNote) res.json({error: "Could not remove note!"});
    res.json({message: "Note removed successfully."});
}

export const readAllNote: RequestHandler = async (req, res) => {
    const notes = await Note.find();
    res.json({notes});
}

export const readSingleNote:RequestHandler = async (req, res) => {
    const {id} = req.params

    const notes = await Note.findById(id);
    if(!notes) return res.json({error: "Note not found"});
    res.json({notes});
}