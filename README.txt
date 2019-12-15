Pour lancer l'application :

- Récupérer le dossier sur GitLab
- npm install (pour installer toutes dépendances)
- npm start (lancement de l'application)


Informations supplémentaires :

Notre application permet à un utilisateur de se connecter, une fois connecté il sera reconnu en tant qu'admin , chef de projet ou utilisateur lambda selon son rôle. S'il s'agit d'un admin ou chef de projet, il aura alors accès aux fiches sinon l'accès lui sera impossible.
Les informations sur les utilisateurs se trouvent dans le fichier users.json, c'est ce que nous avons utilisé comme bouchon.
Les informations sur les fiches se trouvent dans le fichier fiches.json.
Nous avons une page de création/edition des comptes et un page de création/édition des fiches.
Les informations sur les comptes et les fiches lors de la soumission sont stockées dans le state du component.
Nous avions prévu d'écrire sur les fichiers json les comptes et fiches crées et pour la recherche nous voulions afficher seulement la mission en question nous n'avons pu faire que l'autocomplétion du nom.

Difficultés rencontrées : 

- Ecriture sur un fichier json qui normalement devrait être fait en Node JS.
- Gestion des droits (nous avons régler ce problème)
- Modification des comptes et fiches (problème non résolu)
- Gestion du contexte (évenement qui ne connait pas le this et donc pas l'état du state)

Conclusion :

Malgré la contrainte temporelle et le fait que nous soyons que 2 pour un tel projet, nous avons découvert la bibiothèque React JS, une bibliotèque basée sur des composants. Cela diffère de ce que nous avions pu voir jusqu'à présent. Un projet très enrichissant ne serait-ce que pour notre expérience en terme de developpement d'application. Il est dommage que nous n'ayons pas eu un peu plus de temps pour améliorer ce projet.

