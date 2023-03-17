const calculo1 = document.querySelector('#calculo1');
const calculo2 = document.querySelector('#calculo2');
const resultado = document.querySelector('#resultado');

function calcular() {
    let num1 = Number(calculo1.value);
    let num2 = !Number(calculo2.value);

    if (!num1 || num2) {
        resultado.innerText = 'Error: Alguno de los inputs biene vacio';
        return;
    }

    resultado.innerText = num1 + num2;
}