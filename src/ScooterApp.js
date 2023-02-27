const User = require('./User')
const Scooter = require('./Scooter')

class ScooterApp {
  // ScooterApp code here
  constructor(){
    this.stations = {
      'Station 1': [],
      'Station 2': [],
      'Station 3': []
    }
    this.registeredUsers = {};
  }

  registerUser(username, password, age){
    if (!username in this.registeredUsers && age >= 18)
      this.registeredUsers.push(username)
      console.log(this.username, 'has been registered')

    if (age < 18)
      throw new Error('User is too young to register')
    
    if (username in this.registeredUsers)
      throw new Error ('User is already registered')
  }

  loginUser(username, password){
    if (username in this.registeredUsers)
      this.registeredUsers[username].login()

    if (!username in this.registeredUsers)
      throw new Error ('Username is incorrect')

    if (this.password != password)
      throw new Error ('Password is incorrect')
  }

  logoutUser(username){
    if (username in this.registeredUsers)
      this.registeredUsers[username].logout()
    
    if (!username in this.registeredUsers)
      throw new Error ('No such user is logged in')
  }

  createScooter(station) {
    if (station in this.station){
      const addScooter = new Scooter(station)
      this.station[station].push(addScooter)
      console.log('Created new scooter:', addScooter.serial)
    } else {
        throw new Error('No Such station')
    }
  }

  dockScooter(scooter, station) {
    if (!this.stations[station])
      throw new Error('No such station');

    for (let station in this.stations) {
      if (Object.values(this.stations[station]).includes(scooter)) {
        throw new Error('Scooter is already at station')
      } else {
        this.stations[station].push(scooter);
        scooter.dock(station);
        console.log('Scooter is docked');
      }
    }
  }

  rentScooter(scooter, user){
    for (let station in this.stations){
      let stationOne = this.stations[station]
      if (stationOne.includes(scooter)){
        scooter.rent(user);
        console.log('Scooter is rented');
      }
    }
    if(scooter.user != null) 
      throw new Error('Scooter already rented')
  }

  print(){
    for (let users in this.registeredUsers){
      console.log('Registered Users: ', users)
    }

    for (let station in this.stations){
      console.log('Stations: ', station)
      console.log('Amount of Scooters: ', this.stations[this.station])
      }
    }
  }

module.exports = ScooterApp;

