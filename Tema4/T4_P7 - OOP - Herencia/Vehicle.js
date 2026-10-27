export class Vehicle {
  #id;
  #brand;
  #model;
  #year;
  pricePerDay;
  available;
  constructor(vehicleParam) {
    this.#id = vehicleParam.id;
    this.#brand = vehicleParam.brand;
    this.#model = vehicleParam.model;
    this.#year = vehicleParam.year;
    this.pricePerDay = vehicleParam.pricePerDay;
    this.available = vehicleParam.available;
  }

  get id() {
    return this.#id;
  }

  set id(idParam) {
    this.#id = idParam;
  }

  get brand() {
    return this.#brand;
  }

  set brand(brandParam) {
    this.#brand = brandParam;
  }

  get model() {
    return this.#model;
  }

  set model(modelParam) {
    this.#model = modelParam;
  }

  get year() {
    return this.#year;
  }

  set year(yearParam) {
    this.#year = yearParam;
  }

  getInfo() {
    return `
        Id: ${this.#id}
        Brand: ${this.#brand}
        Model: ${this.#model}
        Year: ${this.#year}
        PricePerDay: ${this.pricePerDay}
        Available: ${this.available}`;
  }

  calculateRentalPrice(days) {
    return days * this.pricePerDay;
  }

  isAvailable() {
    return this.available;
  }
}
