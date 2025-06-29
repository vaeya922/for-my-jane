let userName = '';

function submitName() {
    const nameInput = document.getElementById('name-input');
    const name = nameInput.value.trim();
    
    if (name === '') {
        alert('Please enter your name first! ♡');
        return;
    }
    
    userName = name;
    document.getElementById('user-name').textContent = name;
    
    // Transition to envelope page
    transitionToPage('envelope-page');
}

function openEnvelope() {
    const envelope = document.getElementById('envelope');
    envelope.classList.add('opened');
    
    // Wait for envelope animation to complete, then show letter
    setTimeout(() => {
        transitionToPage('letter-page');
    }, 1000);
}

function showProposal() {
    transitionToPage('proposal-page');
}

function handleAnswer(answer) {
    if (answer === 'yes') {
        transitionToPage('success-page');
        
        // Create celebration effect
        setTimeout(() => {
            createConfetti();
        }, 500);
    } else {
        // Playful response for "no"
        const noButton = document.querySelector('.no-button');
        noButton.style.transform = 'translateX(' + (Math.random() * 200 - 100) + 'px) translateY(' + (Math.random() * 200 - 100) + 'px)';
        
        setTimeout(() => {
            alert("Aww, are you sure? Maybe think about it a little more? ♡");
            noButton.style.transform = 'translateX(0) translateY(0)';
        }, 500);
    }
}

function transitionToPage(pageId) {
    // Hide current active page
    const currentPage = document.querySelector('.page.active');
    if (currentPage) {
        currentPage.classList.remove('active');
    }
    
    // Show new page after a short delay
    setTimeout(() => {
        document.getElementById(pageId).classList.add('active');
    }, 300);
}

function createConfetti() {
    const colors = ['#e91e63', '#f8bbd9', '#fce4ec', '#ff4081', '#c2185b'];
    
    for (let i = 0; i < 50; i++) {
        setTimeout(() => {
            const confetti = document.createElement('div');
            confetti.style.position = 'fixed';
            confetti.style.left = Math.random() * 100 + 'vw';
            confetti.style.top = '-10px';
            confetti.style.width = '10px';
            confetti.style.height = '10px';
            confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
            confetti.style.borderRadius = '50%';
            confetti.style.pointerEvents = 'none';
            confetti.style.zIndex = '1000';
            confetti.style.animation = 'confettiFall 3s linear forwards';
            
            document.body.appendChild(confetti);
            
            // Remove confetti after animation
            setTimeout(() => {
                if (confetti.parentNode) {
                    confetti.parentNode.removeChild(confetti);
                }
            }, 3000);
        }, i * 100);
    }
}

// Add confetti animation to CSS dynamically
const style = document.createElement('style');
style.textContent = `
    @keyframes confettiFall {
        to {
            transform: translateY(100vh) rotate(360deg);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);

// Add some interactive effects
document.addEventListener('DOMContentLoaded', function() {
    // Add enter key support for name input
    const nameInput = document.getElementById('name-input');
    if (nameInput) {
        nameInput.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                submitName();
            }
        });
        
        // Focus on input when page loads
        nameInput.focus();
    }
    
    // Add some sparkle effects to buttons
    const buttons = document.querySelectorAll('button');
    buttons.forEach(button => {
        button.addEventListener('mouseenter', function() {
            this.style.filter = 'brightness(1.1)';
        });
        
        button.addEventListener('mouseleave', function() {
            this.style.filter = 'brightness(1)';
        });
    });
});

// Prevent right-click context menu for a more immersive experience
document.addEventListener('contextmenu', function(e) {
    e.preventDefault();
});

// Add some romantic background music control (optional)
function playBackgroundMusic() {
    // You can add background music here if desired
    // const audio = new Audio('path-to-romantic-music.mp3');
    // audio.loop = true;
    // audio.volume = 0.3;
    // audio.play();
}