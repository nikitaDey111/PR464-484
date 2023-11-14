let elem = document.querySelector('#elem');

function handleClick() {
  let input = document.createElement('input');
  input.value = elem.textContent;
  elem.textContent = '';
  elem.appendChild(input);

  input.addEventListener('blur', function() {
    elem.textContent = this.value;
    elem.addEventListener('click', handleClick);
    elem.removeChild(input);
  });

  elem.removeEventListener('click', handleClick);
}

elem.addEventListener('click', handleClick);
