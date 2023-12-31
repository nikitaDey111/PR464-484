let users = [
    { name: 'name1', surname: 'surname1', patronymic: 'patronymic1', salary: 1000 },
    { name: 'name2', surname: 'surname2', patronymic: 'patronymic2', salary: 1200 },
    { name: 'name3', surname: 'surname3', patronymic: 'patronymic3', salary: 1500 },
  ];
  
  let table = document.getElementById('table');
  
  for (let user of users) {
    let tr = document.createElement('tr');
  
    for (let key in user) {
      let td = document.createElement('td');
      td.textContent = user[key];
      if (key === 'salary') {
        td.onclick = function () {
          td.textContent = parseInt(td.textContent) * 1.1;
        };
      }
      tr.appendChild(td);
    }
  
    table.appendChild(tr);
  }
  