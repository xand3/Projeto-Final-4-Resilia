import openDb from "../config/configDb.js";
import Docente from "../models/docenteModel.js";

export async function createDocente(req, res) {
    openDb()
    .then((db) => {
        db.exec("CREATE TABLE IF NOT EXISTS docente (id INTEGER PRIMARY KEY, email TEXT, nome TEXT, nascimento TEXT, id_turma INTEGER, cpf TEXT)");
    });
    res.sendStatus(200)
}

export async function insertDocente(req, res) {
    
    const {id, email, nome, nascimento, id_turma, cpf} = req.body

    const docente = new Docente(id, email, nome, nascimento, id_turma, cpf)
    
    openDb()
    .then(db => {
        db.run("INSERT INTO docente (id, email, nome, nascimento, id_turma, cpf) VALUES (?,?,?,?,?,?)", [docente.id, docente.email, docente.nome, docente.nascimento, docente.id_turma, docente.cpf])
    });
    res.json({
        "statusCode": 200
    })
}

export async function selectDocente(req, res) {
    let id = req.body.id
    openDb().then(db => {
        db.get("SELECT * FROM docente WHERE id=?", [id])
        .then((docente) => {res.json(docente)
        })
    })
}

export async function selectDocentes(req, res) {
    openDb().then(db => {
        db.all('SELECT * FROM docente')
        .then(response => res.json(response))
    })
}


export async function deleteDocente(req, res) {
    let id = req.body.id
    openDb().then(db => {
        db.get("DELETE FROM docente WHERE id=?", [id]).then((res) => res)
    })
    res.json({
        "status": 200
    })
}
