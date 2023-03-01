const Scooter = require('../src/Scooter')
const User = require('../src/User')
const ScooterApp = require('../src/ScooterApp')

// ScooterApp tests here
describe("ScooterApp", () => {
    let scooterAppTest;
    let userTest = new User("Tani", "Password", 20);
    beforeEach(() => {
    scooterAppTest = new ScooterApp()
});

// register user
test('register user method test', () => {
    expect(scooterAppTest.registerUser()).toBe(this.username, 'has been registered')
});

//not throwing - failing
test('register user method error test', () => {
    const registerUserTest = new ScooterApp()
    registerUserTest.registeredUsers = {'username1': 'Tani'};
    expect(() => registerUserTest.registerUser('Tani', 'Password', 20)).toThrowError('User is already registered')
});

test('error age test', () => {
    expect(() => {
    scooterAppTest.registerUser('Tani', 'Password', 13)}).toThrowError('User is too young to register');
});

// log in
test('login user error incorrect password test', () => {
    expect(() => {
    scooterAppTest.loginUser('Tani', 'Password2')}).toThrowError('Password is incorrect')
});

// log out
test("logout user method test", ()=>{
    scooterAppTest.logoutUser(this.user);
    expect(userTest.loggedIn).toBe(false);
});

// rent scooter

//failing
test('rent scooter method test', () => {
    scooterRenter = new ScooterApp()
    let stationsTest = scooterRenter.stations = {
    'Station 1': ['scooter1'],
    'Station 2': ['scooter2'],
    'Station 3': ['scooter3']}
    
    expect(scooterRenter.scooter).toBe('scooter2')
    expect(scooterRenter.rentScooter('scooter2', 'Tani').user).toBe(this.user, 'has checked out', this.serial)
});

  test('rent method throws error if scooter is already rented', () => {
    rentTest = new ScooterApp()
    Scooter.user = 'Tani'
    expect(() => rentTest.rentScooter(this.scooter, 'Ryan')).toThrowError('Scooter already rented')
});

// dock scooter
describe("dockScooter method test", () => {
test("dock scooter test", () => {
    let scooterTest2 = new ScooterApp("Station 1");
    scooterAppTest.dockScooter(scooterTest2, "Station 1");
    expect(scooterAppTest.stations["Station 1"]).toContain(scooterTest2);
});

test("dock scooter error method test for no station existing", () => {
    let scooterTest = new ScooterApp();
    expect(() => scooterAppTest.dockScooter(scooterTest, "Station 4")).toThrow('No such station');

});

});

});