function doubleNumbers() {
    let tds = document.querySelectorAll('#table td');
    tds.forEach(td => {
      let number = parseInt(td.textContent);
      if (!isNaN(number)) {
        td.textContent = number * 2; 
      }
    });
  }