import User from "./User.js";

class Docente extends User {
    constructor (nome, email, nascimento, role = 'docente', ativo = true) {
        super(nome, email, nascimento, role, ativo)
    }

    aprovaEstudante(estudante, curso) {
        return`Estudante ${estudante} aprovado no curso de ${curso}`
    }
}

const novoDocente = new Docente('Mariana', 'M@m.com', '2012-03-03')
console.log(novoDocente)
console.log(novoDocente.exibirInfor())
console.log(novoDocente.aprovaEstudante('Leticia', 'JavaScript'))
