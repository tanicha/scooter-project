const User = require('./User')
const Scooter = require('./Scooter')

class ScooterApp {
  constructor(){
    this.stations = {
      'Station 1': [],
      'Station 2': [],
      'Station 3': []
    }
    this.registeredUsers = {};
  }

  registerUser(username, password, age){
    // this.password does not exist on a ScooterApp object
    if (!username in this.registeredUsers && this.password === password && age >= 18)
      // because this.registeredUsers is an object, we cannot push to it
      // instead, we can set this.registeredUsers[username] = new User(username, password, age)
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
    
    // can also check here if this.registeredUsers[username].loggedIn
    if (!username in this.registeredUsers)
      throw new Error ('No such user is logged in')
  }

  createScooter(station) {
    if (station in this.station){
      const addScooter = new Scooter(station)
      this.station[station].push(addScooter)
      // new scooter is returned
      console.log('Created new scooter:', addScooter.serial)
    } else {
        throw new Error('No Such station')
    }
  }

  dockScooter(scooter, station) {
    if (!this.stations[station])
      throw new Error('No such station');

    // instead of iterating through all stations,
    // we have station as an argument and only need to check
    // this.stations[station] contents
    for (let station in this.stations) {
      if (this.stations[station].includes(scooter)) {
        throw new Error('Scooter is already at station')
      } else {
        this.stations[station].push(scooter);
        scooter.dock(station);
        console.log('Scooter is docked');
      }
    }
  }

  rentScooter(scooter, user){
    // consider adding error case if scooter.station doesn't exist
    for (let station in this.stations){
      let thisStation = this.stations[station]
      if (thisStation.includes(scooter)){
        // make sure to also remove the specific scooter from the station array
        scooter.rent(user);
        console.log('Scooter is rented');
      }
    }
    if(Scooter.user != null) 
      throw new Error('Scooter already rented')
  }

  print(){
    // love the user experience consideration in this output!
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