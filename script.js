const buttons = document.querySelectorAll('button');
const box = document.getElementById('box');

buttons.forEach(button => {
  button.addEventListener('click', () => {
    const color = getComputedStyle(button).backgroundColor;
    box.style.backgroundColor = color;
    box.classList.toggle('moved');
    button.classList.add('clicked');
    button.classList.add('button-enlarged'); // Add the class to enlarge the button
    setTimeout(() => {
      button.classList.remove('clicked');
      button.classList.remove('button-enlarged'); // Remove the class after a delay
    }, 200);
  });

  button.addEventListener('mouseenter', () => {
    const color = button.dataset.color;
    const darkerColor = darkenColor(color, 20); // Adjust the darkness level as desired
    button.style.backgroundColor = darkerColor;
  });

  button.addEventListener('mouseleave', () => {
    const color = button.dataset.color;
    button.style.backgroundColor = color;
  });
});

function darkenColor(color, amount) {
  const parsedColor = /^rgb\((\d+),\s*(\d+),\s*(\d+)\)$/.exec(color);
  const r = parseInt(parsedColor[1]);
  const g = parseInt(parsedColor[2]);
  const b = parseInt(parsedColor[3]);
  const darkerR = Math.max(r - amount, 0);
  const darkerG = Math.max(g - amount, 0);
  const darkerB = Math.max(b - amount, 0);
  return `rgb(${darkerR}, ${darkerG}, ${darkerB})`;
}