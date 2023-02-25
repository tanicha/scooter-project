class Scooter{
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
  if (this.charge >= 20 && this.isBroken === false)
    this.user = user;
    console.log(this.user, 'has checked out', this.serial)

  if (this.charge < 20)
    throw new Error ('Scooter needs to be charged')
  
  if (this.user != null)
    throw new Error ('Scooter is already rented')
  
  if(this.isBroken === true)
    throw new Error ('Scooter has to be repaired')
}

  dock(station){
    if (!this.station) 
      throw new Error('Station does not exist')

    if (!this.station) 
      throw new Error('Scooter has already been docked')

    this.station = station;
    this.user = null;
    console.log(this.serial, 'has been docked')
  }
}

module.exports = Scooter;