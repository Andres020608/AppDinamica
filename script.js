const form = document.querySelector('.container_form');
const lista = document.getElementById('lista');
const btnEliminarTodo = document.getElementById('eliminar-todo');

form.addEventListener('submit', (e) => {
  e.preventDefault();

  const dato1 = document.getElementById('dato1').value.trim();
  const dato2 = document.getElementById('dato2').value.trim();
  const dato3 = document.getElementById('dato3').value.trim();

  if (!dato1 && !dato2 && !dato3) return;

  const registros = JSON.parse(localStorage.getItem('registros')) || [];

  registros.push({ dato1, dato2, dato3 });

  localStorage.setItem('registros', JSON.stringify(registros));

  form.reset();
  mostrarDatos();
});

function mostrarDatos() {
  lista.innerHTML = '';
  const registros = JSON.parse(localStorage.getItem('registros')) || [];

  if (registros.length === 0) {
    const li = document.createElement('li');
    li.textContent = 'No hay datos guardados.';
    lista.appendChild(li);
    return;
  }

  registros.forEach((item, index) => {
    const li = document.createElement('li');
    const span = document.createElement('span');
    span.textContent = `Dato 1: ${item.dato1} | Dato 2: ${item.dato2} | Dato 3: ${item.dato3}`;

    const btnEliminar = document.createElement('button');
    btnEliminar.textContent = 'Eliminar';
    btnEliminar.className = 'delete-btn';
    btnEliminar.addEventListener('click', () => eliminarRegistro(index));

    li.appendChild(span);
    li.appendChild(btnEliminar);
    lista.appendChild(li);
  });
}

function eliminarRegistro(index) {
  const registros = JSON.parse(localStorage.getItem('registros')) || [];
  registros.splice(index, 1);
  localStorage.setItem('registros', JSON.stringify(registros));
  mostrarDatos();
}

btnEliminarTodo.addEventListener('click', () => {
  localStorage.removeItem('registros');
  mostrarDatos();
});

mostrarDatos();
