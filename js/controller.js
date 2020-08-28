// Controller
function loadController() {
    model.taskDescriptionInput = document.getElementById('taskDescription');
    model.nameDescriptionInput = document.getElementById('nameDescription');
    model.dateDescriptionInput = document.getElementById('dateDescription');
    model.taskTable = document.getElementById('tasksTable');

}
function addTask() {
    model.tasks.push({
        description: model.taskDescriptionInput.value,
        name: model.nameDescriptionInput.value,
        date: model.dateDescriptionInput.value,
        finnished:"",
        isDone: false,
    });
    model.taskDescriptionInput.value = '';
    show();
}
function changeIsDone(checkbox, index) {
    const task = model.tasks[index];
    if (model.tasks[index].isDone == false) {
    model.tasks[index].isDone = checkbox.checked;
    task.finnished = new Date("2019-02-13").toLocaleDateString();
    show();
} else {
model.tasks[index].isDone = "";
task.finnished= "";
show();
}}

function deleteTask(index) {
    model.tasks.splice(index, 1);
    show();
}

function editTask(index) {
    model.tasks[index].editMode = true;
    show();
}

function updateTask(index) {
    const idDesc = `editDescription${index}`;
    const idName = `editName${index}`;
    const idDate = `editDate${index}`;
    const inputTag = document.getElementById(idDesc);
    const inputTagName = document.getElementById(idName);
    const inputTagDate = document.getElementById(idDate);
    const task = model.tasks[index];
    task.description = inputTag.value;
    task.name = inputTagName.value;
    task.date = inputTagDate.value;
    task.editMode = false;
    show();
}
