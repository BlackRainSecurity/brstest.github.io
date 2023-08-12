function createBinaryCharacter() {
    const binaryChars = ['0', '1'];
    const binaryChar = document.createElement('span');
    binaryChar.textContent = binaryChars[Math.floor(Math.random() * binaryChars.length)];
    binaryChar.classList.add('binary-char');
    return binaryChar;
}

function createBinaryRain() {
    const container = document.querySelector('.binary-rain-container');
    const binaryChar = createBinaryCharacter();
    const startPosition = Math.random() * window.innerWidth;
    const animationDuration = Math.random() * 5 + 5; // Random duration between 5s and 10s

    binaryChar.style.left = startPosition + 'px';
    binaryChar.style.animationDuration = animationDuration + 's';
    container.appendChild(binaryChar);

    // Remove the binary character once it reaches the bottom of the screen
    binaryChar.addEventListener('animationend', () => {
        container.removeChild(binaryChar);
    });
}

// Generate falling binary every 100ms
setInterval(createBinaryRain, 100);

