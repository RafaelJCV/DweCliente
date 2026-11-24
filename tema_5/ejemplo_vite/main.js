const peliculas = {
  pelicula1: {
    titulo: "El Conjuro",
    genero: "terror",
    año: 2013,
    puntuacion: 8,
  },
  pelicula2: {
    titulo: "Scary Movie",
    genero: "comedia",
    año: 2000,
    puntuacion: 6,
  },
  pelicula3: {
    titulo: "Expediente Warren",
    genero: "terror",
    año: 2016,
    puntuacion: 7,
  },
  pelicula4: {
    titulo: "John Wick",
    genero: "accion",
    año: 2014,
    puntuacion: 9,
  },
  pelicula5: {
    titulo: "Superbad",
    genero: "comedia",
    año: 2007,
    puntuacion: 7,
  },
  pelicula6: {
    titulo: "Mad Max",
    genero: "accion",
    año: 2015,
    puntuacion: 8,
  },
};

const arrayPeliculas = Object.values(peliculas);
console.log(arrayPeliculas);

let genero = document.querySelector("#genero");
let mostrar = document.querySelector("#mostrar");
let limpiar = document.querySelector("#limpiar");
let resultados = document.querySelector("#resultados");
let contador = document.querySelector("#contador");

/*console.log(genero);
console.log(mostrar);
console.log(limpiar);
console.log(resultados);
console.log(contador);*/

function filtrarPeliculas(genero) {
  if (genero == "todos") {
    return arrayPeliculas;
  } else {
    return arrayPeliculas.filter((pelicula) => {
      // Devuelve la comparación entre
      // pelicula.genero y genero
      if (pelicula.genero == genero) {
        return true;
      } else {
        return false;
      }
    });
  }
}

function mostraPeliculas(arrayPelicula) {
  resultados.textContent = "";
  contador.textContent = "";
  let contadorn = 0;
  arrayPelicula.forEach((element) => {
    let p = document.createElement("p");
    p.textContent = `titulo:${element.titulo} Genero:${element.genero}`;
    resultados.append(p);
    contadorn++;
    contador.textContent = contadorn.toString();
  });
}

mostrar.addEventListener("click", () => {
  mostraPeliculas(filtrarPeliculas(genero.value));
});

genero.addEventListener("change", () => {
  mostraPeliculas(filtrarPeliculas(genero.value));
});

//apartado B
limpiar.addEventListener("click", () => {
  resultados.textContent = "";
  contador.textContent = "";
});