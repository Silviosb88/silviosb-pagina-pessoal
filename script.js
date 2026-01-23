// ===== NAVEGAÇÃO MOBILE =====
const navToggle = document.getElementById('nav-toggle');
const navMenu = document.getElementById('nav-menu');
const navClose = document.getElementById('nav-close');
const navLinks = document.querySelectorAll('.nav__link');

// Abrir menu mobile
if (navToggle) {
    navToggle.addEventListener('click', () => {
        navMenu.classList.add('show-menu');
        // Acessibilidade: mover foco para o menu
        navMenu.focus();
    });
}

// Fechar menu mobile
if (navClose) {
    navClose.addEventListener('click', () => {
        navMenu.classList.remove('show-menu');
    });
}

// Fechar menu ao clicar em um link
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('show-menu');
    });
});

// Fechar menu ao pressionar Escape
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && navMenu.classList.contains('show-menu')) {
        navMenu.classList.remove('show-menu');
    }
});

// ===== SCROLL SECTIONS ACTIVE LINK =====
const sections = document.querySelectorAll('section[id]');

function scrollActive() {
    const scrollY = window.pageYOffset;

    sections.forEach(current => {
        const sectionHeight = current.offsetHeight;
        const sectionTop = current.offsetTop - 100;
        const sectionId = current.getAttribute('id');
        const navLink = document.querySelector('.nav__link[href*=' + sectionId + ']');

        if (navLink) {
            if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
                navLink.classList.add('active-link');
            } else {
                navLink.classList.remove('active-link');
            }
        }
    });
}

window.addEventListener('scroll', scrollActive);

// ===== CHANGE BACKGROUND HEADER =====
function scrollHeader() {
    const header = document.getElementById('header');
    if (this.scrollY >= 50) {
        header.style.boxShadow = '0 2px 12px rgba(0, 0, 0, 0.15)';
    } else {
        header.style.boxShadow = '0 2px 8px rgba(0, 0, 0, 0.1)';
    }
}

window.addEventListener('scroll', scrollHeader);

// ===== SHOW SCROLL TOP =====
function scrollTop() {
    const scrollTop = document.getElementById('scroll-top');
    if (this.scrollY >= 560) {
        scrollTop.classList.add('show-scroll');
    } else {
        scrollTop.classList.remove('show-scroll');
    }
}

window.addEventListener('scroll', scrollTop);

// ===== SCROLL REVEAL ANIMATION =====
const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.1
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate-on-scroll');
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Observar elementos para animação
const animateElements = document.querySelectorAll('.about__card, .project__card, .blog__card, .links__category');
animateElements.forEach(el => observer.observe(el));

// ===== CONTACT FORM VALIDATION AND SUBMISSION =====
const contactForm = document.getElementById('contact-form');
const contactMessage = document.getElementById('contact-message-status');

if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Validação básica
        const name = document.getElementById('contact-name').value.trim();
        const email = document.getElementById('contact-email').value.trim();
        const subject = document.getElementById('contact-subject').value.trim();
        const message = document.getElementById('contact-message').value.trim();
        
        if (!name || !email || !subject || !message) {
            showMessage('Por favor, preencha todos os campos.', 'error');
            return;
        }
        
        // Validação de email
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            showMessage('Por favor, insira um email válido.', 'error');
            return;
        }
        
        // Simulação de envio (substituir com integração real, ex: Formspree)
        showMessage('Enviando mensagem...', 'info');
        
        // Aqui você deve integrar com um serviço real como Formspree
        // Por enquanto, apenas simula o envio
        setTimeout(() => {
            showMessage('Mensagem enviada com sucesso! Entrarei em contato em breve.', 'success');
            contactForm.reset();
        }, 1500);
    });
}

function showMessage(message, type) {
    contactMessage.textContent = message;
    contactMessage.className = 'contact__form-message ' + type;
    
    // Limpar mensagem após 5 segundos
    setTimeout(() => {
        contactMessage.textContent = '';
        contactMessage.className = 'contact__form-message';
    }, 5000);
}

// ===== SMOOTH SCROLL FOR SAFARI =====
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        if (targetId === '#') {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        } else {
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                const headerOffset = 80;
                const elementPosition = targetElement.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
                
                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });
            }
        }
    });
});

