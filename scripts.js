// Navegação suave ao clicar nos links do menu
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        window.scrollTo({
            top: target.offsetTop - 70, // Compensar altura do header fixo
            behavior: 'smooth'
        });
    });
});

// Modal para abrir imagens da galeria
const modal = document.getElementById("imageModal");
const modalImg = document.getElementById("imgModal");
const captionText = document.getElementById("caption");

document.querySelectorAll('.img-clickable').forEach(image => {
    image.addEventListener('click', function() {
        modal.style.display = "block";
        modalImg.src = this.src;
        captionText.innerHTML = this.alt;
    });
});

// Fechar o modal
document.querySelector(".close").addEventListener('click', function() {
    modal.style.display = "none";
});



// Alternância de tema (claro/escuro)
const themeIcon = document.getElementById('theme-icon');
const body = document.body;

themeIcon.addEventListener('click', () => {
    body.classList.toggle('dark-theme');

    if (body.classList.contains('dark-theme')) {
        themeIcon.textContent = 'light_mode'; // Ícone de sol para o tema claro
    } else {
        themeIcon.textContent = 'dark_mode';  // Ícone de lua para o tema escuro
    }
});


// Alternância do menu em telas pequenas
const navToggle = document.createElement('span');
navToggle.className = 'material-icons';
navToggle.textContent = 'menu'; // Ícone do menu
navToggle.style.cursor = 'pointer';

document.querySelector('nav .container').appendChild(navToggle);

navToggle.addEventListener('click', () => {
    const navLinks = document.querySelector('nav ul');
    navLinks.classList.toggle('show');
});

// Alternância de tema
themeIcon.addEventListener('click', () => {
    body.classList.toggle('dark-theme');

    if (body.classList.contains('dark-theme')) {
        themeIcon.textContent = 'light_mode'; // Ícone de sol para o tema claro
    } else {
        themeIcon.textContent = 'dark_mode';  // Ícone de lua para o tema escuro
    }
});


// Espera que todos os recursos da página sejam completamente carregados
window.addEventListener('load', () => {
    // Aplica a classe 'fade-in' ao corpo do site para animar a entrada
    document.querySelector('main').classList.add('fade-in');
});

let currentSlide = 0;

function changeSlide(direction) {
    const slides = document.querySelectorAll('.carousel-inner img');
    slides[currentSlide].classList.remove('active');

    currentSlide = (currentSlide + direction + slides.length) % slides.length;
    slides[currentSlide].classList.add('active');

    const offset = -currentSlide * 100; // Altera o offset para a nova posição
    document.querySelector('.carousel-inner').style.transform = `translateX(${offset}%)`;
}

// Inicializa o carrossel
document.addEventListener('DOMContentLoaded', () => {
    const slides = document.querySelectorAll('.carousel-inner img');
    slides.forEach((slide, index) => {
        if (index !== currentSlide) {
            slide.classList.remove('active');
        }
    });
});

