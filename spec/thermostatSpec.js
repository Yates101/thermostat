describe('Thermostat', function() {

  var thermostat;

  beforeEach(function() {
    thermostat = new Thermostat();
  });

  describe('Thermostat temperature', function() {
    it('defaults to 20', function() {
      expect(thermostat.getTemperature()).toEqual(20);
    })

    describe('.increase', function() {
      it('increases the temperature by one', function() {
        thermostat.increase()
        expect(thermostat.getTemperature()).toEqual(21);
      })

      it('has a maximum of 32', function() {
        var i 
        for (i = 0; i < 15; i++) {
          thermostat.increase();
        }
        expect(thermostat.getTemperature()).toEqual(32);
      })
    })

    describe('.decrease', function() {
      it('decreases the temperature by one', function() {
        thermostat.decrease()
        expect(thermostat.getTemperature()).toEqual(19);
      })

      it('has a minimum of 10', function() {
        var i
        for (i = 0; i < 15; i++) {
          thermostat.decrease();
        }
        expect(thermostat.getTemperature()).toEqual(10);
      })
    })

    describe('power saving mode', function() {
      it('has a power saving attribute', function() {
        expect(thermostat.getPowerSavingMode()).toBe(false);
      })

      it('has a maximum of 25 when active', function() {
        thermostat.switchPowerSavingMode();
        var i
        for (i = 0; i < 6; i++) {
          thermostat.increase();
        }
        expect(thermostat.getTemperature()).toEqual(25);
      })

    })

  })

})
