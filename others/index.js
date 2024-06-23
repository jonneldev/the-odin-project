const myObject = {
    property: 'Value!',
    otherProperty: 77,
    "obnoxious property": function() {
      // do stuff!
    }
  };
  
// dot notation
myObject.property; // 'Value!'

// bracket notation
myObject["obnoxious property"]; // [Function]

const variable = 'property';

myObject.variable; // this gives us 'undefined' because it's looking for a property named 'variable' in our object

myObject[variable]; // this is equivalent to myObject['property'] and returns 'Value!'

// example one
const playerOneName = "tim";
const playerTwoName = "jenn";
const playerOneMarker = "X";
const playerTwoMarker = "O";

// example two
const playerOne = {
  name: "tim",
  marker: "X"
};

const playerTwo = {
  name: "jenn",
  marker: "O"
};

function printName(player) {
    console.log(player.name);
  }
  
console.log(playerOneName);
console.log(playerTwoName);

function gameOver(winningPlayer){
    console.log("Congratulations!");
    console.log(winningPlayer.name + " is the winner!");
  }
  

function Player(name, marker) {
  this.name = name;
  this.marker = marker;
}

function Player(name, marker) {
  this.name = name;
  this.marker = marker;
  this.sayName = function() {
    console.log(this.name)
  };
}

const player1 = new Player('steve', 'X');
const player2 = new Player('also steve', 'O');
player1.sayName(); // logs 'steve'
player2.sayName(); // logs 'also steve'


const player = new Player('steve', 'X');
console.log(player.name); // 'steve'



// Constructor function for creating Book objects
function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    
    // Method to report book information
    this.info = function() {
        let readStatus = this.read ? "read" : "not read yet";
        return `${this.title} by ${this.author}, ${this.pages} pages, ${readStatus}`;
    };
}

// Example usage:
let theHobbit = new Book("The Hobbit", "J.R.R. Tolkien", 295, false);
console.log(theHobbit.info()); // Outputs: "The Hobbit by J.R.R. Tolkien, 295 pages, not read yet"

// Another example with a book that has been read
let harryPotter = new Book("Harry Potter and the Philosopher's Stone", "J.K. Rowling", 223, true);
console.log(harryPotter.info()); // Outputs: "Harry Potter and the Philosopher's Stone by J.K. Rowling, 223 pages, read"

Object.getPrototypeOf(player1) === Player.prototype; // returns true
Object.getPrototypeOf(player2) === Player.prototype; // returns true
let x = {};
Object.getPrototypeOf(x);