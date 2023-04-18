import { createStudent } from "./createStudent.js";
import { clearStudent } from "./clearStudent.js";

export function sortStudent(array, element) {
  let test = [];
  let test2 = [];
  document.querySelectorAll(".td__fcs").forEach((item) => {
    test.push(item.innerHTML.slice(0, item.innerHTML.indexOf(" ")));
  });
  array.forEach((item) => {
    test2.push(item[element]);
  });

  if (document.getElementById("table").dataset.type != "sorted") {
    array = array.sort((a, b) => (a[element] > b[element] ? 1 : -1));
    document.getElementById("table").dataset.type = "sorted";
  } else if (document.getElementById("table").dataset.type == "sorted") {
    array = array.sort((a, b) => (a[element] > b[element] ? 1 : -1)).reverse();
    document.getElementById("table").dataset.type = "unsorted";
  }

  clearStudent();
  createStudent(array);
}
