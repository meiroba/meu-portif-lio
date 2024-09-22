var bebida = "Café"
let valor

switch(bebida){
    case "Café":
        valor = 1;
        bebida = "café"
        console.log("Voce escolheu " +bebida+ " e o valor a ser pago é "+ "R$"+valor.toFixed(2))
        break;
    case "Leite":
        valor = 2;
        bebida = "leite"
        console.log("Voce escolheu " +bebida+ " e o valor a ser pago é "+ "R$"+valor.toFixed(2))
        break;
    case "Chá":
        valor = 3;
        bebida = "chá"
        console.log("Voce escolheu " +bebida+ " e o valor a ser pago é "+ "R$"+valor.toFixed(2));
        break;
    default:
        console.log("A escolha deve ser feita entre café, leite ou chá")    
}