

# JavaScript Racer

## Introduction

We are going to implement a "racer game" using JavaScript, HTML and CSS.  

This is going to be a 2-day homework, and the breakdown of what is due when will follow the requirements.

## Exercise

#### Requirements

- Your game should have two pages: a landing page and a game page
- The landing page should have a "start" button that begins the game.
- At the beginning of the game, something runs across that the 'racers' have to chase.
- Your game should have two 'racers' that race across the screen when the right arrow key and 'z' are pressed.
- Include separate HTML, CSS, JavaScript files
- Style your landing page and game page with class-based CSS
- Include a media query for a tablet to make your pages responsive
- Comment your code appropriately
- Use images to create a background and/or players
- Adhere to the [AirBnB style guide](https://github.com/airbnb/javascript/tree/es5-deprecated/es5) for writing your JavaScript
- Adhere to the [Google style guide](https://google.github.io/styleguide/htmlcssguide.xml) for writing your HTML/CSS

#### Breakdown

##### Day 1

You will need a fully styled and and structured HTML page. You can use whatever theme you want for the racers, but you need to have the basic structure of the game by the end of tonight, complete with styling.

Wireframes are an important part of the design process so create at least three wireframes that convey the landing page, game start and game end. 

##### Day 2

You will need to add all javascript functionality by tonight. The game should be fully working and up to spec by the end of the night.

Pseudocode is an important part of planning out the design logic prior to writing one bit of code so write pseudocode for most, if not all, of your code. 

#### Starter code

There is no starter code for this project other than one blank HTML, CSS, and JS files located in the code folder of this repo. Here are some tips on how to get started:

- Start simple! Ask yourself what the MVP of this project is
- Create HTML and CSS files that create one red square div and one blue, lined up on the left side of the screen
- Add a keydown event listener that console logs "blue move" or "red move"
- replace that console log with JavaScript that moves the red or blue div a little to the right
- Run with it from there!
- If you are stuck on a problem, use pseudo-coding to break it down into smaller, more solvable problems

#### Deliverable

You should turn in your HTML, CSS, and JavaScript files to a GitHub repository (fork or separate repo). 

Here's a screenshot of what your game page might look like:

![example shot](https://git.generalassemb.ly/wdi-nyc-narwhal/U01-D04-RACER-HW/blob/master/chicken.png)

**Bonus:**

- Score each game based on the time it took to complete and by how much time they beat the opposing player
- Display the time it took for the player to complete the race
- Make a 'Best of 3' tournament and display the winner of the tournament
- Keep track of best times/ high scores across page refreshes using `localStorage`
- Add animations
- Have players do something other than simply pressing a key to move their player, for example, make them type words, or solve simple math problems

## Additional Resources
- JavaScript [documentation](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
- An [excellent resource](https://developer.mozilla.org/en-US/docs/Web/Events) for working with the DOM in vanilla JavaScript resource for students
- [Should you learn DOM manipulation in JavaScript before jQuery?](https://www.reddit.com/r/javascript/comments/3hpm1v/should_i_learn_dom_manipulation_with_raw/)
