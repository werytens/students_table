import { createStudent } from "../createStudent.js"
import { clearStudent } from "../clearStudent.js";

export function fcsSort(array, a) {    
    let test = []
    let test2 = []
    document.querySelectorAll(".td__fcs").forEach(item => {
        test.push(item.innerHTML.slice(0, item.innerHTML.indexOf(" ")))
    })
    array.forEach(item => {
        test2.push(item.surname)
    })

    array = array.sort((a, b) => a.surname > b.surname ? 1 : -1);

    document.getElementById("table").dataset.type = "sorted";

    if (document.getElementById("table").dataset.type == "sorted") {
        array = array.reverse();
    }

    clearStudent();
    createStudent(array);
}

// array = array.sort((a, b) => a.surname > b.surname ? 1 : -1);
