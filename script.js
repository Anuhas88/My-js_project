const taskInput =document.getElementById('TaskInput');
const addTaskBtn = document.getElementById('addTaskBtn');
const taskList = document.getElementById('taskList');
const filterAllBtn = document.getElementById('filterAll');
const filterCompleteBtn = document.getElementById('filterCompleted');
const filterPendingBtn = document.getElementById('filterPending');

let tasks = [];
function renderTask(filterTasks = tasks){
    taskList.innerHTML = "";
    filterTasks.forEach((Task,index)) => {
        const li = document.createElement("li");
        li.classList.toggle("completed",Task.completed);

        const taskText = document.createElement("span");
        taskText.textContent = task.name;
        li.appendChild(taskText);

        li.onclick = () => toggleTaskComplete(index);
        
        const deleteBtn = document.createElement("button");
        deleteBtn.textContent = "Delete";
        deleteBtn.onclick = () => deleteTask(index);
    }
}