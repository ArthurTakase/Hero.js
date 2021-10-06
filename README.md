# Hero.js

Hero.js est un projet OpenSource de moteur de jeu de type Visual Novel.

Vous pouvez voir l'avancée du projet en allant sur la branche "develop" du projet ou en vous rendant sur la [RoadMap](https://icy-wind-398.notion.site/7491a484d7c04780a355470017cd76c2?v=b84e9b3d9c754a97b857863aed9811e7).
## Objectif

Le but de ce projet est de permettre la création simple et rapide de Visual Novel (d'un simple Doki Doki à un micro JDR avec systeme de combats) sans coder.
En effet, tous les codes importants se trouvent dans le moteur, les utilisateurs n'ont qu'à écrire un simple fichier json avec les informations de leur jeu.

## Exemple

Un exemple d'utilisation de Hero.js se trouve dans les fichiers `gameExemple.hero` et `gameExemple.json`.
Les deux fichiers sont identiques, le format .hero est juste présent pour éviter que les gens tentent d'ouvrir le fichier pour le modifier (même si c'est toujours possible, ça reste un fichier texte).

## Documentation

Pour le moment, seules les options particulières seront listées. Les options basiques sont lisibles depuis le fichier d'exemple.

### Mot clefs

| |Description|Player|Skill|Inventory|Special|
|-|-----------|------|-----|---------|-------|
|RANDOM,min,max|Donne un int aléatoire entre min et max. Si max == DICE, alors la valeur maximale sera celle renseignée pour maxDice.|ability, stamina, meal, gold|✖|✖|✖|
|RANDOM_IN_CLASS|Donne un élément au hasard dans la liste d'Objets de son type initialisés en début de partie.|✖|Liste|Liste|Liste|
|RANDOM_IN_CLASS_UNIQUE|Donne un élément au hasard dans la liste d'Objets de son type initialisé en début de partie. L'item donné est forcement différent de ceux de l'inventaire actuel du joueur.|✖|Liste|Liste|Liste|

### Conditions
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

### Effets
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
