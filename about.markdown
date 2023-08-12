---
layout: page
title: About
permalink: /about/
---

<!DOCTYPE html>
<html>
<head>
    <title>About Us</title>
    <style>
        body {
            margin: 0;
            overflow: hidden;
            font-family: monospace;
            background-color: black;
            color: lime;
        }

        .matrix-container {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            pointer-events: none;
            z-index: -1;
        }

        .matrix-character {
            position: absolute;
            font-size: 20px;
            opacity: 0.1;
        }
    </style>
</head>
<body>
    <header>
        <h1>About Our Company</h1>
    </header>

    <nav>
        <ul>
            <li><a href="index.html">Home</a></li>
            <li><a href="services.html">Services</a></li>
            <li><a href="contact.html">Contact</a></li>
        </ul>
    </nav>

    <main>
        <section>
            <h2>Our Mission</h2>
            <p>We are dedicated to providing high-quality solutions that address your cybersecurity needs.</p>
        </section>

        <section>
            <h2>Our Team</h2>
            <p>We have a team of experienced cybersecurity experts who are passionate about securing your digital assets.</p>
        </section>
    </main>

    <footer>
        <p>&copy; 2023 Your Company Name. All rights reserved.</p>
    </footer>

    <div class="matrix-container" id="matrixContainer"></div>

    <script>
        const matrixContainer = document.getElementById("matrixContainer");

        // Create falling characters
        function createMatrixCharacter() {
            const character = document.createElement("span");
            character.className = "matrix-character";
            character.textContent = getRandomUnicode();
            character.style.left = Math.random() * 100 + "vw";
            character.style.animationDuration = Math.random() * 2 + 1 + "s";
            matrixContainer.appendChild(character);
            setTimeout(() => {
                matrixContainer.removeChild(character);
            }, 5000);
        }

        // Get a random Unicode character in the range of binary digits
        function getRandomUnicode() {
            const binaryDigits = "01";
            return "&#x" + (Math.floor(Math.random() * binaryDigits.length)).toString(16).toUpperCase() + ";";
        }

        // Create falling characters at intervals
        setInterval(createMatrixCharacter, 100);

    </script>
</body>
</html>







