const lista = document.getElementById('lista');
const form = document.getElementById('form');

// Cargar datos del localStorage o iniciar vacío
let datos = JSON.parse(localStorage.getItem('datos')) || [];

// Mostrar los datos existentes
function mostrarDatos() {
  lista.innerHTML = '';
  datos.forEach((item, index) => {
    const li = document.createElement('li');
    li.innerHTML = `
      ${item.dato1} - ${item.dato2} - ${item.dato3}
      <button onclick="eliminarDato(${index})">Eliminar</button>
    `;
    lista.appendChild(li);
  });
}

// Guardar nuevo dato
form.addEventListener('submit', (e) => {
  e.preventDefault();

  const nuevo = {
    dato1: document.getElementById('dato1').value,
    dato2: document.getElementById('dato2').value,
    dato3: document.getElementById('dato3').value
  };

  datos.push(nuevo);
  localStorage.setItem('datos', JSON.stringify(datos));

  mostrarDatos();
  form.reset(); // limpiar los campos
});

// Eliminar un elemento por su índice
function eliminarDato(index) {
  datos.splice(index, 1);
  localStorage.setItem('datos', JSON.stringify(datos));
  mostrarDatos();
}

// Mostrar al cargar la página
mostrarDatos();