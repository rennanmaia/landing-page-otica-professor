// Variáveis globais
let currentTestimonial = 0;
const testimonials = document.querySelectorAll('.testimonial-card');
const dots = document.querySelectorAll('.dot');

// Inicialização quando o DOM estiver carregado
document.addEventListener('DOMContentLoaded', function() {
    initializeMenu();
    initializeScrollEffects();
    initializeProductFilters();
    initializeTestimonialSlider();
    initializeContactForm();
    initializeSmoothScroll();
    initializeBackToTop();
});

// Menu hambúrguer
function initializeMenu() {
    const hamburger = document.getElementById('hamburger');
    const navMenu = document.getElementById('nav-menu');

    if (hamburger && navMenu) {
        hamburger.addEventListener('click', function() {
            hamburger.classList.toggle('active');
            navMenu.classList.toggle('active');
        });

        // Fechar menu ao clicar em um link
        document.querySelectorAll('.nav-link').forEach(link => {
            link.addEventListener('click', function() {
                hamburger.classList.remove('active');
                navMenu.classList.remove('active');
            });
        });
    }
}

// Efeitos de scroll
function initializeScrollEffects() {
    const header = document.getElementById('header');
    
    window.addEventListener('scroll', function() {
        // Header transparente
        if (window.scrollY > 100) {
            header.style.background = 'rgba(255, 255, 255, 0.95)';
            header.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.15)';
        } else {
            header.style.background = 'rgba(255, 255, 255, 0.95)';
            header.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.1)';
        }

        // Animações de fade in
        animateOnScroll();
    });
}

// Animações ao fazer scroll
function animateOnScroll() {
    const elements = document.querySelectorAll('.service-card, .product-card, .contact-card');
    
    elements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        const elementVisible = 150;
        
        if (elementTop < window.innerHeight - elementVisible) {
            element.style.opacity = '1';
            element.style.transform = 'translateY(0)';
        }
    });
}

// Filtros de produtos
function initializeProductFilters() {
    const categoryButtons = document.querySelectorAll('.category-btn');
    const productCards = document.querySelectorAll('.product-card');

    categoryButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Remover active de todos os botões
            categoryButtons.forEach(btn => btn.classList.remove('active'));
            // Adicionar active ao botão clicado
            this.classList.add('active');

            const filterValue = this.getAttribute('data-category');

            productCards.forEach(card => {
                if (filterValue === 'all' || card.getAttribute('data-category') === filterValue) {
                    card.style.display = 'block';
                    setTimeout(() => {
                        card.style.opacity = '1';
                        card.style.transform = 'translateY(0)';
                    }, 100);
                } else {
                    card.style.opacity = '0';
                    card.style.transform = 'translateY(20px)';
                    setTimeout(() => {
                        card.style.display = 'none';
                    }, 300);
                }
            });
        });
    });
}

// Slider de depoimentos
function initializeTestimonialSlider() {
    if (testimonials.length > 0) {
        // Iniciar slider automático
        setInterval(nextTestimonial, 5000);

        // Adicionar event listeners aos dots
        dots.forEach((dot, index) => {
            dot.addEventListener('click', () => {
                showTestimonial(index);
            });
        });
    }
}

function showTestimonial(index) {
    // Esconder todos os depoimentos
    testimonials.forEach(testimonial => {
        testimonial.classList.remove('active');
    });

    // Remover active de todos os dots
    dots.forEach(dot => {
        dot.classList.remove('active');
    });

    // Mostrar o depoimento selecionado
    if (testimonials[index]) {
        testimonials[index].classList.add('active');
    }
    
    if (dots[index]) {
        dots[index].classList.add('active');
    }

    currentTestimonial = index;
}

function nextTestimonial() {
    currentTestimonial = (currentTestimonial + 1) % testimonials.length;
    showTestimonial(currentTestimonial);
}

// Formulário de contato
function initializeContactForm() {
    const contactForm = document.getElementById('contactForm');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Coletar dados do formulário
            const formData = new FormData(contactForm);
            const data = {
                name: formData.get('name'),
                email: formData.get('email'),
                phone: formData.get('phone'),
                service: formData.get('service'),
                message: formData.get('message')
            };

            // Simular envio do formulário
            submitContactForm(data);
        });

        // Validação em tempo real
        const inputs = contactForm.querySelectorAll('input, select, textarea');
        inputs.forEach(input => {
            input.addEventListener('blur', validateField);
            input.addEventListener('input', clearValidation);
        });
    }
}

