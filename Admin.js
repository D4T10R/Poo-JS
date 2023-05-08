import User from "./User.js";

class Admin extends User {
    constructor(nome, email, nascimento, role = 'admin', ativo = true) {
        super(nome, email, nascimento, role, ativo)
    }

    criarCurso(nomeDoCurso, vagas) {
        return`curso de ${nomeDoCurso} criado com ${vagas} vagas`
    }
}


const novoAdmin = new Admin('rodrigo', 'r@r.com', '2023-01-01')
console.log(novoAdmin.criarCurso('JavaScript', 10))