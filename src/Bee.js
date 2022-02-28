class Bee extends Grub {
  constructor() {
    super();
    this.age = 5;
    this.color = 'yellow';
    this.job = 'Keep on growing';
  }
}

//notes:
//calling super will allow you to inherit all properties from Parent (what you are extending)
//MDN: The super keyword is used to access and call functions on an object's parent
//The super() function is used to give access to methods and properties of a parent or sibling class.