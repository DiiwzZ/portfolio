document.addEventListener('DOMContentLoaded', () => {
    // Intersection Observer for scroll animations
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, {
        threshold: 0.1
    });

    // Observe all sections
    document.querySelectorAll('section').forEach(section => {
        observer.observe(section);
    });

    // Smooth scroll for navigation
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                // Close mobile navbar if open
                const navbarCollapse = document.querySelector('.navbar-collapse');
                if (navbarCollapse.classList.contains('show')) {
                    navbarCollapse.classList.remove('show');
                }
                
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // Add hover effect to skills
    document.querySelectorAll('.skill').forEach(skill => {
        skill.addEventListener('mouseenter', () => {
            skill.style.transform = 'translateY(-5px)';
        });
        skill.addEventListener('mouseleave', () => {
            skill.style.transform = 'translateY(0)';
        });
    });

    // Video controls - reset to poster after ending
    document.querySelectorAll('video').forEach(video => {
        video.addEventListener('ended', function() {
            // Reset video to beginning and show poster
            this.currentTime = 0;
            this.load(); // This will reload the video and show poster
        });
    });

    // Web Project Image Popup Modal
    const webPopupModal = document.getElementById('web-popup-modal');
    const webPopupImg = document.getElementById('web-popup-img');
    const webPopupCaption = document.getElementById('web-popup-caption');
    const webPopupClose = document.querySelector('.web-popup-close');

    // Check if modal exists before adding event listeners
    if (webPopupModal && webPopupImg && webPopupCaption) {
        // Add click event to all web project images
        document.querySelectorAll('.web-popup-img').forEach(img => {
            img.style.cursor = 'pointer';
            img.addEventListener('click', function(e) {
                e.preventDefault();
                e.stopPropagation();
                const imgSrc = this.getAttribute('data-src') || this.getAttribute('src');
                const imgCaption = this.getAttribute('data-caption') || this.getAttribute('alt');
                
                if (imgSrc && webPopupImg && webPopupCaption) {
                    webPopupImg.src = imgSrc;
                    webPopupImg.alt = imgCaption || '';
                    webPopupCaption.textContent = imgCaption || '';
                    webPopupModal.classList.add('active');
                    document.body.style.overflow = 'hidden'; // Prevent background scrolling
                }
            });
        });
    }

    // Close popup when clicking close button
    if (webPopupClose && webPopupModal) {
        webPopupClose.addEventListener('click', function(e) {
            e.preventDefault();
            e.stopPropagation();
            webPopupModal.classList.remove('active');
            document.body.style.overflow = ''; // Restore scrolling
        });
    }

    // Close popup when clicking outside the image
    if (webPopupModal) {
        webPopupModal.addEventListener('click', function(e) {
            if (e.target === webPopupModal || e.target.classList.contains('logo-popup-modal')) {
                webPopupModal.classList.remove('active');
                document.body.style.overflow = ''; // Restore scrolling
            }
        });
    }

    // Close popup with Escape key
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && webPopupModal && webPopupModal.classList.contains('active')) {
            webPopupModal.classList.remove('active');
            document.body.style.overflow = ''; // Restore scrolling
        }
    });
}); 