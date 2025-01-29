function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215)
      .toString(16)
      .padStart(6, 0)}`;
  }
  const controls = document.querySelector('#controls');
  const input = controls.querySelector('input');
  const buttonCreate = controls.querySelector('[data-create]');
  const buttonDestroy = controls.querySelector('[data-destroy]');
  const boxexContainer = document.querySelector('#boxes');
  
  function createBoxes(amount) {
    const elements = [];
    let size = 30;
  
    for (let i = 0; i < amount; i++) { 
      const div = document.createElement('div');
      div.style.width = `${size}px`;
      div.style.height = `${size}px`;
      div.style.backgroundColor = getRandomHexColor();  
      div.style.margin = '5px';
      elements.push(div);
      size += 10;
    } 
    
      boxexContainer.append(...elements);
  }
   
  function destroyBoxes() { boxexContainer.innerHTML = ''; }
  
  buttonCreate.addEventListener('click', () => {
    const amount = Number(input.value.trim());
    if (amount >= 1 && amount <= 100) {
      destroyBoxes();
      createBoxes(amount);
      input.value = '';
    }
    else { alert('You should enter a number between 1 and 100') }
  });
  
  buttonDestroy.addEventListener('click', () => destroyBoxes());