/* Script JS */

// animations d'entrée et de sortie
function gererAnimations(){
    const elements = document.querySelectorAll('.animation-entree, .timeline ul li');
  
    elements.forEach(element => {
        const rect = element.getBoundingClientRect();

        // 100 pour qu'on puisse voir l'élément apparaitre et disparaitre
        if (rect.top < window.innerHeight - 100 && rect.bottom > 100) {
            element.classList.add('visible');
        } else{
            element.classList.remove('visible');
        }
    });
}

document.addEventListener("DOMContentLoaded", () => {
    /* Page chargée */

    // initialiser animations
    gererAnimations();

    // Gestion menu

    let isMenuOpened = false;
    document.getElementById("bouton-menu").addEventListener("click", () => {
        if(!isMenuOpened){
            document.getElementById("menu-mobile").classList.add("ouvert");
            isMenuOpened = true;
        }
        else{
            document.getElementById("menu-mobile").classList.remove("ouvert");
            isMenuOpened = false;
        }
    })

    // Slider

    let slider = document.querySelector(".slider");

    if(slider){
        // changement automatique au bout de 5s

        let imageNb = 0;

        //Défilement automatique
        setInterval(() => {

            switch(imageNb){
                case 0:
                    slider.style.backgroundPosition = "center";
                    imageNb = 1;
                    break;
                case 1:
                    slider.style.backgroundPosition = "right";
                    imageNb = 2;
                    break;
                case 2:
                    slider.style.backgroundPosition = "left";
                    imageNb = 0;
            }

        }, 5000);

        // gestion clique flèches
        let flecheGauche = slider.querySelector("img:first-child");
        let flecheDroite = slider.querySelector("img:last-child");

        flecheDroite.addEventListener("click", () => {
            switch(imageNb){
                case 0:
                    slider.style.backgroundPosition = "center";
                    imageNb = 1;
                    break;
                case 1:
                    slider.style.backgroundPosition = "right";
                    imageNb = 2;
                    break;
                case 2:
                    slider.style.backgroundPosition = "left";
                    imageNb = 0;
                    break;
            }
        })

        flecheGauche.addEventListener("click", () => {
            switch(imageNb){
                case 0:
                    slider.style.backgroundPosition = "right";
                    imageNb = 2;
                    break;
                case 1:
                    slider.style.backgroundPosition = "left";
                    imageNb = 0;
                    break;
                case 2:
                    slider.style.backgroundPosition = "center";
                    imageNb = 1;
                    break;
            }
        })
    }
})

document.body.addEventListener("scroll", () => {

    // gestion bouton retour en haut
    let bouton = document.querySelector("body > aside")


    // tout en haut => bouton pas visible, dès qu'on scroll => visible
    if(bouton){
        if(window.scrollY > 400){
            bouton.style.opacity = "1";
            bouton.style.pointerEvents = "auto"
        }
        else{
            bouton.style.opacity = "0";
            bouton.style.pointerEvents = "none"
        }
    }


    gererAnimations();
})