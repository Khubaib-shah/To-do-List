let inputField = document.getElementById("InputField");
let addTodoButton = document.getElementById("addToDo");
let todoConainer = document.getElementById("todoConainer");

addTodoButton.addEventListener("click", function () {
  var paragraph = document.createElement("p");
  paragraph.classList.add("paragraph-styling");
  paragraph.innerText = inputField.value;
  todoConainer.appendChild("paragraph");
  paragraph.addEventListener("click", function () {
    paragraph.style.textDecoration = "line-through";
  });
});
