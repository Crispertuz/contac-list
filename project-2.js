// Lista de contactos con datos predefinidos
const listaContactos = [
    {
      id: 1,
      nombres: "Juan",
      apellidos: "Pérez",
      telefono: "123-456-7890",
      ubicaciones: [
        {
          ciudad: "Ciudad A",
          dirección: "Calle 123"
        }
      ]
    },
    {
      id: 2,
      nombres: "María",
      apellidos: "López",
      telefono: "987-654-3210",
      ubicaciones: [
        {
          ciudad: "Ciudad B",
          dirección: "Avenida XYZ"
        }
      ]
    },
    {
      id: 3,
      nombres: "Carlos",
      apellidos: "González",
      telefono: "555-123-4567",
      ubicaciones: [
        {
          ciudad: "Ciudad C",
          dirección: "Plaza Principal"
        }
      ]
    }
  ];
  
  // Función para añadir un nuevo contacto a la lista
  function agregarContacto(id, nombres, apellidos, telefono, ciudad, dirección) {
    const nuevoContacto = {
      id,
      nombres,
      apellidos,
      telefono,
      ubicaciones: [
        {
          ciudad,
          dirección
        }
      ]
    };
    listaContactos.push(nuevoContacto);
  }
  
  // Función para borrar un contacto existente de la lista
  function borrarContacto(id) {
    const indice = listaContactos.findIndex(contacto => contacto.id === id);
    if (indice !== -1) {
      listaContactos.splice(indice, 1);
    }
  }
  
  // Función para actualizar un contacto existente en la lista
  function actualizarContacto(id, nuevosDatos) {
    const contactoExistente = listaContactos.find(contacto => contacto.id === id);
    if (contactoExistente) {
      // Actualizar los campos especificados en nuevosDatos
      Object.assign(contactoExistente, nuevosDatos);
    }
  }
  
  // Función para imprimir en consola los contactos presentes en la lista
  function imprimirContactos() {
    console.log("Lista de contactos:");
    listaContactos.forEach(contacto => {
      console.log(`ID: ${contacto.id}`);
      console.log(`Nombres: ${contacto.nombres}`);
      console.log(`Apellidos: ${contacto.apellidos}`);
      console.log(`Teléfono: ${contacto.telefono}`);
      contacto.ubicaciones.forEach(ubicacion => {
        console.log(`Ciudad: ${ubicacion.ciudad}`);
        console.log(`Dirección: ${ubicacion.dirección}`);
      });
      console.log("----------");
    });
  }
  
  // Ejemplo de uso
  agregarContacto(4, "Ana", "Torres", "777-888-9999", "Ciudad D", "Calle 456");
  actualizarContacto(3, {
    nombres: "Carlos",
    telefono: "555-987-6543",
    ubicaciones: [
      {
        ciudad: "Ciudad E",
        dirección: "Avenida 789"
      }
    ]
  });
  borrarContacto(1);
  imprimirContactos();