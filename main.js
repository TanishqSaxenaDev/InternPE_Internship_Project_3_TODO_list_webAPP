const inputBox = document.querySelector("#taskInput");
let taskArea = document.querySelector("#task-container");
let inputValue = 0;
let inputtext = [];
let rTag = document.querySelector(".default-li");

// ---- Single source of truth for how a task renders ----
function renderTask(item) {
  const checkedClass = item.checked ? " checked" : "";
  return `<li onclick="toggler(this)" class="num-${item.id}${checkedClass}"><b><i class='fa-solid fa-angles-right'></i></b><l>${item.text}</l><button class="delete" data-id="${item.id}" onclick="delfun(this)">DEL</button></li>`;
}

function loadTasks() {
  const saved = localStorage.getItem("inputtext");
  const savedCounter = localStorage.getItem("inputValue");
  if (saved) {
    inputtext = JSON.parse(saved);
    inputValue = parseInt(savedCounter, 10) || 0;

    if (inputtext.length > 0) {
      taskArea.innerHTML = "";
      inputtext.forEach((item) => {
        taskArea.innerHTML += renderTask(item);
      });
    }
  }
}

function saveTasks() {
  localStorage.setItem("inputtext", JSON.stringify(inputtext));
  localStorage.setItem("inputValue", inputValue);
}

function taskAdder() {
  if (inputBox.value === "") {
    alert("warning");
    return;
  }

  for (let i = 0; i < inputtext.length; i++) {
    if (inputtext[i].text === inputBox.value) {
      alert(
        "Kindly Add Another Task as this one is already in the list! Thanks!",
      );
      return;
    }
  }

  inputValue++;
  const id = inputValue;
  const newItem = { id: id, text: inputBox.value, checked: false };

  inputtext.push(newItem);

  const li = renderTask(newItem);

  if (taskArea.contains(rTag)) {
    taskArea.innerHTML = li;
  } else {
    taskArea.innerHTML += li;
  }

  inputBox.value = "";
  saveTasks();
}

function delfun(x) {
  const id = parseInt(x.dataset.id, 10);
  inputtext = inputtext.filter((item) => item.id !== id);
  x.closest("li").remove();
  if (inputtext.length === 0) {
    window.location.reload();
  }
  saveTasks();
}

function toggler(x) {
  x.classList.toggle("checked");

  const id = parseInt(x.className.match(/num-(\d+)/)[1], 10);
  const item = inputtext.find((item) => item.id === id);
  if (item) item.checked = x.classList.contains("checked");

  saveTasks();
}

loadTasks();
