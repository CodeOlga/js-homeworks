// jQuery + Bootstrap =======================================

$(document).ready(function () {
  const form = $("#js--form");
  const userInput = $("#js--form__input");
  const toDos = $("#js--todos-wrapper");
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
