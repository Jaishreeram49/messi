document.querySelector('.menu-toggle').addEventListener('click', () => {
    const navLinks = document.querySelector('.nav-links');
    navLinks.style.display = navLinks.style.display === 'flex' ? 'none' : 'flex';
});

document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('contact-form').addEventListener('submit', function(event) {
        // Prevent the form from submitting normally
        event.preventDefault();
        
        // Show an alert (you can customize this alert message)
        alert('Thank you for your message! We will get back to you soon.');
        
        // Refresh the page after 2 seconds
        setTimeout(function() {
            location.reload();
        }, 2000);
    });
});