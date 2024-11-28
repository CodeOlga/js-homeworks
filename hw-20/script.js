// // console.log("$", $); // перевірити, що встановили jquery

// JS + Bootstrap =======================================

// const form = document.getElementById("js--form");
// const userInput = document.getElementById("js--form__input");
// const toDos = document.getElementById("js--todos-wrapper");
// const modal = document.getElementById("exampleModal");
// const modalBody = document.getElementById("modal-body");

// // Function to get todos from localStorage
// function getTodosFromLocalStorage() {
//   const todos = localStorage.getItem("todos");
//   return todos ? JSON.parse(todos) : [];
// }

// // Function to save todos to localStorage
// function saveTodosToLocalStorage(todos) {
//   localStorage.setItem("todos", JSON.stringify(todos));
// }

// // Function to create a new todo item
// function buildToDoItem(value, uuid, checked = false) {
//   const newToDo = document.createElement("li");
//   newToDo.setAttribute("data-uuid", uuid);
//   newToDo.classList.add(
//     "text-info",
//     "list-group-item",
//     "d-flex",
//     "justify-content-between",
//     "align-items-center"
//   );

//   const newSpan = document.createElement("span");
//   newSpan.setAttribute("data-bs-toggle", "modal");
//   newSpan.setAttribute("data-bs-target", "#exampleModal");
//   newSpan.textContent = value;

//   const newCheckbox = document.createElement("input");
//   newCheckbox.type = "checkbox";
//   newCheckbox.checked = checked; // = checked тут це змінна, що приходить в параметрах ф-ції

//   const newDeleteButton = document.createElement("button");
//   newDeleteButton.classList.add("btn", "btn-outline-danger", "btn-sm");
//   newDeleteButton.textContent = "Delete";

//   newToDo.append(newCheckbox, newSpan, newDeleteButton);

//   if (checked) {
//     newSpan.classList.add("text-decoration-line-through");
//   }
//   toDos.appendChild(newToDo);
// }

// // Load todos from localStorage when the page is loaded
// window.addEventListener("load", () => {
//   const todos = getTodosFromLocalStorage();
//   todos.forEach((todo) => buildToDoItem(todo.name, todo.uuid, todo.checked));
// });

// // Event handler for form submission (adding a new todo)
// form.addEventListener("submit", (event) => {
//   event.preventDefault();

//   const value = userInput.value.trim();
//   const uuid = +new Date();

//   if (value) {
//     buildToDoItem(value, uuid);

//     const todos = getTodosFromLocalStorage();
//     todos.push({ name: value, uuid: uuid, checked: false });
//     saveTodosToLocalStorage(todos);

//     form.reset();
//   }
// });

// // Event handler for clicks on todo items (checkbox or delete button)
// toDos.addEventListener("click", (event) => {
//   const target = event.target;
//   const toDoItem = target.closest("li");
//   const uuid = toDoItem.getAttribute("data-uuid");

//   // Add text to modal-body before modal is open
//   if (target.closest("[data-bs-toggle='modal']")) {
//     const todoValue = toDoItem.querySelector(
//       "span[data-bs-toggle='modal']"
//     ).textContent;
//     modalBody.textContent = todoValue;
//   }

//   // Click on checkbox
//   if (target.type === "checkbox") {
//     const todos = getTodosFromLocalStorage();
//     const updatedTodos = todos.map((todo) => {
//       if (todo.uuid === +uuid) {
//         todo.checked = target.checked;
//       }
//       return todo;
//     });
//     saveTodosToLocalStorage(updatedTodos);

//     const todoText = toDoItem.querySelector("span");
//     todoText.classList.toggle("text-decoration-line-through", target.checked);
//   }

//   // Click on delete button
//   if (target.classList.contains("btn-outline-danger")) {
//     const todos = getTodosFromLocalStorage();
//     const updatedTodos = todos.filter((todo) => todo.uuid !== +uuid);
//     saveTodosToLocalStorage(updatedTodos);

//     toDoItem.remove();
//   }
// });

// jQuery + Bootstrap =======================================

$(document).ready(function () {
  const form = $("#js--form");
  const userInput = $("#js--form__input");
  const toDos = $("#js--todos-wrapper");
  const modal = $("#exampleModal");
  const modalBody = $("#modal-body");

  function getTodosFromLocalStorage() {
    const todos = localStorage.getItem("todos");
    return todos ? JSON.parse(todos) : [];
  }

  function saveTodosToLocalStorage(todos) {
    localStorage.setItem("todos", JSON.stringify(todos));
  }

  function buildToDoItem(value, uuid, checked = false) {
    const newToDo = $("<li></li>")
      .addClass(
        "text-info list-group-item d-flex justify-content-between align-items-center"
      )
      .attr("data-uuid", uuid);

    const newSpan = $("<span></span>")
      .attr({ "data-bs-toggle": "modal", "data-bs-target": "#exampleModal" })
      .text(value);

    const newCheckbox = $("<input>", { type: "checkbox" }).prop(
      "checked",
      checked
    );

    const newDeleteButton = $("<button></button>")
      .addClass("btn btn-outline-danger btn-sm")
      .text("Delete");

    newToDo.append(newCheckbox, newSpan, newDeleteButton);

    if (checked) {
      newSpan.addClass("text-decoration-line-through");
    }
    toDos.append(newToDo);
  }

  const todos = getTodosFromLocalStorage();
  todos.forEach(function (todo) {
    buildToDoItem(todo.name, todo.uuid, todo.checked);
  });

  form.on("submit", function (event) {
    event.preventDefault();

    const value = userInput.val().trim();
    const uuid = +new Date();

    if (value) {
      buildToDoItem(value, uuid);

      const todos = getTodosFromLocalStorage();
      todos.push({ name: value, uuid: uuid, checked: false });
      saveTodosToLocalStorage(todos);

      form.trigger("reset");
    }
  });

  toDos.on("click", function (event) {
    const target = $(event.target);
    const toDoItem = target.closest("li");
    const uuid = toDoItem.data("uuid");

    if (target.closest("[data-bs-toggle='modal']")) {
      const todoValue = toDoItem.find("span[data-bs-toggle='modal']").text();
      modalBody.text(todoValue);
    }

    if (target.prop("type") === "checkbox") {
      const todos = getTodosFromLocalStorage();
      const updatedTodos = todos.map(function (todo) {
        if (todo.uuid === +uuid) {
          todo.checked = target.prop("checked");
        }
        return todo;
      });
      saveTodosToLocalStorage(updatedTodos);

      const todoText = toDoItem.find("span");
      todoText.toggleClass(
        "text-decoration-line-through",
        target.prop("checked")
      );
    }

    if (target.hasClass("btn-outline-danger")) {
      const todos = getTodosFromLocalStorage();
      const updatedTodos = todos.filter(function (todo) {
        return todo.uuid !== +uuid;
      });
      saveTodosToLocalStorage(updatedTodos);

      toDoItem.remove();
    }
  });
});
