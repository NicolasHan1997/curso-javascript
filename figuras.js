// Codigo del cuadrado

function perimetroCuadrado(lado) {
    return lado * 4;
}

function areaCuadrado(lado) {
    return Math.pow(lado, 2); 
}

// Codigo del triangulo

function perimetroTriangulo(lado1, lado2, base) {
    return lado1 + lado2 + base;
}

function areaTriangulo(base, altura) {
    return base * altura / 2;
}

// Codigo del circulo

function perimetroCirculo(radio) {
    return 2 * radio * Math.PI;
}

function areaCirculo(radio) {
    return Math.pow(radio, 2) * Math.PI;
}
