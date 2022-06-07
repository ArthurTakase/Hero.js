const language = {
    "fr": {
        "title": "Hero.js | Générateur",
        "version": "v1.0.6",
        "navHeader": "Hero.js",
        "GameInfosTitle": "Informations",
        "GameInfosGeneral": "Générales",
        "GameinfosDisplay": "Affichage",
        "GameInfosStyle": "Style",
        "DataTitle": "Données",
        "DataSkills": "Compétences",
        "DataObjects": "Objets",
        "DataPictures": "Images",
        "DataSounds": "Sons",
        "PlayerTitle": "Joueur",
        "DialogTitle": "Dialogues",
        "DialogCreate": "Créer",
        "DialogList": "Liste",
        "DialogMap": "Carte",
        "LanguageTitle": "Langue",
        "ThemeTitle": "Thèmes",
        "LoadTitle": "Charger",
        "SaveTitle": "Sauvegarder",
        "DeleteMsg": "Toute suppression est définitive et peut entrainer des problèmes dans votre jeu.",
        "DeleteConfirm": "Confirmer",
        "EditCmd": "Editer",
        "DeleteCmd": "Supprimer",
        "Home": "Accueil",
        "Informations": "<h3>Raccourcis</h3>\
                        <b>Ctrl + S</b> Sauvegarder le projet<br>\
                        <b>Ctrl + D</b> Charger un projet<br>\
                        <b>Ctrl + F</b> Activer le mode avancé<br>\
                        <br><h3>Documentations</h3>\
                        <a style='color: var(--accent-color); text-decoration: none; transition: .2s;' href='https://icy-wind-398.notion.site/D-tails-de-l-interface-de-cr-ation-c8542e3a1a624e979badac7de1285f8b' target='_blank'>🇫🇷 Détails de l'interface de création</a><br>\
                        <a style='color: var(--accent-color); text-decoration: none; transition: .2s;'' href='https://icy-wind-398.notion.site/Correction-des-erreurs-classiques-194bd01a71cc4bb29dfcdf958d2926af' target='_blank'>🇫🇷 Correction des erreurs classiques</a><br>\
                        <a style='color: var(--accent-color); text-decoration: none; transition: .2s;' href='https://icy-wind-398.notion.site/FAQ-0cf40d6d48d44d1d9f9e4b931041c04a' target='_blank'>🇫🇷 FAQ</a>",
        "HomeMsg": 'Hero.js est un lecteur/générateur de <b>Visual Novel</b> entièrement <b>OpenSource</b>.\
                        Le but de ce projet est de permettre à tout le monde de créer facilement ses jeux (d\'un simple Doki Doki à un JDR avec systeme de combat), <b>sans coder</b>.\
                        Alors qu\'attendez-vous pour écrire vos histoire ?<br><br>\
                        Si vous avez le compétences nécessaires, vous pouvez participer au développement du projet sur <a href="https://github.com/ArthurTakase/Heros.js" target="_blank" style="color: var(--accent-color);">github</a>!<br>'
    },
    "en": {
        "title": "Hero.js | Generator",
        "version": "v1.0.6",
        "navHeader": "Hero.js",
        "GameInfosTitle": "Game Infos",
        "GameInfosGeneral": "General",
        "GameinfosDisplay": "Display",
        "GameInfosStyle": "Style",
        "DataTitle": "Data",
        "DataSkills": "Skills",
        "DataObjects": "Objects",
        "DataPictures": "Pictures",
        "DataSounds": "Sounds",
        "PlayerTitle": "Player",
        "DialogTitle": "Dialogs",
        "DialogCreate": "Create",
        "DialogList": "List",
        "DialogMap": "Map",
        "LanguageTitle": "Language",
        "ThemeTitle": "Themes",
        "LoadTitle": "Load",
        "SaveTitle": "Save",
        "DeleteMsg": "Any deletion is final and may cause problems in your game.",
        "DeleteConfirm": "Confirm",
        "EditCmd": "Edit",
        "DeleteCmd": "Remove",
        "Home": "Home",
        "Informations": "<h3>Shortcuts</h3>\
                        <b>Ctrl + S</b> Save project<br>\
                        <b>Ctrl + D</b> Load project<br>\
                        <b>Ctrl + F</b> Toggle advanced mode<br>\
                        <br><h3>Documentations</h3>\
                        <a style='color: var(--accent-color); text-decoration: none; transition: .2s;' href='https://icy-wind-398.notion.site/D-tails-de-l-interface-de-cr-ation-c8542e3a1a624e979badac7de1285f8b' target='_blank'>🇫🇷 Détails de l'interface de création</a><br>\
                        <a style='color: var(--accent-color); text-decoration: none; transition: .2s;'' href='https://icy-wind-398.notion.site/Correction-des-erreurs-classiques-194bd01a71cc4bb29dfcdf958d2926af' target='_blank'>🇫🇷 Correction des erreurs classiques</a><br>\
                        <a style='color: var(--accent-color); text-decoration: none; transition: .2s;' href='https://icy-wind-398.notion.site/FAQ-0cf40d6d48d44d1d9f9e4b931041c04a' target='_blank'>🇫🇷 FAQ</a>",
        "HomeMsg": 'Hero.js is an <b>OpenSource</b> project of <b>Visual Novel game engine</b>.\
                        The goal of this project is to allow you to create Visual Novels (from a simple Doki Doki to a JDR with fighting system), <b>without coding.</b>\
                        So what are you waiting for to start creating your stories?<br><br>\
                        If you have the skills, you can participate to the development of the project on <a href="https://github.com/ArthurTakase/Heros.js" target="_blank" style="color: var(--accent-color);">github</a>!<br>'
    }
}

