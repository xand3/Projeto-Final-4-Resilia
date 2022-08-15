import openDb from "../config/configDb.js";

export async function createCoordenacao() {
    openDb().then((db) => {
        db.exec("CREATE TABLE IF NOT EXISTS coordenacao (id INTEGER PRIMARY KEY, email TEXT, id_turma INTEGER, id_docente INTERGER, cpf TEXT, nascimento TEXT)");
    });
}

export async function insertCoordenacao(coordenacao) {
    openDb().then((db) => {
        db.run("INSERT INTO coordenacao (email, id_turma, id_docente, cpf, nascimento) VALUES (?, ?, ?, ?, ?)", [coordenacao.email, coordenacao.id_turma, coordenacao.id_docente, coordenacao.cpf, coordenacao.nascimento])
    })
}

export async function updateCoordenacao(coordenacao) {
    openDb().then((db) => {
        db.run("UPDATE coordenacao SET email=?, id_turma=?, id_docente=?, cpf=?, nascimento=? WHERE id=?", [coordenacao.email, coordenacao.id_turma, coordenacao.id_docente, coordenacao.cpf, coordenacao.nascimento, coordenacao.id])
    })
}