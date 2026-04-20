document.addEventListener("DOMContentLoaded", () => {
    const elements = document.querySelectorAll("[data-diagram]");

    elements.forEach(async (el) => {
        const name = el.dataset.diagram;

        try {
            const module = await import(`./diagrams/${name}.js`);
            
            if (module.render) {
                module.render(el);
            } else {
                console.warn(`No render() in ${name}.js`);
            }

        } catch (err) {
            console.error(`Failed to load diagram: ${name}`, err);
        }
    });
});