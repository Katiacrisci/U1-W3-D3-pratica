const ul = document.getElementById("to-do-list");
const input = document.getElementById("input");
const addButton = document.getElementById("add-btn");

const checkItem = (event) => {
  const checkButton = event.srcElement;
  const li = checkButton.parentElement.parentElement;
  li.classList.add("checked");
};

const removeItem = (event) => {
  const removeButton = event.srcElement;
  const li = removeButton.parentElement.parentElement;
  li.remove();
};

const addToDoItem = () => {
  const toDo = document.createElement("li");

  const toDoId = `id-item-${ul.children.length + 1}`;
  toDo.id = toDoId;

  const div = document.createElement("div");
  div.innerText = input.value;
  input.value = "";

  const checkButton = document.createElement("button");
  checkButton.addEventListener("click", checkItem);
  checkButton.innerText = "mark as completed";

  const removeButton = document.createElement("button");
  removeButton.addEventListener("click", removeItem);
  removeButton.innerText = "remove to-do"

  ul.appendChild(toDo);
  toDo.appendChild(div);
  div.appendChild(checkButton);
  div.appendChild(removeButton);
};
addButton.addEventListener("click", addToDoItem);