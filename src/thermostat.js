class Thermostat {
  constructor() {
    this.temperature = 20;
    this.powerSavingMode = false;
    this.maxTemperature = 32;
  }
  
  getTemperature() {
    return this.temperature;
  }

  getPowerSavingMode() {
    return this.powerSavingMode;
  }

  switchPowerSavingMode() {
    this.powerSavingMode = !this.powerSavingMode;
    if (this.powerSavingMode = true) {
      this.maxTemperature = 25;
    }
    else {
      this.maxTemperature = 32;
    }
  }

  increase() {
    if (this.temperature < this.maxTemperature) {
      this.temperature += 1;
    }
  }

  decrease() {
    if (this.temperature > 10) {
          this.temperature -= 1;
    }
  }
}
