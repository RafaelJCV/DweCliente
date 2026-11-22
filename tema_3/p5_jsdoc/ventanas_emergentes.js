const alerta = "Este es un mensaje de alerta.";
const confirmacion = "Elige aceptar o cancelar.";
const alertaTrue = "Otro mensaje de alerta, con true.";
const alertaFalse = "Otro mensaje de alerta, con false.";
const mensajePromp = "Introduce un mensaje para la proxima alerta.";
const mensajeInicial = "Mensaje de ejemplo.";

// Se muestra una alerta
window.alert(alerta);

// Se ofrece al usuario confirmar o no.
let aceptar = window.confirm(confirmacion);
if (aceptar == true) {
    // Si ha confirmado se muestra este mensaje
    window.alert(alertaTrue);
} else {
    // Si ha cancelado se muestra este mensaje
    window.alert(alertaFalse);
}

let mensaje = window.prompt(mensajePromp, mensajeInicial);

if (mensaje != null)
    // Si se ha mandado un mensaje se mostrará así
    window.alert("Este es tu mensaje: " + mensaje);