const container = document.getElementById("container");



function getRandomRGB() {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    return `rgb(${r}, ${g}, ${b})`;
}

function createGrid(scale) {

    container.innerHTML = "";
    const sizeOfSquares = 640 / scale;

    for (let i = 0; i <= scale * scale; i++) {
        const square = document.createElement("div");
        square.classList.add("square");
        square.style.width = `${sizeOfSquares}px`;
        square.style.height = `${sizeOfSquares}px`;
        square.style.opacity = "0.1";
        container.appendChild(square);
    }

    const squares = document.querySelectorAll(".square");
    squares.forEach((square) => {
        square.addEventListener("mouseover", () => {
            const randomColor = getRandomRGB();
            square.style.backgroundColor = randomColor;

            let currentOpacity = parseFloat(square.style.opacity);
            if (currentOpacity < 1) {
                square.style.opacity = (currentOpacity + 0.1).toString();
            }
        });
    });
}

createGrid(32);

