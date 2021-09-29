
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
