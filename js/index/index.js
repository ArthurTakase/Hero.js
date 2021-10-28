checkStart()

if (defaultJSON == null) {
    document.addEventListener('mousemove', move)
        function move(e) {
            this.querySelectorAll('.move').forEach(layer => {
                const speed = layer.getAttribute('data-speed')
    
                const x = (window.innerWidth - e.pageX*speed)/120
                const y = (window.innerHeight - e.pageY*speed)/120
    
                layer.style.transform = `translateX(${x}px) translateY(${y}px)`
            })
    }
}

gsap.from('.home__description', {opacity: 0, duration: 1, delay:1.8, y: 30})
gsap.from('.home__title', {opacity: 0, duration: 1, delay:1.6, y: 30})
gsap.from('.home__img', {opacity: 0, duration: 1, delay:1.3, y: 30})
gsap.from('.home__button', {opacity: 0, duration: 1, delay:2.1, y: 30})
gsap.from('#home__bottom', {opacity: 0, duration: 1, delay:2.3, y: 20})

const imgZone = document.getElementById("home__img")
const img = ["img/dangan.png", "img/jdr.png", "img/doki.png"]
const imgData = [-10, 3, -3]
const imgOptions = [[0.6, 2], [0.8, 1], [1, 0]]
var imgSelected = []
var imgSelect

function randomFromList(liste) {
    return liste[Math.floor(Math.random()*liste.length)]
}

for (image in img) {
    imgSelect = randomFromList(img)
    while (imgSelected.includes(imgSelect)) {imgSelect = randomFromList(img)}
    imgSelected.push(imgSelect)
    imgZone.innerHTML += '<img src="' + imgSelect + '" alt="" data-speed="' + imgData[image] + '" class="move" style="opacity:' + imgOptions[image][0] + '; filter:blur(' + imgOptions[image][1] + 'px);">'
}