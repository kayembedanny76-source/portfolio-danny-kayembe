// Message dans la console
console.log("Bienvenue sur le portfolio de Danny Kayembe");


// Défilement doux des liens du menu

document.querySelectorAll("nav a").forEach(lien => {

    lien.addEventListener("click", function(e) {

        e.preventDefault();

        const section = document.querySelector(this.getAttribute("href"));

        section.scrollIntoView({
            behavior: "smooth"
        });

    });

});


// Animation des sections au défilement

const sections = document.querySelectorAll("section");


const observer = new IntersectionObserver(entries => {

    entries.forEach(entry => {

        if(entry.isIntersecting){

            entry.target.style.opacity = "1";
            entry.target.style.transform = "translateY(0)";

        }

    });

}, {
    threshold: 0.2
});


sections.forEach(section => {

    section.style.opacity = "0";
    section.style.transform = "translateY(40px)";
    section.style.transition = "1s ease";

    observer.observe(section);

});


// Année automatique dans le footer

const annee = new Date().getFullYear();

document.querySelector("footer p").innerHTML =
"© " + annee + " Danny Kayembe Mbiya - Tous droits réservés";