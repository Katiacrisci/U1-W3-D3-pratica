const ul = document.getElementById("to-do-list");
const input = document.getElementById("input");
const addButton = document.getElementById("add-btn");

const checkItem = (event) => {
  const checkButton = event.srcElement;
  const li = checkButton.parentElement;
  if (!li.classList.contains("checked")) {
    li.classList.add("checked");
  } else {
    li.classList.remove("checked");
  }
};

const removeItem = (event) => {
  const removeButton = event.srcElement;
  const li = removeButton.parentElement.parentElement;
  li.remove();
};

const addToDoItem = (event) => {
  if (input.value === "" || (event.type === "keydown" && event.code !== "Enter")) {
    return;
  }

  const toDo = document.createElement("li");

  const span = document.createElement("span");
  span.innerText = input.value;
  input.value = "";

  const checkbox = document.createElement("input");
  checkbox.type = "checkbox";
  checkbox.addEventListener("change", checkItem);

  const checkButton = document.createElement("button");
  checkButton.addEventListener("click", checkItem);
  checkButton.innerText = "mark as completed";

  const removeButton = document.createElement("button");
  removeButton.addEventListener("click", removeItem);
  const trashIcon = document.createElement("i");
  trashIcon.classList.add("fas");
  trashIcon.classList.add("fa-trash-alt");
  removeButton.appendChild(trashIcon);

  ul.appendChild(toDo);
  toDo.append(checkbox);
  toDo.appendChild(span);
  toDo.appendChild(removeButton);
};
addButton.addEventListener("click", addToDoItem);
input.addEventListener("keydown", addToDoItem);
