const { TestWatcher } = require('jest');
const User = require('../src/User')

describe('User properties test', () => {
    let userTest;
    beforeEach(() => {
      userTest = new User('Tani', 'password123', 20);
    });
  
//properties

    test('new user', () => {
      expect(userTest.username).toBe('Tani');
      expect(userTest.age).toBe(20);
      expect(userTest.loggedIn).toBe(false);
    });

//methods
  
    test('log in method test', () => {
        userTest.login('password123');
        expect(userTest.loggedIn).toBe(true);
    });
  
    test('throws error if incorrect password', () => {
      expect(() => {userTest.login('incorrect')}).toThrowError('Incorrect password');
    });
  
    test('log out method test', () => {
        userTest.login('password123');
        userTest.logout();
        expect(userTest.loggedIn).toBe(false);
    });
  });