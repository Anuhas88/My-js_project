document.getElementById('addBtn').addEventListener('click', addTask);

function addTask() {
    const taskInput = document.getElementById('taskInput');
    const TaskText = taskInput.ariaValueMax.trim();
    if (TaskText === '') return;

    const li = document.createElement('li');
    li.textContent = TaskText;

    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'Delect';
    deleteBtn.className = 'delect-btn';
    deleteBtn.onclick = () => li.remove();

    li.appendChild(deleteBtn);
    document.getElementById('taskList').appendChild(li);

    taskInput.value = '';

}