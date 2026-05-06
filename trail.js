const trailSticker = document.querySelector('.unit-sticker');
if (trailSticker) {
    let lastScrollY = window.scrollY;
    let resetTimer;

    const updateTrail = () => {
        const currentScrollY = window.scrollY;
        const delta = currentScrollY - lastScrollY;
        lastScrollY = currentScrollY;

        const offset = Math.max(-50, Math.min(50, delta * 1.8));
        trailSticker.style.setProperty('--trail-translate', `${offset}px`);

        clearTimeout(resetTimer);
        resetTimer = setTimeout(() => {
            trailSticker.style.setProperty('--trail-translate', '0px');
        }, 120);
    };

    window.addEventListener('scroll', updateTrail, { passive: true });
}
