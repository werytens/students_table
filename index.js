import { createStudent } from "./modules/createStudent.js";

import { dobSort } from "./modules/sortModules/dobSort.js";
import { facultySort } from "./modules/sortModules/facultySort.js";
import { fcsSort } from "./modules/sortModules/fcsSort.js";
import { yosSort } from "./modules/sortModules/yosSort.js";

const buttons = [document.querySelector(".fcs"), document.querySelector(".faculty"), document.querySelector(".dob"), document.querySelector(".yos")]
const array = [
    {
        name: "Максим",
        surname: "Липатов",
        lastname: "Сергеевич",
        date: new Date("2004-11-06"),
        startYear: 2021,
        faculty: "ИСиП(п)"
    }, {
        name: "Макс",
        surname: "Алипатов",
        lastname: "Сергеевич",
        date: new Date("2004-11-25"),
        startYear: 2000,
        faculty: "ИСиП(п)"
    }, {
        name: "Роман",
        surname: "Семёнов",
        lastname: "Сергеевич",
        date: new Date("2005-05-06"),
        startYear: 2021,
        faculty: "ИСиП(п)"
    }
]

document.addEventListener("DOMContentLoaded", (event) => {
    createStudent(array);
})

buttons.forEach(element => element.addEventListener("click", () => {
    switch (element.innerHTML) {
        case "FCs":
            fcsSort(array, array);
            break;
        case "Faculty":
            facultySort();
            break;
        case "Date Of Birthday":
            dobSort();
            break;
        case "Years Of Study":
            yosSort();
            break;
    }
}))
