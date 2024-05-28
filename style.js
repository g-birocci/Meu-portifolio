let menuLink = document.querySelectorAll('nav > a');

menuLink.forEach((item) => {
    item.addEventListener('click', menuTop);
});

function menuTop(event) {
    event.preventDefault();

    let id = event.currentTarget.getAttribute('href');
    let alturaMenu = document.querySelector('nav').offsetHeight;
    let distanciaTopo = document.querySelector(id).offsetTop - alturaMenu;

    window.scrollTo({
        top: distanciaTopo,
        behavior: 'smooth'
    });
}
