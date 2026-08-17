const form = document.getElementById("task-form");
const list = document.getElementById("task-list");
const input = document.getElementById("task-input");
form.addEventListener("submit", function(event) {
    console.log("form submitted!");
  event.preventDefault();
  const taskText = input.value;
  console.log(taskText);
  const li = document.createElement("li");
  li.textContent = taskText;
  list.appendChild(li);
  input.value = "";
});