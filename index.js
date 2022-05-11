//Practice 1. You must make a "move one" cmd by click to move it to section "completed tasks".

//Practice 2. Creating an order. (++)

const addForm = document.querySelector('.navbar');
const clearAll = document.getElementById('clAlltaskBtn');

const removeTask = (event) => {
    event.target.closest('.task').remove();
};

addForm.addEventListener (
    'submit',
    (event) => {
        event.preventDefault();

        const input = document.getElementById('taskInput');

        if (input.value === '') {
            alert('No Task has been added');
            return;
        }

        const target = document.querySelector('#tasks');

        const task = document.createElement('div');

        task.innerHTML = `<span>${input.value}</span>`;

        const removeBtn = document.createElement('a');
        removeBtn.href = '#remove'; 
        removeBtn.innerHTML = 'Remove';
        removeBtn.addEventListener ('click', removeTask);
        task.appendChild(removeBtn);
        
        task.classList.add('task');

        target.appendChild(task);

        input.value = '';
    }
);

clearAll.addEventListener (
    'click', () => {
        const tasks = document.querySelectorAll('.taskList .task');

        tasks.forEach((task) => task.remove());
    }
);
