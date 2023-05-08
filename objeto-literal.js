const user = {
    nome: "Juliana",
    email: "juliana@gmail.com",
    nascimento: "2021/01/01",
    role: "estudante",
    ativo: true,
    exibirInfor: function() {
        console.log(this.nome, this.email)
    }

}

const admin = {
    nome: "Mariana",
    email: "mariana@yahoo.com",
    nascimento: "2021/01/01",
    role: "admin",
    ativo: false,
    criarCurso() {
        console.log('Curso criado!')
    }
}

Object.setPrototypeOf(admin, user)
admin.criarCurso()
admin.exibirInfor()

// user.exibirInfor()
// const exibir = user.exibirInfor()
// exibir()

const exibir = function() {
    console.log(this.nome)
}

exibir()

const exibirNome = exibir.bind(user)

exibirNome()