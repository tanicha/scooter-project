const Scooter = require('../src/Scooter')
const User = require('../src/User')
const ScooterApp = require('../src/ScooterApp')

// make sure the indentation sizes in this file are consistent with other files in the project
describe("ScooterApp", () => {
    let scooterAppTest;
    let userTest = new User("Tani", "Password", 20);
    beforeEach(() => {
        scooterAppTest = new ScooterApp()
    });

// register user
    test('register user method test', () => {
        // the registerUser() method needs arguments here.
        // additionally, instead of using toBe here, consider using
        // a jest spying method to make sure info you expect to be logged is being logged
        expect(scooterAppTest.registerUser()).toBe(this.username, 'has been registered')
    });

    //not throwing - failing
    // check out the comments in ScooterApp.js for making this test throw properly
    test('register user method error test', () => {
        const registerUserTest = new ScooterApp()
        registerUserTest.registeredUsers = {'username': 'Tani'};
        expect(() => registerUserTest.registerUser('Tani', 'Password', 20)).toThrowError('User is already registered')
    });

    test('error age test', () => {
        expect(() => {
        scooterAppTest.registerUser('Tani', 'Password', 13)}).toThrowError('User is too young to register');
    });

    // consider adding a test to ensure that loginUser works as expected in the 'happy path' scenario
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

    // consider adding logout test here to make sure error case is tested

    // rent scooter

    //failing
    test('rent scooter method test', () => {
        scooterRenter = new ScooterApp()
        // the stationsTest variable isn't being used, consider removing or incorporating in a test
        let stationsTest = scooterRenter.stations = {
        'Station 1': ['scooter1'],
        'Station 2': ['scooter2'],
        'Station 3': ['scooter3']}
        
        // the scooter attribute does not exist on a ScooterApp object
        // instead, we want to check the station 2 array on the scooterRenter.stations object
        expect(scooterRenter.scooter).toBe('scooter2')
        expect(scooterRenter.rentScooter('scooter2', 'Tani').user).toBe(this.user, 'has checked out', this.serial)
    });

    test('rent method throws error if scooter is already rented', () => {
        rentTest = new ScooterApp()
        // because user attribute does not exist on a Scooter object,
        // we can register a new user to our rentTest app by calling rentTest.registerUser(args here)
        Scooter.user = 'Tani'
        expect(() => rentTest.rentScooter(this.scooter, 'Ryan')).toThrowError('Scooter already rented')
    });

    // dock scooter
    describe("dockScooter method test", () => {
        test("dock scooter test", () => {
            // since scooterTest2 represents a Scooter object,
            // this can be adjusted to create a new Scooter (rather than a new ScooterApp)
            // in order for your test result to adjust
            let scooterTest2 = new ScooterApp("Station 1");
            scooterAppTest.dockScooter(scooterTest2, "Station 1");
            expect(scooterAppTest.stations["Station 1"]).toContain(scooterTest2);
        });

        test("dock scooter error method test for no station existing", () => {
            // same comment as above, use a new Scooter creation here
            let scooterTest = new ScooterApp();
            expect(() => scooterAppTest.dockScooter(scooterTest, "Station 4")).toThrow('No such station');
        });

    });

});