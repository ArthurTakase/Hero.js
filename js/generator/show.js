function show(div) {
    const sections = document.getElementsByClassName("section")
    var myDiv = document.getElementById(div)
    const btns = document.getElementsByClassName("nav-item")
    var myBtn = document.getElementById(div + "Btn")

    for (var i = 0; i != sections.length; i++) {sections[i].style.display = 'none'}
    for (var j = 0; j != btns.length; j++) {btns[j].style.background = 'none'}

    myDiv.style.display = 'flex'
    myBtn.style.background = '#363a3f'
}