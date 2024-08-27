function addHearts() {
    const heartContainer = document.getElementById('heart');
    for (let i = 0; i < 5; i++) {
        const heart = document.createElement('img');
        heart.src = 'imagenes/heart.png';
        heart.classList.add('floating-heart');
        heart.style.top = `${Math.random() * 100}px`;
        heart.style.left = `${Math.random() * 100}px`;
        heartContainer.appendChild(heart);
        setTimeout(() => heart.remove(), 2000); // Remove heart after 2 seconds
    }
}

function createFlowers() {
    for (let i = 0; i < 10; i++) {
        const flower = document.createElement('div');
        flower.classList.add('flower');
        flower.style.top = `${Math.random() * 100}vh`;
        flower.style.left = `${Math.random() * 100}vw`;
        document.body.appendChild(flower);
        setTimeout(() => flower.remove(), 5000); // Remove flower after 5 seconds
    }
}

// Call createFlowers on load and periodically
window.onload = () => {
    createFlowers();
    setInterval(createFlowers, 6000);
};
