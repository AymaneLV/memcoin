document.addEventListener("DOMContentLoaded", function() {
    console.log("Batman CryptoSymbol loaded! 🦇 To the Batcave!");

    // Smooth scroll for navigation links
    const navLinks = document.querySelectorAll("nav a");
    navLinks.forEach(link => {
        link.addEventListener("click", function(event) {
            if (this.hash !== "") {
                event.preventDefault();
                const targetSection = document.querySelector(this.hash);
                if (targetSection) {
                    window.scrollTo({
                        top: targetSection.offsetTop - 80, // Adjust for fixed header
                        behavior: "smooth"
                    });

                    // Add a bat-flash effect to the target section
                    targetSection.style.boxShadow = `0 0 20px 5px var(--batman-yellow)`;
                    setTimeout(() => {
                        targetSection.style.boxShadow = "none";
                    }, 1000);
                }
            }
        });
    });

    // Add dynamic bat-symbol effects to feature cards
    const featureCards = document.querySelectorAll(".feature-card");
    featureCards.forEach(card => {
        card.addEventListener("mouseenter", () => {
            const batSymbol = document.createElement("div");
            batSymbol.innerHTML = "🦇";
            batSymbol.style.position = "absolute";
            batSymbol.style.fontSize = "2rem";
            batSymbol.style.opacity = "0";
            batSymbol.style.transform = "translate(-50%, -50%)";
            batSymbol.style.left = `${Math.random() * 100}%`;
            batSymbol.style.top = `${Math.random() * 100}%`;
            batSymbol.style.transition = "opacity 0.5s, transform 0.5s";
            card.appendChild(batSymbol);

            setTimeout(() => {
                batSymbol.style.opacity = "1";
                batSymbol.style.transform = "translate(-50%, -50%) scale(1.5)";
            }, 10);

            setTimeout(() => {
                batSymbol.style.opacity = "0";
                batSymbol.style.transform = "translate(-50%, -50%) scale(0.5)";
                setTimeout(() => {
                    batSymbol.remove();
                }, 500);
            }, 1000);
        });
    });

    // Add a bat-sound effect when copying the address
    function playBatSound() {
        const audio = new Audio("/sounds/coin_sound.mp3"); // Replace with a bat-themed sound effect
        audio.play();
    }

    // Update the copyAddress function to include the bat sound
    window.copyAddress = function() {
        const hiddenInput = document.getElementById('hidden-input');
        hiddenInput.select();
        document.execCommand('copy');

        const notification = document.getElementById('notification');
        notification.classList.add('show');
        setTimeout(() => {
            notification.classList.remove('show');
        }, 2000);

        playBatSound(); // Play the bat sound when copying
    };
});