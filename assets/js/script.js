// Shared functionality across all pages

// Mobile sidebar toggle
document.addEventListener('DOMContentLoaded', function() {
    // Mobile menu toggle
    const mobileMenuButton = document.querySelector('.mobile-menu-button');
    const sidebar = document.querySelector('.sidebar');
    
    if (mobileMenuButton && sidebar) {
        mobileMenuButton.addEventListener('click', function() {
            sidebar.classList.toggle('open');
        });
    }
    
    // Set active nav link based on current page
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    const navLinks = document.querySelectorAll('.nav-link');
    
    navLinks.forEach(link => {
        const linkPage = link.getAttribute('data-page');
        if (linkPage === currentPage) {
            link.classList.add('active');
        }
    });
    
    // Mock player functionality
    const playButtons = document.querySelectorAll('.play-button');
    const playerPlayButton = document.querySelector('.player-play-button');
    let isPlaying = false;
    
    playButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Update player with clicked song info
            const card = this.closest('.music-card');
            if (card) {
                const title = card.querySelector('.music-title').textContent;
                const artist = card.querySelector('.music-artist').textContent;
                const cover = card.querySelector('.music-cover').src;
                
                document.querySelector('.player-title').textContent = title;
                document.querySelector('.player-artist').textContent = artist;
                document.querySelector('.player-cover').src = cover;
            }
            
            isPlaying = true;
            playerPlayButton.innerHTML = '<i class="fas fa-pause"></i>';
        });
    });
    
    if (playerPlayButton) {
        playerPlayButton.addEventListener('click', function() {
            isPlaying = !isPlaying;
            this.innerHTML = isPlaying ? '<i class="fas fa-pause"></i>' : '<i class="fas fa-play"></i>';
        });
    }
    
    // Progress bar simulation
    const progressBar = document.querySelector('.progress-bar');
    if (progressBar) {
        let progress = 0;
        setInterval(() => {
            if (isPlaying && progress < 100) {
                progress += 0.5;
                progressBar.style.width = `${progress}%`;
            }
        }, 1000);
    }
});