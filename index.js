import { createStudent } from "./modules/createStudent.js";
import { sortStudent } from "./modules/sortStudent.js";
import { createForInput } from "./modules/createForInput.js";

import { searchForFRCS } from './modules/searchModules/searchForFRCS.js'
import { searchForFaculty, searchForDOB, searchForYOS } from "./modules/searchModules/searchForOther.js";

const buttons = [document.querySelector(".fcs"), document.querySelector(".faculty"), document.querySelector(".dob"), document.querySelector(".yos")]
const inputs = document.querySelectorAll(".filter__input");
const array = [
    {
        name: "Максим",
        surname: "Липатов",
        lastname: "Сергеевич",
        date: new Date("2004-11-06"),
        startYear: 2021,
        faculty: "ИСиП(п)"
    }, {
        name: "Айзек",
        surname: "Апабанов",
        lastname: "Алидиевич",
        date: new Date("1997-12-01"),
        startYear: 2000,
        faculty: "КСК"
    }, {
        name: "Роман",
        surname: "Семёнов",
        lastname: "Сергеевич",
        date: new Date("2005-05-06"),
        startYear: 2021,
        faculty: "ИСиП(п)"
    }
]

document.getElementById("button").addEventListener("click", () => {
    document.querySelector(".modal__window").style.display = "block";
    document.querySelector(".modal").style.display = "block";
})

document.getElementById("ready__button").addEventListener("click", (event) => {
    event.preventDefault();
    createForInput(array);
})

document.getElementById("cancel__button").addEventListener("click", (event) => {
    event.preventDefault();
    
    document.querySelector(".modal__window").style.display = "none";
    document.querySelector(".modal").style.display = "none";
})

document.addEventListener("DOMContentLoaded", (event) => {
    createStudent(array);
})

buttons.forEach(element => element.addEventListener("click", () => {
    if (element.innerHTML == "FCs" || element.innerHTML == "FCs 🠗" || element.innerHTML == "FCs 🠕") {
        sortStudent(array, "surname", element, "FCs");
        return
        }
    if (element.innerHTML == "Faculty" || element.innerHTML == "Faculty 🠗" || element.innerHTML == "Faculty 🠕") {
        sortStudent(array, "surname", element, "Faculty");
        return
        }
    if (element.innerHTML == "Date Of Birthday" || element.innerHTML == "Date Of Birthday 🠗" || element.innerHTML == "Date Of Birthday 🠕") {
        sortStudent(array, "date", element, "Date Of Birthday");
        return
        }
    if (element.innerHTML == "Years Of Study" || element.innerHTML == "Years Of Study 🠗" || element.innerHTML == "Years Of Study 🠕") {
        sortStudent(array, "startYear", element, "Years Of Study");
        return
    }
}))

inputs.forEach(element => element.addEventListener("input", () => {
    switch (element.placeholder) {
        case "ФИО":
            searchForFRCS(array, element.value);
            break;
        case "Факультет":
            searchForFaculty(array,  element.value)
            break;
        case "День рождения":
            searchForDOB(array, element.value)
            break;
        case "Обучение":
            searchForYOS(array,  element.value)
            break;                        
    }
}))