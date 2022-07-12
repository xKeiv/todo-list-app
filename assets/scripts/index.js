//1. Bootstrap Styling (Minimal Use of CSS)
//2. How can I optimalize deleting task-list

const addForm = document.querySelector('.mynavbar');
const clearAll = document.getElementById('clAlltaskBtn');
const clearUser1 = document.getElementById('clUser1');
const clearUser2 = document.getElementById('clUser2');
const clearUser3 = document.getElementById('clUser3');
const clearUser4 = document.getElementById('clUser4');

const removeTask = (event) => {
    event.target.closest('.task').remove();
}

const moveTask = (event) => {
    const complTasks = event.target.closest('.taskList').querySelector('.complTasks'); //document.getElementByClass('complTasks');
    const tasks = event.target.closest('.taskList').querySelector('.tasks'); //document.getElementByClass('tasks');

    if (event.target.closest('.tasks')) {
        complTasks.appendChild(event.target.closest('.task'))
    } else {
        tasks.appendChild(event.target.closest('.task'))
    }
}

addForm.addEventListener (
    'submit',
    (event) => {
        event.preventDefault();

        const input = document.getElementById('taskInput');
        const select = document.getElementById('selectBtn');

        if (input.value === '') {
            alert('No Task has been added');
            return;
        }

        if (select.value === '') {
            alert('No user has been selected');
            return;
        }
        const target = document.getElementById(select.value);//querySelector('.tasks');

        const task = document.createElement('div');

        task.innerHTML = `<span>${input.value}</span>`;

        const removeBtn = document.createElement('a');
        removeBtn.href = '#remove'; 
        removeBtn.innerHTML = 'Remove';
        removeBtn.addEventListener ('click', removeTask);
        task.appendChild(removeBtn);
        
        task.classList.add('task');

        target.appendChild(task);

        //Moving

        const moveBtn = document.createElement('a');
        moveBtn.href = '#move'; 
        moveBtn.innerHTML = 'Move';
        moveBtn.addEventListener ('click', moveTask);
        task.append(moveBtn);


        input.value = '';
        select.value = '';
    }
);

//Clear Buttons

//Practice 1 (I need to manipulate it)
clearAll.addEventListener (
    'click', () => {
        const tasks = document.querySelectorAll('.taskList .task');

        tasks.forEach((task) => task.remove());
    }
);

clearUser1.addEventListener (
    'click', () => {
        const tasks = document.querySelectorAll('#user1 .task, #complTasksUser1 .task');

        tasks.forEach((task) => task.remove());
    }
);

clearUser2.addEventListener (
    'click', () => {
        const tasks = document.querySelectorAll('.taskList .task #user2');

        tasks.forEach((task) => task.remove());
    }
);

clearUser3.addEventListener (
    'click', () => {
        const tasks = document.querySelectorAll('.taskList .task #user3');

        tasks.forEach((task) => task.remove());
    }
);

clearUser4.addEventListener (
    'click', () => {
        const tasks = document.querySelectorAll('.taskList .task #user4');

        tasks.forEach((task) => task.remove());
    }
);
