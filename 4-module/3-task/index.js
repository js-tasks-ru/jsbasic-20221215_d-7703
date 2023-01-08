function highlight(table) {

  for (let i = 1; i < table.rows.length; i++) {
    for (let j = 0; j < table.rows[i].cells.length; j++) {
      if (j === 1) {
        if (table.rows[i].cells[j].innerHTML < 18) {
          table.rows[i].style.textDecoration = 'line-through';
        }
      }
      if (j === 2) {
        if (table.rows[i].cells[j].innerHTML === 'm') {
          table.rows[i].classList.add('male');
        }
        else {
          table.rows[i].classList.add('female');
        }
      }
      if (j === 3) {
        if (!table.rows[i].cells[j].dataset.available) {
          table.rows[i].hidden = 'true';
        }
        else if (table.rows[i].cells[j].dataset.available === 'true') {
          table.rows[i].classList.add('available');
        }
        else {
          table.rows[i].classList.add('unavailable');
        }
      }
    }
  }
  
}
