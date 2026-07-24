/* ==========================================================================
   VOLT PERFORMANCE — main.js
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {
  initLogo();
  renderStats();
  renderBenefits();
  renderProcess();
  renderPrograms();
  renderGallery();
  renderTestimonials();
  renderFeatures();
  renderPlans();
  renderFaq();

  initNavbar();
  initMobileMenu();
  initAOS();
  initCounters();
  initGalleryFilter();
  initGalleryModal();
  initFaqAccordion();
  initSwiper();
  initRipple();
  initHeroParallax();
});

/* ---------------- Logo (image with automatic text fallback) ---------------- */

function initLogo() {
  const brand = (typeof VOLT_DATA !== 'undefined' && VOLT_DATA.brand) || {};
  if (!brand.logoImage) return;

  const testImg = new Image();
  testImg.onload = () => {
    document.querySelectorAll('[data-logo-slot]').forEach(slot => {
      slot.innerHTML = `<img src="${brand.logoImage}" alt="${brand.name || 'Volt'} ${brand.suffix || 'Performance'} logo" class="logo-img">`;
    });
  };
  testImg.onerror = () => {
    /* arquivo não encontrado — mantém o logotipo em texto (ícone + nome) */
  };
  testImg.src = brand.logoImage;
}

/* ---------------- Renderers ---------------- */

function renderStats() {
  const el = document.getElementById('stats-grid');
  el.innerHTML = VOLT_DATA.stats.map((s, i) => `
    <div class="stat-card" data-aos="fade-up" data-aos-delay="${i * 80}">
      <i class="${s.icon}" aria-hidden="true"></i>
      <div class="num"><span data-counter="${s.value}" data-suffix="${s.suffix}">0</span></div>
      <div class="label">${s.label}</div>
    </div>
  `).join('');
}

function renderBenefits() {
  const el = document.getElementById('benefits-grid');
  el.innerHTML = VOLT_DATA.benefits.map((b, i) => `
    <div class="benefit-card" data-aos="fade-up" data-aos-delay="${(i % 3) * 90}">
      <div class="icon-wrap"><i class="${b.icon}" aria-hidden="true"></i></div>
      <h3>${b.title}</h3>
      <p>${b.text}</p>
    </div>
  `).join('');
}

function renderProcess() {
  const el = document.getElementById('process-track');
  el.innerHTML = VOLT_DATA.process.map((p, i) => `
    <div class="process-card" data-aos="fade-up" data-aos-delay="${i * 100}">
      <div class="process-num">${p.step}</div>
      <h3>${p.title}</h3>
      <p>${p.text}</p>
    </div>
  `).join('');
}

function renderPrograms() {
  const el = document.getElementById('programs-grid');
  el.innerHTML = VOLT_DATA.programs.map((p, i) => `
    <div class="program-card" data-aos="fade-up" data-aos-delay="${(i % 3) * 90}">
      <div class="program-media">
        <img src="${p.image}" alt="Programa de treino: ${p.title}" loading="lazy">
        <div class="program-tags"><span class="tag">${p.level}</span></div>
      </div>
      <div class="program-body">
        <h3>${p.title}</h3>
        <p>${p.desc}</p>
        <div class="program-footer">
          <span style="font-size:13px; color:var(--c-muted);"><i class="fa-regular fa-clock" aria-hidden="true"></i> ${p.duration}</span>
          <a href="#planos" class="link">Ver programa <i class="fa-solid fa-arrow-right" aria-hidden="true"></i></a>
        </div>
      </div>
    </div>
  `).join('');
}

function renderGallery() {
  const filterEl = document.getElementById('filter-bar');
  const categories = ['todos', ...new Set(VOLT_DATA.transformations.map(t => t.category))];
  const labels = {
    todos: 'Todos', hipertrofia: 'Hipertrofia', emagrecimento: 'Emagrecimento',
    definicao: 'Definição', condicionamento: 'Condicionamento', feminino: 'Feminino', masculino: 'Masculino'
  };
  filterEl.innerHTML = categories.map((c, i) =>
    `<button class="filter-btn ${i === 0 ? 'active' : ''}" data-filter="${c}" role="tab" aria-selected="${i === 0}">${labels[c] || c}</button>`
  ).join('');

  const galleryEl = document.getElementById('gallery-grid');
  galleryEl.innerHTML = VOLT_DATA.transformations.map((t, i) => `
    <div class="gallery-item" data-category="${t.category}" data-name="${t.name}" data-result="${t.result}" data-image="${t.image}"
         data-aos="zoom-in" data-aos-delay="${(i % 3) * 90}" tabindex="0" role="button" aria-label="Ver transformação de ${t.name}">
      <img src="${t.image}" alt="Transformação física de ${t.name}, categoria ${t.category}" loading="lazy">
      <div class="gallery-overlay">
        <strong>${t.name}</strong>
        <span>${t.result}</span>
      </div>
    </div>
  `).join('');
}

