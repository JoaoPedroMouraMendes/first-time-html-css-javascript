let totalCard = 0;
let canMoveNote = false;
let creatingNote = false;
let currentDivClone;
let inputName = `<input type="text" name="note-name" id="note-name"><button id="send-name" onclick="setName(this)"><i class="fa-solid fa-arrow-right"></i></button>`;

function newCard(number) {
    return `
<div id='d${number}' class="note">
    <p id='${'p'+number}'>${inputName}</p>
    <div class="button-list">
        <button id="move-note" onclick="moveNote(this)"><i class="fa-solid fa-paper-plane"></i></button>
        <button id="rename-note" onclick="renameNote(this)"><i class="fa-solid fa-pen"></i></button>
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
    let input = document.querySelector(`#${list.id} input`);
    input.focus();

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
    let nome = document.getElementById('note-name').value;

    //Condições para não poder colocar um nome
    if (nome.length > 100) {
        alert('[ERRO] nome muito extenso');
        return;
    }

    parent.innerHTML = nome;
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
    newDiv.setAttribute('id', div.getAttribute('id'));
    newDiv.setAttribute('class', div.getAttribute('class'));
    newDiv.innerHTML = div.innerHTML;
    return newDiv;
}

function renameNote(button) {
    //Condição para não poder continuar essa função
    if (canMoveNote || creatingNote) return;

    let parent = button.parentNode;
    let note = parent.parentNode;

    creatingNote = true;

    let p = document.querySelector(`#${note.id} > p`);
    let currentName = p.innerHTML;
    p.innerHTML = inputName;
    let input = document.querySelector(`#${p.id} > input`);
    input.value = currentName;
    input.focus();
}