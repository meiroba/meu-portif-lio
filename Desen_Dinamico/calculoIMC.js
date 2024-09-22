/// Calculo de IMC
/*
var imcPessoa =  function (peso, altura) {
        return (peso/(altura*altura))
}
console.log("Seu Imc é :"+ imcPessoa(82, 1.86))
*/
///----------------------------------------------------------------------////
/*
function ImcPessoas (peso, altura){
    var total = (peso/(altura*altura))
    return total
}
var f = ImcPessoas(82, 1.86)
console.log("O seu IMC é igual a :"+ f.toFixed(2))

if (ImcPessoas < 18,5) {
    console.log("Voce está abaixo do peso");

} else if (ImcPessoas >= 18.5 && ImcPessoas < 24.9) {
    console.log("Peso normal");

} else if (ImcPessoas >= 25 && ImcPessoas < 29.9) {
    console.log("Peso ideal");

} else {
    console.log("Acima do peso")
}
*/

function novoFuncionario (nome, sobrenome,idade, altura, peso){

    return {
        nome,
        sobrenome,
        idade,
        altura,
        peso,

        get calculoImc(){
            const indice = this.peso/(this.altura**2).toFixed(2)
            if (indice < 18.5){
                console.log("Abaixo do peso")

            } else if (indice >= 18.5 && indice <24.9){
                console.log("Peso normal")

            } else{
                console.log("Acima do peso")
            }
        }
    }
}
console.log(novoFuncionario("Matheus","Meira",24,1.82,100))
const p1 = novoFuncionario("Matheus","Meira",24,1.82,100);
p1.calculoImc();