function validateField(e) {
    const field = e.target;
    const value = field.value.trim();
    
    // Remover classes de erro anteriores
    field.classList.remove('error');
    
    // Validações específicas
    switch(field.type) {
        case 'email':
            if (value && !isValidEmail(value)) {
                showFieldError(field, 'Por favor, insira um email válido');
            }
            break;
        case 'tel':
            if (value && !isValidPhone(value)) {
                showFieldError(field, 'Por favor, insira um telefone válido');
            }
            break;
        default:
            if (field.hasAttribute('required') && !value) {
                showFieldError(field, 'Este campo é obrigatório');
            }
    }
}

function clearValidation(e) {
    const field = e.target;
    field.classList.remove('error');
    
    // Remover mensagem de erro se existir
    const errorMsg = field.parentNode.querySelector('.error-message');
    if (errorMsg) {
        errorMsg.remove();
    }
}

function showFieldError(field, message) {
    field.classList.add('error');
    
    // Remover mensagem de erro anterior
    const existingError = field.parentNode.querySelector('.error-message');
    if (existingError) {
        existingError.remove();
    }
    
    // Criar nova mensagem de erro
    const errorElement = document.createElement('div');
    errorElement.className = 'error-message';
    errorElement.textContent = message;
    errorElement.style.color = '#e74c3c';
    errorElement.style.fontSize = '0.9rem';
    errorElement.style.marginTop = '5px';
    
    field.parentNode.appendChild(errorElement);
}

function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

function isValidPhone(phone) {
    const phoneRegex = /^\(\d{2}\)\s\d{4,5}-\d{4}$|^\d{10,11}$/;
    return phoneRegex.test(phone.replace(/\s/g, ''));
}

function submitContactForm(data) {
    // Mostrar loading
    const submitBtn = document.querySelector('#contactForm .btn-primary');
    const originalText = submitBtn.textContent;
    submitBtn.textContent = 'Enviando...';
    submitBtn.disabled = true;

    // Simular envio (aqui você integraria com seu backend)
    setTimeout(() => {
        // Simular sucesso
        showSuccessMessage();
        document.getElementById('contactForm').reset();
        
        // Restaurar botão
        submitBtn.textContent = originalText;
        submitBtn.disabled = false;
    }, 2000);
}

