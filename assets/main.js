var nav = document.querySelector('.nav-menu');
nav.addEventListener('click', function(event) {
    if (event.target.id == 'burger') {
        nav.classList.toggle('show');
    }
    if (event.target.hash) {
        nav.classList.remove('show');
    }
});
