document.addEventListener("DOMContentLoaded", () => {
    const items = document.querySelectorAll(".trait-list li");
    items.forEach((item, index) => {
        setTimeout(() => {
            item.classList.add("show");
        }, index * 500); // 500ms delay between each item appearing
    });
});