# Hero.js

Hero.js est un projet OpenSource de moteur de jeu de type Visual Novel.

Vous pouvez voir l'avancée du projet en allant sur la branche "develop" du projet ou en vous rendant sur la [RoadMap](https://icy-wind-398.notion.site/7491a484d7c04780a355470017cd76c2?v=b84e9b3d9c754a97b857863aed9811e7).
## Objectif

Le but de ce projet est de permettre la création simple et rapide de Visual Novel (d'un simple Doki Doki à un micro JDR avec systeme de combats) sans coder.
En effet, tous les codes importants se trouvent dans le moteur, les utilisateurs n'ont qu'à écrire un simple fichier json avec les informations de leur jeu.

## Exemple

Un exemple d'utilisation de Hero.js se trouve dans le fichier `gameExemple.json`.

# Documentation

## MOTS CLEF

| |Description|Fonctionne sur|
|-|-----------|--------------|
|`RANDOM,min,max`|Donne un int aléatoire entre 0 et max en ajoutant min. Si max est égal à `DICE`, alors la valeur maximale du random sera celle renseignée pour `maxDice`.|`player.ability`, `player.stamina`, `player.meal`, `player.gold`, `conditionData.GOLD`, `conditionData.MEAL`, `conditionData.STAMINA`, `conditionData.ABILITY`|
|`RANDOM_IN_CLASS`|Donne un élément au hasard dans la liste d'Objets de son type initialisés en début de partie.|`Skills Liste`, `Inventory Liste`, `Special Liste`|
|`RANDOM_IN_CLASS_UNIQUE`|Donne un élément au hasard dans la liste d'Objets de son type initialisé en début de partie. L'item donné est forcement différent de ceux de l'inventaire actuel du joueur.|`Skills Liste`, `Inventory Liste`, `Special Liste`|

## CLASSES

#### Skills

```
"name": "nom de la compétence",
"stats":
[
  0, // bonus ability
  0 // bonus stamina
]
```

#### Objects

```
"name": "nom de l'objet",
"type": "inventory", // "special", type d'inventaire de destination
"data":
[
  0, // bonus ability
  0, // bonus stamina
  0, // bonus gold
  0 // bonus meal
]
```

#### Button

Le bouton créé ici est un bouton sans options supplementaires. Pour plus d'infos, rendez-vous dans la partie CONDITIONS et EFFETS. Les textes générés sont adaptés en HTML, les balises de formatage sont donc aussi disponibles (<\i>, <\b>, <\u>, etc...).

```
"text": "texte du bouton",
"goToIndex": 1 // index du dialogue à jouer si ce bouton est cliqué
```

#### Dialogs

Les textes générés sont adaptés en HTML, les balises de formatage sont donc aussi disponibles (<\i>, <\b>, <\u>, etc...).

```
"title": "Nom du personnage", // OPTIONNEL
"body": "Corps du dialogue",
"action": "Choisissez quoi lui répondre", // OPTIONNEL
"buttons":
[
  // objet Button
],
"img": "img/isaac.png", // OPTIONNEL, image au milieu de l'écran
"background": "img/house.jpg" // image de fond
```

#### Player

Si `player` est initialisé à `null`, alors la partie n'aura pas l'HUD correspondant au joueur. Cela peut servir pour un Visual Novel plus simpliste. Pour remplir les listes, vous pouvez vous servir dans celles générées dans la partie `gameplay` ou simplement générer un nouvel objet.

```
"ability": "RANDOM,10,DICE", // Ability de base du personnage
"stamina": 30, // Stamina de base du personnage
"meal": 1, // Nombre de repas par défaut dans l'inventaire du joueur
"gold": "RANDOM,0,20", // Gold de base du joueur
"inventory": // Inventaire de base du joueur
[
  "gameboy",
  "RANDOM_IN_CLASS_UNIQUE"
],
"special":
[
  "RANDOM_IN_CLASS_UNIQUE"
],
"skills": // Compétences de base du joueur.
[
  "RANDOM_IN_CLASS"
]
```

## JEU

#### gameInfos

`gameInfos` est __obligatoire__ pour le bon fonctionnement du programme. Les éléments non obligatoires sont notifiés.
```
"title": "Nom du jeu", // Titre du jeu
"startNumber": 0, // Premier dialogue à afficher
"maxDice": 9, // Valeur maximale pour les lancés de dés
"maxSkills": 0, // Nombre max de compétences pour le joueur
"showTitle": false // OPTIONNEL, permet de choisir si le titre est affiché en jeu
```

#### gameplay

`gameplay` et ses options sont tous optionnels.
```
"skills": // Liste des compétences du jeu
[
  {"name": "camouflage", "stats": [0, 0]} // objet Skill
],
"objectsInventory":
[
  {"name": "gameboy", "type": "inventory", "data": [0, 0, 0, 0]} // objet Object
],
"objectsSpecial": []
```

#### Dialogs

`dialogs` est une liste de tous les dialogues du jeu. Chaque dialogue est un objet Dialog (plus d'infos dans les Classes).

```
[
  // objet DIALOG,
  // objet DIALOG
]
```

## CONDITIONS
Les données suivantes sont à mettre en plus des autres options d'un bouton.
#### GOLD
Vérifie si le joueur a l'argent requis pour passer à la scène suivante.
```
"condition": "GOLD",
"conditionData":
[
  true, // false -> vérifier supériorité
  10 // -> Valeur barrière
]
```

#### MEAL
Vérifie si le joueur a le nombre de repas requis pour passer à la scène suivante.
```
"condition": "MEAL",
"conditionData":
[
  true, // false -> vérifier supériorité
  10 // -> Valeur barrière
]
```

#### STAMINA
Vérifie si le joueur a la stamina requise pour passer à la scène suivante.
```
"condition": "STAMINA",
"conditionData":
[
  true, // false -> vérifier supériorité
  10 // -> Valeur barrière
]
```

#### ABILITY
Vérifie si le joueur a l'abilité requise pour passer à la scène suivante.
```
"condition": "ABILITY",
"conditionData":
[
  true, // false -> vérifier supériorité
  10 // -> Valeur barrière
]
```

#### SKILL
Vérifie si le joueur possède la capacité demandée pour passer à la scène suivante.
```
"condition": "SKILL",
"conditionData":
[
  true, // false -> est présent dans les compétences
  "sixième sens" // -> nom du skill à chercher
]
```

#### OBJECT
Vérifie si le joueur possède l'objet demandé pour passer à la scène suivante.
```
"condition": "OBJECT",
"conditionData":
[
  true, // false -> est présent dans l'inventaire
  "inventory", // "special" -> type d'inventaire à fouiller
  "gameboy" // -> nom de l'objet à chercher
]
```

## EFFETS
Les données suivantes sont à mettre en plus des autres options d'un bouton. Les effets ne se déclenchent que si les conditions d'un bouton sont validées.

#### REMOVE_OBJECT
Supprime un objet d'un inventaire du joueur lors du passage à la scène suivante. Supprime également ses effets sur le joueur.
```
"effect": "REMOVE_OBJECT",
"effectData":
[
  "inventory", // "special" -> type d'inventaire à fouiller
  "gameboy", // item à supprimer
]
```

#### ADD_OBJECT
Ajoute un objet dans l'un des inventaires du joueur lors du passage à la scène suivante. Ajoute également ses effets sur le joueur. Utilisation des mots clefs autorisée.
```
"effect": "REMOVE_OBJECT",
"effectData":
[
  "inventory", // "special" -> inventaire à remplir
  "gameboy", // item à ajouter
]
```