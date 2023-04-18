import { clearStudent } from "../clearStudent.js";
import { createStudent } from "../createStudent.js";

export function searchForFaculty(array, elementToSearch) {
    let newArray = [];;
    array.forEach(element => {
        element.faculty.includes(elementToSearch) ? newArray.push(element) : null
    });

    clearStudent();
    createStudent(newArray);
}

export function searchForDOB(array, elementToSearch) {
    let newArray = []
    
    try {
        for (let index in array) {
            document.querySelectorAll(".dateForBirthday")[index].innerHTML.slice(0, 10).includes(elementToSearch) ? newArray.push(array[index]) : null
        }
    } catch (TypeError) {
        newArray = array;
    }
    clearStudent();
    createStudent(newArray);
} 

export function searchForYOS(array, elementToSearch) {
    if (Number(elementToSearch) != NaN) {
        let newArray = [];
        array.forEach(element => {
            String(element.startYear).includes(elementToSearch) ? newArray.push(element) : null
        });

        clearStudent();
        createStudent(newArray);
    }
} 
