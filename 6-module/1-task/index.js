/**
 * Компонент, который реализует таблицу
 * с возможностью удаления строк
 *
 * Пример одного элемента, описывающего строку таблицы
 *
 *      {
 *          name: 'Ilia',
 *          age: 25,
 *          salary: '1000',
 *          city: 'Petrozavodsk'
 *      }
 *
 */
import createElement from '../../assets/lib/create-element.js';

export default class UserTable {
  constructor(rows) {
    let arr = rows.map(row => 
      `
        <tr>
          <td>
            ${row.name}
          </td>
          <td>
            ${row.age}
          </td>
          <td>
            ${row.salary}
          </td>
          <td>
            ${row.city}
          </td>
          <td>
            <button>X</button>
          </td>
        </tr>    
      `
    );

    this.elem = createElement(`
      <table>
        <thead>
          <tr>
            <th>Имя</th>
            <th>Возраст</th>
            <th>Зарплата</th>
            <th>Город</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          ${arr}
        </tbody>
      </table>
    `
    )
   
    this.addEventListeners();
  }

  addEventListeners() {
    this.elem.addEventListener('click', event => {
      let target = event.target.closest('button');
      let td = target.parentElement;;
      let tr = td.parentElement;
      
      if (target) {
        tr.remove();
      }
    });
  }
}
