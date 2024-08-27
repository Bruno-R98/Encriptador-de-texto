const textArea = document.querySelector('.texto');
const mensajeEncriptado = document.querySelector('.mensaje_encriptado');

//función para encriptar texto
function encriptarTexto(encriptado){
    let array = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
    let caracteresEspeciales = /[A-ZÁÉÍÓÚáéíóúÑñ]/;

    // Verificar si el texto contiene caracteres no permitidos
    if (caracteresEspeciales.test(encriptado)) {
        alert("Solo letras minúsculas y sin acento");
        return '';  // Salir de la función si el texto no es válido
    }

    // Reemplazar letras con los valores encriptados
    for (let i = 0; i < array.length; i++) {
        if (encriptado.includes(array[i][0])) {
            encriptado = encriptado.replaceAll(array[i][0], array[i][1]);
        }
    }
    return encriptado;
}

//función para llevar el texto encriptado al otro campo
function btnEncriptar(){
    const textEncriptado = encriptarTexto(textArea.value);
    if (textEncriptado) {  // Solo asignar el texto si es válido
        mensajeEncriptado.value = textEncriptado;
    }
    textArea.value = '';  // Limpiar el textarea después de la encriptación
}

//función para desencriptar texto
function desencriptarTexto(desencriptado){
    let array = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
    for (let i = 0; i < array.length; i++) {
        if (desencriptado.includes(array[i][1])) {
            desencriptado = desencriptado.replaceAll(array[i][1], array[i][0]);
        }
    }
    return desencriptado;
}

//función para transportar el texto desencriptado al primer campo
function btnDescencriptar(){
    const textEncriptado = desencriptarTexto(textArea.value);
    mensajeEncriptado.value = textEncriptado;
}

//función para copiar el texto encriptado 
function btnCopiar(){
    let mostrarTexto = mensajeEncriptado;
    mostrarTexto.select();
    document.execCommand('copy');
    mostrarTexto.value = '';
}



