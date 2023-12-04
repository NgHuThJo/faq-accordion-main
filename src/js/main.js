function setupAccordion() {
    const accordionItem = document.querySelectorAll(".accordion__item");

    accordionItem.forEach((item) => {
        item.querySelector(".question").addEventListener("click", () => {
            item.classList.toggle("active");  
        });
    });
}

function main() {
    setupAccordion();
}

main();