let totalCard = 0;
let canMoveNote = false;
let creatingNote = false;
let currentDivClone;

function newCard(number) {
    return `
<div id='${number}' class="note">
    <p id='${'p'+number}'><input type="text" name="note-name" id="note-name"><button id="send-name" onclick="setName(this)"><i class="fa-solid fa-arrow-right"></i></button></p>
    <div class="button-list">
        <button id="move-note" onclick="moveNote(this)"><i class="fa-solid fa-paper-plane"></i></button>
        <button id="rename-note"><i class="fa-solid fa-pen"></i></button>
        <button id="delete-note" onclick="deleteCard(this)"><i class="fa-regular fa-circle-xmark"></i></button>
    </div>
</div>`;
}

function addCard(button) {
    //Condição para não poder continuar essa função
    if (canMoveNote || creatingNote) return;
    //Dizendo que está criando uma nota
    creatingNote = true;
    //Pegando a lista desejada
    let parent = button.parentNode;
    let list = document.querySelector(`#${parent.id} > div`);
    //Adicionando um novo card a lista
    list.innerHTML += newCard(totalCard);
    //Pegando referencias do novo card
    let newCardDiv = document.getElementById(totalCard);
    let newCardP = document.getElementById(`p${totalCard}`);

    totalCard++;
}

function deleteCard(button) {
    //Condição para não poder continuar essa função
    if (canMoveNote || creatingNote) return;

    //Pegando a lista desejada
    let parent = button.parentNode;
    let note = parent.parentNode;
    let list = note.parentNode;
    //Removendo card
    list.removeChild(note);
}

function setName(button) {
    //Pegando o parent
    let parent = button.parentNode;
    let name = document.getElementById('note-name').value;

    parent.innerHTML = name;
    creatingNote = false;
}

function moveNote(button) {
    //Condição para não poder continuar essa função
    if (canMoveNote || creatingNote) return;

    //Pegando a nota
    let parent = button.parentNode;
    let note = parent.parentNode;
    //Criando um clone da nota
    currentDivClone = createCopyDiv(note);
    console.log(currentDivClone);

    //Alterando o visual das sections
    sectionsVisual();
    //Adiciona o vento de clicar em uma section
    setInterval(detectClick);

    note.parentNode.removeChild(note);

    canMoveNote = true;
}

function detectClick() {
    let blocks = document.getElementsByClassName('block');

    for (let index = 0; index < blocks.length; index++) {
        blocks[index].addEventListener("mousedown", function() {
            selectListToMove(this);
        });
    }
}

function sectionsVisual() {
    let blocks = document.getElementsByClassName('block');

    for (let index = 0; index < blocks.length; index++) {
        blocks[index].style.border = '3px solid yellow';
    }
}

function sectionsRemoveVisual() {
    let blocks = document.getElementsByClassName('block');

    for (let index = 0; index < blocks.length; index++) {
        blocks[index].style.border = 'none';
    }
}

function selectListToMove(section) {
    if (!canMoveNote) return;

    clearInterval(detectClick);
    sectionsRemoveVisual();

    let list = document.querySelector(`#${section.id} > div`);
    list.appendChild(currentDivClone);

    canMoveNote = false;
}

function createCopyDiv(div) {
    let newDiv = document.createElement('div');
    newDiv.setAttribute('class', div.getAttribute('class'));
    newDiv.innerHTML = div.innerHTML;
    return newDiv;
}