// dEBES USAR QUERYSELECTORALL/QUERYSELECT PARA TODOS LOS EJERCICIOS

// Recuerar los elemntos usando la clase 'chip'
export const getAllChipClass = () => {
  return document.querySelectorAll(".chip");
};

// Recuperar los elementos usando el tag 'p'
export const getAllParagraphs = () => {
  return document.querySelectorAll("p");
};

// Recuperar los elementos usando el tag 'li'
export const getAllListItems = () => {
  return document.querySelectorAll("li");
};

// Recuperar todas las opciones del select con id 'tema'
export const getAllOptionFromThemeSelect = () => {
  return document.querySelectorAll("#tema").options;
};

// Recuperar el input del formulario con id 'usuario'
export const getUserFromForm = () => {
  return document.querySelectorAll("#usuario");
};

// Recuperar el input del formulario con id 'correo'
export const getMailFromForm = () => {
  return document.querySelectorAll("#correo");
};

// Recuperar todos los radios con name 'color'
export const getAllColorRadios = () => {
  return document.querySelectorAll('[name="color"]');
};

// Recuperar todos los checkboxes
export const getAllCheckboxes = () => {
  return document.querySelectorAll('[type="checkbox"]');
};

// Recuperar todas las opciones del select con id 'cursos'
export const getAllOptionsFromCursosSelect = () => {
  return document.querySelectorAll("#cursos").options;
};

// Recuperar el textarea con id 'bio'
export const getTextArea = () => {
  return document.querySelectorAll("#bio");
};

// Recuperar la opción seleccionada del select con id 'tema'
export const getThemeSelectedOption = () => {
  return document.querySelectorAll("#tema").selectedOptions[0];
};

// Recuperar el radio seleccionado del grupo de radios con name 'color'
export const getColorSelectedRadio = () => {
  return document.querySelectorAll('[name="color"]').selectedOptions[0];
};

// Recuperar el checkbox seleccionado
export const getCheckBoxSelected = () => {
  return document.querySelectorAll('[type="checkbox"]').selectedOptions[0];
};
