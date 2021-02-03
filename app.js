// OO Challenge by:  Etienne Deneault

// Part One

class Vehicle {
	constructor(make, model, year) {
		this.make = make;
		this.model = model;
		this.year = year;
	}

	honk() {
		return `Beep.`;
	}

	toString() {
		return `The vehicle is a ${this.make} ${this.model} from ${this.year}.`;
	}
}

// Part Two

class Car extends Vehicle {
	constructor(make, model, year, numWheels) {
		super (make, model, year )
		this.numwheels = 4;
	}
}


// Part Three

class MotorCycle extends Vehicle {
	constructor(make, model, year, numWheels) {
		super(make, model, year);
		this.numWheels = 2;
	}

	revEngine() {
		return `VROOM!!!`
	}

}

// Part Four

class Garage {
	constructor(capacity) {
		this.vehicles = [];
		this.capacity = capacity;
	}

	add(newVehicle) {
		if ( !(newVehicle instanceof Vehicle) ) {
			return `Only vehicles are allowed in here!`;
		}
		if (this.vehicles.length >= this.capacity) {
			return `Sorry, we are full.`
		}
		this.vehicles.push(newVehicle);
		return `Vehicle added!`;
	}
}

// Testing

const myVehicle = new Vehicle("jetta", "golf", "1998");

const myCar = new Car("jetta", "golf", "1998");

const myMotorcycle = new MotorCycle("jetta", "golf", "1998");

const myGarage = new Garage(10)

myGarage.add(myVehicle);





