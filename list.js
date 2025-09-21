document.addEventListener("DOMContentLoaded", function() {

let addTaskBtn = document.getElementById("addTaskBtn");
let taskInput = document.getElementById("taskInput");
let Done = document.getElementById("Done");
let done = document.getElementById("done");

let taskList = document.getElementById("taskList");
Done.addEventListener("click", done1Text);
done.addEventListener("click", done1Text);

function done1Text() {
    let tasktext = taskInput.value.trim();
    if (tasktext === "") {
        return;
    }
    let newTask = document.createElement("div");
    newTask.classList.add("task");
    newTask.innerHTML = '<input type="checkbox"> <span>' + tasktext + '</span> <button class="cansel">x</button><br> <hr class="line">';


    taskList.appendChild(newTask);
    
    taskInput.value = "";
    this.placeholder = this.getAttribute("data-placeholder");
    updateLocalStorage();
}
taskInput.addEventListener("keydown", function (e) {
    if (e.key === "Enter") {
       Done.click();
    }
});
addTaskBtn.addEventListener("click", function () {
    taskInput.focus();

});
taskInput.addEventListener("focus", function () {
    this.setAttribute("data-placeholder", this.placeholder);
    this.placeholder = "";

});
taskInput.addEventListener("blur", function () {
    this.placeholder = this.getAttribute("data-placeholder");
    this.removeAttribute("data-placeholder");
});

taskList.addEventListener("change", function (e) {
    if (e.target.checked && e.target.type === "checkbox") {
        let task = e.target.closest(".task");
       
        setTimeout(function () {
            task.remove();
        }, 1);
        updateLocalStorage();
    }});
    taskList.addEventListener("click", function (e) {
    if (e.target.classList.contains("cansel")) {
        let task = e.target.closest(".task");
       
        setTimeout(function () {
            task.remove();
        }, 1);
        updateLocalStorage();
    }});
function updateLocalStorage() {
    localStorage.setItem("tasks", taskList.innerHTML);
}
taskList.innerHTML = localStorage.getItem("tasks") || "";
});