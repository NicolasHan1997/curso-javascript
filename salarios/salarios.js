
// Salarios

const argentina = [];

argentina.push({
    name: "Camila",
    salary: 500,
});

argentina.push({
    name: "Nath",
    salary: 1500,
});

argentina.push({
    name: "Luisa",
    salary: 1800,
});

argentina.push({
    name: "Laura",
    salary: 1000,
});

argentina.push({
    name: "Daniela",
    salary: 2200,
});

argentina.push({
    name: "Esperancita",
    salary: 200,
});

argentina.push({
    name: "Carla",
    salary: 500,
});

argentina.push({
    name: "Antonieta",
    salary: 1500,
});

argentina.push({
    name: "Alicia",
    salary: 1300,
});

argentina.push({
    name: "Ana",
    salary: 2400,
});

argentina.push({
    name: "Julia",
    salary: 3400,
});

argentina.push({
    name: "Rosa",
    salary: 400,
});

argentina.push({
    name: "Angélica",
    salary: 400,
});

argentina.push({
    name: "Tatiana",
    salary: 400,
});

argentina.push({
    name: "Lorena",
    salary: 600,
});

argentina.push({
    name: "Carolina",
    salary: 1600,
});

argentina.push({
    name: "Fernanda",
    salary: 2600,
});

argentina.push({
    name: "Nora",
    salary: 1000,
});

argentina.push({
    name: "Gisselle",
    salary: 2000,
});

argentina.push({
    name: "Bill Gates",
    salary: 100000000,
});


// Analisis

const salarios = argentina.map(
    function (persona) {
        return persona.salary;
    }
);

const salariosSorted = salarios.sort(function (a, b) { return a - b; });

const spliceStart = salariosSorted.length * 0.9;
const spliceEnd = salariosSorted.length - spliceStart;

const salariosTop10 = salariosSorted.splice(spliceStart, spliceEnd);


// Asignacion en HTML

document.getElementById("resultMedia").innerText = "Media de los salarios: " + calcularMedia(salariosSorted);
document.getElementById("resultMediaTop10").innerText = "Media de los salarios top 10%: " + calcularMedia(salariosTop10);


// Funciones helpers

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
    let mitad = lista.length === 2 ? 0 : parseInt(lista.length / 2);

    let media = lista.length % 2 === 0 ? calcularPromedio([lista[mitad - 1], lista[mitad]]) : lista[mitad];

    return media;
}
