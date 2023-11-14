let elem = document.getElementById('elem');
let remove = document.getElementById('remove');

remove.addEventListener('click', function(event) {
  elem.remove(); 
  event.preventDefault(); 
});