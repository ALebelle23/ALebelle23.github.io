document.addEventListener('DOMContentLoaded', function() {
    const btn1 = document.getElementById('About');
    const btn2 = document.getElementById('Home');
    const btn3 = document.getElementById('How I Work');
    const btn4 = document.getElementById('Case Studies');
    const btn5 = document.getElementById("Ecom");
    const btn6 = document.getElementById("Analytics");
    const btn7 = document.getElementById("Service");
    const btn8 = document.getElementById("Game");
    
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
            window.location.href = "caseStudies.html";
        });
    }
    if (btn5) {
        btn5.addEventListener('click', function() {
            window.open("https://atlaselectronics.vercel.app/", "_blank");
        });
    }
    if (btn6) {
        btn6.addEventListener('click', function() {
            window.open("https://ufolytics.vercel.app/", "_blank");
        });
    }
    if (btn7) {
        btn7.addEventListener('click', function() {
            window.open("https://service-site-pied.vercel.app", "_blank");
        });
    }
    if (btn8) {
        btn8.addEventListener('click', function() {
           window.open("https://memory-game-9iob.vercel.app", "_blank");
        });
    }
});