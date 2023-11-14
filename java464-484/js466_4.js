function generateTable() {
    let table = document.getElementById('table');
    let rows = document.getElementById('rows').value;
    let columns = document.getElementById('columns').value;
  
    
    table.innerHTML = '';
  
    for (let i = 0; i < rows; i++) {
      let tr = document.createElement('tr');
  
      for (let j = 0; j < columns; j++) {
        let td = document.createElement('td');
        tr.appendChild(td);
      }
  
      table.appendChild(tr);
    }
  }
  