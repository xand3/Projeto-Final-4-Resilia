import { v4 as uuidv4 } from "uuid";

class Alunos {
    constructor (nome,nascimento,id_turma){
        this.id = uuidv4();
        this.nascimento = nascimento;
        this.nome = nome;
        this.id_turma = id_turma;
    }
}

export default Alunos;