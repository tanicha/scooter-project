const Scooter = require('../src/Scooter')
const User = require('../src/User')
const ScooterApp = require('../src/ScooterApp')

// ScooterApp tests here

describe('ScooterApp tests', () => {
    let scooterAppTest;
    beforeEach(() => {
    scooterAppTest = new ScooterApp();
})

// register user
test('regiser user method test', () => {
    scooterAppTest.registerUser('Tani', 'Password', 20);
    expect(scooterAppTest.registerUser()).toBe(this.username, 'has been registered')
});

test('error age test', () => {
    expect(() => {
      scooterAppTest.registerUser('Tani', 'Password', 13);
    }).toThrowError('Too young to register');
});

// log in
test('login user error incorrect password test', () => {
    expect(() => {
        scooterAppTest.loginUser('Tani', 'Password2')}).toThrowError('Password is incorrect')
});

// log out

// rent scooter

// dock scooter

});
