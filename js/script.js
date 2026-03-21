// Function to handle scroll animations
const observerOptions = {
    threshold: 0.2
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            
            // If it's the skills section, animate bars
            if (entry.target.id === 'skills') {
                animateBars();
            }
        }
    });
}, observerOptions);

// Observe experience items and skills section
document.querySelectorAll('.experience-item, #skills').forEach(el => {
    observer.observe(el);
});

function animateBars() {
    document.querySelectorAll('.skill-bar span').forEach(span => {
        span.style.width = span.getAttribute('data-width');
    });
}

// Navbar scroll effect
window.addEventListener('scroll', () => {
    const nav = document.getElementById('navbar');
    if (window.scrollY > 50) {
        nav.style.padding = '10px 0';
        nav.style.background = 'rgba(2, 6, 23, 0.95)';
    } else {
        nav.style.padding = '20px 0';
    }
});

// Form Handling
document.getElementById("contactForm").addEventListener("submit", function(e) {
    e.preventDefault();
    alert("System Online: Message received, Dawit. I'll get back to you shortly.");
    this.reset();
});