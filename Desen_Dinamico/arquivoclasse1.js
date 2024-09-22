class dispositivosEletronicos{
    constructor(nome){
        this.nome = nome;
        this.ligado = false;
    }

    ligar(){
        if (this.ligado){
            console.log("Já está ligado")
            return;
        }
        this.ligado = true;
    }
}

class smarthPhone extends dispositivosEletronicos{
    constructor(nome, cor, modelo){
        super(nome);
        this.cor = cor;
        this.modelo = modelo;
    }
}

var s1 = new smarthPhone("Samsung","Preto","S23 Ultra");
console.log(s1);
s1.ligar();