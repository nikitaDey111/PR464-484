
let paragraphs = document.querySelectorAll('#parent p');

paragraphs.forEach(paragraph => {
  let span = document.createElement('span');
  span.textContent = paragraph.textContent;
  paragraph.innerHTML = '';
  paragraph.appendChild(span);

  span.addEventListener('click', function() {
    let editedText = span.textContent;
    span.innerHTML = '';

    let input = document.createElement('input');
    input.value = editedText; 

    span.appendChild(input); 

    input.addEventListener('blur', function() {
      span.textContent = this.value; 
    });

    input.focus(); 
  });

  
  let removeLink = document.createElement('a');
  removeLink.appendChild(document.createTextNode(' удалить'));
  removeLink.setAttribute('href', '#');
  removeLink.addEventListener('click', function(event) {
    event.preventDefault();
    paragraph.remove();
  });

  paragraph.appendChild(removeLink);
});