function renderTestimonials() {
  const el = document.getElementById('testimonials-wrapper');
  el.innerHTML = VOLT_DATA.testimonials.map(t => `
    <div class="swiper-slide">
      <div class="testimonial-card">
        <div class="testimonial-top">
          <img src="${t.photo}" alt="Foto de ${t.name}" loading="lazy">
          <div>
            <strong>${t.name}</strong>
            <span>${t.goal}</span>
          </div>
        </div>
        <div class="stars" aria-label="${t.rating} de 5 estrelas">${'★'.repeat(t.rating)}${'☆'.repeat(5 - t.rating)}</div>
        <p>"${t.text}"</p>
      </div>
    </div>
  `).join('');
}

function renderFeatures() {
  const el = document.getElementById('features-grid');
  el.innerHTML = VOLT_DATA.featureCards.map((f, i) => `
    <div class="feature-card" data-aos="fade-up" data-aos-delay="${(i % 4) * 80}">
      <i class="${f.icon}" aria-hidden="true"></i>
      <h4>${f.title}</h4>
      <p>${f.text}</p>
    </div>
  `).join('');
}

function renderPlans() {
  const el = document.getElementById('plans-grid');
  el.innerHTML = VOLT_DATA.plans.map((p, i) => `
    <div class="plan-card ${p.recommended ? 'featured' : ''}" data-aos="fade-up" data-aos-delay="${i * 100}">
      ${p.recommended ? '<span class="plan-badge">Mais escolhido</span>' : ''}
      <div class="plan-name">${p.name}</div>
      <div class="plan-price">
        <span class="currency">R$</span>
        <span class="amount">${p.price}</span>
        <span class="period">${p.period}</span>
      </div>
      <ul class="plan-features">
        ${p.features.map(f => `<li><i class="fa-solid fa-circle-check" aria-hidden="true"></i> ${f}</li>`).join('')}
      </ul>
      <a href="#faq" class="btn ${p.recommended ? 'btn-primary' : 'btn-outline'} btn-block">Assinar ${p.name}</a>
    </div>
  `).join('');
}

function renderFaq() {
  const el = document.getElementById('faq-list');
  el.innerHTML = VOLT_DATA.faq.map((f, i) => `
    <div class="faq-item" data-aos="fade-up" data-aos-delay="${i * 60}">
      <button class="faq-question" aria-expanded="false">
        <span>${f.q}</span>
        <i class="fa-solid fa-plus" aria-hidden="true"></i>
      </button>
      <div class="faq-answer"><p>${f.a}</p></div>
    </div>
  `).join('');
}

/* ---------------- Interactions ---------------- */

function initNavbar() {
  const nav = document.getElementById('navbar');
  const onScroll = () => nav.classList.toggle('scrolled', window.scrollY > 40);
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();
}

function initMobileMenu() {
  const btn = document.getElementById('hamburger');
  const menu = document.getElementById('mobile-menu');
  const toggle = (open) => {
    const isOpen = open ?? !menu.classList.contains('open');
    menu.classList.toggle('open', isOpen);
    btn.classList.toggle('active', isOpen);
    btn.setAttribute('aria-expanded', isOpen);
    document.body.style.overflow = isOpen ? 'hidden' : '';
  };
  btn.addEventListener('click', () => toggle());
  menu.querySelectorAll('a').forEach(a => a.addEventListener('click', () => toggle(false)));
}

function initAOS() {
  if (window.AOS) {
    AOS.init({ duration: 700, once: true, offset: 60, easing: 'ease-out-cubic' });
  }
}

function initCounters() {
  const counters = document.querySelectorAll('[data-counter]');
  const animate = (el) => {
    const target = parseFloat(el.getAttribute('data-counter'));
    const suffix = el.getAttribute('data-suffix') || '';
    const duration = 1600;
    const start = performance.now();
    const step = (now) => {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      const value = Math.floor(eased * target);
      el.textContent = value.toLocaleString('pt-BR') + suffix;
      if (progress < 1) requestAnimationFrame(step);
      else el.textContent = target.toLocaleString('pt-BR') + suffix;
    };
    requestAnimationFrame(step);
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        animate(entry.target);
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.5 });

  counters.forEach(c => observer.observe(c));
}

