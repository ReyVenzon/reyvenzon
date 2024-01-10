// script.js

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Alert for contact form submission
document.getElementById('contactForm').addEventListener('submit', function (e) {
    e.preventDefault();
    
    // Add your form submission logic here
    
    alert('Form submitted!'); // Replace this with your actual submission logic
});
