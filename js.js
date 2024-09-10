let inputA = document.querySelector('#inputA');
let inputB = document.querySelector('#inputB');
let messageContainer = document.querySelector('.resultMessage');

const submitButton = document.querySelector('button');

function validacaoInputs(numA, numB){
	return numB > numA;
}

submitButton.addEventListener('click', function(e){
	e.preventDefault();

	if(validacaoInputs(inputA.value, inputB.value)){
		messageContainer.innerHTML = 'Válido! Valor B maior que A.';

		messageContainer.classList.remove("failureMessage");
		messageContainer.classList.add("successMessage");

	}else{
		messageContainer.innerHTML = 'Inválido! Valor B menor que A.';

		messageContainer.classList.remove("SuccessMessage");
		messageContainer.classList.add("failureMessage");
	}

	inputA.value = '';
	inputB.value = '';

});

