const form = document.getElementById("js--form");
const userInput = document.getElementById("js--form__input");
const toDos = document.getElementById("js--todos-wrapper");
const modalInput = document.getElementById("modal-input");
const saveModalBtn = document.getElementById("save-modal-btn");

const BASE_URL = "http://localhost:8080/todos";

// ID поточного todo для редагування
let currentTodoId = null;

async function fetchTodos() {
  try {
    const response = await fetch(BASE_URL);
    if (!response.ok) throw new Error("Failed to fetch todos");
    return await response.json();
  } catch (error) {
    console.error(error);
    return [];
  }
}

async function addTodoToServer(todo) {
  try {
    const response = await fetch(BASE_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(todo),
    });
    if (!response.ok) throw new Error("Failed to add todo");
    return await response.json();
  } catch (error) {
    console.error(error);
  }
}

async function deleteTodoFromServer(id) {
  try {
    const response = await fetch(`${BASE_URL}/${id}`, {
      method: "DELETE",
    });
    if (!response.ok) throw new Error("Failed to delete todo");
    return await response.json();
  } catch (error) {
    console.error(error);
  }
}

async function updateTodoOnServer(id, updates) {
  try {
    const response = await fetch(`${BASE_URL}/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(updates),
    });
    if (!response.ok) throw new Error("Failed to update todo");
    return await response.json();
  } catch (error) {
    console.error(error);
  }
}

function buildToDoItem({ text, _id, checked }) {
  const newToDo = document.createElement("li");
  newToDo.setAttribute("data-id", _id);
  newToDo.classList.add(
    "text-info",
    "list-group-item",
    "d-flex",
    "justify-content-between",
    "align-items-center"
  );

  const newSpan = document.createElement("span");
  newSpan.setAttribute("data-bs-toggle", "modal");
  newSpan.setAttribute("data-bs-target", "#exampleModal");
  newSpan.textContent = text;

  const newCheckbox = document.createElement("input");
  newCheckbox.type = "checkbox";
  newCheckbox.checked = checked;

  const newDeleteButton = document.createElement("button");
  newDeleteButton.classList.add("btn", "btn-outline-danger", "btn-sm");
  newDeleteButton.textContent = "Delete";

  newToDo.append(newCheckbox, newSpan, newDeleteButton);

  if (checked) {
    newSpan.classList.add("text-decoration-line-through");
  }

  toDos.appendChild(newToDo);
}

window.addEventListener("load", async () => {
  const todos = await fetchTodos();
  todos.forEach(buildToDoItem);
});

form.addEventListener("submit", async (event) => {
  event.preventDefault();

  const value = userInput.value.trim();
  if (value) {
    const newTodo = { text: value, checked: false };
    await addTodoToServer(newTodo);
    toDos.innerHTML = "";
    const todos = await fetchTodos();
    todos.forEach(buildToDoItem);
    form.reset();
  }
});

toDos.addEventListener("click", async (event) => {
  const target = event.target;
  const toDoItem = target.closest("li");
  const id = toDoItem.getAttribute("data-id");

  if (target.closest("[data-bs-toggle='modal']")) {
    currentTodoId = id;
    const todoValue = toDoItem.querySelector("span").textContent;
    modalInput.value = todoValue;
  }

  if (target.type === "checkbox") {
    const checked = target.checked;
    await updateTodoOnServer(id, { checked });
    const todoText = toDoItem.querySelector("span");
    todoText.classList.toggle("text-decoration-line-through", checked);
  }

  if (target.classList.contains("btn-outline-danger")) {
    await deleteTodoFromServer(id);
    toDos.innerHTML = "";
    const todos = await fetchTodos();
    todos.forEach(buildToDoItem);
  }
});

saveModalBtn.addEventListener("click", async () => {
  const updatedText = modalInput.value.trim();
  if (currentTodoId && updatedText) {
    await updateTodoOnServer(currentTodoId, { text: updatedText });
    toDos.innerHTML = "";
    const todos = await fetchTodos();
    todos.forEach(buildToDoItem);
    currentTodoId = null;
  }
});
