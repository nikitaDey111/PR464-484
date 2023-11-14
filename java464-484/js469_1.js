let employees = [
    { name: 'employee1', age: 30, salary: 400 },
    { name: 'employee2', age: 31, salary: 500 },
    { name: 'employee3', age: 32, salary: 600 },
  ];
  
  let table = document.getElementById('table');
  
  for (let employee of employees) {
    let tr = document.createElement('tr');
  
    let tdName = document.createElement('td');
    tdName.textContent = employee.name;
    tr.appendChild(tdName);
  
    let tdAge = document.createElement('td');
    tdAge.textContent = employee.age;
    tr.appendChild(tdAge);
  
    let tdSalary = document.createElement('td');
    tdSalary.textContent = employee.salary;
    tr.appendChild(tdSalary);
  
    table.appendChild(tr);
  }
  