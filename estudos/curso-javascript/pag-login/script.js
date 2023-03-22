var icon = document.getElementById('mode-icon');

icon.addEventListener('click', () => {
    const body = document.querySelector('body');

    if (icon.classList.contains('fa-sun')) {
        icon.classList.remove('fa-sun');
        icon.classList.add('fa-moon');
        body.classList.add('light');
    } else {
        icon.classList.remove('fa-moon');
        icon.classList.add('fa-sun');
        body.classList.remove('light');
    }
});