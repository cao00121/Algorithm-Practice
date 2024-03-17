let count = 0;
const $countEl = document.querySelector('#count');

document
.querySelector('button')
.addEventListener('click', () => {
count = count + 1;
$countEl.textContent = count;
});