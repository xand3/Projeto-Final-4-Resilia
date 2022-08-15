import { application, Router } from "express";
import {
  deleteAluno,
  insertAluno,
  selectAluno,
  selectAlunos,
  updateAluno,
} from "../controllers/aluno";
import {
  createDocente,
  insertDocente,
  selectDocente,
  selectDocentes,
} from "../controllers/docente";
import { insertMatricula, selectMatricula, selectMatriculaFromID } from "../controllers/matricula";
import { insertTurma, selectTurma, selectTurmaFromID } from "../controllers/turma";

const router = Router();

router.get("/", (req, res) => {
  res.json({
    StatusCode: 200,
    msg: "api funcionando",
  });
});

// rotas para aluno
router.get("/pessoas", selectAlunos);
router.get("/pessoa", selectAluno);
router.post("/pessoa", insertAluno);
router.put("/pessoa", updateAluno);
router.delete("/pessoa", deleteAluno);

// rotas para docente
router.post("/docente", insertDocente);
router.get("/docentes", selectDocentes);

// rotas para matricula
router.post("matricula", insertMatricula);
router.get("matricula", selectMatricula);
router.get("matricula", selectMatriculaFromID);

// rotas para turma
router.post("turma", insertTurma);
router.get("turma", selectTurma);
router.get("turma", selectTurmaFromID);

export default router;
