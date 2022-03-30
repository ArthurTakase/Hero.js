// let objectsList = []
let objectsJson = {}

function reloadObjectList(liste) {
    liste.innerHTML = '<tr class="tableHeader"><th>Name</th><th>Type</th><th>Ability</th><th>Stamina</th><th>Gold</th><th>Meal</th></tr>'
    for (object in objectsJson) {
        liste.innerHTML += '<tr class="' + editValue + ' ' + editValueObject + '"><td>' +
            objectsJson[object].name + '</td><td>' +
            objectsJson[object].type + '</td><td>' +
            objectsJson[object].data[0] + '</td><td>' +
            objectsJson[object].data[1] + '</td><td>' +
            objectsJson[object].data[2] + '</td><td>' +
            objectsJson[object].data[3] + '</td></tr>'
    }
}

function addObjectFromJSON(element) {
    const liste = document.getElementById('objectList')

    if (jsonLen(objectsJson) == 0) { liste.classList.add("table") }

    objectsJson[element.name] = element
    reloadObjectList(liste)
}

function addObject() {
    const liste = document.getElementById('objectList')
    var objectName = document.getElementById('objectName')
    var objectType = document.getElementById('objectType')
    var objectAbility = document.getElementById('itemAbility')
    var objectStamina = document.getElementById('itemStamina')
    var objectGold = document.getElementById('itemGold')
    var objectMeal = document.getElementById('itemMeal')
    var json = {}

    if (objectAbility.value == "" ||
        objectGold.value == "" ||
        objectStamina.value == "" ||
        objectMeal.value == "" ||
        objectName.value == "") { return }
    if (jsonLen(objectsJson) == 0) { liste.classList.add("table") }

    json.name = objectName.value
    json.type = objectType.value
    json.data = [
        parseInt(objectAbility.value),
        parseInt(objectStamina.value),
        parseInt(objectGold.value),
        parseInt(objectMeal.value)
    ]

    objectsJson[objectName.value] = json

    reloadObjectList(liste)

    // Reset des valeurs de l'input
    objectAbility.value = ""
    objectGold.value = ""
    objectMeal.value = ""
    objectName.value = ""
    objectStamina.value = ""
    objectName.focus()

    // try {document.getElementById('playerInventoryList').innerHTML += "<option>" + json.name + "</option>"} catch(e) {}
}

function updateObjects() {
    var objectListOption = ""

    for (object in objectsJson) { objectListOption += "<option>" + object + "</option>" }

    //Ajouter les autres parties à update ici
    const playerList = document.getElementById('playerInventoryList')
    var conditionList = document.getElementById('conditionValue')
    var effectList = document.getElementById('effectValue')

    try { playerList.innerHTML = objectListOption } catch (e) {}
    try { conditionList.innerHTML = objectListOption } catch (e) {}
    try { effectList.innerHTML = objectListOption } catch (e) {}
}