let table = document.querySelector('#table');

for (let i = 0; i < 3; i++) {
  let tr = document.createElement('tr');
  
  for (let j = 0; j < 3; j++) {
    let td = document.createElement('td');
    td.textContent = 'x';
    tr.appendChild(td);
  }
  
  table.appendChild(tr);
}
