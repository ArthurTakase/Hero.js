function showDropDown(id) {
    var dropdown = document.getElementById(id)

    if (dropdown.style.maxHeight === '100rem') {
        dropdown.style.maxHeight = '21px';
    } else {
        dropdown.style.maxHeight = '100rem';
    }
}

// when mouse leave the navbar, close all dropdown
function closeDropDown() {
    var dropdown = document.getElementsByClassName("nav__dropdown");
    for (var i = 0; i < dropdown.length; i++) {
        dropdown[i].style.maxHeight = '21px';
    }
}

// check when mouse leave the navbar
const navbar = document.getElementById('navbar');
navbar.addEventListener('mouseleave', closeDropDown)