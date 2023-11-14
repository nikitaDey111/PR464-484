let list = document.getElementById('myList');
let items = list.getElementsByTagName('li');

for (let item of items) {
  let removeLink = document.createElement('a');
  removeLink.appendChild(document.createTextNode(' удалить'));
  removeLink.setAttribute('href', '#');
  removeLink.addEventListener('click', function (event) {
    item.remove();
  });

  item.appendChild(removeLink);
}
