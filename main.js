// === БУРГЕР-МЕНЮ ===
const burger = document.querySelector(".burger");
const nav = document.getElementById("main-nav");

if (burger && nav) {
    burger.addEventListener("click", () => {
        burger.classList.toggle("burger--active");
        nav.classList.toggle("nav--open");
    });

    // закрывать меню после перехода по ссылке
    nav.querySelectorAll("a[href^='#']").forEach((link) => {
        link.addEventListener("click", () => {
            burger.classList.remove("burger--active");
            nav.classList.remove("nav--open");
        });
    });
}

// === ПЛАВНЫЙ СКРОЛЛ ===
document.querySelectorAll("a[href^='#']").forEach((link) => {
    link.addEventListener("click", (e) => {
        const id = link.getAttribute("href").slice(1);
        const target = document.getElementById(id);
        if (!target) return;

        e.preventDefault();
        const headerOffset = 70;
        const top =
            target.getBoundingClientRect().top + window.scrollY - headerOffset;

        window.scrollTo({
            top,
            behavior: "smooth",
        });
    });
});

// === ПОЯВЛЕНИЕ .reveal ЭЛЕМЕНТОВ ===
const revealElements = document.querySelectorAll(".reveal");

function handleReveal() {
    const triggerBottom = window.innerHeight * 0.85;

    revealElements.forEach((el) => {
        const boxTop = el.getBoundingClientRect().top;

        if (boxTop < triggerBottom) {
            el.classList.add("reveal--visible");
        }
    });
}

window.addEventListener("scroll", handleReveal);
window.addEventListener("load", handleReveal);

// === ОБРАБОТКА ФОРМЫ (ДЕМО) ===
const form = document.getElementById("contact-form");
const messageBox = document.getElementById("contact-message");

if (form && messageBox) {
    form.addEventListener("submit", (e) => {
        e.preventDefault();

        messageBox.textContent = "Повідомлення надіслано (демо)";
        messageBox.style.opacity = "1";

        setTimeout(() => {
            messageBox.style.opacity = "0.7";
        }, 2000);

        form.reset();
    });
}
