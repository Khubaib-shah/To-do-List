function addTodo() {
  var todoParent = document.getElementById("todoParent");
  var todoInput = document.getElementById("todoInput");
  if (todoInput.value.length < 3) {
    alert("Enter correct todo value");
    return;
  }
  var todoText = capitalizeFirstLetter(todoInput.value);
  var li = document.createElement("li");
  li.innerHTML = todoText;
  var editBtn = document.createElement("button");
  editBtn.setAttribute("onClick", "editTodo(this)");
  editBtn.style.color = "green";
  editBtn.innerHTML = "Edit";
  var compBtn = document.createElement("button");
  compBtn.setAttribute("onClick", "comTodo(this)");
  compBtn.style.color = "orange";
  compBtn.innerHTML = "Complete";
  var delBtn = document.createElement("button");
  delBtn.style.color = "red";
  delBtn.innerHTML = "Delete";
  delBtn.setAttribute("onClick", "delTodo(this)");
  li.appendChild(editBtn);
  li.appendChild(compBtn);
  li.appendChild(delBtn);
  todoParent.appendChild(li);
  todoInput.value = "";
}
function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
}
function delAll() {
  var todoParent = document.getElementById("todoParent");
  todoParent.innerHTML = "";
}

function editTodo(ele) {
  var editVal = prompt("Enter value", ele.previousSibling.nodeValue);
  console.log(editVal);
  ele.previousSibling.nodeValue = editVal;
}
function comTodo(completed) {
  completed.innerHTML = "Completed";
  completed.style.color = "blue";
}
function delTodo(ele) {
  ele.parentNode.remove();
}
