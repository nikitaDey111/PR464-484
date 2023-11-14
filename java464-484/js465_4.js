let arr = [1, 2, 3, 4, 5];
let ul = document.querySelector('#elem');

for (let elem of arr) {
  let li = document.createElement('li');
  li.textContent = elem;
  li.addEventListener('click', function() {
    if (!li.textContent.endsWith('!')) {
      li.textContent += '!';
    }
  });
  ul.appendChild(li);
}