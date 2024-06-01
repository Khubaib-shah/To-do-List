function addTodo() {
  var todoParent = document.getElementById("todoParent");
  var todoInput = document.getElementById("todoInput");
  if (todoInput.value.length < 3) {
    alert("Enter correct todo value");
    return;
  }
  var li = document.createElement("li");
  li.innerHTML = todoInput.value;
  var editBtn = document.createElement("button");
  editBtn.setAttribute("onClick", "editTodo(this)");
  editBtn.innerHTML = "Edit";
  var delBtn = document.createElement("button");
  delBtn.innerHTML = "Delete";
  delBtn.setAttribute("onClick", "delTodo(this)");
  li.appendChild(editBtn);
  li.appendChild(delBtn);
  todoParent.appendChild(li);
  todoInput.value = "";
}
function delAll() {
  var todoParent = document.getElementById("todoParent");
  todoParent.innerHTML = "";
}

function delTodo(ele) {
  console.log("delTodo", ele.parentNode);

  ele.parentNode.remove();
}

function editTodo(ele) {
  var editVal = prompt("Enter value", ele.previousSibling.nodeValue)
  console.log(editVal)
  ele.previousSibling.nodeValue = editVal

}