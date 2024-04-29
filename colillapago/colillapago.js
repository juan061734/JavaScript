// Arreglo para almacenar los precios de los productos
let precios = [];

// Función para agregar un producto
function agregarProducto() {
    // Obtener el precio del producto ingresado por el usuario
    let precio = parseFloat(document.getElementById('producto').value);
    
    // Validar que el precio ingresado sea válido
    if (!isNaN(precio)) {
        // Agregar el precio al arreglo de precios
        precios.push(precio);
        
        // Limpiar el input para que el usuario pueda ingresar otro precio
        document.getElementById('producto').value = '';
    } else {
        alert("Por favor ingrese un precio válido para el producto.");
    }
}

// Función para calcular el descuento según el total de la compra
function calcularDescuento() {
    // Calcular el total de la compra
    let total = precios.reduce((acc, precio) => acc + precio, 0);

    // Aplicar el descuento según el total de la compra
    let descuento;
    if (total > 18000000) {
        descuento = 0.25; // 25% de descuento
    } else if (total > 800000) {
        descuento = 0.10; // 10% de descuento
    } else {
        descuento = 0; // Sin descuento
    }

    // Calcular el total con descuento
    let totalConDescuento = total - (total * descuento);

    // Mostrar el resultado en la página
    let resultadoDiv = document.getElementById('resultado');
    resultadoDiv.innerHTML = `
        <p>Valores ingresados: ${precios.join(', ')}</p>
        <p>Total de la compra: $${total.toFixed(2)}</p>
        <p>Descuento aplicado: ${descuento * 100}%</p>
        <p>Total con descuento: $${totalConDescuento.toFixed(2)}</p>
    `;
}
