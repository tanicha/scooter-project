class User {
  constructor(username, password, age){
    this.username = username;
    this.password = password;
    this.age = age;
    this.loggedIn = false; 
  }

//methods

  login(password){
    if(this.password === password){
      this.loggedIn = true;
      console.log(this.username, 'is logged in')
    } else {
        throw new Error('Incorrect password')
  }
}

  logout(){
      this.loggedIn = false; 
      console.log(this.username, 'is logged out')
  }
}

module.exports = User;
