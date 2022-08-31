let btn = Array.from(document.querySelectorAll('.button'))
let display = document.querySelector(".display");
btn.map((button) => {
  button.addEventListener('click', (e) => {
    switch (e.target.innerText) {
      case 'C':
        display.innerText = "";
        break;

      case '←':
        display.innerText = display.innerText.slice(0, -1);
        break;
      case '=':
        try {
          display.innerText = eval(display.innerText)

        } catch (e) {
          display.innerText="Error!"
        }
        break;

      default:

        display.innerText += e.target.innerText;



    }
  });
});