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
test('regiser user method test', () => {
    scooterAppTest.registerUser('Tani', 'Password', 20);
    expect(scooterAppTest.registerUser()).toBe(this.username, 'has been registered')
});

test('error age test', () => {
    expect(() => {
      scooterAppTest.registerUser('Tani', 'Password', 13);
    }).toThrowError('User is too young to register');
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
test('rent scooter method test', () => {
    let thisUser = scooterAppTest.registeredUsers['Tani'];
    let thisScoota = scooterAppTest.stations['Station 1'][0];
    userLogIn = () => { scooterAppTest.rentScooter(thisScoota, thisUser); }
    expect(userLogIn).toThrow();
});

// dock scooter
describe("dockScooter method test", () => {
    test("dock scooter test", () => {
        let scooterTest2 = new Scooter("Station 1");
        scooterAppTest.dockScooter(scooterTest2, "Station 1");
        expect(scooterAppTest.stations["Station 1"]).toContain(scooterTest2);
    });

    test("dock scooter error method test", () => {
        const scooter = new Scooter();
        expect(() => scooterAppTest.dockScooter(scooter, "Station 4")).toThrow('No such station');
    });

    });

});
