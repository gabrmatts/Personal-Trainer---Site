// Função para o novo botão "Conhecer Planos"
function conhecerPlanos() {
    console.log("Redirecionando para as opções de planos...");
    alert("Direcionando para a seção de Planos!");
}

// Função do botão principal
function comecarTransformacao() {
    console.log("Iniciando fluxo de consultoria...");
    alert("Vamos começar sua consultoria hoje!");
}

// Interação no menu Glassmorphism ao rolar a página
window.addEventListener('scroll', () => {
    const header = document.getElementById('main-header');

    if (window.scrollY > 50) {
        header.style.background = 'rgba(10, 10, 10, 0.85)';
        header.style.borderBottom = '1px solid rgba(255, 255, 255, 0.2)';
        header.style.boxShadow = '0 8px 24px rgba(0, 0, 0, 0.35)';
    } else {
        header.style.background = 'rgba(20, 20, 20, 0.4)';
        header.style.borderBottom = '1px solid rgba(255, 255, 255, 0.1)';
        header.style.boxShadow = 'none';
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

// =====================================================
// NAVEGAÇÃO MODERNA: indicador ativo, header inteligente,
// barra de progresso e botão voltar ao topo
// =====================================================
const navLinksDesktop = document.querySelectorAll('#navMenu a[data-nav]');
const navLinksMobile = document.querySelectorAll('.mobile-bottom-nav a[data-nav]');
const navIndicator = document.getElementById('navIndicator');
const sections = document.querySelectorAll('#inicio, #historia, #resultados, #planos, #duvidas');
const scrollProgress = document.getElementById('scrollProgress');
const backToTop = document.getElementById('backToTop');

function moverIndicador(link) {
    if (!navIndicator || !link) return;
    navIndicator.style.width = link.offsetWidth + 'px';
    navIndicator.style.transform = `translateX(${link.offsetLeft - 5}px)`;
}

function definirLinkAtivo(id) {
    navLinksDesktop.forEach((a) => {
        const ativo = a.dataset.nav === id;
        a.classList.toggle('active', ativo);
        if (ativo) moverIndicador(a);
    });
    navLinksMobile.forEach((a) => a.classList.toggle('active', a.dataset.nav === id));
}

// Observa qual seção está em foco na tela para ativar o link correspondente
if (sections.length) {
    const navObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                definirLinkAtivo(entry.target.id);
            }
        });
    }, { rootMargin: '-40% 0px -50% 0px', threshold: 0 });

    sections.forEach((sec) => navObserver.observe(sec));
}

// Posiciona o indicador corretamente após o carregamento das fontes/layout
window.addEventListener('load', () => {
    const ativoInicial = document.querySelector('#navMenu a.active') || navLinksDesktop[0];
    moverIndicador(ativoInicial);
});

window.addEventListener('resize', () => {
    const ativoAtual = document.querySelector('#navMenu a.active');
    if (ativoAtual) moverIndicador(ativoAtual);
});

let ultimoScroll = 0;

window.addEventListener('scroll', () => {
    const scrollY = window.scrollY;
    const alturaTotal = document.documentElement.scrollHeight - window.innerHeight;

    // Barra de progresso de leitura
    if (scrollProgress && alturaTotal > 0) {
        scrollProgress.style.width = `${(scrollY / alturaTotal) * 100}%`;
    }

    ultimoScroll = scrollY;

    // Botão voltar ao topo
    if (backToTop) {
        backToTop.classList.toggle('visible', scrollY > 600);
    }
});

if (backToTop) {
    backToTop.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
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

// RODAPÉ: ano atual dinâmico
const footerAno = document.getElementById('footerAno');
if (footerAno) {
    footerAno.textContent = new Date().getFullYear();
}