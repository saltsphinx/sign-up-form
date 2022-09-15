console.log("Hello, world!");
let pwordField = document.querySelector('#pass');
let pwordConfirm = document.querySelector('#passconfirm');
let warning = document.querySelector('.warning');

pwordField.addEventListener('change', CheckPass);
pwordConfirm.addEventListener('input', CheckPass);

function CheckPass() {
  if (pwordField.value != pwordConfirm.value) {
    [pwordConfirm, pwordField].forEach(p => p.classList.add('error'));
    warning.setAttribute('style', 'display: block');
  } else {
    [pwordConfirm, pwordField].forEach(p => p.classList.remove('error'));
    warning.setAttribute('style', 'display: none');
  }
}