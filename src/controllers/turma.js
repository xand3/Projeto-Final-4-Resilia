import openDb from "../config/configDb";

export async function createTurma() {
  openDb().then(db => {
    db.exec("CREATE TABLE IF NOT EXISTS turma (id INTEGER PRIMARY KEY, id_aluno INTEGER, id_turma INTEGER, status TEXT) ")
  })
}

export async function selectTurmaFromID(turma) {
  openDb().then(db => {
    db.run("SELECT * FROM turma WHERE id=?", [turma.id])
  })
}

export async function selectTurma() {
  return openDb().then(db => {
    return db.all("SELECT * from turma").then(res => res)
  })
}

export async function insertTurma(turma) {
  openDb().then((db => {
    db.run("INSERT INTO turma (id_aluno, id_docente, id_coordenacao, serie) VALUES (?, ?, ?, ?)", [turma.id_aluno, turma.id_docente, turma.id_coordenacao, turma.serie])
  }))
}