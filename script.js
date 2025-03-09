document.addEventListener("DOMContentLoaded", function () {
    console.log("Trang đã tải hoàn tất");
    let images = document.querySelectorAll(".gallery img");
    
    images.forEach(img => {
        img.addEventListener("mouseover", () => img.style.opacity = "0.7");
        img.addEventListener("mouseleave", () => img.style.opacity = "1");
        img.addEventListener("focus", () => img.style.border = "3px solid blue");
        img.addEventListener("blur", () => img.style.border = "none");
    });
});
