
new WOW().init();

let scrollButton = document.getElementById("scrollTopBtn");

window.onscroll = function () {
    if (document.documentElement.scrollTop > 200) {
        scrollButton.style.display = "block";
    } else {
        scrollButton.style.display = "none";
    }
};

function scrollToTop() {
    window.scrollTo({ top: 0, behavior: "smooth" });
}


function toggleMenu() {
    document.querySelector(".sidebar").classList.toggle("active");
}
document.querySelectorAll(".sidebar a").forEach(link => {
    link.addEventListener("click", () => {
        document.querySelector(".sidebar").classList.remove("active");
    });
});