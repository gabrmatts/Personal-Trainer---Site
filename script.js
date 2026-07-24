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
    // Previne que a página role enquanto o menu está aberto
    document.body.style.overflow = 'hidden'; 
}

function fecharMenuMobile() {
    sidebar.classList.remove('active');
    overlay.classList.remove('active');
    // Retorna a rolagem normal da página
    document.body.style.overflow = 'auto';
}

// Eventos de clique para o Menu Mobile
btnMenuMobile.addEventListener('click', abrirMenuMobile);
btnCloseMenu.addEventListener('click', fecharMenuMobile);
overlay.addEventListener('click', fecharMenuMobile); // Fecha ao clicar fora do menu

// Interação no menu Glassmorphism ao rolar a página (Desktop & Mobile)
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