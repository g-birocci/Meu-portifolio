// Navegação suave
const navLinks = document.querySelectorAll('.nav-links a');
navLinks.forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            window.scrollTo({
                top: target.offsetTop - 70,
                behavior: 'smooth'
            });
        }
    });
});

// Animação de destaque no menu ao rolar
const sections = document.querySelectorAll('.section');
window.addEventListener('scroll', () => {
    let current = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop - 80;
        if (pageYOffset >= sectionTop) {
            current = section.getAttribute('id');
        }
    });
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
});

// Animação ao aparecer na tela
const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        }
    });
}, { threshold: 0.15 });

document.querySelectorAll('.section, .project-card, .timeline li').forEach(el => {
    observer.observe(el);
});

// Efeito visual para links ativos
const style = document.createElement('style');
style.innerHTML = `.nav-links a.active { color: var(--accent); } .show { opacity: 1 !important; transform: none !important; transition: all 0.7s cubic-bezier(.77,0,.18,1); } .section, .project-card, .timeline li { opacity: 0; transform: translateY(40px); }`;
document.head.appendChild(style);

// Menu mobile
const menuToggle = document.querySelector('.menu-toggle');
const navLinksList = document.querySelector('.nav-links');

menuToggle.addEventListener('click', () => {
    navLinksList.classList.toggle('open');
    menuToggle.classList.toggle('open');
});

// Fechar menu ao clicar em um link (mobile)
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        navLinksList.classList.remove('open');
        menuToggle.classList.remove('open');
    });
});

//verefica por que com o link não funciona.

//Inverte o idioma.

document.getElementById('link-pt').addEventListener('click', function(e) {
  e.preventDefault();
  window.location.href = 'index.html';  // link para a página em PT
});

document.getElementById('link-en').addEventListener('click', function(e) {
  e.preventDefault();
  window.location.href = 'index-en.html';  // link para a página em EN
});
