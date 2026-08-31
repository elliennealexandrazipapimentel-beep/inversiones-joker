/* =========================================================
   INVERSIONES JOKER INTERNATIONAL S.A.S.
   JAVASCRIPT
========================================================= */

document.addEventListener("DOMContentLoaded", function () {


    /* =====================================================
       ANIMACIÓN AL HACER SCROLL
    ===================================================== */

    const elementos = document.querySelectorAll(
        ".info-card, .value-item, .sede-card, .contact-card, .empresa-image, .trabaja-content"
    );

    const observador = new IntersectionObserver(
        (entradas) => {

            entradas.forEach((entrada) => {

                if (entrada.isIntersecting) {

                    entrada.target.classList.add("visible");

                }

            });

        },
        {
            threshold: 0.15
        }
    );


    elementos.forEach((elemento) => {

        observador.observe(elemento);

    });



    /* =====================================================
       CAMBIAR APARIENCIA DE LA NAVBAR AL HACER SCROLL
    ===================================================== */

    const navbar = document.querySelector(".navbar");

    window.addEventListener("scroll", function () {

        if (window.scrollY > 50) {

            navbar.classList.add("navbar-scroll");

        } else {

            navbar.classList.remove("navbar-scroll");

        }

    });



    /* =====================================================
       CERRAR MENÚ AL HACER CLICK EN UN ENLACE
       (ÚTIL PARA CELULARES)
    ===================================================== */

    const enlacesMenu = document.querySelectorAll(".nav-menu a");

    enlacesMenu.forEach((enlace) => {

        enlace.addEventListener("click", function () {

            enlacesMenu.forEach((item) => {

                item.classList.remove("activo");

            });

            this.classList.add("activo");

        });

    });



    /* =====================================================
       ANIMACIÓN SUAVE DE BOTONES
    ===================================================== */

    const botones = document.querySelectorAll(
        ".btn-primary, .btn-outline, .sede-link, .contact-card a"
    );

    botones.forEach((boton) => {

        boton.addEventListener("mouseenter", function () {

            this.style.transition = "0.3s ease";

        });

    });



    /* =====================================================
       AÑO AUTOMÁTICO DEL FOOTER
    ===================================================== */

    const año = new Date().getFullYear();

    const textoFooter = document.querySelector(".footer-bottom p");

    if (textoFooter) {

        textoFooter.innerHTML =
            `© ${año} Inversiones Joker International S.A.S.
            Todos los derechos reservados.`;

    }



    /* =====================================================
       BOTONES "CÓMO LLEGAR"
    ===================================================== */

    const enlacesMaps = document.querySelectorAll(
        'a[href*="google.com/maps"]'
    );

    enlacesMaps.forEach((enlace) => {

        enlace.addEventListener("click", function () {

            console.log("Abriendo ubicación en Google Maps...");

        });

    });



    /* =====================================================
       EFECTO PARALLAX DEL HERO
    ===================================================== */

    const hero = document.querySelector(".hero");

    window.addEventListener("scroll", function () {

        if (!hero) return;

        const desplazamiento = window.scrollY;

        if (desplazamiento < window.innerHeight) {

            hero.style.backgroundPosition =
                `center ${desplazamiento * 0.25}px`;

        }

    });



    /* =====================================================
       EFECTO SOBRE LAS TARJETAS DE LAS SEDES
    ===================================================== */

    const sedes = document.querySelectorAll(".sede-card");

    sedes.forEach((sede) => {

        sede.addEventListener("mouseenter", function () {

            this.style.transform = "translateY(-10px)";

        });

        sede.addEventListener("mouseleave", function () {

            this.style.transform = "translateY(0)";

        });

    });



    /* =====================================================
       MENSAJE EN CONSOLA
    ===================================================== */

    console.log(
        "JOKER INTERNATIONAL - Página cargada correctamente."
    );

});