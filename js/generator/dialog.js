function appendEffect() {
    const effectZone = document.getElementById('optionEffectZone')
    const effectSelect = document.getElementById('optionEffect')

    switch (effectSelect.value) {
        case "No Effect":
            effectZone.innerHTML = '<select name="optionEffect" id="optionEffect" onchange="appendEffect()">\
                                        <option selected>No Effect</option>\
                                        <option>REMOVE_OBJECT</option>\
                                        <option>ADD_OBJECT</option>\
                                        <option>MEAL</option>\
                                        <option>STAMINA</option>\
                                        <option>ABILITY</option>\
                                        <option>LIFE</option>\
                                        <option>RESTART</option>\
                                    </select>'
            effectZone.innerHTML += ""
            break
        case "REMOVE_OBJECT":
            effectZone.innerHTML = '<select name="optionEffect" id="optionEffect" onchange="appendEffect()">\
                                        <option>No Effect</option>\
                                        <option selected>REMOVE_OBJECT</option>\
                                        <option>ADD_OBJECT</option>\
                                        <option>MEAL</option>\
                                        <option>STAMINA</option>\
                                        <option>ABILITY</option>\
                                        <option>LIFE</option>\
                                        <option>RESTART</option>\
                                    </select>'
            var objectListOption = ""
            for (object in specialList) {objectListOption += "<option>" + specialList[object].name + "</option>"}
            for (object in objectsList) {objectListOption += "<option>" + objectsList[object].name + "</option>"}

            effectZone.innerHTML += '<select name="effectValue" id="effectValue" title="Effect Value">' + objectListOption + '</select>'
            break
        case "ADD_OBJECT":
            effectZone.innerHTML = '<select name="optionEffect" id="optionEffect" onchange="appendEffect()">\
                                        <option>No Effect</option>\
                                        <option>REMOVE_OBJECT</option>\
                                        <option selected>ADD_OBJECT</option>\
                                        <option>MEAL</option>\
                                        <option>STAMINA</option>\
                                        <option>ABILITY</option>\
                                        <option>LIFE</option>\
                                        <option>RESTART</option>\
                                    </select>'
            var objectListOption = ""
            for (object in specialList) {objectListOption += "<option>" + specialList[object].name + "</option>"}
            for (object in objectsList) {objectListOption += "<option>" + objectsList[object].name + "</option>"}

            effectZone.innerHTML += '<select name="effectValue" id="effectValue" title="Effect Value">' + objectListOption + '</select>'
            break
        case "MEAL":
            effectZone.innerHTML = '<select name="optionEffect" id="optionEffect" onchange="appendEffect()">\
                                        <option>No Effect</option>\
                                        <option>REMOVE_OBJECT</option>\
                                        <option>ADD_OBJECT</option>\
                                        <option selected>MEAL</option>\
                                        <option>STAMINA</option>\
                                        <option>ABILITY</option>\
                                        <option>LIFE</option>\
                                        <option>RESTART</option>\
                                    </select>'
            effectZone.innerHTML += '<input type="number" name="effectValue" id="effectValue" placeholder="Effect Value" title="Effect Value">'
            break
        case "STAMINA":
            effectZone.innerHTML = '<select name="optionEffect" id="optionEffect" onchange="appendEffect()">\
                                        <option>No Effect</option>\
                                        <option>REMOVE_OBJECT</option>\
                                        <option>ADD_OBJECT</option>\
                                        <option>MEAL</option>\
                                        <option selected>STAMINA</option>\
                                        <option>ABILITY</option>\
                                        <option>LIFE</option>\
                                        <option>RESTART</option>\
                                    </select>'
            effectZone.innerHTML += '<input type="number" name="effectValue" id="effectValue" placeholder="Effect Value" title="Effect Value">'
            break
        case "ABILITY":
            effectZone.innerHTML = '<select name="optionEffect" id="optionEffect" onchange="appendEffect()">\
                                        <option>No Effect</option>\
                                        <option>REMOVE_OBJECT</option>\
                                        <option>ADD_OBJECT</option>\
                                        <option>MEAL</option>\
                                        <option>STAMINA</option>\
                                        <option selected>ABILITY</option>\
                                        <option>LIFE</option>\
                                        <option>RESTART</option>\
                                    </select>'
            effectZone.innerHTML += '<input type="number" name="effectValue" id="effectValue" placeholder="Effect Value" title="Effect Value">'
            break
        case "LIFE":
            effectZone.innerHTML = '<select name="optionEffect" id="optionEffect" onchange="appendEffect()">\
                                        <option>No Effect</option>\
                                        <option>REMOVE_OBJECT</option>\
                                        <option>ADD_OBJECT</option>\
                                        <option>MEAL</option>\
                                        <option>STAMINA</option>\
                                        <option>ABILITY</option>\
                                        <option selected>LIFE</option>\
                                        <option>RESTART</option>\
                                    </select>'
            effectZone.innerHTML += '<input type="number" name="effectValue" id="effectValue" placeholder="Effect Value" title="Effect Value">'
            break
        case "RESTART":
            effectZone.innerHTML = '<select name="optionEffect" id="optionEffect" onchange="appendEffect()">\
                                        <option>No Effect</option>\
                                        <option>REMOVE_OBJECT</option>\
                                        <option>ADD_OBJECT</option>\
                                        <option>MEAL</option>\
                                        <option>STAMINA</option>\
                                        <option>ABILITY</option>\
                                        <option>LIFE</option>\
                                        <option selected>RESTART</option>\
                                    </select>'
            // effectZone.innerHTML += "RESTART"
            break
    }
}

