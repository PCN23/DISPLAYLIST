export function renderStadiums(stadium) {
const div = document.createElement('div');
div.classList.add('stadium');

const h1 = document.createElement('h1');
h1.textContent = stadium.name;

const img = document.createElement('img');
img.src = stadium.image;

const p = document.createElement('p');
p.textContent = `${stadium.name} has a capacity of ${stadium.capacity} people and is in ${stadium.city}.`;

div.append(h1, img, p);
return div;

}