// function User(nome, email) {
//     this.nome = nome
//     this.email = email

//     this.exibirInfor = function() {
//         return `nome: ${this.nome} \nemail: ${this.email}`
//     }
// }

// const novoUser = new User('Juliana', 'J@j.com')
// console.log(novoUser.exibirInfor())

// function Admin(role) {
//     User.call(this, 'Juliana', 'J@j.com')
//     this.role = role || 'estudante'
// }

// Admin.prototype = Object.create(User.prototype)

// const novoUser = new Admin('admin')
// console.log(novoUser.exibirInfor())
// console.log(novoUser.role)



const user = {
    init: function(nome, email) {
        this.nome = nome
        this.email = email
    },
    exibirInfor: function() {
        return this.nome
    }
}

const novoUser = Object.create(user)
novoUser.init('Julaina', 'Jd2s.com')
console.log(novoUser.exibirInfor())
// console.log(novoUser.exibirInfor('TESTE'))
// console.log(user.isPrototypeOf(novoUser))npm