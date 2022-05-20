// the inputs
var nameInput = document.querySelector('#productName');
var categoryInput = document.querySelector('#productCategory');
var priceInput = document.querySelector('#productPrice');
var descInput = document.querySelector('#productDescription');
array = [];

function display() {
  for (let i = 0; i < array.length; i++) {
    document.querySelector('tbody').innerHTML += `
        <tr>
        <td>${i + 1}</td>
        <td>${array[i].name}</td>
        <td>${array[i].cat}</td>
        <td>${array[i].price}</td>
        <td>${array[i].des}</td>
        <td>
          <button id=${array.length - 1} onclick = update() class="update btn btn-outline-success"> <i class="fa-solid fa-pen-to-square"></i> </button>
        </td>
        <td>
          <button id=${array.length - 1} onclick="var index = this.getAttibute('id');
          array.slice(index);
          display();" class="remove btn btn-outline-danger"> <i class="fa-solid fa-trash"></i> </button>
        </td>
      </tr>
        `;
  }
}
function clear() {
  nameInput.value = '';
  categoryInput.value = '';
  priceInput.value = '';
  descInput.value = ''
}


// create function//
// get the data from the cells
// add the data to the array
//clear
//display in the table
document.querySelector('.create').addEventListener('click', function () {
  var product = {
    name: nameInput.value,
    cat: categoryInput.value,
    price: priceInput.value,
    des: descInput.value
  }
  console.log(array);
  array.push(product);
  clear();
  display();
});

// read function//
// select the tr from the table
// get the data from the tr
// add the data to the sells

// update function//
// press update button
// show the data in the cells
// change the button to update
// update the array
// display in the table




// delete function//
// remove from the array
// display in the table
function remove() {
  console.log(this);

}
// {
//     var productTable = this.getAttribute('id');
//     console.log(productTable);
// }

// search function//
// get the option
// get the search text
// display in the table