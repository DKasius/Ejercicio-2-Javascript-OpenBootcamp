const david = {
    nombre: "David",
    edad: 41,
    desarrollador: true,
    fecha_de_nacimiento: new Date("april 10 1981"),
    libro_favorito: {
        titulo: "100 años de soledad",
        autor: "Gabriel García Márquez",
        fecha_publicacion: new Date ("march 5 1967"),
        url: "https://leer.amazon.es/kp/embed?asin=B018RGALE8&preview=newtab&linkCode=kpe&ref_=cm_sw_r_kb_dp_N0W3H4XRHQM6VS1GN0XM"

    }
}

console.log(david.nombre)
console.log(david.edad)
console.log(david.desarrollador)
console.log(david.fecha_de_nacimiento)
console.log(david.libro_favorito.titulo)
console.log(david.libro_favorito.autor)
console.log(david.libro_favorito.fecha_publicacion)
console.log(david.libro_favorito.url)