/* Script JS */

document.addEventListener("DOMContentLoaded", () => {
    /* Page changée */

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

        /* Défilement automatique
        setInterval(() => {

            switch(imageNb){
                case 1:
                    slider.style.backgroundPosition = "center";
                    imageNb++;
                    break;
                case 2:
                    slider.style.backgroundPosition = "right";
                    imageNb = 0;
                    break;
                default:
                    slider.style.backgroundPosition = "left";
                    imageNb++;
            }

        }, 5000);*/

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