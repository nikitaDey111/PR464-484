function expandTable() {
    let table = document.getElementById('table');
    let rowCount = table.rows.length;
    let cellCount = table.rows[0].cells.length;

    let tr = table.insertRow(rowCount);
    for (let i = 0; i < cellCount; i++) {
      let td = tr.insertCell(i);
      td.textContent = rowCount * cellCount + i + 1; 
    }

    for (let i = 0; i < rowCount; i++) {
      let tr = table.rows[i];
      let td = tr.insertCell(cellCount);
      td.textContent = (i + 1) * cellCount + rowCount; 
    }
  }