document.addEventListener('DOMContentLoaded', function() {
    const btn1 = document.getElementById('About');
    const btn2 = document.getElementById('Home');
    const btn3 = document.getElementById('How I Work');
    const btn4 = document.getElementById('Case Studies');
    const btn5 = document.getElementById('Resume');
    const btnGitHub = document.getElementById('GitHub');
    const btnLinkedIn = document.getElementById('LinkedIn');
    
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
    if (btn5) {
        btn5.addEventListener('click', function() {
            if (!document.getElementById('resume-iframe')) {
            const overlay = document.createElement('div');
            overlay.id = 'resume-overlay';
            overlay.style.position = 'fixed';
            overlay.style.top = 0;
            overlay.style.left = 0;
            overlay.style.width = '100vw';
            overlay.style.height = '100vh';
            overlay.style.background = 'rgba(0,0,0,0.7)';
            overlay.style.display = 'flex';
            overlay.style.justifyContent = 'center';
            overlay.style.alignItems = 'center';
            overlay.style.zIndex = 10000;
            
            const iframe = document.createElement('iframe');
            iframe.id = 'resume-iframe';
            iframe.src = '../images/Resume.pdf';
            iframe.style.width = '80vw';
            iframe.style.height = '80vh';
            iframe.style.border = '2px solid #fff';
            iframe.style.background = '#fff';

            const closeBtn = document.createElement('button');
            closeBtn.textContent = 'Close';
            closeBtn.style.position = 'absolute';
            closeBtn.style.top = '1.5rem';
            closeBtn.style.right = '1.5rem';
            closeBtn.style.padding = '0.5rem 1rem';
            closeBtn.style.fontSize = '1.3rem';
            closeBtn.style.cursor = 'pointer';
            closeBtn.onclick = function() {
                document.body.removeChild(overlay);
            };
            overlay.appendChild(iframe);
            overlay.appendChild(closeBtn);
            document.body.appendChild(overlay);
        }
    });
}
    if (btnGitHub) {
        btnGitHub.addEventListener('click', function() {
            window.open('https://github.com/ALebelle23', '_blank');
        });
    }
    if (btnLinkedIn) {
        btnLinkedIn.addEventListener('click', function() {
            window.open('https://www.linkedin.com/in/aidan-lebelle-469110296/', '_blank');
        });
    }
});