class Car {

    static getSpecs({maxSpeed, price, speed, isOn, distance}) {
        console.log(`maxSpeed: ${maxSpeed}, speed:${speed},
         isOn: ${isOn}, distance: ${distance} и price: ${price}.`);
    }
    /*
     * Добавь статический метод `getSpecs(car)`,
     * который принимает объект-машину как параметр и выводит
     * в консоль значения свойств maxSpeed, speed, isOn, distance и price.
     */
  
    /*
     * Конструктор получает объект настроек.
     *
     * Добавь свойства будущеего экземпляра класса:
     *  speed - текущая скорость, изначально 0
     *  price - цена автомобиля
     *  maxSpeed - максимальная скорость
     *  isOn - заведен ли автомобиль, значения true или false. Изначально false
     *  distance - общий киллометраж, изначально 0
     */
    constructor({speed = 0,price,maxSpeed,isOn = false,distance = 0}) {
        this.speed = speed;
        this._price = price;
        this.maxSpeed = maxSpeed;
        this.isOn = isOn;
        this.distance = distance;
    }
    get price() {
        return this._price
    };
    set price(value) {
        return this._price = value;
    };

  
    /*
     * Добавь геттер и сеттер для свойства price,
     * который будет работать с свойством цены автомобиля.
     */
  
    /*
     * Добавь код для того чтобы завести автомобиль
     * Записывает в свойство isOn значение true
     */
    turnOn() {
        this.isOn = true;
    }
  
    /*
     * Добавь код для того чтобы заглушить автомобиль
     * Записывает в свойство isOn значение false,
     * и сбрасывает текущую скорость в 0
     */
    turnOff() {
        this.isOn = false;
        this.speed = 0;
    }
  
    /*
     * Добавялет к свойству speed полученное значение,
     * при условии что результирующая скорость
     * не больше чем значение свойства maxSpeed
     */
    accelerate(value) {
        let newSpeed = this.speed + value;
        newSpeed <= this.maxSpeed ? this.speed = newSpeed :  this.speed = this.maxSpeed;
    }
  
    /*
     * Отнимает от свойства speed полученное значение,
     * при условии что результирующая скорость не меньше нуля
     */
    decelerate(value) {
        let newSpeed = this.speed - value;
        newSpeed < 0 ? this.speed = 0 : ``;
    }
  
    /*
     * Добавляет в поле distance киллометраж (hours * speed),
     * но только в том случае если машина заведена!
     */
    drive(hours) {
        this.isOn ? this.distance += this.speed*hours : ``;
    }
  }


//   const car = {
//     maxSpeed: 200,
//     price: 45000,
//     speed: 60,
//     isOn: true,
//     distance: 100,
//   }
//   Car.getSpecs(car)

//   let {maxSpeed, price, speed, isOn, distance} = car;
//   console.log(maxSpeed, price, speed, isOn, distance);
/////////////////////////////////////////////////////////////////////

// let user = {
//     name: `Mango`,
//     age: 120,
//     email: `aa@gsgsgdg.mail`,
//     isAdmin: false,
//     address:{
//         street: `Almazova`,
//         city:`Kyiv`,
//         home:2
//     },
//     hobbies: [`football`, `beer`, `TV`],
// }

// let {email, age, address:{city}, address:{home},hobbies:[football,beer, TV]} = user;
// console.log(city);
// console.log(beer);

/////////////////////////////////////////////////////////////////////////////////////////////////


  
  const mustang = new Car({ maxSpeed: 200, price: 2000 });
  
  mustang.turnOn();
  mustang.accelerate(50);
  mustang.drive(2);
  
  Car.getSpecs(mustang);
  console.log(mustang);
  // maxSpeed: 200, speed: 50, isOn: true, distance: 100, price: 2000
  
  mustang.decelerate(20);
  mustang.drive(1);
  mustang.turnOff();
  
  Car.getSpecs(mustang);
  // maxSpeed: 200, speed: 0, isOn: false, distance: 130, price: 2000
  
  console.log(mustang.price); // 2000
  mustang.price = 4000;
  console.log(mustang.price); // 4000