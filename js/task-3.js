const textInput = document.querySelector('#name-input');
const textOutput = document.querySelector('#name-output');
textInput.addEventListener('input', () => { 
    const nameValue = textInput.value.trim();
    textOutput.textContent=nameValue || 'Anonymous'
})