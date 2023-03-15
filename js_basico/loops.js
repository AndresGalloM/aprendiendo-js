var estudiantes = ['Andres', 'Carlos', 'Mario', 'Daniela', 'Valentina']

for (let i = 0; i < estudiantes.length; i++) {
    console.log(`Hola ${estudiantes[i]}`)
}

for (let estudiante of estudiantes) {
    console.log(`Hola ${estudiante}`)
}

