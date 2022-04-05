$(document).bind('keydown', function(e) {
    if (e.ctrlKey && (e.which == "s".charCodeAt(0) || e.which == "S".charCodeAt(0))) {
        e.preventDefault();
        submit()
    }

    if (e.ctrlKey && (e.which == "d".charCodeAt(0) || e.which == "D".charCodeAt(0))) {
        e.preventDefault();
        openFile()
    }
});