function showDropDown(id) {
    var dropdown = document.getElementById(id)
    var arrow = dropdown.getElementsByClassName("bx-chevron-down")[0];

    if (dropdown.style.maxHeight === '100rem') {
        dropdown.style.maxHeight = '21px';
        arrow.style.transform = 'rotate(0deg)';
    } else {
        dropdown.style.maxHeight = '100rem';
        arrow.style.transform = 'rotate(180deg)';
    }
}

// when mouse leave the navbar, close all dropdown
function closeDropDown() {
    var dropdown = document.getElementsByClassName("nav__dropdown");
    var arrow = document.getElementsByClassName("bx-chevron-down")
    for (var i = 0; i < dropdown.length; i++) {
        dropdown[i].style.maxHeight = '21px';
        arrow[i].style.transform = 'rotate(0deg)';
    }
}

// check when mouse leave the navbar
const navbar = document.getElementById('navbar');
navbar.addEventListener('mouseleave', closeDropDown)