// Напиши скрипт, который реагирует на изменение значения input#font-size-control (событие input) 
// и изменяет инлайн-стиль span#text обновляя свойство font-size. В результате при перетаскивании 
// ползунка будет меняться размер текста.

const inputRef = document.querySelector('#font-size-control');

const textRef = document.querySelector('#text');
// console.log(textRef);

function regulateInputChange() {
    textRef.style.fontSize = inputRef.value + 'px';
 }

inputRef.addEventListener('input', regulateInputChange);