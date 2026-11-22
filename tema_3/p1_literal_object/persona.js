const persona = {
    nombre: "Rafael",
    edad: 18,
    dni: "12345678A",
    altura: 1.74,
    cursos: [
        {
            nombre: "Bachillerato",
            fecha_inicio: 2023,
            fecha_fin: 2025
        },
        {
            nombre: "Daw",
            fecha_inicio: 2025,
            fecha_fin: 2027
        }
    ],
    fecha_nacimiento: {
        dia: 23,
        mes: 11,
        anio: 2007
    },
    preferencias: {
        videojuego: "Hollow Knight",
        serie: "Jujutsu Kaisen"
    }
};
console.clear();
console.log(Object.keys(persona));
/*
Devuelve un array con las claves del primer nivel del objeto
*/

console.log(Object.values(persona));
/*
Devuelve un array con los valores del primer nivel del objeto
*/