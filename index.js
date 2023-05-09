import User from './User.js'
import Admin from './Admin.js'
import Docente from './Docente.js'

const novoUser = new User('Mariana', 'M@m.com', '2022-01-01')
console.log(novoUser.exibirInfor())

const novoAdmin = new Admin('rodrigo', 'R@r.com', '2020-01-03')
console.log(novoAdmin.nome)
novoAdmin.nome = ''
console.log(novoAdmin.nome)