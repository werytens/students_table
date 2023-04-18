export function createStudent(array) {
    array.forEach(item => {
        const table = document.getElementById("table");
        let tr = document.createElement("tr");
        tr.classList.add("tr__rows");
        table.append(tr);

        let td = document.createElement("td");
        td.classList.add("td__fcs")
        td.innerHTML = `${item.surname} ${item.name} ${item.lastname}`;
        tr.append(td);

        td = document.createElement("td");
        td.innerHTML = item.faculty;
        tr.append(td);

        td = document.createElement("td");
        let day = item.date.getDate();
        let month = item.date.getMonth() + 1;
        String(day).length == "1" ? day = `0${day}` : null
        String(month).length == "1" ? month = `0${month}` : null
        td.innerHTML = `${day}.${month}.${item.date.getFullYear()} (${Math.trunc(((new Date()) - item.date) / (60 * 60 * 24 * 1000) / 365)} лет)`
        tr.append(td);

        td = document.createElement("td");
        let year = Math.trunc((new Date()).getFullYear() - item.startYear);
        year > 4 ? year = "Завершил" : year = `${year} курс`
        td.innerHTML = `${item.startYear} - ${item.startYear + 4} (${year})`
        tr.append(td);
    })
}
