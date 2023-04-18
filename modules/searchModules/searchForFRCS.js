import { clearStudent } from "../clearStudent.js";
import { createStudent } from "../createStudent.js";

export function searchForFRCS(array, elementToSearch) {
    let newArray = [];;
    array.forEach(element => {
        element.surname.includes(elementToSearch) ? newArray.push(element) : 
            element.name.includes(elementToSearch) ? newArray.push(element) : 
                element.lastname.includes(elementToSearch) ? newArray.push(element) : null
    });

    clearStudent();
    createStudent(newArray);
}