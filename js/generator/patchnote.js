const patchnote = [{
        "date": new Date("2022-05-21"),
        "bugfixes": [
            "If player's infos are empty, automatically fill them with 0.",
            "Fix error when previewing a 'no background' dialog.",
            "'No Music' instead of '' when edit a dialog without music.",
            "If you load a project without a player, the player tab will be set to 'No Player'.",
            "No more errors with RANDOM_IN_CLASS and RANDOM_IN_CLASS_UNIQUE."
        ],
        "features": ["Add notification when dialog is saved."]
    },
    {
        "date": new Date("2022-06-01"),
        "bugfixes": [
            "Correction of button audio",
            "Automatic update of the preview when a dialog is modified",
            "Correction of the error related to the Skills and Effects conditions",
            "Minor bug fixes"
        ],
        "features": [
            "Change the behavior of the sidebar to be more intuitive.",
            "Deleting object types"
        ]
    },
    {
        "date": new Date("2022-06-03"),
        "bugfixes": ["N.C."],
        "features": [
            "Added a link to go back to the generator home page ",
            "Adding documentations in the different parts of the generator"
        ]
    },
    {
        "date": new Date("2022-06-06"),
        "bugfixes": ["N.C."],
        "features": ["Add Light Theme"]
    },
    {
        "date": new Date("2022-06-07"),
        "bugfixes": ["N.C."],
        "features": [
            "Added an engine translation button (fr/en).",
            "New version of the top bar, much easier to maintain and translate.",
            "Translation of the navbar, headerbar, and homepage",
            "Quick patchnote system",
            "Complete translation of Game Infos"
        ]
    },
    {
        "date": new Date("2022-06-16"),
        "bugfixes": ["N.C."],
        "features": [
            "translation of the whole 'data' section",
            "Rewriting of some pieces of code to make it more maintainable",
            "Added a start menu for games",
            "Possibility to configure the start menu from the generator"
        ]
    }
]

const container = document.getElementById("index")

patchnote.sort(function(a, b) { return b.date - a.date });
patchnote.forEach(update => {

    var bugfixes = update.bugfixes.map(it => {
        return `${it}`
    }).join("<br>")

    var features = update.features.map(it => {
        return `${it}`
    }).join("<br>")

    container.innerHTML += "<div class='sub_container'><div class='sub_container_title'>PatchNote (" + update.date.toLocaleDateString("fr") +
        ")</div><span style='text-align: center;'><h3>Features</h3>" + features + "<br><br><h3>BugFixes</h3>" + bugfixes + "</span></div>"
});