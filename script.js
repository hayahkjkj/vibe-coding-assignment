// Get elements from the HTML
const input = document.getElementById("todo-input");
const addBtn = document.getElementById("add-btn");
const todoList = document.getElementById("todo-list");

// Load saved tasks when the page loads
document.addEventListener("DOMContentLoaded", loadTodos);

// Add a new task when the button is clicked
addBtn.addEventListener("click", addTodo);

// Function to add a new todo
function addTodo() {
    // Get the text from input
    const taskText = input.value.trim();

    // Prevent empty tasks
    if (taskText === "") {
        alert("Please enter a task");
        return;
    }

    // Create a task object
    const todo = {
        text: taskText,
        completed: false
    };

    // Save task to localStorage
    saveTodo(todo);

    // Display task on screen
    displayTodo(todo);

    // Clear input
    input.value = "";
}

// Function to display a todo item
function displayTodo(todo) {
    const li = document.createElement("li");

    // Task text
    li.textContent = todo.text;

    // Mark completed if true
    if (todo.completed) {
        li.classList.add("completed");
    }

    // Toggle completed on click
    li.addEventListener("click", function () {
        li.classList.toggle("completed");
        updateTodoStatus(todo.text);
    });

    // Delete button
    const deleteBtn = document.createElement("span");
    deleteBtn.textContent = "❌";
    deleteBtn.classList.add("delete-btn");

    deleteBtn.addEventListener("click", function (e) {
        e.stopPropagation(); // Prevent triggering complete toggle
        li.remove();
        deleteTodo(todo.text);
    });

    li.appendChild(deleteBtn);
    todoList.appendChild(li);
}

// Save todo to localStorage
function saveTodo(todo) {
    const todos = getTodos();
    todos.push(todo);
    localStorage.setItem("todos", JSON.stringify(todos));
}

// Load todos from localStorage
function loadTodos() {
    const todos = getTodos();
    todos.forEach(displayTodo);
}

// Get todos from localStorage
function getTodos() {
    const todos = localStorage.getItem("todos");
    return todos ? JSON.parse(todos) : [];
}

// Delete todo from localStorage
function deleteTodo(text) {
    let todos = getTodos();
    todos = todos.filter(todo => todo.text !== text);
    localStorage.setItem("todos", JSON.stringify(todos));
}

// Update completed status in localStorage
function updateTodoStatus(text) {
    const todos = getTodos();
    todos.forEach(todo => {
        if (todo.text === text) {
            todo.completed = !todo.completed;
        }
    });
    localStorage.setItem("todos", JSON.stringify(todos));
}
