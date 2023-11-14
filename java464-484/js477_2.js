let listItems = document.querySelectorAll('ul li');

listItems.forEach(item => {
  item.addEventListener('click', function() {
    let editedText = item.textContent;
    item.innerHTML = ''; 

    let input = document.createElement('input');
    input.value = editedText; 

    item.appendChild(input); 

    input.addEventListener('blur', function() {
      item.textContent = this.value; 
    });

    input.focus(); 
  });
});
