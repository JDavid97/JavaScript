const botonNumeros = document.getElementsByName('data-number');
const botonOpera = document.getElementsByName('data-opera');
const botonIgual = document.getElementsByName('data-igual')[0];
const botonDelete = document.getElementsByName('data-delete')[0];
console.log(botonIgual);

var result = document.getElementById('result')
var opeActual = '';
var opeAnterior = '';
var operacion = undefined;

botonNumeros.forEach(function(i){
    i.addEventListener('click', function(){
        agregarNumero(i.innerText);
    })
});

botonOpera.forEach(function(i){
    i.addEventListener('click', function(){
        selectOperacion(i.innerText);        
    })
});

botonIgual.addEventListener('click', function(){
    calcular();
    actualizarDisplay();
});

botonDelete.addEventListener('click', function(){
    clear();
    actualizarDisplay();
});


function agregarNumero(num){
    opeActual = opeActual.toString() + num.toString();
    actualizarDisplay();
}

function clear(){
    opeActual = '';
    opeAnterior = '';
    operacion = undefined;
}

function actualizarDisplay(){
    result.value = opeActual;
}

function selectOperacion(op){
    if(opeActual === '') return;
    if(opeAnterior !== ''){
        calcular();
    }
    operacion = op.toString();
    opeAnterior = opeActual;
    opeActual = '';
}

function calcular(){
    var calculo;
    const anterior = parseFloat(opeAnterior);
    const actual = parseFloat(opeActual);

    if(isNaN(anterior) || isNaN(actual)) return;
    switch(operacion){
        case '+': calculo = anterior + actual; break;
        case '-': calculo = anterior - actual; break;
        case 'x': calculo = anterior * actual; break;
        case '/': calculo = anterior / actual; break;
        default: return;
    }
    opeActual = calculo;
    operacion = undefined;
    opeAnterior = '';
}