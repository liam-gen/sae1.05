# Consignes

## Arborescence

- Utilisez vos dossier dans assets/images pour mettre les images de votre page
- Mettez vos icons dans assets/icons

## Pages HTML

- Ne modifiez que l'intérieur du main (normalement le reste fonctionne touchez pas ptdrrr)

## Style CSS

- Modifiez uniquement la partie de votre page (et les variables à la limite) (touchez pas au style de base par pitié)
- Évitez de mettre directement les couleurs importantes en brut ou plusieurs valeurs récurrentes
    - Utilisez par ex: color: var(--couleur-accent) pour avoir le bleu
    - La liste des variables est dans :root
    - https://developer.mozilla.org/fr/docs/Web/CSS/Guides/Cascading_variables/Using_custom_properties


# Utiliser GIT

## Première fois

- `git clone https://github.com/liam-gen/sae1.05.git` *à faire une seule fois*

## A chaque fois que vous voulez coder

- `git pull` *récupérer les dernières mises à jour*

## A chaque fois que vous voulez envoyer des nouveautés

- `git add .` *ajouter tous les fichiers*
- `git commit -m "message"` *créer un commit avec tous les fichiers (mettez un message explicit par pitié => les profs pourront voir)*
- `git push` *envoyer tous les commits vers le dépôt distant*