function appendCondition() {
    const conditionZone = document.getElementById('optionConditionZone')
    const conditionSelect = document.getElementById('optionCondition')

    switch (conditionSelect.value) {
        case "No Condition":
            conditionZone.innerHTML = '<select name="optionCondition" id="optionCondition" onchange="appendCondition()">\
                                    <option>No Condition</option>\
                                    <option>GOLD</option>\
                                    <option>MEAL</option>\
                                    <option>STAMINA</option>\
                                    <option>ABILITY</option>\
                                    <option>SKILL</option>\
                                    <option>OBJECT</option>\
                                </select>'
            break
        case "GOLD":
            conditionZone.innerHTML = '<select name="optionCondition" id="optionCondition" onchange="appendCondition()">\
                                    <option>No Condition</option>\
                                    <option selected>GOLD</option>\
                                    <option>MEAL</option>\
                                    <option>STAMINA</option>\
                                    <option>ABILITY</option>\
                                    <option>SKILL</option>\
                                    <option>OBJECT</option>\
                                </select>'
            conditionZone.innerHTML += '<input type="number" name="conditionValue" id="conditionValue" placeholder="Condition Value" title="Condition Value">'
            break
        case "MEAL":
            conditionZone.innerHTML = '<select name="optionCondition" id="optionCondition" onchange="appendCondition()">\
                                    <option>No Condition</option>\
                                    <option>GOLD</option>\
                                    <option selected>MEAL</option>\
                                    <option>STAMINA</option>\
                                    <option>ABILITY</option>\
                                    <option>SKILL</option>\
                                    <option>OBJECT</option>\
                                </select>'
            conditionZone.innerHTML += '<input type="number" name="conditionValue" id="conditionValue" placeholder="Condition Value" title="Condition Value">'
            break
        case "STAMINA":
            conditionZone.innerHTML = '<select name="optionCondition" id="optionCondition" onchange="appendCondition()">\
                                    <option>No Condition</option>\
                                    <option>GOLD</option>\
                                    <option>MEAL</option>\
                                    <option selected>STAMINA</option>\
                                    <option>ABILITY</option>\
                                    <option>SKILL</option>\
                                    <option>OBJECT</option>\
                                </select>'
            conditionZone.innerHTML += '<input type="number" name="conditionValue" id="conditionValue" placeholder="Condition Value" title="Condition Value">'
            break
        case "ABILITY":
            conditionZone.innerHTML = '<select name="optionCondition" id="optionCondition" onchange="appendCondition()">\
                                    <option>No Condition</option>\
                                    <option>GOLD</option>\
                                    <option>MEAL</option>\
                                    <option>STAMINA</option>\
                                    <option selected>ABILITY</option>\
                                    <option>SKILL</option>\
                                    <option>OBJECT</option>\
                                </select>'
            conditionZone.innerHTML += '<input type="number" name="conditionValue" id="conditionValue" placeholder="Condition Value" title="Condition Value">'
            break
        case "SKILL":
            conditionZone.innerHTML = '<select name="optionCondition" id="optionCondition" onchange="appendCondition()">\
                                    <option>No Condition</option>\
                                    <option>GOLD</option>\
                                    <option>MEAL</option>\
                                    <option>STAMINA</option>\
                                    <option>ABILITY</option>\
                                    <option selected>SKILL</option>\
                                    <option>OBJECT</option>\
                                </select>'
            var skillsListOption = ""
            for (skill in skillsList) {skillsListOption += "<option>" + skillsList[skill].name + "</option>"}

            conditionZone.innerHTML += '<select name="conditionValue" id="conditionValue" title="Condition Value">' + skillsListOption + '</select><div class="data">\
                                            <input type="checkbox" name="conditionIsHere" id="conditionIsHere" required checked>\
                                            <label for="conditionIsHere">Has ?</label>\
                                        </div>'
            break
        case "OBJECT":
            conditionZone.innerHTML = '<select name="optionCondition" id="optionCondition" onchange="appendCondition()">\
                                    <option>No Condition</option>\
                                    <option>GOLD</option>\
                                    <option>MEAL</option>\
                                    <option>STAMINA</option>\
                                    <option>ABILITY</option>\
                                    <option>SKILL</option>\
                                    <option selected>OBJECT</option>\
                                </select>'
            var objectListOption = ""
            for (object in specialList) {objectListOption += "<option>" + specialList[object].name + "</option>"}
            for (object in objectsList) {objectListOption += "<option>" + objectsList[object].name + "</option>"}

            conditionZone.innerHTML += '<select name="conditionValue" id="conditionValue" title="Condition Value">' + objectListOption + '</select><div class="data">\
                                            <input type="checkbox" name="conditionIsHere" id="conditionIsHere" required checked>\
                                            <label for="conditionIsHere">Has ?</label>\
                                        </div>'
            break
        default:
            conditionZone.innerHTML += ""
            break
    }
}

