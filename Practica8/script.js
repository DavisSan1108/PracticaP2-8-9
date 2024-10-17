// Función para sumar números grandes usando pilas
function sumarNumeros() {
    const num1 = document.getElementById('num1').value;
    const num2 = document.getElementById('num2').value;
    
    if (!num1 || !num2 || isNaN(num1) || isNaN(num2)) {
        alert("Por favor, ingresa números válidos.");
        return;
    }
    
    // Convertir los números en arrays de caracteres
    let pila1 = num1.split('').reverse(); // Pila para el primer número
    let pila2 = num2.split('').reverse(); // Pila para el segundo número
    
    let carry = 0; // Acarreo para la suma
    let resultado = []; // Pila del resultado
    let proceso = []; // Para almacenar el proceso

    let maxLength = Math.max(pila1.length, pila2.length);
    
    for (let i = 0; i < maxLength; i++) {
        // Tomar el dígito actual o 0 si no existe
        let digito1 = pila1[i] ? parseInt(pila1[i]) : 0;
        let digito2 = pila2[i] ? parseInt(pila2[i]) : 0;
        
        // Sumar los dígitos y el acarreo
        let suma = digito1 + digito2 + carry;
        
        // Si la suma es mayor o igual a 10, calcular el acarreo
        if (suma >= 10) {
            carry = 1;
            suma = suma - 10;
        } else {
            carry = 0;
        }
        
        // Insertar el dígito en la pila del resultado
        resultado.push(suma);
        
        // Almacenar el paso en el proceso
        proceso.push({
            paso: i + 1,
            digito1: digito1,
            digito2: digito2,
            acarreo: carry,
            resultadoParcial: suma,
            resultadoAcumulado: resultado.slice().reverse().join('') // Muestra el resultado acumulado
        });
    }
    
    // Si hay un acarreo al final, agregarlo
    if (carry > 0) {
        resultado.push(carry);
    }
    
    // Invertir el resultado para obtener el número final
    let resultadoFinal = resultado.reverse().join('');
    
    // Mostrar el resultado en la página
    document.getElementById('resultado').textContent = `Resultado: ${resultadoFinal}`;
    
    // Mostrar el proceso en la página
    mostrarProceso(proceso);
}

// Función para mostrar el proceso de suma
function mostrarProceso(proceso) {
    const procesoDiv = document.getElementById('proceso');
    procesoDiv.innerHTML = ""; // Limpiar contenido previo
    proceso.forEach(p => {
        const pasoDiv = document.createElement('div');
        // Mostrar solo los dos dígitos actuales y el acarreo
        pasoDiv.textContent = `Paso ${p.paso}: ${p.digito1} + ${p.digito2} = ${p.resultadoParcial} (Acarreo: ${p.acarreo}, Resultado Acumulado: ${p.resultadoAcumulado})`;
        procesoDiv.appendChild(pasoDiv);
    });
}
