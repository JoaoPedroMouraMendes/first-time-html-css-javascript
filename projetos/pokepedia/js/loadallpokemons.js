var pokemonList = document.getElementById('pokemon-list');
var cardCount = 1;

async function fetchPokemon(pokemon) {
    const APIResponse = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`)

    if (APIResponse.status === 404) return 'error'

    return APIResponse.json();
}

async function createNewCard(pokemon) {
    const data = await fetchPokemon(pokemon);

    //Verificação de erro
    if (data === 'error') return;

    let card = document.createElement('div');
    card.setAttribute('id', `card${cardCount}`);
    card.setAttribute('class', 'pokemon-card');

    let secondElement;

    if (data['types'].length == 2) secondElement = data['types'][1]['type']['name'];
    else secondElement = '';

    //Tudo o conteúdo da carta
    card.innerHTML = `
    <div class="pokemon-header">
        <img src="${data['sprites']['front_default']}" alt="pokemon">
        <span translate="no">${data['name']}-${data['id']}</span>
    </div>
    <div class="element-list">
        <span class="element1" translate="no">${data['types'][0]['type']['name']}</span>
        <span class="element2" translate="no">${secondElement}</span>
    </div>`;

    let elementList = card.children[1];
    paintElements(elementList.children[0].innerHTML, elementList.children[0]);
    paintElements(elementList.children[1].innerHTML, elementList.children[1]);

    pokemonList.appendChild(card);
}

function paintElements(element, id) {
    switch(element) {
        case 'normal':
            id.style.backgroundColor = 'gray';
        break;
        case 'fire':
            id.style.backgroundColor = '#FA3937';
        break;
        case 'water':
            id.style.backgroundColor = '#4EDED4';
        break;
        case 'electric':
            id.style.backgroundColor = '#FAC249';
        break;
        case 'grass':
            id.style.backgroundColor = '#2FDE5B';
        break;
        case 'ice':
            id.style.backgroundColor = '#82D2F5';
        break;
        case 'fighting':
            id.style.backgroundColor = '#F54269';
        break;
        case 'poison':
            id.style.backgroundColor = '#A732FA';
        break;
        case 'ground':
            id.style.backgroundColor = '#F5621C';
        break;
        case 'flying':
            id.style.backgroundColor = '#B6BBDE';
        break;
        case 'psychic':
            id.style.backgroundColor = '#F552C2';
        break;
        case 'bug':
            id.style.backgroundColor = '#60F52B';
        break;
        case 'rock':
            id.style.backgroundColor = '#DEAE50';
        break;
        case 'ghost':
            id.style.backgroundColor = '#B285FA'
        break;
        case 'dragon':
            id.style.backgroundColor = '#3E83DE';
        break;
        case 'dark':
            id.style.backgroundColor = '#8946FA';
        break;
        case 'steel':
            id.style.backgroundColor = '#8089FA';
        break;
        case 'fairy':
            id.style.backgroundColor = '#E179F5';
        break;
        default:
            id.style.backgroundColor = 'transparent';
        break;
    }
}

async function renderAllPokemons() {
    //Pegando a quantidade de todos os pokemons
    const APIPokedex = await fetch('https://pokeapi.co/api/v2/pokedex/1');
    const data = await APIPokedex.json();
    const allPokemons = data['pokemon_entries'].length;

    //Instanciar todas as cartas
    for (let index = 0; index < allPokemons; index++) {
        await createNewCard(index);
    }
}

renderAllPokemons();