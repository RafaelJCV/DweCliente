import * as Vehicle from "./Vehicle";

export class Car extends Vehicle {
  doors;
  seats;
  constructor(vehicleParam) {
    super(vehicleParam);
    this.doors = vehicleParam.doors;
    this.seats = vehicleParam.seats;
  }

  getInfo() {
    return `${super.getInfo()}
    Doors: ${this.doors}
    Seats: ${this.seats}`;
  }

  calculateRentalPrice(days) {
    return days > 7
      ? super.calculateRentalPrice(days) * 0.9
      : super.calculateRentalPrice(days);
  }
}
