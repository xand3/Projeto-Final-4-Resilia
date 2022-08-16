import openDb from "../config/configDb.js";
import Coordenacao from "../models/coordenacaoModel.js";

export async function createCoordenacao(req, res) {
  openDb().then((db) => {
    db.exec(
      "CREATE TABLE IF NOT EXISTS coordenacao (id INTEGER PRIMARY KEY, email TEXT, id_turma INTEGER, id_docente INTERGER, cpf TEXT, nascimento TEXT)"
    );
  });
  res.sendStatus(200);
}

export async function selectCoordenacao(req, res) {
  let id = req.body.id;
  openDb().then((db) => {
    db.run("SELECT * FROM coordenacao WHERE id = ?", [id]).then((coordenacao) =>
      res.json(coordenacao)
    );
  });
}

export async function selectCoordenacoes(req, res) {
    openDb().then((db) => {
      db.all("SELECT * from coordenacao").then((response) => res.json(response));
    });
  }

export async function insertCoordenacao(req, res) {
  const { email, id_turma, id_docente, cpf, nascimento } = req.body;
  const coordenacao = new Coordenacao(email, id_turma, id_docente, cpf, nascimento);
  openDb().then((db) => {
    db.run(
      "INSERT INTO coordenacao (email, id_turma, id_docente, cpf, nascimento) VALUES (?, ?, ?, ?, ?)", [coordenacao.email, coordenacao.id_turma, coordenacao.id_docente, coordenacao.cpf, coordenacao.nascimento])
    })
  res.sendStatus(200);
}

export async function updateCoordenacao(req, res) {
  const { email, id_turma, id_docente, cpf, nascimento, id } = req.body;
  const coordenacao = new Coordenacao(email, id_turma, id_docente, cpf, nascimento);
  openDb().then((db) => {
    db.run("UPDATE coordenacao SET email=?, id_turma=?, id_docente=?, cpf=?, nascimento=? WHERE id=?", [coordenacao.email, coordenacao.id_turma, coordenacao.id_docente, coordenacao.cpf, coordenacao.nascimento, id])
  });
  res.sendStatus(200);
}

export async function deleteCoordenacao(req, res) {
  let id = req.body.id;
  openDb().then((db) => {
    db.get("DELETE FROM coordenacao WHERE id = ?", [id]).then((res) => res);
  });
  res.sendStatus(200);
}