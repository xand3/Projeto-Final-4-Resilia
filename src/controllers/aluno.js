import openDb from "../config/configDb.js";

export async function createAluno() {
    openDb()
        .then(db => {
            db.exec("CREATE TABLE IF NOT EXISTS aluno (id INTEGER PRIMARY KEY , nome TEXT, nascimento TEXT, id_turma INTEGER ) ")

        })
}
export async function insertAluno(req, res) {
    let pessoa = req.body;
    openDb()
        .then(db => {
            db.run("INSERT INTO aluno (nome,nascimento,id_turma) VALUES (?,?,?)", [aluno.nome, aluno.nascimento, aluno.id_turma])

        })
        res.json({
            "statusCode": 200
        })
}

export async function updateAluno(req, res) {
    let pessoa = req.body;
    openDb()
        .then(db => {
            db.run("UPDATE aluno SET nome =? WHERE id=?", [aluno.nome, aluno.nascimento])

        })
    res.json({
        "statusCode": 200
    })
}

export async function selectAlunos(req, res) {
    openDb().then(db => {
        db.all('SELECT * FROM aluno')
            .then(res => res)
    })

}

export async function selectAluno(req, res) {
    let id = req.body.id;
    openDb().then(db => {
        db.all('SELECT * FROM aluno WHERE id=?', [id])
            .then(pessoa => res.json(pessoa))
    })

}

export async function deleteAluno(req,res) {
    let id = req.body.id;

    openDb().then(db => {
        db.get('DELETE FROM aluno WHERE id=?', [id])
            .then(res => res)
    })

    res.json({
        "statusCode": 200
    })

}