import { Router } from "express";
import { deleteAluno, insertAluno, selectAluno, selectAlunos, updateAluno } from "../controllers/aluno";


const router = Router();

router.get('/',(req,res)=>{
    res.json({
        "StatusCode":200,
        "msg":"api funcionando"
    })
})

router.get('/pessoas',selectAlunos);
router.get('/pessoa',selectAluno);
router.post('/pessoa',insertAluno);
router.put('/pessoa',updateAluno);
router.delete('/pessoa',deleteAluno);
