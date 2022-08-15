import openDb from "../config/configDb";

export async function createMatricula() {
  openDb().then(db => {
    db.exec("CREATE TABLE IF NOT EXISTS matricula (id INTEGER PRIMARY KEY, id_aluno INTEGER, id_turma INTEGER, status TEXT) ")
  })
}

export async function selectMatriculaFromID(matricula) {
  openDb().then(db => {
    db.run("SELECT * FROM matricula WHERE id=?", [matricula.id])
  })
}

export async function selectMatricula() {
  return openDb().then(db => {
    return db.all("SELECT * from matricula").then(res => res)
  })
}

export async function insertMatricula(matricula) {
  openDb().then((db => {
    db.run("INSERT INTO matricula (id_aluno, id_turma, status) VALUES (?, ?, ?)", [matricula.id_aluno, matricula.id_turma, matricula.status])
  }))
}