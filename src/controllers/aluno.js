import openDb from "../config/configDb.js";

export async function createAluno() {
    openDb()
        .then(db=>{
            db.exec("CREATE TABLE IF NOT EXISTS aluno (id INTEGER NOT NULL PRIMARY KEY, nome TEXT, nascimento TEXT, id_turma INTEGER NOT NULL) ")
            
        })
}