// Import stylesheets
import './style.css';
import brands from './brands.js';

const buttons = document.querySelectorAll('[data-button]');
const svgs = document.querySelectorAll('svg');
const text = document.querySelector('[data-text]');
let index = 0;

buttons.forEach((btn) => {
  btn.addEventListener('click', () => {
    const activeBrandSvg = document.querySelector('[data-active]');
    delete activeBrandSvg.dataset.active;
    findSvg(btn);
    findText();
  });
});

function findText() {
  const p = document.createElement('p');
  p.classList.add('text-gray-600');
  p.innerHTML = brands[index].text;
  text.firstElementChild.remove();
  const a = text.lastElementChild;
  a.remove();

  text.appendChild(p);
  text.appendChild(a);
  a.classList.add('animation-text');
  p.classList.add('animation-text');
}

function findSvg(btn) {
  const offset = btn.dataset.button === 'next' ? 1 : -1;

  index = index + offset;

  if (index < 0) index = brands.length - 1;
  if (index >= brands.length) index = 0;

  svgs.forEach((svg) => {
    svg.id === brands[index].name ? (svg.dataset.active = true) : false;
  });
}
