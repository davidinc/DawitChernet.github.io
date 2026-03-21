document.addEventListener('DOMContentLoaded', () => {
    const revealItems = document.querySelectorAll('.skill-card, .experience-item');
    
    const revealOnScroll = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, { threshold: 0.15 });

    revealItems.forEach(item => {
        item.style.opacity = '0';
        item.style.transform = 'translateY(30px)';
        item.style.transition = '0.8s ease-out';
        revealOnScroll.observe(item);
    });
});