// const form = document.querySelector(".js--form");
// const userInput = document.querySelector(".js--form__input");
// const toDos = document.querySelector(".js--todos-wrapper");

// window.addEventListener("load", () => {
//   const todos = localStorage.getItem("todos");

//   if (todos) {
//     JSON.parse(todos).forEach((todo) =>
//       buildToDoItem(todo.name, todo.uuid, todo.checked)
//     );
//   }
// });

// function buildToDoItem(value, uuid, checked = false) {
//   const newToDo = document.createElement("li");
//   newToDo.setAttribute("data-uuid", uuid);
//   newToDo.classList.add("todo-item");

//   const newSpan = document.createElement("span");
//   newSpan.classList.add("todo-item__description");
//   newSpan.textContent = value;

//   const newCheckbox = document.createElement("input");
//   newCheckbox.type = "checkbox";
//   newCheckbox.checked = checked;

//   const newDeleteButton = document.createElement("button");
//   newDeleteButton.classList.add("todo-item__delete");
//   newDeleteButton.textContent = "Видалити";

//   newToDo.append(newCheckbox, newSpan, newDeleteButton);
//   if (checked) {
//     newToDo.classList.add("todo-item--checked");
//   }
//   toDos.appendChild(newToDo);
// }

// form.addEventListener("submit", (event) => {
//   event.preventDefault();

//   const value = userInput.value.trim();
//   const uuid = +new Date();

//   if (value) {
//     buildToDoItem(value, uuid);

//     const todosFromLocalStorage = localStorage.getItem("todos");

//     const todos = todosFromLocalStorage
//       ? JSON.parse(todosFromLocalStorage)
//       : [];
//     todos.push({ name: value, uuid: uuid, checked: false });
//     localStorage.setItem("todos", JSON.stringify(todos));

//     form.reset();
//   }
// });

// toDos.addEventListener("click", (event) => {
//   const target = event.target;
//   const toDoItem = target.closest("li");
//   const uuid = toDoItem.getAttribute("data-uuid");

//   // click on checkbox
//   if (target.type === "checkbox") {
//     const todosFromLocalStorage = JSON.parse(localStorage.getItem("todos"));
//     const updatedTodos = todosFromLocalStorage.map((todo) => {
//       if (todo.uuid === +uuid) {
//         todo.checked = target.checked;
//       }
//       return todo;
//     });

//     localStorage.setItem("todos", JSON.stringify(updatedTodos));

//     toDoItem.classList.toggle("todo-item--checked", target.checked);
//   }

//   // click on Delete button
//   if (target.classList.contains("todo-item__delete")) {
//     const todosFromLocalStorage = JSON.parse(localStorage.getItem("todos"));
//     const updatedTodos = todosFromLocalStorage.filter(
//       (todo) => todo.uuid !== +uuid
//     );
//     localStorage.setItem("todos", JSON.stringify(updatedTodos));

//     toDoItem.remove();
//   }
// });

//=============2==============
const form = document.querySelector(".js--form");
const userInput = document.querySelector(".js--form__input");
const toDos = document.querySelector(".js--todos-wrapper");

// Function to get todos from localStorage
function getTodosFromLocalStorage() {
  const todos = localStorage.getItem("todos");
  return todos ? JSON.parse(todos) : [];
}

// Function to save todos to localStorage
function saveTodosToLocalStorage(todos) {
  localStorage.setItem("todos", JSON.stringify(todos));
}

// Function to create a new todo item
function buildToDoItem(value, uuid, checked = false) {
  const newToDo = document.createElement("li");
  newToDo.setAttribute("data-uuid", uuid);
  newToDo.classList.add("todo-item");

  const newSpan = document.createElement("span");
  newSpan.classList.add("todo-item__description");
  newSpan.textContent = value;

  const newCheckbox = document.createElement("input");
  newCheckbox.type = "checkbox";
  newCheckbox.checked = checked;

  const newDeleteButton = document.createElement("button");
  newDeleteButton.classList.add("todo-item__delete");
  newDeleteButton.textContent = "Delete";

  newToDo.append(newCheckbox, newSpan, newDeleteButton);
  if (checked) {
    newToDo.classList.add("todo-item--checked");
  }
  toDos.appendChild(newToDo);
}

// Load todos from localStorage when the page is loaded
window.addEventListener("load", () => {
  const todos = getTodosFromLocalStorage();
  todos.forEach((todo) => buildToDoItem(todo.name, todo.uuid, todo.checked));
});

// Event handler for form submission (adding a new todo)
form.addEventListener("submit", (event) => {
  event.preventDefault();

  const value = userInput.value.trim();
  const uuid = +new Date();

  if (value) {
    buildToDoItem(value, uuid);

    const todos = getTodosFromLocalStorage();
    todos.push({ name: value, uuid: uuid, checked: false });
    saveTodosToLocalStorage(todos);

    form.reset();
  }
});

// Event handler for clicks on todo items (checkbox or delete button)
toDos.addEventListener("click", (event) => {
  const target = event.target;
  const toDoItem = target.closest("li");
  const uuid = toDoItem.getAttribute("data-uuid");

  // Click on checkbox
  if (target.type === "checkbox") {
    const todos = getTodosFromLocalStorage();
    const updatedTodos = todos.map((todo) => {
      if (todo.uuid === +uuid) {
        todo.checked = target.checked;
      }
      return todo;
    });
    saveTodosToLocalStorage(updatedTodos);

    toDoItem.classList.toggle("todo-item--checked", target.checked);
  }

  // Click on delete button
  if (target.classList.contains("todo-item__delete")) {
    const todos = getTodosFromLocalStorage();
    const updatedTodos = todos.filter((todo) => todo.uuid !== +uuid);
    saveTodosToLocalStorage(updatedTodos);

    toDoItem.remove();
  }
});
