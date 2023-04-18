export function checkErrors(modalInputsValues) { 
    let checkResult = [0, 0];

    if (checkOnTrim(modalInputsValues)[0] == "error") {
        checkResult = checkOnTrim(modalInputsValues);
    } else if (checkOnDate(modalInputsValues)[0] == "error"){
        checkResult = checkOnDate(modalInputsValues);
    } else if (checkOnStudyYear(modalInputsValues)[0] == "error") {
        checkResult = checkOnStudyYear(modalInputsValues);
    }

    return checkResult;
}

function checkOnTrim(modalInputsValues) {
    let checkResult;
    let errorText;

    modalInputsValues.forEach(element => {
        if (element.value.trim() == "") {
            checkResult = "error";
            errorText = "Пустая ячейк(а/и) ввода."
        }
    });

    return [checkResult, errorText]
}

function checkOnDate(modalInputsValues) {
    let checkResult;
    let errorText;

    if (modalInputsValues[1].value.length < 8) {
        checkResult = "error";
        errorText = "Неправильная дата рождения."
    } else if ((new Date(modalInputsValues[1].value) < new Date()) && (new Date(modalInputsValues[1].value)) > new Date("1900-01-01")) {
        null
    } else {
        checkResult = "error";
        errorText = "Неправильная дата рождения."
    }

    return [checkResult, errorText]
}

function checkOnStudyYear(modalInputsValues) {
    let checkResult;
    let errorText;

    
    if (modalInputsValues[2].value.length != 4) {
        checkResult = "error";
        errorText = "Некорректная дата обучения."
    } else if ((Number((new Date(modalInputsValues[2].value)).getFullYear()) >= 2000) && (Number((new Date(modalInputsValues[2].value)).getFullYear()) <= Number((new Date().getFullYear())))) {
        null
    } else {
        checkResult = "error";
        errorText = "Некорректная дата обучения."
    }

    return [checkResult, errorText]
}