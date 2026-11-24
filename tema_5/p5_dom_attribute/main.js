const app = document.querySelector("#app");



const div = document.createElement("div");
const h1 = document.createElement("h1");
h1.textContent = "Hola";
const p = document.createElement("p");
p.textContent = "parrafo";

const img = document.createElement("img");

img.src = "./loquesea";

div.append(h1, p, img);



app.append(div);