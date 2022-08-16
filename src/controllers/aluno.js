import openDb from "../config/configDb.js";
import Alunos from "../models/alunoModels.js";



export async function createAluno(req,res) {
    openDb()
        .then(db => {
          
            db.exec("CREATE TABLE IF NOT EXISTS aluno (id VARCHAR(50) PRIMARY KEY , nome TEXT, nascimento TEXT, id_turma INTEGER  ) ")
        })
        res.sendStatus(200)
}
export async function insertAluno(req, res) {

    const {nome,nascimento,id_turma} = req.body;

    const aluno = new Alunos(nome,nascimento,id_turma)

    openDb()
        .then(db => {
            db.run("INSERT INTO aluno (id,nome,nascimento,id_turma) VALUES (?,?,?,?)", [aluno.id,aluno.nome,aluno.nascimento,aluno.id_turma])
            
        })
        res.json({
            "statusCode": 200
        })
}

export async function updateAluno(req, res) {
    const {nome,nascimento,id_turma,id} = req.body;
   
    const aluno = new Alunos(nome,nascimento,id_turma)
   
    openDb()
        .then(db => {
            db.run("UPDATE aluno SET nome =? WHERE id=?", [aluno.nome, id])

        })
    res.json({
        "statusCode": 200
    })
}

export async function selectAlunos(req, res) {
    openDb().then(db => {
        db.all('SELECT * FROM aluno')
            .then(response => res.json(response))
    })

}

export async function selectAluno(req, res) {
    let id = req.body.id;
    openDb().then(db => {
        db.all('SELECT * FROM aluno WHERE id=?', [id])
            .then(aluno => res.json(aluno))
    })

}

export async function deleteAluno(req,res) {
    let id = req.body.id;

    openDb().then(db => {
        db.get('DELETE FROM aluno WHERE id=?', [id])
            .then(res => res)
    })

    res.json({
        "statusCode": 200
    })

}
