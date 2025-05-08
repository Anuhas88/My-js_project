const taskInput =document.getElementById('TaskInput');
const addTaskBtn = document.getElementById('addTaskBtn');
const taskList = document.getElementById('taskList');
const filterAllBtn = document.getElementById('filterAll');
const filterCompleteBtn = document.getElementById('filterCompleted');
const filterPendingBtn = document.getElementById('filterPending');

let tasks = [];
function renderTask(filterTasks = tasks){
    taskList.innerHTML = "";
    filterTasks.forEach((Task,index) => {
        const li = document.createElement("li");
        li.classList.toggle("completed",Task.completed);

        const taskText = document.createElement("span");
        taskText.textContent = task.name;
        li.appendChild(taskText);

        li.onclick = () => toggleTaskComplete(index);
        
        const deleteBtn = document.createElement("button");
        deleteBtn.textContent = "Delete";
        deleteBtn.onclick = () => deleteTask(index);
        li.appendChild(deleteBtn);

        taskList.appendChild(li);
    })
}

function addTask(){
    const taskName = taskInput.ariaValue.trim();
    if(tasks !== ""){
        let task = {
            name: taskName,
            completed: false
        }

        tasks.push(task);
        taskInput.value = "";
        renderTask();
    }

    function toggleTaskComplete(index){
        tasks[index].completed = !tasks[index].completed;
        renderTask();
    }
    addTaskBtn.addEventListener('click',addTask);

    filterAllBtn.addEventListener('click',() => renderTask());
        
    filterCompleteBtn.addEventListener('click',() =>
            renderTask(tasks.filter(task => task.completed)));
    filterPendingBtn.addEventListener('click',() =>
        renderTask(tasks.filter(task => !task.completed)));
    renderTask();
}