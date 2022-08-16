import openDb from "../config/configDb.js";
import Turma from "../models/turmaModels.js";

export async function createTurma(req, res) {
    openDb()
        .then(db => {
            db.exec('CREATE TABLE IF NOT EXISTS turma (id INTEGER PRIMARY KEY NOT NULL, id_docente INTEGER NOT NULL, id_coordenacao INTEGER NOT NULL, serie VARCHAR(10) NOT NULL )')

        })
        res.sendStatus(200)
}

export async function insertTurma(req, res) {

    const {id,id_docente,id_coordenacao,serie} = req.body;

    const turma = new Turma(id,id_docente,id_coordenacao,serie)

    openDb()
        .then(db => {
            db.run("INSERT INTO turma (id,serie) VALUES (?,?)", [turma.id,turma.serie])
            
        })
        res.json({
            "statusCode": 200
        })
}

export async function updateTurma(req, res) {
    const {id,id_docente,id_coordenacao,serie} = req.body;

    const turma = new Turma(id,id_docente,id_coordenacao,serie)
   
    openDb()
        .then(db => {
            db.run("UPDATE turma SET serie =? WHERE id=?", [turma.serie,turma.id])

        })
    res.json({
        "statusCode": 200
    })
}

export async function selectTurmas(req, res) {
    openDb().then(db => {
        db.all('SELECT * FROM turma')
            .then(response => res.json(response))
    })

}

export async function selectTurma(req, res) {
    let id = req.body.id;
    openDb().then(db => {
        db.all('SELECT * FROM turma WHERE id=?', [id])
            .then(turma => res.json(turma))
    })

}

export async function deleteTurma(req,res) {
    let id = req.body.id;

    openDb().then(db => {
        db.get('DELETE FROM turma WHERE id=?', [id])
            .then(res => res)
    })

    res.json({
        "statusCode": 200
    })
}



