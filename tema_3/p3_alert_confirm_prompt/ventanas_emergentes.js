const alerta = "Este es un mensaje de alerta.";
const confirmacion = "Elige aceptar o cancelar.";
const alertaTrue = "Otro mensaje de alerta, con true.";
const alertaFalse = "Otro mensaje de alerta, con false.";
const mensajePromp = "Introduce un mensaje para la proxima alerta.";
const mensajeInicial = "Mensaje de ejemplo.";

window.alert(alerta);

let aceptar = window.confirm(confirmacion);
if (aceptar == true)
    window.alert(alertaTrue);
else
    window.alert(alertaFalse);

let mensaje = window.prompt(mensajePromp, mensajeInicial);
if (mensaje != null)
    window.alert("Este es tu mensaje: " + mensaje);