document.getElementById('button').addEventListener('click', function() {
    let parent = document.getElementById('parent');
    let li = document.createElement('li');
    li.textContent = parent.children.length + 1; 
    parent.appendChild(li);
  });
  
  document.getElementById('parent').addEventListener('click', function(event) {
    let target = event.target;
    if (target.tagName === 'LI') {
      target.parentNode.removeChild(target);
    }
  });
  