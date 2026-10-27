import * as Vehicle from "./Vehicle";

class Motorcycle extends Vehicle {
  engineCapacity;
  licenseType;
  constructor(vehicleParam) {
    super.Vehicle(vehicleParam);
    this.engineCapacity = vehicleParam.engineCapacity;
    this.licenseType = vehicleParam.licenseType;
  }

  getInfo() {
    return `${super.getInfo()}
        Engine Capacity: ${this.engineCapacity}
        License Type: ${this.licenseType}`;
  }

  calculateRentalPrice(days) {
    return super.calculateRentalPrice(days) + 15;
  }
}
