
function onClickCalcular(objeto) {
    const numeros = document.getElementById(objeto.input).value.split(',').map(Number);
    const resultText = document.getElementById(objeto.output);
    resultText.innerText = "Resultado: " + objeto.funcion(numeros);
}

function calcularPromedio(lista) {
    let suma = lista.reduce(
        function (acumulado = 0, elemento) {
            return acumulado + elemento;
        }
    );

    const promedio = suma / lista.length;

    return promedio;
}

function calcularMedia(lista) {
    lista.sort(function (a, b) { return a - b; });

    let mitad = lista.length === 2 ? 0 : parseInt(lista.length / 2);

    let media = lista.length % 2 === 0 ? calcularPromedio([lista[mitad - 1], lista[mitad]]) : lista[mitad];

    return media;
}

function calcularModa(lista) {
    const listaCount = {};

    lista.map(
        function (elemento) {
            if (listaCount[elemento]) listaCount[elemento]++;
            else listaCount[elemento] = 1;
        }
    );

    const arrayCount = Object.entries(listaCount).sort(
        function (a, b) { return a[1] - b[1]; }
    );

    return arrayCount[arrayCount.length - 1][0];
}
