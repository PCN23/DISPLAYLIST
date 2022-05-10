// import functions and grab DOM elements
import { stadiums } from './stadiums.js';
import { renderStadiums } from './utils.js';

const stadiumListElem = document.getElementById('stadiums');

for (let stadium of stadiums){
    const stadiumdiv = renderStadiums(stadium);
    stadiumListElem.append(stadiumdiv);
}