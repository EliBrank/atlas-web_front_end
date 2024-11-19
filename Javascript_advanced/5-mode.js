function changeMode(size, weight, transform, background, color) {
  const page = document.documentElement;

  // establishes closure, allows new functions (mode changers) to build from this
  return () => {
    page.style.fontSize = size;
    page.style.fontWeight = weight;
    page.style.textTransform = transform;
    page.style.backgroundColor = background;
    page.style.color = color;
  }
}

function main() {
  const spooky = changeMode(9, 'bold', 'uppercase', 'pink', 'green');
  const darkMode = changeMode(12, 'bold', 'capitalize', 'black', 'white');
  const screamMode = changeMode(12, 'normal', 'lowercase', 'white', 'black');

  function createButton(buttonText, modeFunction) {
    const button = document.createElement('button');
    button.textContent = buttonText;

    button.addEventListener('click', modeFunction);

    document.body.appendChild(button);
  }

  const paragraph = document.createElement('p');
  paragraph.textContent = 'Welcome Atlas!';
  document.body.appendChild(paragraph);

  createButton('Spooky', spooky);
  createButton('Dark mode', darkMode);
  createButton('Scream mode', screamMode);
}

main();
