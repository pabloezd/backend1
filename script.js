class Usuario {
    constructor (nombre, apellido, libros, mascotas) {
      this.nombre = nombre;
      this.apellido = apellido;
      this.libros = libros;
      this.mascotas = mascotas;
    }
    
    getFullName() {
        console.log(`${this.nombre} ${this.apellido}`)
    }

    addMascota(nuevaMascota) {
        this.mascotas.push(nuevaMascota);
    }

    countMascotas() {
        console.log(this.mascotas.length);
    }

    addBook(nombre, autor) {
        this.libros.push({nombre: nombre, autor: autor});
    }

    getBookNames () {
        const nombreLibros = this.libros.map( libro => {
           return libro.nombre;
        })

        console.log(nombreLibros);
    }
}

const usuario = new Usuario ('Pablo','Duarte',
                [{nombre: 'El Eternauta', autor: 'Oesterheld'},
                {nombre: 'Troya', autor: 'Homero'},
                {nombre: 'Necronomicon', autor: 'Lovecraft'}],
                ['Perro', 'Gato', 'Hamster']);

usuario.getFullName();
usuario.addMascota('Lagartija');
usuario.countMascotas();
usuario.addBook('20 mil leguas de viaje submarino', 'Julio Verne');
usuario.getBookNames();