// ===== KEYBOARD NAVIGATION ACCESSIBILITY =====
// Adicionar indicadores visuais de foco para navegação por teclado
document.addEventListener('keydown', function(e) {
    if (e.key === 'Tab') {
        document.body.classList.add('keyboard-navigation');
    }
});

document.addEventListener('mousedown', function() {
    document.body.classList.remove('keyboard-navigation');
});

// ===== PREFERS REDUCED MOTION =====
const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');

if (prefersReducedMotion.matches) {
    // Desabilitar animações para usuários que preferem movimento reduzido
    document.documentElement.style.scrollBehavior = 'auto';
    
    // Remover classes de animação
    animateElements.forEach(el => {
        el.style.animation = 'none';
    });
}

// ===== ARIA LIVE REGIONS =====
// Criar região live para anúncios dinâmicos (acessibilidade)
const liveRegion = document.createElement('div');
liveRegion.setAttribute('role', 'status');
liveRegion.setAttribute('aria-live', 'polite');
liveRegion.setAttribute('aria-atomic', 'true');
liveRegion.classList.add('sr-only');
document.body.appendChild(liveRegion);

// Função para anunciar mudanças para leitores de tela
function announceToScreenReader(message) {
    liveRegion.textContent = message;
    setTimeout(() => {
        liveRegion.textContent = '';
    }, 1000);
}

// Anunciar quando seções são ativadas
let lastActiveSection = '';
window.addEventListener('scroll', () => {
    const activeLink = document.querySelector('.nav__link.active-link');
    if (activeLink) {
        const currentSection = activeLink.textContent;
        if (currentSection !== lastActiveSection) {
            announceToScreenReader(`Seção ${currentSection} ativa`);
            lastActiveSection = currentSection;
        }
    }
});

// ===== PERFORMANCE OPTIMIZATION =====
// Debounce para eventos de scroll
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Aplicar debounce aos eventos de scroll
const debouncedScrollActive = debounce(scrollActive, 100);
const debouncedScrollHeader = debounce(scrollHeader, 100);
const debouncedScrollTop = debounce(scrollTop, 100);

window.removeEventListener('scroll', scrollActive);
window.removeEventListener('scroll', scrollHeader);
window.removeEventListener('scroll', scrollTop);

window.addEventListener('scroll', debouncedScrollActive);
window.addEventListener('scroll', debouncedScrollHeader);
window.addEventListener('scroll', debouncedScrollTop);

// ===== LAZY LOADING IMAGES (se houver imagens no futuro) =====
if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                if (img.dataset.src) {
                    img.src = img.dataset.src;
                    img.removeAttribute('data-src');
                }
                observer.unobserve(img);
            }
        });
    });
    
    const lazyImages = document.querySelectorAll('img[data-src]');
    lazyImages.forEach(img => imageObserver.observe(img));
}

// ===== ENHANCED FOCUS MANAGEMENT =====
// Melhorar a visibilidade do foco para todos os elementos interativos
const interactiveElements = document.querySelectorAll('a, button, input, textarea, select, [tabindex]:not([tabindex="-1"])');

interactiveElements.forEach(element => {
    element.addEventListener('focus', function() {
        this.style.outlineOffset = '4px';
    });
    
    element.addEventListener('blur', function() {
        this.style.outlineOffset = '2px';
    });
});

// ===== PRINT OPTIMIZATION =====
window.addEventListener('beforeprint', () => {
    // Expandir todas as seções antes de imprimir
    const collapsibleElements = document.querySelectorAll('.collapsed');
    collapsibleElements.forEach(el => el.classList.remove('collapsed'));
});

// ===== LOG INITIALIZATION =====
console.log('%c✓ Site Silvio SB carregado com sucesso!', 'color: #1e3a8a; font-weight: bold; font-size: 14px;');
console.log('%cAcessibilidade: WCAG 2.1 AA', 'color: #10b981; font-size: 12px;');
console.log('%cResponsivo: Mobile, Tablet, Desktop', 'color: #10b981; font-size: 12px;');

// ===== SERVICE WORKER REGISTRATION (para PWA futuro) =====
if ('serviceWorker' in navigator) {
    // Comentado por enquanto, pode ser ativado no futuro
    // navigator.serviceWorker.register('/sw.js').then(registration => {
    //     console.log('ServiceWorker registrado:', registration);
    // }).catch(error => {
    //     console.log('ServiceWorker falhou:', error);
    // });
}
