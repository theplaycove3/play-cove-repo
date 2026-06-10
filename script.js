// =============================
// HEADER SHADOW
// =============================

window.addEventListener("scroll", () => {

    const header = document.querySelector(".header");

    if (window.scrollY > 20) {

        header.style.boxShadow =
            "0 6px 25px rgba(0,0,0,.15)";

    } else {

        header.style.boxShadow = "none";

    }

});

// =============================
// MOBILE RESPONSIVE TEXT
// =============================

function updateMobileText() {
    const bookBtn = document.querySelector(".book-btn");
    const tagline = document.querySelector(".tagline");
    const sectionH2 = document.querySelector(".section h2");

    if (window.innerWidth <= 768) {
        bookBtn.textContent = "BOOK NOW";
        if (tagline) tagline.style.display = "none";
        if (sectionH2) sectionH2.textContent = "Welcome to Play Cove";
    } else {
        bookBtn.textContent = "PARTY BOOKING";
        if (tagline) tagline.style.display = "block";
        if (sectionH2) sectionH2.textContent = "Welcome to Play Cove";
    }
}

window.addEventListener("load", updateMobileText);
window.addEventListener("resize", updateMobileText);

// =============================
// CARD SCROLL ANIMATION
// =============================

const cards = document.querySelectorAll(".card");

const cardObserver = new IntersectionObserver(

    (entries) => {

        entries.forEach((entry) => {

            if (entry.isIntersecting) {

                entry.target.classList.add("show-card");

            }

        });

    },

    {
        threshold: 0.2
    }

);

cards.forEach((card) => {

    cardObserver.observe(card);

});

// =============================
// ACTIVE NAVIGATION
// =============================

const sections = document.querySelectorAll("section");

const navLinks =
    document.querySelectorAll("nav a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach((section) => {

        const sectionTop =
            section.offsetTop - 150;

        const sectionHeight =
            section.clientHeight;

        if (
            pageYOffset >= sectionTop &&
            pageYOffset <
            sectionTop + sectionHeight
        ) {
            current = section.getAttribute("id");
        }

    });

    navLinks.forEach((link) => {

        link.classList.remove("active-link");

        if (
            link.getAttribute("href") ===
            `#${current}`
        ) {

            link.classList.add("active-link");

        }

    });

});

// =============================
// BUTTON RIPPLE EFFECT
// =============================

const buttons =
    document.querySelectorAll(
        ".book-btn,.call-contact,.wa-contact"
    );

buttons.forEach((button) => {

    button.addEventListener("click", function(e){

        const circle =
            document.createElement("span");

        const diameter =
            Math.max(
                this.clientWidth,
                this.clientHeight
            );

        circle.style.width =
            circle.style.height =
                `${diameter}px`;

        circle.style.left =
            `${e.clientX -
            this.offsetLeft -
            diameter / 2}px`;

        circle.style.top =
            `${e.clientY -
            this.offsetTop -
            diameter / 2}px`;

        circle.classList.add("ripple");

        const ripple =
            this.querySelector(".ripple");

        if(ripple){

            ripple.remove();

        }

        this.appendChild(circle);

    });

});

// =============================
// PAGE LOAD ANIMATION
// =============================

window.addEventListener("load", () => {

    document.body.classList.add(
        "page-loaded"
    );

});

// =============================
// MAP TOGGLE
// =============================

const toggleMapBtn = document.getElementById("toggle-map");
const mapContainer = document.getElementById("map-container");

toggleMapBtn.addEventListener("click", (e) => {
    e.preventDefault();

    const addressLabel = toggleMapBtn.querySelector('a') || toggleMapBtn;
    const textNode = Array.from(toggleMapBtn.childNodes).find(node => node.nodeType === 3);

    if (mapContainer.style.display === "none") {
        mapContainer.style.display = "block";
        if (textNode) {
            textNode.textContent = "\n\nADDRESS (CLICK TO HIDE MAP)\n\n";
        }
    } else {
        mapContainer.style.display = "none";
        if (textNode) {
            textNode.textContent = "\n\nADDRESS (CLICK TO VIEW MAP)\n\n";
        }
    }
});