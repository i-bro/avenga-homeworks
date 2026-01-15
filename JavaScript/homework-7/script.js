const rowInput = document.getElementById("row");
const columnInput = document.getElementById("column");
const button = document.getElementById("btnTable");
const tableContainer = document.getElementById("tableContainer");

button.addEventListener("click", function () {
  const rows = Number(rowInput.value);
  const columns = Number(columnInput.value);

  if (rows <= 0 || columns <= 0) {
    alert("Please enter valid numbers for rows and columns");
    return;
  }

  const table = document.createElement("table");
  table.style.borderCollapse = "collapse";

  for (let r = 1; r <= rows; r++) {
    const tr = document.createElement("tr");

    for (let c = 1; c <= columns; c++) {
      const td = document.createElement("td");
      td.textContent = `Row-${r} Column-${c}`;
      td.style.border = "1px solid black";
      td.style.padding = "8px";
      td.style.textAlign = "center";

      tr.appendChild(td);
    }

    table.appendChild(tr);
  }
  rowInput.value = "";
  columnInput.value = "";
  tableContainer.innerHTML = "";
  tableContainer.appendChild(table);
});
