/*==================== SHOW NAVBAR ====================*/
const showMenu = (headerToggle, navbarId) => {
    try {
        const toggleBtn = document.getElementById(headerToggle),
            nav = document.getElementById(navbarId)

        // Validate that variables exist
        if (headerToggle && navbarId) {
            toggleBtn.addEventListener('click', () => {
                // We add the show-menu class to the div tag with the nav__menu class
                nav.classList.toggle('show-menu')
                    // change icon
                toggleBtn.classList.toggle('bx-x')
            })
        }
    } catch (e) {}
}
showMenu('header-toggle', 'navbar')