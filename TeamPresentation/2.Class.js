class Animal {
  constructor(name, sound) {
    this.name = name;
    this.sound = sound;
  }

  speak() {
    console.log(this.name + " says " + this.sound);
  }
}

const dog = new Animal("Rex", "Woof!");
dog.speak();  // "Rex says Woof!"

// typeof class is "function"
console.log(typeof Animal); // "function"


class Car {
  constructor(name, year){
    this.name = name;
    this.year = year;
  }

  intro(){
    console.log(this.name + " was made in " + this.year)
  }

}


let car1 = new Car("Mustang", 2025)

car1.intro();