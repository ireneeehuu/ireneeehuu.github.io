/* exported myFunction */
/** Add any JavaScript you need to this file. */

const atr = [
  {
    type: 'text',
    name: 'orderID',
    id: 'orderID',
    maxlength: '10',
    placeholder: 'Order Number'
  }
];

// window.onload = function() {
//   var option = document.getElementById('reason3');
//   if(option.checked) {
//     myFunction();
//   }
//   else {
//     myClear();
//   }
// };

function myFunction() {
  myClear();

  var select = document.getElementById('order');

  for (var i = 0; i < atr.length; i++) {
    var x = document.createElement('input');
    x.type = atr[i].type;
    x.name = atr[i].name;
    x.id = atr[i].id;
    x.maxLength = atr[i].maxlength;
    x.placeholder = atr[i].placeholder;

    select.appendChild(x);
  }
}

function myClear() {
  var input = document.getElementById('order');
  var existing = input.querySelector('input');
  if (existing) input.removeChild(existing);
}
