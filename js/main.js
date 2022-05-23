// the inputs
var nameInput = document.querySelector('#productName');
var categoryInput = document.querySelector('#productCategory');
var priceInput = document.querySelector('#productPrice');
var descInput = document.querySelector('#productDescription');
array = [];
// array[100] = {
//   name: 'dell',
//   cat: 'laptop',
//   price: 10000,
//   des: 'good'
// }
function display(arr) {
  document.querySelector('tbody').innerHTML = '';
  for (let i = 0; i < arr.length; i++) {
    // console.log(arr[i]);
    document.querySelector('tbody').innerHTML += `
    <tr>
        <td>${i}</td>
        <td>${arr[i].name}</td>
        <td>${arr[i].cat}</td>
        <td>${arr[i].price}</td>
        <td>${arr[i].des}</td>
        <td>
          <button class="btn btn-outline-success"> <i class="fa-solid fa-pen-to-square"></i> </button>
        </td>
        <td>
        <button class="remove btn btn-outline-danger"> <i class="fa-solid fa-trash"></i>
      </button>
        </td>
      </tr>`;
  }
}



// clear function 
function clear() {
  nameInput.value = '';
  categoryInput.value = '';
  priceInput.value = '';
  descInput.value = ''
}


document.querySelector('.clear').addEventListener('click', clear);


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
  array.push(product);
  // console.log(array);
  display(array);
  clear();

});




// read function//
// select the tr from the table
// get the data from the tr
// add the data to the sells




// update function//
// press update button
//get the index
// show the data in the cells
// change the button to update
// update the array
// display in the table
document.querySelector('.remove').addEventListener('click', function () {
  var index = this.parentElement.parentElement.querySelector('td').innerHTML;

});



// remove function//
// get index
// remove from the array
// display in the table
document.querySelector('.remove').addEventListener('click', function () {
  var index = Number(this.parentElement.parentElement.querySelector('td').innerHTML);
  array.splice(index, 1);
  display(array);

});





// search function//
// get the option
// get the search text
// display in the table
function search() {
  var option = document.querySelector('select').value;
  var input = document.querySelector('.search').value;
  var chosenarray = [];
  // console.log(`choosen array is ${chosenarray.length}`);
  if (option == 'price') {
    for (let i = 0; i < array.length; i++) {
      if (array[i][option] >= Number(input)) {
        chosenarray.push(array[i])
      }
    }
  } else {
    for (let i = 0; i < array.length; i++) {
      if (array[i][option].includes(input)) {
        chosenarray.push(array[i])
      }
      // console.log();
    }
  }
  display(chosenarray)

}
