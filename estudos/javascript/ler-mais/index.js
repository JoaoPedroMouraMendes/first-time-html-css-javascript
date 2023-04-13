document.addEventListener('click', (event) => {

    if (!event.target.classList.contains('read-more')) return;

    const currentCard = event.target.parentElement;
    const text = currentCard.querySelector('p');
    const readMoreButton = currentCard.querySelector('button');

    text.classList.toggle('hide-text');

    if (text.classList.contains('hide-text'))
        readMoreButton.innerText = 'Ler mais';
    else 
        readMoreButton.innerText = 'Ler menos';
});