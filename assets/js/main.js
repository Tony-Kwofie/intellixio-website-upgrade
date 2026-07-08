// ==================================
// INTELLIXIO MAIN JS
// ==================================

document.addEventListener("DOMContentLoaded", () => {

    // ==================================
    // SCROLL REVEAL
    // ==================================

    const reveals =
        document.querySelectorAll(".reveal");

    function revealOnScroll() {

        reveals.forEach(item => {

            const windowHeight =
                window.innerHeight;

            const revealTop =
                item.getBoundingClientRect().top;

            const revealPoint = 120;

            if (revealTop < windowHeight - revealPoint) {

                item.classList.add("active");

            } else {

                item.classList.remove("active");

            }

        });

    }

    window.addEventListener(
        "scroll",
        revealOnScroll
    );

    revealOnScroll();

    // ==================================
    // NAVBAR EFFECT
    // ==================================

    const navbar =
        document.querySelector(".navbar");

    if (navbar) {

        window.addEventListener("scroll", () => {

            if (window.scrollY > 50) {

                navbar.style.background =
                    "rgba(11,17,32,.95)";

                navbar.style.boxShadow =
                    "0 10px 40px rgba(59,130,246,.15)";

            } else {

                navbar.style.background =
                    "rgba(255,255,255,.05)";

                navbar.style.boxShadow =
                    "0 0 25px rgba(59,130,246,.10)";

            }

        });

    }

    // ==================================
    // ACTIVE MENU
    // ==================================

    const currentPage =
        window.location.pathname.split("/").pop();

    const navLinks =
        document.querySelectorAll("nav a");

    navLinks.forEach(link => {

        const href =
            link.getAttribute("href");

        if (href === currentPage) {

            link.classList.add("active-link");

        }

    });

    // ==================================
    // SMOOTH SCROLL
    // ==================================

    document
        .querySelectorAll('a[href^="#"]')
        .forEach(anchor => {

            anchor.addEventListener(
                "click",
                function (e) {

                    const target =
                        document.querySelector(
                            this.getAttribute("href")
                        );

                    if (!target) return;

                    e.preventDefault();

                    target.scrollIntoView({

                        behavior: "smooth",
                        block: "start"

                    });

                }
            );

        });

    // ==================================
    // CARD INTERACTIONS
    // ==================================

    const cards =
        document.querySelectorAll(
            ".glass-card, .trust-card, .problem-card, .industry-card"
        );

    cards.forEach(card => {

        card.addEventListener("mouseenter", () => {

            card.style.boxShadow =
                "0 0 40px rgba(59,130,246,.25)";

        });

        card.addEventListener("mouseleave", () => {

            card.style.boxShadow = "";

        });

    });

    // ==================================
    // CONTACT FORM
    // ==================================

    const contactForm =
        document.querySelector(".contact-form");

    if (contactForm) {

        contactForm.addEventListener(
            "submit",
            () => {

                const btn =
                    contactForm.querySelector("button");

                if (btn) {

                    btn.innerHTML =
                        "Sending...";

                    btn.disabled = true;

                }

            }
        );

    }

    // ==================================
    // DASHBOARD PARALLAX
    // ==================================

    const dashboard =
        document.querySelector(".dashboard-preview");

    if (
        dashboard &&
        window.innerWidth > 992
    ) {

        window.addEventListener(
            "mousemove",
            (e) => {

                const x =
                    (window.innerWidth / 2 - e.pageX) / 60;

                const y =
                    (window.innerHeight / 2 - e.pageY) / 60;

                dashboard.style.transform =
                    `translate(${x}px, ${y}px)`;

            }
        );

    }

    // ==================================
    // BACK TO TOP
    // ==================================

    const topButton =
        document.getElementById("backToTop");

    if (topButton) {

        window.addEventListener(
            "scroll",
            () => {

                if (window.scrollY > 500) {

                    topButton.classList.add("show");

                } else {

                    topButton.classList.remove("show");

                }

            }
        );

        topButton.addEventListener(
            "click",
            () => {

                window.scrollTo({

                    top: 0,
                    behavior: "smooth"

                });

            }
        );

    }

    // ==================================
    // MOBILE MENU
    // ==================================

    const menuButton =
        document.querySelector(".menu-toggle");

    const mobileNav =
        document.querySelector(".mobile-nav");

    if (menuButton && mobileNav) {

        menuButton.addEventListener(
            "click",
            () => {

                mobileNav.classList.toggle("active");

                menuButton.classList.toggle("active");

                if (
                    mobileNav.classList.contains("active")
                ) {

                    menuButton.innerHTML = "✕";

                } else {

                    menuButton.innerHTML = "☰";

                }

            }
        );

        // Close menu when link clicked

        mobileNav
            .querySelectorAll("a")
            .forEach(link => {

                link.addEventListener(
                    "click",
                    () => {

                        mobileNav.classList.remove("active");

                        menuButton.classList.remove("active");

                        menuButton.innerHTML = "☰";

                    }
                );

            });

        // Reset on desktop

        window.addEventListener(
            "resize",
            () => {

                if (window.innerWidth > 991) {

                    mobileNav.classList.remove("active");

                    menuButton.innerHTML = "☰";

                }

            }
        );

    }

    // ==================================
    // WEBSITE READY
    // ==================================

    console.log(
        "Intellixio Technologies Website Loaded Successfully"
    );

});