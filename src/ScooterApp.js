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
    if (!username in this.registeredUsers && age >= 18){
      this.registeredUsers[username] = new User(username, password, age)
      console.log(this.username, 'has been registered')
    } else if (age < 18) {
        throw new Error ('Too young to register')
    } else if (username in this.registeredUsers){
        throw new Error ('User is already registered')
    }
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

  dockScooter(scooter, station){
    if (station in this.station){
      if(!this.station[station].includes(scooter))
        this.station[station].push(scooter)
        console.log(this.scooter, 'is docked')

    if (!station in this.station)
        throw new Error ('No such station')
    
    if (this.station[station].includes(scooter))
      throw new Error ('Scooter is already at the station')
    }
  }

  rentScooter(scooter, user){
    for (let stationKeys in this.stations){
      if (stationKeys.includes(scooter))
        scooter.rent(user)
        scooter.pop()
        console.log('Scooter is rented to: ', this.user)
    }
      if (scooter.user != null)
        throw new Error ('Scooter has already been rented')
  }
  
  print(){
    for (let users in this.registeredUsers){
      console.log('Registered Users: ', users)
    }

    for (let station in this.stations){
      console.log('Stations: ', station)
      console.log('Amount of Scooters: ', station.length)
      }
    }
  }

module.exports = ScooterApp;