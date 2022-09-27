const icon = document.getElementById("toggleTheme");

function switchTheme(theme) {
    var lang = localStorage.getItem("lang");
    var title = language[lang]["ThemeTitle"];

    if (theme == undefined) theme = localStorage.getItem('theme') == 'theme-dark' ? 'theme-light' : 'theme-dark';

    if (theme === "theme-light") {
        localStorage.setItem("theme", "theme-light");
        document.documentElement.className = "theme-light";
        icon.innerHTML = `<i class="bx bx-sun nav__icon" ></i><span class="nav__name" id="ThemeTitle">${title}</span>`;
    } else {
        localStorage.setItem("theme", "theme-dark");
        document.documentElement.className = "theme-dark";
        icon.innerHTML = `<i class="bx bx-moon nav__icon" ></i><span class="nav__name" id="ThemeTitle">${title}</span>`;
    }
}

(function() {
    switchTranslate(localStorage.getItem('lang'));
    switchTheme(localStorage.getItem('theme'));
})();