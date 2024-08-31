// JavaScript for any dynamic elements (if needed)
document.addEventListener("DOMContentLoaded", function() {
    // Smooth scrolling for navigation
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
});
document.addEventListener("DOMContentLoaded", function() {
    // Smooth scrolling for navigation
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Add flyback effect when mouse leaves the image area
    const flyingPhotos = document.querySelectorAll('.flying-photo');
    flyingPhotos.forEach(photo => {
        photo.addEventListener('mouseleave', () => {
            photo.classList.add('flyback');
            setTimeout(() => {
                photo.classList.remove('flyback');
            }, 1000); // Matches the flyback animation duration
        });
    });
});