const elements = {
    "version": ["version"],
    "navHeader": ["navHeader"],
    "GameInfosTitle": ["GameInfosTitle"],
    "GameInfosGeneral": ["GameInfosGeneral", "GeneralSubtitle"],
    "GameinfosDisplay": ["GameinfosDisplay", "DisplaySubtitle"],
    "GameInfosStyle": ["GameInfosStyle", "StyleSubtitle"],
    "DataTitle": ["DataTitle"],
    "DataSkills": ["DataSkills", "SkillsSubtitle"],
    "DataObjects": ["DataObjects", "ObjectsSubtitle"],
    "DataPictures": ["DataPictures", "PicturesSubtitle"],
    "DataSounds": ["DataSounds", "SoundsSubtitle"],
    "PlayerTitle": ["PlayerTitle", "PlayerSubtitle"],
    "DialogTitle": ["DialogTitle"],
    "DialogCreate": ["DialogCreate", "DialogCreateSubtitle"],
    "DialogList": ["DialogList", "DialogListSubtitle"],
    "DialogMap": ["DialogMap", "DialogMapSubtitle"],
    "LanguageTitle": ["LanguageTitle"],
    "ThemeTitle": ["ThemeTitle"],
    "LoadTitle": ["LoadTitle"],
    "SaveTitle": ["SaveTitle"],
    "DeleteMsg": ["DeleteMsg"],
    "DeleteConfirm": ["DeleteConfirm"],
    "EditCmd": ["EditCmd"],
    "DeleteCmd": ["DeleteCmd"],
    "Home": ["Home"],
    "Informations": ["Informations"],
    "HomeMsg": ["HomeMsg"]
}

function translate(lang) {
    localStorage.setItem("lang", lang)

    const flag = document.getElementById("flag")
    if (lang == "en") flag.innerHTML = "🇬🇧"
    if (lang == "fr") flag.innerHTML = "🇫🇷"

    for (let key in elements) {
        let element = elements[key]
        let elementTranslated = language[lang][key]

        element.forEach(it => {
            try {
                document.getElementById(it).innerHTML = elementTranslated
            } catch (e) {
                console.log("error on element " + it + " : " + e)
            }
        });
    }
}

function switchTranslate() {
    let lang = localStorage.getItem("lang")
    if (lang == "en") translate("fr")
    if (lang == "fr") translate("en")
}