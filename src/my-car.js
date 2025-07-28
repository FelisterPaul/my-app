class Car {
    constructor(name) {
        this.brand = name;
    }
}

const mycar = new Car("Ford");
document.getElementById('output').textContent = mycar.brand;
