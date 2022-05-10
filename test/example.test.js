// IMPORT MODULES under test here:
// import { example } from '../example.js';

import { renderStadiums } from '../utils.js';
import { stadiums } from '../stadiums.js';

const test = QUnit.test;

test('test stadium render function', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = `<div class="stadium"><h1>Providence Park</h1><img src="./assets/providence.jpg"><p>Providence Park has a capacity of 26000 people and is in Portland.</p></div>`;
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = renderStadiums(stadiums[0]);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual.outerHTML, expected);
});
