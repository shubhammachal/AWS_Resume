// Visitor count functionality
let visitorCount = localStorage.getItem('visitorCount') || 0;
visitorCount = parseInt(visitorCount) + 1;
localStorage.setItem('visitorCount', visitorCount);

document.addEventListener('DOMContentLoaded', function() {
    // Update visitor count
    const visitorCountElement = document.getElementById('visitorCount');
    if (visitorCountElement) {
        visitorCountElement.textContent = visitorCount;
    }

    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Dynamic year for footer
    const currentYearElement = document.getElementById('currentYear');
    if (currentYearElement) {
        currentYearElement.textContent = new Date().getFullYear();
    }

    // Typing effect for header
    const typeEffect = document.getElementById('typeEffect');
    if (typeEffect) {
        const phrases = ['Software Engineer', 'Cloud Enthusiast', 'Problem Solver'];
        let i = 0;
        let j = 0;
        let currentPhrase = [];
        let isDeleting = false;
        let isEnd = false;

        function loop() {
            isEnd = false;
            if (i < phrases.length) {
                if (!isDeleting && j <= phrases[i].length) {
                    currentPhrase.push(phrases[i][j]);
                    j++;
                    typeEffect.innerHTML = currentPhrase.join('');
                }

                if (isDeleting && j <= phrases[i].length) {
                    currentPhrase.pop();
                    j--;
                    typeEffect.innerHTML = currentPhrase.join('');
                }

                if (j == phrases[i].length) {
                    isEnd = true;
                    isDeleting = true;
                }

                if (isDeleting && j === 0) {
                    currentPhrase = [];
                    isDeleting = false;
                    i++;
                    if (i == phrases.length) {
                        i = 0;
                    }
                }
            }
            const spedUp = Math.random() * (80 - 50) + 50;
            const normalSpeed = Math.random() * (300 - 200) + 200;
            const time = isEnd ? 2000 : isDeleting ? spedUp : normalSpeed;
            setTimeout(loop, time);
        }

        loop();
    }

    // Skills progress bars
    const skills = document.querySelectorAll('.skill-item');
    skills.forEach(skill => {
        const percent = skill.getAttribute('data-percent');
        const progress = skill.querySelector('.progress');
        if (progress) {
            progress.style.width = `${percent}%`;
        }
    });
});

// Form submission handling
const contactForm = document.getElementById('contactForm');
if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        // Here you would typically send the form data to a server
        // For this example, we'll just log it to the console
        console.log('Form submitted');
        alert('Thank you for your message! I\'ll get back to you soon.');
        this.reset();
    });
}