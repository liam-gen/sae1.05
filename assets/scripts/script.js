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
})