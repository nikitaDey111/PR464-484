
let table = document.getElementById('myTable');


let rows = table.getElementsByTagName('tr');


for (let i = 0; i < rows.length; i++) {
  let cell = rows[i].insertCell(-1); 
  let link = document.createElement('a');
  link.appendChild(document.createTextNode('Удалить'));
  link.setAttribute('href', '#');
  link.addEventListener('click', function (event) {
    event.preventDefault(); 
    rows[i].remove(); 
  });
  cell.appendChild(link);
}
