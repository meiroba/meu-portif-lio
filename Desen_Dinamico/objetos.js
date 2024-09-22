const pessoa = {
    nome: "Matheus",
    sobrenome: "Meira"
}
console.log(pessoa["sobrenome"])

const funcionario = new Object();
funcionario.nome = "Matheus"
funcionario.sobrenome = "Meira"

console.log(funcionario.sobrenome)

//forma de criar objetos usando function
function criarPessoa(nome,sobrenome){
    return {nome,sobrenome}
}

const p1 = criarPessoa("Matheus","Meira")

const p2 = criarPessoa("Luis", "Otávio")

console.log(p1.nome)
console.log(p2)

//forma de criar objetos com uma função dentro
function criarPessoa(nome,sobrenome, i){
    return {
        idade: i,
        nome,
        sobrenome,
        get nomeCompleto(){
            return `${this.nome} ${this.sobrenome}`
        }
    }
}

const p3 = criarPessoa("Matheus","Meira", 24)

const p4 = criarPessoa("Luis", "Otávio", 14)

console.log(p3.nomeCompleto)
console.log(p4)