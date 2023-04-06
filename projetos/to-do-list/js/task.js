var currentTaskId = 0;
var allTasks = [];

//Classe de uma tarefa
class task {
    contentHTML;
    taskId;
    taskClass;

    taskChecked = false;

    constructor(contentHTML, taskId, taskClass) {
        this.contentHTML = contentHTML;
        this.taskId = taskId;
        this.taskClass = taskClass;
    }
}

//Carrega a tarefa
function loadTask(taskId, taskClass, contentHTML, taskChecked) {
    //Recria a tarefa
    const task = document.createElement('div');
    task.setAttribute('id', taskId);
    task.setAttribute('class', taskClass);
    task.innerHTML = contentHTML;

    //Verifica se ela já tinha sido finalizada
    const input = task.getElementsByTagName('input')[0];
    if (taskChecked) input.checked = true;
    else input.checked = false;

    //Efeito para aparecer a opção de excluir a tarefa
    task.setAttribute('onmouseover', 'showIcon(this)');
    task.setAttribute('onmouseout', 'hideIcon(this)');

    return task;
}

//Gerador de id
const generatTaskId = () => {
    const id = `task${currentTaskId}`;
    currentTaskId++;
    return id;
};

//Cria uma nova tarefa
function newTask(content, parent) {
    //Estrutura de uma tarefa
    const contentHTML = 
    `<div>
        <input type="checkbox" name="finished-task" class="finished-task">
        <span class="task-name" translate="no">
            ${content}
        </span>
    </div>
    <div class="button-list">
        <i class="fa-solid fa-trash delete-task" onclick="deleteTask(this)"></i>
    </div>`

    //Cria um id
    const taskId = generatTaskId();
    //Classe da tarefa
    const taskClass = 'task';

    //Cria a tarefa
    const currentTask = document.createElement('div');
    currentTask.setAttribute('class', taskClass);
    currentTask.setAttribute('id', taskId);
    //Efeito para aparecer a opção de excluir a tarefa
    currentTask.setAttribute('onmouseover', 'showIcon(this)');
    currentTask.setAttribute('onmouseout', 'hideIcon(this)');
    //Conteúdo da tarefa
    currentTask.innerHTML = contentHTML;

    //Salva a tarefa em um array
    allTasks.push(new task(contentHTML, taskId, taskClass));

    //Adiciona a nova tarefa na página
    parent.appendChild(currentTask);

    //Evento para verificar se a tarefa já foi finalizada
    const taskCreated = document.querySelector(`#${taskId} .finished-task`);
    const currentIndex = allTasks.length -1;
    setEventsOnLoad(currentIndex, taskId);

    //Salva a nova tarefa
    saveAllTasks();
}

//Responsável por deletar a tarefa
function deleteTask(button) {
    //Pegando o pai para excluí lo
    const task = button.parentElement.parentElement;

    //Retira a tarefa do array
    allTasks.map((array, index) => {
        if (array.taskId === task.id) {
            allTasks.splice(index, 1);
        }
    });

    //Remove a tarefa no HTML
    task.remove();

    //Salva essa alteração
    saveAllTasks();
}

function showIcon(task) {
    //Aparece o icone
    const icon = document.querySelector(`#${task.id} i`);
    icon.classList.add('show');
}

function hideIcon(task) {
    //Desaparece o icone
    const icon = document.querySelector(`#${task.id} i`);
    icon.classList.remove('show');
}

function saveAllTasks() {
    localStorage.tasks = JSON.stringify(allTasks);
    //Salva o id atual tbm
    localStorage.setItem('currentId', currentTaskId);
}

function loadAllTasks(taskParent) {
    //Se ainda não existir nenhum save das tarefas
    if (!localStorage.tasks || !localStorage.currentId) return;

    allTasks = JSON.parse(localStorage.getItem('tasks'));
    currentTaskId = localStorage.getItem('currentId');

    //Reseta a variável currentTaskId se o array de tarefas estiver vazio
    if (allTasks.length === 0) currentTaskId = 0;

    spawnAllTasks(taskParent);
}

function spawnAllTasks(taskParent) {
    allTasks.map((array, index) => {
        taskParent.appendChild(loadTask(array.taskId, array.taskClass, array.contentHTML, array.taskChecked));
        //Setar os eventos
        setEventsOnLoad(index, array.taskId);
    });
}

function setEventsOnLoad(index, taskId) {
    //Evento para verificar se a tarefa já foi finalizada
    const taskCreated = document.querySelector(`#${taskId} .finished-task`);
    taskCreated.addEventListener('input', (event) => {
        if (event.target.checked) {
            allTasks[index].taskChecked = true;
        } else {
            allTasks[index].taskChecked = false;
        }
        //Salva a alteração
        saveAllTasks();
        console.log(allTasks);
    });
}