// Criando modelo de objeto (funcao construtora)
function defaultVeiculo(fabricationCountry, numRodas, numPortas, powerOn, modelVariations, carPrice){
    this.fabricationCountry = fabricationCountry;
    this.numRodas = numRodas;
    this.numPortas = numPortas;
    this.powerOn = powerOn;
    this.modelVariations = modelVariations;

    // Encapsulamento da Variavel
    let _carPrice = carPrice;

    // Getter (Retorna o valor da variavel encapsulada)
    this.getPrice =  function(){
        return _carPrice;
    }

    // Setter (Redefine o valor da variavel encapsulada)
    this.setPrice = function(carNewPrice){
        if(typeof carNewPrice === 'number'){
            _carPrice = carNewPrice;
        }
    }

    this.veiculoOrigin = function(){
        console.log('Veiculo fabricado no ' + this.fabricationCountry);
    }
}

// Criando modelo de objeto que vai herder infos do objeto-pai
function veiculoCarro(carColor, carName, carYear, carPoison, fabricationCountry, numRodas, numPortas, powerOn, modelVariations, carPrice){
    this.carColor = carColor;
    this.carName = carName;
    this.carYear = carYear;
    this.carPoison = carPoison;
    
    defaultVeiculo.call(this, fabricationCountry, numRodas, numPortas, powerOn, modelVariations, carPrice);
}

// Criando instancia de objeto baseado no modelo (funcao construtora)
const myVeiculo = new defaultVeiculo('Brasil', 4, 2, true, ['Regular', 'Turbo', 'Sedan'], 10000);
const myCarro = new veiculoCarro('Azul', 'Celta', 2006, true, 'USA', 4, 4, false, ['Ret', 'Sedan'], 30000);

// Adicionando atributo posterior a instancia especifica do objeto
// myVeiculo.cor = 'Vermelho';
// myVeiculo['tipo'] = 'Carro'; - sintaxe alternativa

// Teste
console.log(myCarro);
myCarro.veiculoOrigin();
myCarro.setPrice(50000);
console.log(myCarro.getPrice());


// Maneiras de ser fazer IF com objeto
if(myVeiculo.tipo){
    console.log('O tipo do veiculo é: ' + myVeiculo.cor);
}else{
    // console.log('Carro invisivel! :o');
}

if(myVeiculo['radio']){
    console.log('O radio do veiculo é: ' + myVeiculo.radio);
}else{
    // console.log('Carro mudo! :o');
}

if('ano' in myVeiculo){
    console.log('O ano do veiculo é: ' + myVeiculo.ano);
}else{
    // console.log('Carro atemporal! :o');
}


// Display dinamico de atributos do objeto
function displayObjAttr(atributo){
    console.log(myCarro[atributo]);
}
// displayObjAttr('fabricationCountry');

// Impedir objeto de ser alterado
Object.freeze(myVeiculo);
myVeiculo.aerofolio = true; // Linha nao sera aplicada

// Exibir atributos (ou chaves) do objeto
console.log(Object.keys(myCarro));  // Atributos do Objeto
console.log(Object.values(myCarro));  // Informacoes do Objeto
console.log(Object.keys(myCarro).length);  // Instancias do Objeto

