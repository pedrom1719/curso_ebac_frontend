// Criando classe de objeto "Veiculo"
class Veiculo{
    constructor(tipoModel, rodasNum, portasNum, powerOn){
        this.tipoModel = tipoModel;
        this.rodasNum = rodasNum;
        this.portasNum = portasNum;
        this.powerOn = powerOn
    }

    acelerarFunction(velocUp){
        if(typeof velocUp === 'number'){
            console.log(`vrumvrum! velocidade: ${velocUp} Km/h`);
        }
    }
}

// Criando classe "Carro" que herda da classe Veiculo
class Carro extends Veiculo{
    constructor(portasNum, powerOn, nameModel, anoModel, cambioModel){
        super('Carro', 4, portasNum, powerOn);
        this.nameModel = nameModel;
        this.anoModel = anoModel;
        this.cambioModel = cambioModel;
    }

    acelerarFunction(velocUp){
        if(typeof velocUp === 'number'){
            console.log(`${this.nameModel} faz vrumvrum! velocidade: ${velocUp} Km/h`);
        }
    }
}

// Criando classe "Moto" que herda da classe Veiculo
class Moto extends Veiculo{
    constructor(powerOn, nameModel, anoModel, cambioModel, rodaAro){
        super('Moto', 2, 0, powerOn);
        this.nameModel = nameModel;
        this.anoModel = anoModel;
        this.cambioModel = cambioModel;
        this.rodaAro = rodaAro;
    }

    acelerarFunction(velocUp){
        if(typeof velocUp === 'number'){
            console.log(`${this.nameModel} faz vrumvrum! velocidade: ${velocUp} Km/h`);
        }
    }
}

// Primeira instancia de Carro
const myCarro_01 = new Carro(2, false,'Celta', 2006, 'Manual');
console.log(myCarro_01);
myCarro_01.acelerarFunction(20);

// Segunda instancia de Carro
const myCarro_02 = new Carro(4, true,'Corsa', 2012, 'Automatico');
console.log(myCarro_02);
myCarro_02.acelerarFunction(25);

// Primeira instancia de Moto
const myMoto = new Moto(false,'Kawasaki', 2010, 'Marcha', 17);
console.log(myMoto);
myMoto.acelerarFunction(15);