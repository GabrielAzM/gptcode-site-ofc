document.addEventListener('DOMContentLoaded', function() {
    // Animação de aparecimento ao scroll
    const members = document.querySelectorAll('.team-member');
    
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, observerOptions);
    
    // Observar todos os membros da equipe
    members.forEach(member => {
        observer.observe(member);
    });
    
    // Modal desabilitado para detalhes dos membros
    
    // Efeito de parallax no header
    const pageHeader = document.querySelector('.page-header');
    
    window.addEventListener('scroll', function() {
        const scrolled = window.pageYOffset;
        const rate = scrolled * -0.5;
        pageHeader.style.backgroundPosition = `center ${rate}px`;
    });
    
    // Tooltips
    const tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
    const tooltipList = tooltipTriggerList.map(function(tooltipTriggerEl) {
        return new bootstrap.Tooltip(tooltipTriggerEl);
    });
});