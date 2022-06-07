const icon = document.getElementById("toggleTheme");

function switchTheme() {
    if (localStorage.getItem("theme") === "theme-dark") {
        localStorage.setItem("theme", "theme-light");
        document.documentElement.className = "theme-light";
        icon.innerHTML = '<i class="bx bx-sun nav__icon" ></i><span class="nav__name">Theme</span>';
    } else {
        localStorage.setItem("theme", "theme-dark");
        document.documentElement.className = "theme-dark";
        icon.innerHTML = '<i class="bx bx-moon nav__icon" ></i><span class="nav__name">Theme</span>';
    }
}

(function() {
    if (localStorage.getItem('theme') === 'theme-dark') {
        switchTheme('theme-dark');
    } else {
        switchTheme('theme-light');
    }
})();