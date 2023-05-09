import User from "./User.js";

export default class Admin extends User {
    constructor(nome, email, nascimento, role = 'admin', ativo = true) {
        super(nome, email, nascimento, role, ativo)
    }

    exibirInfor() {
        return`nome: ${this.nome} email: ${this.email} nascimento: ${this.nascimento}`
    }

    criarCurso(nomeDoCurso, vagas) {
        return`curso de ${nomeDoCurso} criado com ${vagas} vagas`
    }
}
