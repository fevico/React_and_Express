import { create } from "domain";
import { Router } from "express";
import { deleteSingleNote, readAllNote, readSingleNote, updateSingleNote } from "../controller/note";

const router = Router()

router.post('/create', create);

router.patch('/:id', updateSingleNote);

router.delete('/:id', deleteSingleNote);

router.get('/', readAllNote); 

router.get('/:id', readSingleNote);


export default router 