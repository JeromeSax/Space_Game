// Create a ship class
class Ship {
    constructor () {
        this.name = "USSAssembly";
        this.hull = 20;
        this.firepower = 5;
        this.accuracy = .7;
    }
// Method for USS Assembly to attack the alien ship
    attack(target) {
        if (target.hull <= 2) {
            console.log("You have landed a direct hit");
        } else if (target.hull >= 6) {
            console.log("You have missed your target");
        }
    }
}


let ship = new Ship("USSAssembly", 20, 5, .7);
// console.log(ship)



// Create a human ship sub-class
class HumanShip {
    constructor () {
        this.name = "SpaceRanger";
        this.hull = 10;
    }
}
let humanShip = new HumanShip("SpaceRanger", 10);

// Create an alien ship sub-class
class AlienShip {
    constructor () {
        this.name = "SpaceInvader";
        this.hull = Math.floor(Math.random() * 4) + 3;
        this.firepower = Math.floor(Math.random() * 3) + 2;
        this.accuracy = (Math.floor(Math.random() * 3) + 6) / 10;
    }

// Method for the Alien ship to attack the Ship
    attack(target) {
        if (target.hull < 20) {
            console.log("You have taken damage!");
        } else if (target.hull >= 20) {
            console.log("No damage taken");
        }
    }
}
const alienship = new AlienShip("SpaceInvader");
const alienship2 = new AlienShip("SpaceInvader2");
const alienship3 = new AlienShip("SpaceInvader3");
const alienship4 = new AlienShip("SpaceInvader4");
const alienship5 = new AlienShip("SpaceInvader5");
const alienship6 = new AlienShip("SpaceInvader6");
// console.log(alienship)

// Simulate battle
playerShip.attack(AlienShip);
alienship.attack(Ship);



// Create buttons
const button1 = document.getElementById("attack");
const button2 = document.getElementById("retreat");

button1.addEventListener('click', attack);
button2.addEventListener('click', retreat);






// Run the method and pass it throuh the alien ship

// Make it so the method reduces the target's hull by the firepower of the USS Asembly.



// Make a game OBJECT

// Make a method in the game OBJECT that will run a "check win" for the health of the aliens and the USS Assembly if the hull is 0 or less, display a message that the ship went kalboo-ey


// Make it so the alien will only be hit if a Math.random call is below the accuracy threshold.




// Add a status console log for the end of the round


// If the alien ship goes Kabloo-ey, then the alien should not be able to attack you


// Make it so the attacks will keep occuring until someone's hull is at 0. Isolate what it is that you want to repeat.


// Make many alien ships with a Class. Make each object slightly different


// The hull should be between 3 and 6, firepower between 2 and 4, and the accuracy between 0.6 and 0.8


// CLUE/ANSWER
// this.hull = Math.floor(Math.random() * 4) + 3;
// this.firepower = Math.floor(Math.random() * 3) + 2;
// this.accuracy = (Math.floor(Math.random() * 3) + 6) / 10;

// Make a loop that calls the Class and generates alien ships.
// Push those constructed objects into a predefined array.
// Start with 6 ships (the loop should run 6 times)

// Move functions into the game object
