import openDb from "../config/configDb.js";

export async function createCoordenacao() {
    openDb().then((db) => {
        db.exec("CREATE TABLE IF NOT EXISTS coordenacao (id INTEGER PRIMARY KEY, email TEXT, id_turma INTEGER, id_docente INTERGER, cpf TEXT, nascimento TEXT)");
    });
}

