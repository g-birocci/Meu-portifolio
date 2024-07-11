let menuLink = document.querySelectorAll('nav > a');

menuLink.forEach((item) => {
    item.addEventListener('click', menuTop);
});

function menuTop(event) {
    event.preventDefault();

    let id = event.currentTarget.getAttribute('href');
    let alturaMenu = document.querySelector('nav').offsetHeight;
    let distanciaTopo = document.querySelector[id].offsetTop - alturaMenu;

    window.scrollTo({
        top: distanciaTopo,
        behavior: 'smooth'
    });
}

const btnMob = document.getElementById('btn-mob');

function toggleMenu(event){
  if (event.type === 'touchstart') event.preventDefault();
  const nav = document.getElementById('nav');
  nav.classList.toggle('active');
  const active = nav.classList.contains('active');
  event.currentTarget.setAttribute('aria-expanded', active);
  if (active) {
    event.currentTarget.setAttribute('aria-label', 'Fechar Menu');
  } else {
    event.currentTarget.setAttribute('aria-label', 'Abrir Menu');
  }
}

btnMob.addEventListener('click', toggleMenu);
btnMob.addEventListener('touchstart', toggleMenu);
