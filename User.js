export default class User {
    #nome
    #email
    #nascimento
    #role
    #ativo
    constructor(nome, email, nascimento, role, ativo = true) {
        this.#nome = nome
        this.#email = email
        this.#nascimento = nascimento
        this.#role = role || 'estudante'
        this.#ativo = ativo
    } 

    get nome() {   // GETERs e SETTERs não são chamados como funções e sim como propriedades, porém não utilizam () na sua chamada
        return this.#nome
    }

    set nome(novoNome) {
        if (novoNome === '') {
            throw new Error('Nome invalido')
        }
        this.#nome = novoNome
    }

    get email() {
        return this.#email
    }

    set email(novoEmail) {
        this.#email = novoEmail
    }

    get nascimento() {
        return this.#nascimento
    }
    
    set nascimento(novoNascimento) {
        this.#nascimento = novoNascimento
    }

    get role() {
        return this.#role
    }

    set role(novoRole) {
        this.#role = novoRole
    }

    get ativo() {
        return this.#ativo
    }

    set ativo(novoAtivo) {
        this.#ativo = novoAtivo
    }


    exibirInfor() {
        return`nome: ${this.nome} email: ${this.email}`
    }
}
