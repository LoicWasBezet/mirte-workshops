export function render(el) {
    const draw = window.SVG().addTo(el).size(300, 100);

    // Create circle and keep reference
    const circle = draw.circle(100).move(50, 50).fill('#f06');

    // Find the button (you can scope this if needed, see below)
    const button = document.querySelector('.button-change-color');

    if (button) {
        button.addEventListener('click', () => {
            // Change to a random color
            const randomColor = '#' + Math.floor(Math.random()*16777215).toString(16);
            circle.fill(randomColor);
        });
    }
}