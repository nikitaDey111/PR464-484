function addRow() {
    let table = document.querySelector('#table');
    let tr = document.createElement('tr');

    for (let i = 0; i < 3; i++) {
      let td = document.createElement('td');
      td.textContent = 'Новая ячейка';
      tr.appendChild(td);
    }

    table.appendChild(tr);
}