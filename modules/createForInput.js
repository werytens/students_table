import { createStudent } from "./createStudent.js";
import { checkErrors } from "./checkErrors.js";
import { clearStudent } from "./clearStudent.js";

export function createForInput(array) {
    const modalInputsValues = [document.querySelector(".INP__FCS"), document.querySelector(".INP__DOB"), document.querySelector(".INP__YOS"), document.querySelector(".INP__FAC")]
    
    const warnings = checkErrors(modalInputsValues);
    if (warnings[0] == "error") {
        createErrorText(warnings[1]);
        return
    } else { null }
    
    const FCS = modalInputsValues[0].value.split(" ");
    if (FCS.length < 3) {
        createErrorText("Введены неправильные данные (ФИО).");
        return
    }

    let newStudent = {
        name: FCS[1],
        surname: FCS[0],
        lastname: FCS[2],
        date: new Date(modalInputsValues[1].value),
        startYear: Number(modalInputsValues[2].value),
        faculty: modalInputsValues[3].value
    }           

    modalInputsValues.forEach(element => element.value = "");

    array.push(newStudent);
    clearStudent();
    createStudent(array);

    document.querySelector(".modal__window").style.display = "none";
    document.querySelector(".modal").style.display = "none";
}

function createErrorText(text) {
    let title = document.querySelector(".modal__title");
    title.innerHTML = text;
    title.style.cssText = "color: red; text-decoration: underline;"
    return
}