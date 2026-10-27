import * as Vehicle from "./Vehicle";

class Van extends Vehicle {
  loadCapacity;
  constructor(vanParam) {
    super(vanParam);
    this.loadCapacity = vanParam.loadCapacity;
  }

  getInfo() {}

  calculateRentalPrice(days) {}
}
