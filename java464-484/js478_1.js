    let paragraphs = document.querySelectorAll('#parent p');


paragraphs.forEach(paragraph => {
  let removeLink = document.createElement('a');
  removeLink.appendChild(document.createTextNode(' удалить'));
  removeLink.setAttribute('href', '#');
  removeLink.addEventListener('click', function(event) {
    event.preventDefault();
    paragraph.remove();
  });
  paragraph.appendChild(removeLink);
});


let spans = document.querySelectorAll('#parent span');
spans.forEach(span => {
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
});
