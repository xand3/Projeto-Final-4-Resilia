import { application, Router } from "express";
import { deleteAluno, insertAluno, selectAluno, selectAlunos, updateAluno } from "../controllers/aluno";
import { createDocente, insertDocente, selectDocente, selectDocentes } from "../controllers/docente";

const router = Router();

router.get('/',(req,res)=>{
    res.json({
        "StatusCode":200,
        "msg":"api funcionando"
    })
})
// rotas para aluno
router.get('/pessoas',selectAlunos);
router.get('/pessoa',selectAluno);
router.post('/pessoa',insertAluno);
router.put('/pessoa',updateAluno);
router.delete('/pessoa',deleteAluno);

// rotas para docente
router.post('/docente', insertDocente)
router.get('/docentes', selectDocentes)

export default router