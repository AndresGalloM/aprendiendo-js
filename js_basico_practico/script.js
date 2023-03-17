const calculo1 = document.querySelector('#calculo1');
const calculo2 = document.querySelector('#calculo2');
const resultado = document.querySelector('#resultado');
const btn = document.querySelector('#btn-calcular')
const formulario = document.querySelector('#formulario')

// btn.addEventListener('click', calcular)
formulario.addEventListener('submit', calcular)

function calcular(event) {
    event.preventDefault()
    let num1 = Number(calculo1.value);
    let num2 = Number(calculo2.value);

    if (!num1 || !num2) {
        resultado.innerText = 'Error: Alguno de los inputs biene vacio, o esta mal';
        return;
    }

    resultado.innerText = num1 + num2;
}