function preview(div, id) {
    var currentDialog
    var allButtons = []
    var tempCondition
    var tempEffect

    allButtons = []
    currentDialog = dialogList[id]
    
    // Génération des boutons
    for (b in currentDialog.buttons) {
        // Conditions des boutons
        switch (currentDialog.buttons[b].condition) {
            case "GOLD": tempCondition = 1; break
            case "MEAL": tempCondition = 2; break
            case "STAMINA": tempCondition = 3; break
            case "ABILITY": tempCondition = 4; break
            case "SKILL": tempCondition = 5; break
            case "OBJECT": tempCondition = 6; break
            default: tempCondition = null; break
        }

        // Effets des boutons
        switch (currentDialog.buttons[b].effect) {
            case "REMOVE_OBJECT": tempEffect = 1; break
            case "ADD_OBJECT": tempEffect = 2; break
            case "REMOVE_GOLD": tempEffect = 3; break
            case "ADD_GOLD": tempEffect = 4; break
            case "REMOVE_MEAL": tempEffect = 5; break
            case "ADD_MEAL": tempEffect = 6; break
            case "REMOVE_STAMINA": tempEffect = 7; break
            case "ADD_STAMINA": tempEffect = 8; break
            case "REMOVE_ABILITY": tempEffect = 9; break
            case "ADD_ABILITY": tempEffect = 10; break
            case "HEAL": tempEffect = 11; break
            case "HURT": tempEffect = 12; break
            case "FIGHT": tempEffect = 13; break
            case "RESTART": tempEffect = 14; break
            default: tempEffect = null; break
        }

        // Création du bouton
        allButtons.push(
            new Button(
                currentDialog.buttons[b].text,
                currentDialog.buttons[b].goToIndex,
                tempCondition,
                currentDialog.buttons[b].conditionData,
                tempEffect,
                currentDialog.buttons[b].effectData,
                currentDialog.buttons[b].notification,
                new Sound(currentDialog.buttons[b].sound)
            )
        )
    }

    // Génération du dialogue
    var dialog =  new Dialog(
        currentDialog.title,
        currentDialog.body,
        currentDialog.action,
        allButtons,
        currentDialog.img,
        currentDialog.background,
        currentDialog.music,
        currentDialog.animation
    )

    if (div == null || div == "null") {dialog.preview("preview", id)}
    dialog.preview(div, id)

}

function updateDialogList() {
    const liste = document.getElementById('dialogList')
    const preview = document.getElementById('preview')
    preview.style.display = "none"

    if (dialogList.length == 0) {
        liste.innerHTML = "Empty List"
        return
    }

    liste.style.background = '#40424b'
    liste.style.margin = '1rem'
    liste.innerHTML = '<tr class="tableHeader"><th>ID</th><th>Title</th><th>Body</th></tr>'

    for (dialog in dialogList) {
        liste.innerHTML += '<tr class="preview-button" onclick="preview(null, ' + dialog + ')"><td>' +
                            dialog +
                            '</td><td>' +
                            dialogList[dialog].title +
                            '</td><td>' +
                            dialogList[dialog].body +
                            '</td></tr>'
    }
    

    liste.innerHTML += ""
}