import openDb from "../config/configDb.js";

export async function createDocente() {
    openDb().then((db) => {
        db.exec("CREATE TABLE IF NOT EXISTS docente (id INTEGER PRIMARY KEY, email TEXT, nome TEXT, nascimento TEXT, id_turma INTEGER, cpf TEXT)");
    });
}

export async function selectDocente(docente) {
    openDb().then(db => {
        db.run("SELECT * FROM docente WHERE id=?", [docente.id])
    })
}

export async function selectDocentes(req, res) {
    openDb().then(db => {
        db.all("SELECT * FROM docente")
        .then(docente => res.json(docente))
    })
}

export async function insertDocente(docente) {
    openDb().then((db) => {
        db.run("INSERT INTO docente (email, nome, nascimento, id_turma, cpf) VALUES (?, ?, ?, ?, ?)", [docente.email, docente.nome, docente.nascimento, docente.id_turma, docente.cpf])
    })
}