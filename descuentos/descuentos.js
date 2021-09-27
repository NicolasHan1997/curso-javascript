
function calcularDescuento(precio, descuento) {
    const porcentajeDescuento = 100 - descuento;
    const precioConDescuento = (precio * porcentajeDescuento) / 100;
    return precioConDescuento;
}

function onClickCalculate() {
    const precio = document.getElementById("inputPrice").value;
    const descuento = document.getElementById("inputDiscount").value;
    const resultText = document.getElementById("resultPrice");

    resultText.innerText = "El precio con descuento es de $" + this.calcularDescuento(precio, descuento);
}
