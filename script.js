
const taskInput = document.getElementById('taskInput');
const addTaskBtn = document.getElementById('addTaskBtn');
const taskList = document.getElementById('taskList');
const filterAllBtn = document.getElementById('filterAll');
const filterCompleteBtn = document.getElementById('filterCompleted');
const filterPendingBtn = document.getElementById('filterPending');

let tasks = [];   

function renderTask(filterTasks = tasks){

    taskList.innerHTML = "";
   
    filterTasks.forEach((task,index)=>{
         
        const li = document.createElement("li");
    
        li.classList.toggle("completed", task.completed);

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
    const taskName = taskInput.value.trim();
    if(taskName !== ""){
        let task = {
            name: taskName,
            completed: false
        }

        tasks.push(task);
        taskInput.value = "";
        renderTask();
    }

}

function deleteTask(index){

    tasks.splice(index,1);
    renderTask();

}

function toggleTaskComplete(index){
   
    tasks[index].completed = !tasks[index].completed;
    renderTask();
}


addTaskBtn.addEventListener('click',addTask);

filterAllBtn.addEventListener('click', () => renderTask());  
filterCompleteBtn.addEventListener('click',() =>
     renderTask(tasks.filter(task => task.completed)));  
filterPendingBtn.addEventListener('click',() =>
    renderTask(tasks.filter(task => !task.completed))); 
renderTask();





