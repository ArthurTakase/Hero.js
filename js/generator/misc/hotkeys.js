$(document).bind('keydown', function(e) {
    if (e.ctrlKey && (e.which == "s".charCodeAt(0) || e.which == "S".charCodeAt(0))) {
        e.preventDefault();
        addGameToDB()
    }

    if (e.ctrlKey && (e.which == "e".charCodeAt(0) || e.which == "E".charCodeAt(0))) {
        e.preventDefault();
        submit()
    }

    if (e.ctrlKey && (e.which == "d".charCodeAt(0) || e.which == "D".charCodeAt(0))) {
        e.preventDefault();
        openFile()
    }

    if (e.ctrlKey && (e.which == "f".charCodeAt(0) || e.which == "F".charCodeAt(0))) {
        e.preventDefault();
        toggleAdvanced()
    }
});