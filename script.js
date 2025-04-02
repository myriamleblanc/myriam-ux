document.addEventListener('DOMContentLoaded', function() {
    // Handle case study section toggles
    const sectionToggles = document.querySelectorAll('.section-toggle');
    
    sectionToggles.forEach(toggle => {
        toggle.addEventListener('click', function() {
            const content = this.nextElementSibling;
            const icon = this.querySelector('i');
            
            // Toggle content visibility
            content.style.display = content.style.display === 'block' ? 'none' : 'block';
            
            // Rotate icon
            icon.style.transform = content.style.display === 'block' ? 'rotate(180deg)' : 'rotate(0)';
        });
    });

    // Handle contact form submission
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            // Add your form submission logic here
            alert('Thank you for your message! I will get back to you soon.');
            contactForm.reset();
        });
    }
}); 