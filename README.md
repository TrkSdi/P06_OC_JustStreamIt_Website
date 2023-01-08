# JUSTSTREAMIT SITEWEB PROJECT

## Installation

Cette API exécutable localement peut être installée en suivant les étapes décrites ci-dessous. L'usage de pipenv est recommandé, mais des instuctions utilisant venv et pip sont également fournies plus bas. Si pipenv n'est pas encore installé sur votre ordinateur, vous trouverez des instuctions d'installation détaillées [sur cette page](docs/pipenv/installation-fr.md).

## Installation et exécution de l'application avec pipenv

1. Cloner ce dépôt de code à l'aide de la commande `$ git clone clone https://github.com/OpenClassrooms-Student-Center/OCMovies-API-EN-FR.git` (vous pouvez également télécharger le code [en temps qu'archive zip](https://github.com/OpenClassrooms-Student-Center/OCMovies-API-EN-FR/archive/refs/heads/master.zip))
2. Rendez-vous depuis un terminal à la racine du répertoire ocmovies-api-fr avec la commande `$ cd ocmovies-api-fr`
3. Installez les dépendances du projet à l'aide de la commande `pipenv install` 
4. Créer et alimenter la base de données à l'aide de la commande `pipenv run python manage.py create_db`
5. Démarrer le serveur avec `pipenv run python manage.py runserver`

## Accéder aux site:

1. Accéder au chemin de index.html
2. Double cliquer sur le fichier 