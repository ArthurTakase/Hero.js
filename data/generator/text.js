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
        "SaveTitle": "Sauvegarder"
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
        "SaveTitle": "Save"
    }
}

const elements = {
    "version": ["version"],
    "navHeader": ["navHeader"],
    "GameInfosTitle": ["GameInfosTitle"],
    "GameInfosGeneral": ["GameInfosGeneral"],
    "GameinfosDisplay": ["GameinfosDisplay"],
    "GameInfosStyle": ["GameInfosStyle"],
    "DataTitle": ["DataTitle"],
    "DataSkills": ["DataSkills"],
    "DataObjects": ["DataObjects"],
    "DataPictures": ["DataPictures"],
    "DataSounds": ["DataSounds"],
    "PlayerTitle": ["PlayerTitle"],
    "DialogTitle": ["DialogTitle"],
    "DialogCreate": ["DialogCreate"],
    "DialogList": ["DialogList"],
    "DialogMap": ["DialogMap"],
    "LanguageTitle": ["LanguageTitle"],
    "ThemeTitle": [],
    "LoadTitle": ["LoadTitle"],
    "SaveTitle": ["SaveTitle"]
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