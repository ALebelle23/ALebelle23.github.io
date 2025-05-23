document.addEventListener('DOMContentLoaded', function() {
    const btn = document.getElementById('GitHub');
    const btn2 = document.getElementById('LinkedIn');
    const btn3 = document.getElementById('About');
    const btn4 = document.getElementById('Home');
    const btn5 = document.getElementById('How I Work');
    const btn6 = document.getElementById('Case Studies');
    if (btn) {
        btn.addEventListener('click', function() {
            window.open('https://github.com/ALebelle23', '_blank');
        });
    }
    if (btn2) {
        btn2.addEventListener('click', function() {
            window.open('https://www.linkedin.com/in/aidan-lebelle-469110296/', '_blank');
        });
    }
    if (btn3) {
        btn3.addEventListener('click', function() {
            window.location.href = "About.html";
        });
    }
    if (btn4) {
        btn4.addEventListener('click', function() {
            window.location.href = "home.html";
        });
    }
    if (btn5) {
        btn5.addEventListener('click', function() {
            window.location.href = "howIWork.html";
        });
    }
    if (btn6) {
        btn6.addEventListener('click', function() {
            window.location.href = "caseStudies.html";
        });
    }
});