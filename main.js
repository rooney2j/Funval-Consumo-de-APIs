

/* Los siguientes nombres de funciones son una sugerencia de funciones que necesitarás en tu programa,
sin embargo, no te limites solo a estas funciones. Crea tantas como consideres necesarias.

La estructura de cada objeto "tarea" es la siguiente:

{
  id: 1,
  title: "tarea",
  completed: false
}

*/

// Función para añadir una nueva tarea
function addTask() {

}

// Función para marcar una tarea como completada o imcompleta (Puede ser la misma función)
function completeTask() {

}

// Función para borrar una tarea
function deleteTask() {

}

// Funcion para borrar todas las tareas
function deleteAll() {

}

// Función para filtrar tareas completadas
function filterCompleted() {

}

// Función para filtrar tareas incompletas
function filterUncompleted() {

}

/* --------------------------------------CÓDIGO---------------------------------------- */

// Elementos del DOM
const lista_all = document.querySelector('.lista_all');
const lista_active = document.querySelector('.lista_active');
const lista_completed = document.querySelector('.lista_completed');

const opcion_all = document.querySelector('.opcion_all');
const opcion_active = document.querySelector('.opcion_active');
const opcion_completed = document.querySelector('.opcion_completed');

// Eventos
opcion_all.addEventListener('click', getAllData);
opcion_active.addEventListener('click', getActiveData);
opcion_completed.addEventListener('click', getCompletedData);

const url = "https://jsonplaceholder.typicode.com/todos";

function getAllData() {
  lista_active.innerHTML = '';
  lista_completed.innerHTML = '';
  
  fetch(url)
    .then(response => response.json())
    .then(data => showAllData(data))
    .catch(error => alert(error));
}

function getActiveData() {
  lista_all.innerHTML = '';
  lista_completed.innerHTML = '';

  fetch(url)
    .then(response => response.json())
    .then(data => showActiveData(data))
    .catch(error => alert(error));
}

function getCompletedData() {
  lista_all.innerHTML = '';
  lista_active.innerHTML = '';

  fetch(url)
    .then(response => response.json())
    .then(data => showCompletedData(data))
    .catch(error => alert(error));
}

function showAllData(data) {
  // Agregar y quitar la clase d-none según corresponda
  lista_all.classList.remove('d-none')
  lista_active.classList.add('d-none');
  lista_completed.classList.add('d-none');

  lista_all.classList.innerHTML = '';
  lista_active.innerHTML = '';
  lista_completed.innerHTML = '';

  data.forEach(element => {
    const elemento_div = document.createElement('div');
    const elemento_input = document.createElement('input');
    const elemento_label = document.createElement('label');

    // <div class="form-check">
    elemento_div.classList.add('form-check');

    // <input class="form-check-input" type="checkbox" disabled>
    elemento_input.classList.add('form-check-input');
    elemento_input.type = "checkbox";
    elemento_input.id = element.id;

    if (element.completed == true) {
      elemento_input.checked = true;
    }

    // <label class="form-check-label" for="flexCheckDefault">Do coding challenges</label>
    elemento_label.classList.add('form-check-label');
    elemento_label.setAttribute("for", element.id);
    elemento_label.textContent = element.title;

    elemento_div.append(elemento_input, elemento_label);

    lista_all.appendChild(elemento_div);
  });
}

function showActiveData(data) {
  // Agregar y quitar la clase d-none según corresponda
  lista_all.classList.add('d-none')
  lista_active.classList.remove('d-none');
  lista_completed.classList.add('d-none');

  data.forEach(element => {
    if (element.completed == false) {
      const elemento_div = document.createElement('div');
      const elemento_input = document.createElement('input');
      const elemento_label = document.createElement('label');

      // <div class="form-check">
      elemento_div.classList.add('form-check');

      // <input class="form-check-input" type="checkbox" disabled>
      elemento_input.classList.add('form-check-input');
      elemento_input.type = "checkbox";
      elemento_input.id = element.id;

      // <label class="form-check-label" for="flexCheckDefault">Do coding challenges</label>
      elemento_label.classList.add('form-check-label');
      elemento_label.setAttribute("for", element.id);
      elemento_label.textContent = element.title;

      elemento_div.append(elemento_input, elemento_label);

      lista_active.appendChild(elemento_div);
    }
  });
}

function showCompletedData(data) {
  // Agregar y quitar la clase d-none según corresponda
  lista_all.classList.add('d-none')
  lista_active.classList.add('d-none');
  lista_completed.classList.remove('d-none');

  data.forEach(element => {
    if (element.completed == true) {

      const elemento_div = document.createElement('div');
      const elemento_input = document.createElement('input');
      const elemento_label = document.createElement('label');

      // <div class="form-check">
      elemento_div.classList.add('form-check');

      // <input class="form-check-input" type="checkbox" disabled>
      elemento_input.classList.add('form-check-input');
      elemento_input.type = "checkbox";
      elemento_input.id = element.id;

      elemento_input.checked = true;

      // <label class="form-check-label" for="flexCheckDefault">Do coding challenges</label>
      elemento_label.classList.add('form-check-label');
      elemento_label.setAttribute("for", element.id);
      elemento_label.textContent = element.title;

      elemento_div.append(elemento_input, elemento_label);

      lista_completed.appendChild(elemento_div);
    }
  });
}