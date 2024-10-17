function reemplazar(pila, viejo, nuevo) {
    // Crear una nueva pila para almacenar los valores modificados
    let nuevaPila = [];
    
    while (pila.length > 0) {
        // Sacar el último elemento de la pila
        let valor = pila.pop();
        
        // Si el valor es el viejo, reemplazarlo con el nuevo
        if (valor === viejo) {
            nuevaPila.push(nuevo);
        } else {
            nuevaPila.push(valor);
        }
    }
    
    // Devolver la nueva pila en el orden original
    return nuevaPila.reverse(); // Invertir para mantener el orden
}

function reemplazarValores() {
    // Obtener los valores del input
    const inputPila = document.getElementById('inputPila').value;
    const viejo = parseInt(document.getElementById('valorViejo').value);
    const nuevo = parseInt(document.getElementById('nuevoValor').value);
    
    // Convertir el input en un array y simular una pila
    let pila = inputPila.split(',').map(Number);
    
    // Validar la entrada
    if (isNaN(viejo) || isNaN(nuevo)) {
        alert("Por favor, ingresa valores válidos para viejo y nuevo.");
        return;
    }

    // Reemplazar los valores en la pila
    let pilaModificada = reemplazar(pila, viejo, nuevo);
    
    // Mostrar el resultado
    document.getElementById('resultado').textContent = pilaModificada.join(', ');
}
