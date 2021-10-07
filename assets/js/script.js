var formEL = document.querySelector("#task-form")
var taskToDoEl = document.querySelector("#tasks-to-do");

var createTaskHandler = function(event){

    event.preventDefault();
    var taskNameInput = document.querySelector("input[name='task-name']").value;
    var taskTypeInput = document.querySelector("select[name='task-type']").value;
    // console.dir(taskNameInput);
    // create list item
    var listItemEl = document.createElement("li");
    listItemEl.className = "task-item";
    var taskInfoEl = document.createElement("div");
    taskInfoEl.className = "task-info";
    taskInfoEl.innerHTML = "<h3 class='task-name'>" + taskNameInput + "</h3><span class='task-type'>" + taskTypeInput + "</span>";
    // listItemEl.textContent = taskNameInput;
    listItemEl.appendChild(taskInfoEl);

    taskToDoEl.appendChild(listItemEl);
}

formEL.addEventListener("submit", createTaskHandler);
