const icon = document.getElementById("toggleTheme");

function switchTheme() {
    var lang = localStorage.getItem("lang");
    var title = language[lang]["ThemeTitle"];

    if (localStorage.getItem("theme") === "theme-dark") {
        localStorage.setItem("theme", "theme-light");
        document.documentElement.className = "theme-light";
        icon.innerHTML = '<i class="bx bx-sun nav__icon" ></i><span class="nav__name" id="ThemeTitle">' + title + '</span>';
    } else {
        localStorage.setItem("theme", "theme-dark");
        document.documentElement.className = "theme-dark";
        icon.innerHTML = '<i class="bx bx-moon nav__icon" ></i><span class="nav__name" id="ThemeTitle">' + title + '</span>';
    }
}

(function() {

    if (localStorage.getItem('lang') === 'fr') {
        switchTranslate('fr');
    } else {
        switchTranslate('en');
    }

    if (localStorage.getItem('theme') === 'theme-dark') {
        switchTheme('theme-dark');
    } else {
        switchTheme('theme-light');
    }
})();