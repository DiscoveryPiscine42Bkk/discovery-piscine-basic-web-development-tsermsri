let todoList = [];

window.onload = function () {
  loadFromStorage();
};

function addTodo() {
  const text = prompt("Enter a new TO DO:");
  if (text && text.trim() !== "") {
    const todo = createTodo(text.trim());
    todoList.unshift(text.trim());
    saveToStorage();
    document.getElementById("ft_list").insertBefore(todo, document.getElementById("ft_list").firstChild);
  }
}

function createTodo(text) {
  const div = document.createElement("div");
  div.textContent = text;
  div.onclick = function () {
    if (confirm("Do you really want to delete this TO DO?")) {
      div.remove();
      todoList = todoList.filter(t => t !== text || t === null);
      saveToStorage();
    }
  };
  return div;
}

function saveToStorage() {
  document.cookie = "todoList=" + JSON.stringify(todoList) + "; path=/";
}

function loadFromStorage() {
  const cookies = document.cookie.split(';');
  for (const cookie of cookies) {
    const [key, value] = cookie.trim().split('=');
    if (key === "todoList") {
      try {
        todoList = JSON.parse(decodeURIComponent(value));
        todoList.forEach(item => {
          const todo = createTodo(item);
          document.getElementById("ft_list").appendChild(todo);
        });
      } catch (e) {
        todoList = [];
      }
    }
  }
}