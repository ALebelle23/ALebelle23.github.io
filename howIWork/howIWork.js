document.addEventListener('DOMContentLoaded', function() {
    const btn1 = document.getElementById('About');
    const btn2 = document.getElementById('Home');
    const btn3 = document.getElementById('How I Work');
    const btn4 = document.getElementById('Case Studies');
    
    if (btn1) {
        btn1.addEventListener('click', function() {
            window.location.href = "../about/about.html";
        });
    }
    if (btn2) {
        btn2.addEventListener('click', function() {
            window.location.href = "../home.html";
        });
    }
    if (btn3) {
        btn3.addEventListener('click', function() {
            window.location.href = "../howIWork/howIWork.html";
        });
    }
    if (btn4) {
        btn4.addEventListener('click', function() {
            window.location.href = "../caseStudies/caseStudies.html";
        });
    }
});