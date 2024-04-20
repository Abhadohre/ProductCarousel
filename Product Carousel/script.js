let currentIndex = 0;
let slides = document.querySelectorAll('.carousel-item');
let interval = setInterval(() => changeSlide(1), 3000); // Auto-rotate every 3 seconds

function changeSlide(n) {
    currentIndex = (currentIndex + n + slides.length) % slides.length;
    const xOffset = -currentIndex * 100;
    document.querySelector('.carousel-items').style.transform = `translateX(${xOffset}%)`;
    updateIndicators();
}

function updateIndicators() {
    document.querySelectorAll('.carousel-indicators span').forEach((dot, index) => {
        dot.style.opacity = index === currentIndex ? '1' : '0.5';
    });
}

function setupIndicators() {
    for (let i = 0; i < slides.length; i++) {
        const indicator = document.createElement('span');
        indicator.onclick = () => changeSlide(i - currentIndex);
        document.querySelector('.carousel-indicators').appendChild(indicator);
    }
    updateIndicators();
}

setupIndicators();
