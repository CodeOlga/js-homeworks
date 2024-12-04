"use strict";

// jQuery + Bootstrap =======================================

$(document).ready(function () {
  var form = $("#js--form");
  var userInput = $("#js--form__input");
  var toDos = $("#js--todos-wrapper");
  var modalBody = $("#modal-body");
  function getTodosFromLocalStorage() {
    var todos = localStorage.getItem("todos");
    return todos ? JSON.parse(todos) : [];
  }
  function saveTodosToLocalStorage(todos) {
    localStorage.setItem("todos", JSON.stringify(todos));
  }
  function buildToDoItem(value, uuid) {
    var checked = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
    var newToDo = $("<li></li>").addClass("text-info list-group-item d-flex justify-content-between align-items-center").attr("data-uuid", uuid);
    var newSpan = $("<span></span>").attr({
      "data-bs-toggle": "modal",
      "data-bs-target": "#exampleModal"
    }).text(value);
    var newCheckbox = $("<input>", {
      type: "checkbox"
    }).prop("checked", checked);
    var newDeleteButton = $("<button></button>").addClass("btn btn-outline-danger btn-sm").text("Delete");
    newToDo.append(newCheckbox, newSpan, newDeleteButton);
    if (checked) {
      newSpan.addClass("text-decoration-line-through");
    }
    toDos.append(newToDo);
  }
  var todos = getTodosFromLocalStorage();
  todos.forEach(function (todo) {
    buildToDoItem(todo.name, todo.uuid, todo.checked);
  });
  form.on("submit", function (event) {
    event.preventDefault();
    var value = userInput.val().trim();
    var uuid = +new Date();
    if (value) {
      buildToDoItem(value, uuid);
      var _todos = getTodosFromLocalStorage();
      _todos.push({
        name: value,
        uuid: uuid,
        checked: false
      });
      saveTodosToLocalStorage(_todos);
      form.trigger("reset");
    }
  });
  toDos.on("click", function (event) {
    var target = $(event.target);
    var toDoItem = target.closest("li");
    var uuid = toDoItem.data("uuid");
    if (target.closest("[data-bs-toggle='modal']")) {
      var todoValue = toDoItem.find("span[data-bs-toggle='modal']").text();
      modalBody.text(todoValue);
    }
    if (target.prop("type") === "checkbox") {
      var _todos2 = getTodosFromLocalStorage();
      var updatedTodos = _todos2.map(function (todo) {
        if (todo.uuid === +uuid) {
          todo.checked = target.prop("checked");
        }
        return todo;
      });
      saveTodosToLocalStorage(updatedTodos);
      var todoText = toDoItem.find("span");
      todoText.toggleClass("text-decoration-line-through", target.prop("checked"));
    }
    if (target.hasClass("btn-outline-danger")) {
      var _todos3 = getTodosFromLocalStorage();
      var _updatedTodos = _todos3.filter(function (todo) {
        return todo.uuid !== +uuid;
      });
      saveTodosToLocalStorage(_updatedTodos);
      toDoItem.remove();
    }
  });
});