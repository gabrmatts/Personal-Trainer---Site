// Função para o novo botão "Conhecer Planos"
function conhecerPlanos() {
    console.log("Redirecionando para as opções de planos...");
    alert("Direcionando para a seção de Planos!");
    fecharMenuMobile(); // Fecha o menu lateral caso o usuário clique pelo celular
}

// Função do botão principal
function comecarTransformacao() {
    console.log("Iniciando fluxo principal...");
    alert("Vamos começar a sua transformação hoje!");
}

// LÓGICA DO MENU LATERAL (MOBILE)
const btnMenuMobile = document.getElementById('mobile-menu-btn');
const btnCloseMenu = document.getElementById('close-menu-btn');
const sidebar = document.getElementById('sidebar');
const overlay = document.getElementById('sidebar-overlay');

function abrirMenuMobile() {
    sidebar.classList.add('active');
    overlay.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function fecharMenuMobile() {
    sidebar.classList.remove('active');
    overlay.classList.remove('active');
    document.body.style.overflow = 'auto';
}

btnMenuMobile.addEventListener('click', abrirMenuMobile);
btnCloseMenu.addEventListener('click', fecharMenuMobile);
overlay.addEventListener('click', fecharMenuMobile);

// Interação no menu Glassmorphism ao rolar a página
window.addEventListener('scroll', () => {
    const header = document.getElementById('main-header');

    if (window.scrollY > 50) {
        header.style.background = 'rgba(10, 10, 10, 0.85)';
        header.style.borderBottom = '1px solid rgba(255, 255, 255, 0.2)';
    } else {
        header.style.background = 'rgba(20, 20, 20, 0.4)';
        header.style.borderBottom = '1px solid rgba(255, 255, 255, 0.1)';
    }
});

// SCROLL REVEAL (novo) - anima elementos .reveal-left / .reveal-right ao entrarem na tela
const revealEls = document.querySelectorAll('.reveal-left, .reveal-right');

if (revealEls.length) {
    const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add('in-view');
                revealObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.2 });

    revealEls.forEach((el) => revealObserver.observe(el));
}

// CARROSSEL DE RESULTADOS (novo)
const track = document.getElementById('resultadosTrack');
const prevBtn = document.getElementById('carouselPrev');
const nextBtn = document.getElementById('carouselNext');
const dotsWrap = document.getElementById('carouselDots');

if (track && prevBtn && nextBtn && dotsWrap) {
    const cards = track.querySelectorAll('.resultado-card');

    // Cria os dots dinamicamente
    cards.forEach((_, i) => {
        const dot = document.createElement('div');
        dot.classList.add('carousel-dot');
        if (i === 0) dot.classList.add('active');
        dot.addEventListener('click', () => {
            cards[i].scrollIntoView({ behavior: 'smooth', inline: 'start', block: 'nearest' });
        });
        dotsWrap.appendChild(dot);
    });

    const dots = dotsWrap.querySelectorAll('.carousel-dot');

    function scrollByCard(direction) {
        const cardWidth = cards[0].getBoundingClientRect().width + 26; // gap
        track.scrollBy({ left: direction * cardWidth, behavior: 'smooth' });
    }

    prevBtn.addEventListener('click', () => scrollByCard(-1));
    nextBtn.addEventListener('click', () => scrollByCard(1));

    // Atualiza o dot ativo conforme o scroll
    track.addEventListener('scroll', () => {
        const scrollLeft = track.scrollLeft;
        let closestIndex = 0;
        let closestDistance = Infinity;

        cards.forEach((card, i) => {
            const distance = Math.abs(card.offsetLeft - scrollLeft);
            if (distance < closestDistance) {
                closestDistance = distance;
                closestIndex = i;
            }
        });

        dots.forEach((dot, i) => dot.classList.toggle('active', i === closestIndex));
    });
}

// ACCORDION DE FAQ (novo)
const faqItems = document.querySelectorAll('.faq-item');

faqItems.forEach((item) => {
    const pergunta = item.querySelector('.faq-pergunta');
    const resposta = item.querySelector('.faq-resposta');

    pergunta.addEventListener('click', () => {
        const jaAberto = item.classList.contains('active');

        // Fecha os outros itens abertos
        faqItems.forEach((outro) => {
            outro.classList.remove('active');
            outro.querySelector('.faq-resposta').style.maxHeight = null;
        });

        if (!jaAberto) {
            item.classList.add('active');
            resposta.style.maxHeight = resposta.scrollHeight + 'px';
        }
    });
});