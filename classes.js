//1a. Write a class called `Person` that has 3 properties: a first name, a last name and a middle name. Create 2 instances of a `Person`. Print one of their first names.
//1b. Write a method in `Person` called `fullName` that will return a formatted string of an instance's full name. Call this method on both the instances you created in part a.



class Person {
	constructor(first, middle, last){
		this.first = first;
		this.middle = middle;
		this.last = last;
	}

	fullName(){
		return `${this.first} ${this.middle} ${this.last}`
	}
}

let chuck = new Person('chukwuka', 'ezefunna', 'okonkwo-aguolu');
let ek = new Person('ekene', 'dilichukwu', 'okonkwo-aguolu');

console.log(chuck.first);

console.log(chuck.fullName());
console.log(ek.fullName());



//2a. Create a class called `Book` that has properties `title`, `author` and `rating`. Create some instances of `Book`.
//2b. Add a method to `Book` called `isGood` that returns `true` if its rating is greater than or equal to 7
class Book {
	constructor(title, author, rating){
		this.title = title;
		this.author = author;
		this.rating = rating
	}

	isGood(){
		return this.rating >= 7
	}
}

let bestBook = new Book('Hyperion', 'Dan Simmons', 10);
let averageBook = new Book('Catch 22', 'Joseph Heller', 8);
let badBook = new Book('Dr. Phil Biography', 'Dr. Fil', 0);

console.log(bestBook.isGood());
console.log(badBook.isGood());


// a. Create a `Dog` class with four properties: `name (string), breed (string), mood (string), and hungry (boolean)`.

// b. Add a method called `playFetch`. It should set the dog's `hungry` property to `true`, set its mood property to `playful`, and log "Ruff!"

// c. Add a method called `feed`. If the dog is hungry, it should set `hungry` to `false` and print "Woof!" If the dog is not hungry, it should log "The dog doesn't look hungry"

// d. Add a method called `toString` that returns a description of the dog:


class Dog {
	constructor(name, breed, mood, hungry){
		this.name = name; 
		this.breed = breed;
		this.mood = mood;
		this.hungry = hungry;
	}

	playFetch(){
		this.hungry = true;
		this.mood = 'playful';
		console.log('Ruff!');
	}

	feed(){
		if(this.hungry){
			this.hungry = false; 
			console.log('Woof!')
		}
		else{
			console.log('The dog doesnt look very hungry');
		}
	}

	toString(){
		let sentence;
		if(this.hungry){
			sentence = 'hangry!'
		}
		else{
			sentence = 'happy!'
		}


		return `This dogs name is ${this.name} and he is a ${this.breed}. He is in a ${this.mood} mood and is very ${sentence}
		`
	}

}

let napoleon = new Dog('napoleon', 'Golden Retriever', 'happy', true);

console.log(napoleon.toString());

//a. Make an object called `freezingPoint` that has three properties: `celsius`, `fahrenheit`,
// and `kelvin`. Give them all values equal to the freezing point of water.

let freezingPoint = {
	celsius: 0,
	fahrenheit: 32,
	kelvin: 273
}

//b. Make a class called `Celsius` that has one property: `celsius`
//, and two methods `getFahrenheitTemp`, and `getKelvinTemp`.

class Celsius {
	constructor(celsius){
		this.celsius = celsius;
	}

	getFahrenheitTemp(){
		return 1.8 * this.celsius + 32;
	}

	getKelvinTemp(){
		return this.celsius + 273;
	}

	isBelowFreezing(){
		return this.celsius < 32;
	}
}

let niceDay = new Celsius(50);

let outsideTempt = new Celsius(10.0)
console.log(outsideTempt.celsius); //returns 10.0
console.log(outsideTempt.getKelvinTemp()); //returns 283.0
console.log(outsideTempt.getFahrenheitTemp()); //returns 50.0


//a. Create a class called `Movie` that has properties for `name`, `year`, `genre`, `cast`,
// and `description`. Create an instance of your `Movie`

//5b. Create an method inside `Movie` called `blurb` that returns a formatted string describing the movie.


class Movie {
	constructor(name, year, genre, cast, description){
		this.name = name;
		this.year = year;
		this.genre = genre;
		this.cast = cast;
		this.description = description;
	}

	blurb(){
		return `${this.name}, was a movie that came out in ${this.year}. It was a ${this.genre} starring ${this.cast}. ${this.description} `
	}
}

let greatMovie = new Movie('Avengers, Endgame', 2019, 'action/superhero', 'robert downey', 'Sorry, but no spoilers!!');


console.log(greatMovie.blurb());

// Write a constructor Vector that represents a vector in two-dimensional space.
// It takes two number arguments: `x` and `y` parameters, which it should be saved to properties of the same name.

// Give the Vector prototype two methods, `plus` and `minus`, that take another vector as an argument and
// returns a new vector that has the sum or difference of the two vectors’ (the one in `this` and the parameter) x and y values.

// Add a method `getLength` to the prototype that computes the length of the vector ;
// that is, the distance of the point (x, y) from the origin (0, 0).(a^2 + b^2 = c^2)


class Vector{
	constructor(x, y){
		this.x = x;
		this.y = y;
	}

	plus(vector){
		return new Vector(this.x + vector.x, this.y + vector.y);
	}

	minus(vector){
		return new Vector(this.x - vector.x, this.y - vector.y);
	}

	getLength(){
		return Math.sqrt((this.x * this.x) + (this.y * this.y));
	}
}

let xy = new Vector(3,4);

console.log(xy.getLength());

class Vehicle {
	constructor(color, name){
		this.color = color;
		this.name = name;
	}

	makeSound(){
		console.log('WHHOOSSSH');
	}
}


// a. Make a class called `Car` with properties `make` and `model`.  Create an instance of a `Car`

// b. Make a class called `Bike` with properties `gears` and `hasBell`.  Create an instance of `Bike`

// c. Give each class a static method called `numberOfWheels` that returns the number of wheels 
// (2 for bikes, 4 for cars).  Why does it make sense for this to be a static method instead of an 
// instance method?

class Car extends Vehicle {
	constructor(make, model, color, name){
		super(color, name);
		this.make = make;
		this.model = model;
	}

	static numberOfWheels(){
		return 4;
	}
}

let chucksCar = new Car('Nissan', 'Altima', 'gold', 'Chucks Car');
console.log(chucksCar);
console.log(Car.numberOfWheels());

class Bike extends Vehicle {
	constructor(gears, hasBell, color, name){
		super(color, name);
		this.gears = gears;
		this.hasBell = hasBell;
	}

	static numberOfWheels(){
		return 2;
	}
}

let randomBike = new Bike(4, false, 'yellow', 'Chucks Bike' );
console.log(randomBike);
console.log(Bike.numberOfWheels());

// a. Make a class called `Vehicle` with properties `color` and `name`.  Give it a method called `makeSound` which logs "WHHOOSSSH" to the console

// b. Modify your `Car` and `Bike` classes from Question 7 to extend the `Vehicle` class.

// c. Create a new `Bike` instance that has a `color` of "green" and `name` "Bikey McBikeface"

// d. Create a new `Car` instance that has a `color` of "red" and `name` "Carry McCarface"


let lolBike = new Bike(10, false, 'green', 'Bikey McBikeface');

console.log(lolBike);

let lolCar = new Car('Ford', 'F150', 'red', 'Carry McCarface');

console.log(lolCar);
