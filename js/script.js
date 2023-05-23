let previousScrollPosition = 0;

const isScrollingDown = () => {
    let currentScrolledPosition = window.scrollY || window.pageYOffset;
    let scrollingDown;

    if (currentScrolledPosition > previousScrollPosition) {
        scrollingDown = true;
    } else {
        scrollingDown = false;
    }
    previousScrollPosition = currentScrolledPosition;
    return scrollingDown;
};

const nav = document.querySelector('.navbar');

function toggleMenu(x) {
    x.classList.toggle("change");
    const y = document.querySelector(".nav-overlay");
    y.classList.toggle("hidden");
    const w = document.querySelector(".about-me");
    w.classList.toggle("collapsed");
}

function toggleDark() {
    nav.classList.toggle("navbar-dark");
    const x = document.querySelector(".navbar-brand");
    x.classList.toggle("navbar-brand-dark")
    const y = document.querySelectorAll(".nav-link");
    y.forEach((navLink) => {
        navLink.classList.toggle("nav-link-dark");
    });
    const w = document.querySelector(".about-me");
    w.classList.toggle("about-me-dark");
    const u = document.querySelector(".code-samples");
    u.classList.toggle("code-samples-dark");
    const r = document.querySelector(".skills");
    r.classList.toggle("skills-dark");
    const p = document.querySelector(".contact");
    p.classList.toggle("contact-dark");
}

const handleNavScroll = () => {
    if (isScrollingDown() && !nav.contains(document.activeElement)) {
        nav.classList.add('scroll-down');
        nav.classList.remove('scroll-up');
    } else {
        nav.classList.add('scroll-up');
        nav.classList.remove('scroll-down');
    }
    console.log(nav.classList);
}

var throttleTimer;

const throttle = (callback, time) => {
    if (throttleTimer) return;

    throttleTimer = true;
    setTimeout(() => {
        callback();
        throttleTimer = false;
    }, time);
};

const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");

window.addEventListener("scroll", () => {
    if (mediaQuery && !mediaQuery.matches) {
        throttle(handleNavScroll, 250);
    }
});
