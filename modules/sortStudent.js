import { createStudent } from "./createStudent.js";
import { clearStudent } from "./clearStudent.js";

export function sortStudent(array, element, forTitleElement, titleText) {
  let newArray = [];
  let newArray2 = [];
  document.querySelectorAll(".td__fcs").forEach((item) => {
    newArray.push(item.innerHTML.slice(0, item.innerHTML.indexOf(" ")));
  });
  array.forEach((item) => {
    newArray2.push(item[element]);
  });

  if (document.getElementById("table").dataset.type != "sorted") {
    array = array.sort((a, b) => (a[element] > b[element] ? 1 : -1));
    forTitleElement.innerHTML = titleText + " 🠗"
    document.getElementById("table").dataset.type = "sorted";
  } else if (document.getElementById("table").dataset.type == "sorted") {
    array = array.sort((a, b) => (a[element] > b[element] ? 1 : -1)).reverse();
    forTitleElement.innerHTML = titleText + " 🠕"
    document.getElementById("table").dataset.type = "unsorted";
  }

  clearStudent();
  createStudent(array);
}
