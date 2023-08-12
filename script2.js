const matrixContainer = document.getElementById("matrixContainer");

function createMatrixCharacter() {
    const character = document.createElement("span");
    character.className = "matrix-character";
    character.textContent = getRandomBinaryCharacter();
    character.style.left = Math.random() * 100 + "vw";
    character.style.animationDuration = Math.random() * 2 + 1 + "s";
    matrixContainer.appendChild(character);
    setTimeout(() => {
        matrixContainer.removeChild(character);
    }, 5000);
}

function getRandomBinaryCharacter() {
    return Math.random() < 0.5 ? '0' : '1';
}

setInterval(createMatrixCharacter, 100);
// ... (previous JavaScript) ...

setInterval(createMatrixCharacter, 200); /* Slower interval for character creation */

