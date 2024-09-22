const carrinhoDeCompras = [];

function adcionarItens (item){
    carrinhoDeCompras.push(item)
}   

function removerItens (item){
    const index = carrinhoDeCompras.indexOf(item);
    if (index !== -1){
        carrinhoDeCompras.splice(index,1)
    }
}

function vercarrinho(){
    if (carrinhoDeCompras.length == 0){
        console.log("Seu carrinho de Compras está vazio")
    }else{
        console.log("Itens em seu carrinho: ")
        for(let i = 0; i < carrinhoDeCompras.length; i++){
            console.log(`${i + 1} - ${carrinhoDeCompras[i]}`)
        }
    }
}

function limparCarrinho(){
    carrinhoDeCompras.length = 0;
    console.log("Seu carrinho está vazio agora")
}

adcionarItens("Sapato")
adcionarItens("Bermuda")
adcionarItens("Camisa")
adcionarItens("Relogio")

vercarrinho()

removerItens("Camisa")

vercarrinho()

limparCarrinho()

vercarrinho()