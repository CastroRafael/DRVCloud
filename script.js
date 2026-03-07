// Intersection Observer for Scroll Animations
document.addEventListener('DOMContentLoaded', () => {
    
    // Select all elements to animate
    const observerElements = document.querySelectorAll('.hidden-element');

    // Observer options
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.15 // Trigger when 15% of element is visible
    };

    // Callback for observer
    const observerCallback = (entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Add class to trigger animation
                entry.target.classList.add('show-element');
                // Stop observing once animated
                observer.unobserve(entry.target);
            }
        });
    };

    // Create the observer
    const observer = new IntersectionObserver(observerCallback, observerOptions);

    // Observe each element
    observerElements.forEach(element => {
        observer.observe(element);
    });

    // Add sticky navbar effect
    const navbar = document.querySelector('.navbar');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.style.background = 'rgba(6, 9, 19, 0.95)';
            navbar.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.3)';
        } else {
            navbar.style.background = 'rgba(6, 9, 19, 0.8)';
            navbar.style.boxShadow = 'none';
        }
    });
});
