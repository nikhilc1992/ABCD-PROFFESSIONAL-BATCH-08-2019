class Vehicle
{
    //inside class there is datamembers & member function

     constructor(name, maker, engine) // constructor to initialize datamembers

      {
this.name = name;
this.maker= maker;
this.engine= engine;

      }
}

let mycar = new Vehicle ("Dezire", "Suzuki", "1200") // my car is object. new used to create object
console.log(mycar.name)
let vehicle = new Vehicle("test","ted","tew")
console.log(vehicle.name)
