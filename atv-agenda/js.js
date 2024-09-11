const formButton = document.querySelector('button[type="submit"]');

let fullTable = "";

formButton.addEventListener('click', function(e){
    e.preventDefault();

    const inputNome = document.querySelector('#nome-contato');
    const inputTel = document.querySelector('#numero-contato');

    if(!inputNome.value == "" && !inputTel.value == ""){
        let rowsTable = '';
        rowsTable = `<tbody><tr><td>${inputNome.value}</td></tr><tr><td>${inputTel.value}</td></tr></tbody>`;
    
        fullTable += rowsTable;
    
        document.querySelector('#contentTable').innerHTML = fullTable;
    
        inputNome.value = "";
        inputTel.value = "";
    }else{
        alert('Preencha todos os campos corretamente.');
    }
});