function initGalleryFilter() {
  const buttons = document.querySelectorAll('.filter-btn');
  const items = document.querySelectorAll('.gallery-item');
  buttons.forEach(btn => {
    btn.addEventListener('click', () => {
      buttons.forEach(b => { b.classList.remove('active'); b.setAttribute('aria-selected', 'false'); });
      btn.classList.add('active');
      btn.setAttribute('aria-selected', 'true');
      const filter = btn.getAttribute('data-filter');
      items.forEach(item => {
        const match = filter === 'todos' || item.getAttribute('data-category') === filter;
        item.classList.toggle('hidden', !match);
      });
    });
  });
}

function initGalleryModal() {
  const modal = document.getElementById('gallery-modal');
  const modalImg = document.getElementById('modal-img');
  const modalName = document.getElementById('modal-name');
  const modalResult = document.getElementById('modal-result');
  const closeBtn = document.getElementById('modal-close');

  const openModal = (item) => {
    modalImg.src = item.getAttribute('data-image');
    modalImg.alt = 'Transformação de ' + item.getAttribute('data-name');
    modalName.textContent = item.getAttribute('data-name');
    modalResult.textContent = item.getAttribute('data-result');
    modal.classList.add('open');
    document.body.style.overflow = 'hidden';
    closeBtn.focus();
  };
  const closeModal = () => {
    modal.classList.remove('open');
    document.body.style.overflow = '';
  };

  document.getElementById('gallery-grid').addEventListener('click', (e) => {
    const item = e.target.closest('.gallery-item');
    if (item) openModal(item);
  });
  document.getElementById('gallery-grid').addEventListener('keydown', (e) => {
    if ((e.key === 'Enter' || e.key === ' ') && e.target.classList.contains('gallery-item')) {
      e.preventDefault();
      openModal(e.target);
    }
  });
  closeBtn.addEventListener('click', closeModal);
  modal.addEventListener('click', (e) => { if (e.target === modal) closeModal(); });
  document.addEventListener('keydown', (e) => { if (e.key === 'Escape') closeModal(); });
}

function initFaqAccordion() {
  const items = document.querySelectorAll('.faq-item');
  items.forEach(item => {
    const question = item.querySelector('.faq-question');
    const answer = item.querySelector('.faq-answer');
    question.addEventListener('click', () => {
      const isOpen = item.classList.contains('open');
      items.forEach(i => {
        i.classList.remove('open');
        i.querySelector('.faq-question').setAttribute('aria-expanded', 'false');
        i.querySelector('.faq-answer').style.maxHeight = null;
      });
      if (!isOpen) {
        item.classList.add('open');
        question.setAttribute('aria-expanded', 'true');
        answer.style.maxHeight = answer.scrollHeight + 'px';
      }
    });
  });
}

function initSwiper() {
  if (window.Swiper) {
    new Swiper('.testimonials-swiper', {
      slidesPerView: 1,
      spaceBetween: 24,
      loop: true,
      pagination: { el: '.swiper-pagination', clickable: true },
      navigation: { nextEl: '.swiper-button-next', prevEl: '.swiper-button-prev' },
      breakpoints: {
        720: { slidesPerView: 2 },
        1100: { slidesPerView: 3 }
      }
    });
  }
}

function initRipple() {
  document.querySelectorAll('.btn').forEach(btn => {
    btn.addEventListener('click', function (e) {
      const rect = this.getBoundingClientRect();
      const ripple = document.createElement('span');
      const size = Math.max(rect.width, rect.height);
      ripple.className = 'ripple';
      ripple.style.width = ripple.style.height = size + 'px';
      ripple.style.left = (e.clientX - rect.left - size / 2) + 'px';
      ripple.style.top = (e.clientY - rect.top - size / 2) + 'px';
      this.style.position = 'relative';
      this.appendChild(ripple);
      setTimeout(() => ripple.remove(), 650);
    });
  });
}

function initHeroParallax() {
  if (!window.gsap) return;
  gsap.to('.hero-image-wrap img', {
    yPercent: 8,
    ease: 'none',
    scrollTrigger: {
      trigger: '.hero',
      start: 'top top',
      end: 'bottom top',
      scrub: true
    }
  });
  gsap.fromTo('.hero-decor-ring', { rotate: 0 }, {
    rotate: 90,
    scrollTrigger: { trigger: '.hero', start: 'top top', end: 'bottom top', scrub: true }
  });
}