let display = document.getElementById('display');
let input = document.getElementById('result');

let buttons = Array.from(document.getElementsByClassName('button'));

buttons.map((button) => {
  button.addEventListener('click', (e) => {
    switch (e.target.innerText) {
      case 'C':
        display.innerText = '';
        input.value = '';
        break;
      case '←':
        if (display.innerText) {
          display.innerText = display.innerText.slice(0, -1);
          input.value = input.value.slice(0, -1);
        }
        break;
      case '=':
        try {
          display.innerText = eval(display.innerText);
          input.value = eval(input.value);
        } catch {
          display.innerText = 'Wrong Input!!';
          input.value = 'Wrong Input!!';
        }
        break;
      default:
        display.innerText += e.target.innerText;
        input.value += e.target.innerText;
    }
  });
});

// buttons.map((button) => {
//   button.addEventListener('click', (e) => {
//     console.log('clicked');
//     console.log(e);
//     console.log(e.target);
//     console.log(e.target.innerText);
//   });
// });
