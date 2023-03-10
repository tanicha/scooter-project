const Scooter = require('../src/Scooter')
const User = require('../src/User')

describe('Scooter test', () => {
  let scooterTest;
  beforeEach(() => {
    scooterTest = new Scooter('Station 1');
  });

  test('scooter is an object', () => {
    scooterType = new Scooter('Station 1');
    expect(typeof scooterType).toBe('object');
  });

  //Method tests:

  //rent method
  test('rent method test', () => {
    scooterTest.rent();
    expect(scooterTest.station).toBe('Station 1');
    expect(scooterTest.user).toBe(this.user);
  });

  test('rent method error test due to user != null', () => {
    Scooter.user = 'Tani'
    expect(() => scooterTest.rent('Dyl')).toThrowError('Scooter is already rented')
  });

  test('rent method error test for battery', () => {
    scooterTest.charge = 10;
    expect(() => {
      scooterTest.rent()}).toThrowError('Scooter needs to be charged');
  });

  test('rent method error test for broken scooter', () => {
    scooterTest.isBroken = true;
    expect(() => {
      scooterTest.rent()}).toThrowError('Scooter has to be repaired');
  });

  //dock method
  test('dock method', () => {
    scooterTest.dock('Station 1');
    expect(scooterTest.station).toBe('Station 1');
    expect(scooterTest.user).toBe(null);
  });
});