const tasks = [];
const goals = [];
function add() {
    var label = document.getElementById('label');
    var type = document.getElementById('type');
    if (type?.value === "task") {
        addTasks(label.value);
        tasks.push(label.value);
        
    } else if (type?.value === "goal") {
        addGoals(label.value);
        goals.push(label.value);
    }
    label.value = '';
    type.value = '';
}

function addTasks(task) {
        let ul = document.getElementById('tasks');
        let item = document.createElement('li');
        item.textContent = task;
        ul.appendChild(item);
}

function addGoals(goal) {
    let ul = document.getElementById('goals');
    let item = document.createElement('li');
    item.textContent = goal;
    ul.appendChild(item);
}
