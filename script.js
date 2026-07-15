// Typing effect
const text = "Biomedical Engineering Student";
let index = 0;

function typing() {
    const typingElement = document.getElementById("typing");

    if (typingElement) {
        if (index < text.length) {
            typingElement.innerHTML += text.charAt(index);
            index++;
            setTimeout(typing, 100);
        }
    }
}

window.onload = typing;
