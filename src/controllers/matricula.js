import openDb from "../config/configDb.js";
import Matricula from "../models/matriculaModel.js";

export async function createMatricula(req, res) {
  openDb().then((db) => {
    db.exec(
      "CREATE TABLE IF NOT EXISTS matricula (id INTEGER PRIMARY KEY, id_aluno INTEGER, id_turma INTEGER, status TEXT)"
    );
  });
  res.sendStatus(200);
}

export async function selectMatricula(req, res) {
  let id = req.body.id;
  openDb().then((db) => {
    db.run("SELECT * FROM matricula WHERE id = ?", [id]).then((matricula) =>
      res.json(matricula)
    );
  });
}

export async function selectMatriculas(req, res) {
  openDb().then((db) => {
    db.all("SELECT * from matricula").then((response) => res.json(response));
  });
}

export async function insertMatricula(req, res) {
  const { id_aluno, id_turma, status } = req.body;
  const matricula = new Matricula(id_aluno, id_turma, status);
  openDb().then((db) => {
    db.run(
      "INSERT INTO matricula (id_aluno, id_turma, status) VALUES (?, ?, ?)",
      [matricula.id_aluno, matricula.id_turma, matricula.status]
    );
  });
  res.sendStatus(200);
}

export async function updateMatricula(req, res) {
  const { id_aluno, id_turma, status } = req.body;
  const matricula = new Matricula(id_aluno, id_turma, status);
  openDb().then((db) => {
    db.run("UPDATE matricula SET status = ?", [matricula.status]);
  });
  res.sendStatus(200);
}

export async function deleteMatricula(req, res) {
  let id = req.body.id;
  openDb().then((db) => {
    db.get("DELETE FROM matricula WHERE id = ?", [id]).then((res) => res);
  });
  res.sendStatus(200);
}
