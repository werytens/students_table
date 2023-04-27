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
        let flag;
        let result;

        FCS.forEach(element => {
            if (element.search(/\d/) == 0) {
                flag = "Цифры в ФИО запрещены.";
            }
        })

        if (flag == "Цифры в ФИО запрещены.") {
            result = flag;
        } else {
            result = "Введены неправильные данные (ФИО).";
        }

        createErrorText(result);
        return
    } else {
        let flag;
        let result;

        FCS.forEach(element => {
            if (element.search(/\d/) == 0) {
                flag = "Цифры в ФИО запрещены.";
            }
        })

        if (flag == "Цифры в ФИО запрещены.") {
            result = flag;
            createErrorText(result);
            return
        } 
    }

    let dateFormating = modalInputsValues[1].value.split(".");
    let newDate = `${dateFormating[2]}-${dateFormating[1]}-${dateFormating[0]}`

    let newStudent = {
        name: FCS[1],
        surname: FCS[0],
        lastname: FCS[2],
        date: new Date(newDate),
        startYear: Number(modalInputsValues[2].value),
        faculty: modalInputsValues[3].value
    }           

    modalInputsValues.forEach(element => element.value = "");

    array.push(newStudent);
    clearStudent();
    createStudent(array);
    localStorage.setItem("0", JSON.stringify(array));

    document.querySelector(".modal__window").style.display = "none";
    document.querySelector(".modal").style.display = "none";
}

function createErrorText(text) {
    let title = document.querySelector(".modal__title");
    title.innerHTML = text;
    title.style.cssText = "color: red; text-decoration: underline;"
    return
}