function showSuccessMessage() {
    // Criar modal de sucesso
    const modal = document.createElement('div');
    modal.className = 'success-modal';
    modal.innerHTML = `
        <div class="modal-content">
            <div class="success-icon">
                <i class="fas fa-check-circle"></i>
            </div>
            <h3>Mensagem enviada com sucesso!</h3>
            <p>Entraremos em contato em breve. Obrigado!</p>
            <button class="btn btn-primary" onclick="this.parentElement.parentElement.remove()">
                Fechar
            </button>
        </div>
    `;

    // Estilos do modal
    modal.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(0,0,0,0.5);
        display: flex;
        align-items: center;
        justify-content: center;
        z-index: 9999;
        animation: fadeIn 0.3s ease;
    `;

    const modalContent = modal.querySelector('.modal-content');
    modalContent.style.cssText = `
        background: white;
        padding: 40px;
        border-radius: 20px;
        text-align: center;
        max-width: 400px;
        margin: 20px;
        box-shadow: 0 20px 40px rgba(0,0,0,0.2);
    `;

    const successIcon = modal.querySelector('.success-icon');
    successIcon.style.cssText = `
        font-size: 60px;
        color: #27ae60;
        margin-bottom: 20px;
    `;

    document.body.appendChild(modal);

    // Remover modal após 5 segundos
    setTimeout(() => {
        if (modal.parentNode) {
            modal.remove();
        }
    }, 5000);
}

// Scroll suave
function initializeSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                const headerHeight = document.getElementById('header').offsetHeight;
                const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset - headerHeight;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Scroll do hero
    const heroScroll = document.querySelector('.hero-scroll');
    if (heroScroll) {
        heroScroll.addEventListener('click', function() {
            const servicesSection = document.getElementById('servicos');
            if (servicesSection) {
                const headerHeight = document.getElementById('header').offsetHeight;
                const targetPosition = servicesSection.getBoundingClientRect().top + window.pageYOffset - headerHeight;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    }
}

// Botão voltar ao topo
function initializeBackToTop() {
    const backToTopBtn = document.getElementById('backToTop');
    
    if (backToTopBtn) {
        window.addEventListener('scroll', function() {
            if (window.pageYOffset > 300) {
                backToTopBtn.classList.add('show');
            } else {
                backToTopBtn.classList.remove('show');
            }
        });

        backToTopBtn.addEventListener('click', function() {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }
}

// Função para formatar telefone enquanto digita
function formatPhone(input) {
    let value = input.value.replace(/\D/g, '');
    
    if (value.length <= 10) {
        value = value.replace(/(\d{2})(\d{4})(\d{4})/, '($1) $2-$3');
    } else {
        value = value.replace(/(\d{2})(\d{5})(\d{4})/, '($1) $2-$3');
    }
    
    input.value = value;
}

// Adicionar formatação de telefone ao campo
document.addEventListener('DOMContentLoaded', function() {
    const phoneInput = document.getElementById('phone');
    if (phoneInput) {
        phoneInput.addEventListener('input', function() {
            formatPhone(this);
        });
    }
});

// Função para lazy loading de imagens (se houver)
function initializeLazyLoading() {
    const images = document.querySelectorAll('img[data-src]');
    
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.classList.remove('lazy');
                imageObserver.unobserve(img);
            }
        });
    });

    images.forEach(img => imageObserver.observe(img));
}

// Função para detectar dispositivo móvel
function isMobile() {
    return window.innerWidth <= 768;
}

// Função para otimizar animações em dispositivos móveis
function optimizeForMobile() {
    if (isMobile()) {
        // Reduzir animações em dispositivos móveis
        document.documentElement.style.setProperty('--animation-duration', '0.2s');
    }
}

// Inicializar otimizações móveis
document.addEventListener('DOMContentLoaded', optimizeForMobile);
window.addEventListener('resize', optimizeForMobile);

// Função para adicionar efeito parallax simples (opcional)
function initializeParallax() {
    const parallaxElements = document.querySelectorAll('.parallax');
    
    window.addEventListener('scroll', () => {
        const scrolled = window.pageYOffset;
        
        parallaxElements.forEach(element => {
            const rate = scrolled * -0.5;
            element.style.transform = `translateY(${rate}px)`;
        });
    });
}

// Analytics e tracking (simular)
function trackEvent(category, action, label) {
    // Aqui você integraria com Google Analytics ou similar
    console.log('Event tracked:', { category, action, label });
}

// Rastrear cliques importantes
document.addEventListener('DOMContentLoaded', function() {
    // Rastrear cliques nos botões principais
    document.querySelectorAll('.btn-primary').forEach(btn => {
        btn.addEventListener('click', function() {
            const buttonText = this.textContent.trim();
            trackEvent('Button', 'Click', buttonText);
        });
    });

    // Rastrear envio de formulário
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function() {
            trackEvent('Form', 'Submit', 'Contact Form');
        });
    }
});

// Função para melhorar acessibilidade
function initializeAccessibility() {
    // Adicionar skip links
    const skipLink = document.createElement('a');
    skipLink.href = '#main-content';
    skipLink.textContent = 'Pular para o conteúdo principal';
    skipLink.className = 'skip-link';
    skipLink.style.cssText = `
        position: absolute;
        top: -40px;
        left: 6px;
        background: #000;
        color: #fff;
        padding: 8px;
        text-decoration: none;
        z-index: 10000;
        opacity: 0;
        transition: all 0.3s;
    `;
    
    skipLink.addEventListener('focus', function() {
        this.style.top = '6px';
        this.style.opacity = '1';
    });
    
    skipLink.addEventListener('blur', function() {
        this.style.top = '-40px';
        this.style.opacity = '0';
    });
    
    document.body.insertBefore(skipLink, document.body.firstChild);

    // Melhorar navegação por teclado
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Tab') {
            document.body.classList.add('keyboard-navigation');
        }
    });

    document.addEventListener('mousedown', function() {
        document.body.classList.remove('keyboard-navigation');
    });
}

// Inicializar acessibilidade
document.addEventListener('DOMContentLoaded', initializeAccessibility);

// Função para otimização de performance
function initializePerformanceOptimizations() {
    // Debounce para eventos de scroll e resize
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

    // Aplicar debounce aos eventos
    const debouncedScrollHandler = debounce(function() {
        animateOnScroll();
    }, 10);

    window.addEventListener('scroll', debouncedScrollHandler);

    // Prefetch de páginas importantes (se houver)
    const importantLinks = document.querySelectorAll('a[href^="/"]:not([href*="#"])');
    importantLinks.forEach(link => {
        link.addEventListener('mouseenter', function() {
            const prefetchLink = document.createElement('link');
            prefetchLink.rel = 'prefetch';
            prefetchLink.href = this.href;
            document.head.appendChild(prefetchLink);
        });
    });
}

// Inicializar otimizações de performance
document.addEventListener('DOMContentLoaded', initializePerformanceOptimizations);

// Service Worker para PWA básico (opcional)
if ('serviceWorker' in navigator) {
    window.addEventListener('load', function() {
        navigator.serviceWorker.register('/sw.js')
            .then(function(registration) {
                console.log('ServiceWorker registration successful');
            })
            .catch(function(err) {
                console.log('ServiceWorker registration failed');
            });
    });
}

// Exposar funções globais necessárias
window.visaoClearApp = {
    showTestimonial,
    nextTestimonial,
    trackEvent,
    formatPhone
};
