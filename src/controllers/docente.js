import openDb from "../config/configDb.js";

export async function createDocente() {
    openDb().then((db) => {
        db.exec("CREATE TABLE IF NOT EXISTS docente (id INTEGER PRIMARY KEY, email TEXT, nome TEXT, nascimento TEXT, id_turma INTEGER, cpf TEXT)");
    });
}

export async function selectDocente(req, res) {
    let id = req.body.id
    openDb().then(db => {
        db.get("SELECT * FROM docente WHERE id=?", [id]).then((docente) => {
            res.json(docente)
        })
    })
}

export async function selectDocentes(req, res) {
    openDb().then(db => {
        db.all("SELECT * FROM docente")
        .then(docente => res.json(docente))
    })
}

export async function insertDocente(req, res) {
    let docente = req.body
    openDb().then((db) => {
        db.run("INSERT INTO docente (email, nome, nascimento, id_turma, cpf) VALUES (?, ?, ?, ?, ?)", [docente.email, docente.nome, docente.nascimento, docente.id_turma, docente.cpf])
    });
    res.json({"status": 200})
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
