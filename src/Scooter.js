class Scooter { 
  static = this.nextSerial = 1;
  constructor(station){
    this.station = station;
    this.user = null;
    this.serial = Scooter.nextSerial++;
    this.charge = 100;
    this.isBroken = false;
  }

//methods:

rent(user){
  if (this.charge >= 20 && !this.isBroken)
    this.user = user;
    // make sure to also set the scooter's station to null
    console.log(this.user, 'has checked out', this.serial)

  if (this.charge < 20)
    throw new Error ('Scooter needs to be charged')
  
  // can also verify here if scooter's station is null
  if (this.user != null)
    throw new Error ('Scooter is already rented')
  
  if(this.isBroken === true)
    throw new Error ('Scooter has to be repaired')
}

  dock(station){
    this.station = station;
    this.user = null;
    console.log(this.serial, 'has been docked')
  }

  // missing recharge and requestRepair methods here
}

module.exports = Scooter;