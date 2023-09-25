const listaContactos = [
    { nombre: "Juan Pérez", telefono: "123-456-7890" },
    { nombre: "María López", telefono: "987-654-3210" },
    { nombre: "Carlos González", telefono: "555-123-4567" }
  ];
  

  function agregarContacto(nombre, telefono) {

    const nuevoContacto = { nombre, telefono };
    listaContactos.push(nuevoContacto);
  }
  

  function borrarContacto(nombre) {
  
    indice = listaContactos.findIndex(contacto => contacto.nombre === nombre);
    if (indice !== -1) {
      listaContactos.splice(indice, 1);
    }
  }
  
  function imprimirContactos() {
    console.log("Lista de contactos:");
    listaContactos.forEach(contacto => {
      console.log(`Nombre: ${contacto.nombre}, Teléfono: ${contacto.telefono}`);
    });
  }

  agregarContacto("Ana Torres");
  borrarContacto("Carlos González");
  imprimirContactos();