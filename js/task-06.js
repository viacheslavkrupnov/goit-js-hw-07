// Напиши скрипт, который бы при потере фокуса на инпуте, 
// проверял его содержимое на правильное количество символов.
// Сколько символов должно быть в инпуте, указывается в его атрибуте data-length.
// Если введено подходящее количество, то border инпута становится зеленым, если неправильное - красным.
// Для добавления стилей, используй CSS-классы valid и invalid.

const inputRef = document.querySelector('#validation-input');

inputRef.addEventListener('focus', onInputFocus);
inputRef.addEventListener('blur', onInputBlur);

function onInputBlur(event) {
  const validLengthRef = Number(inputRef.getAttribute('data-length'));
  const valueInputRef = event.target.value;
  return valueInputRef.length === validLengthRef
    ? inputRef.classList.add('valid')
    : inputRef.classList.add('invalid');
}
function onInputFocus() {
  inputRef.classList.remove('valid', 'invalid');
}