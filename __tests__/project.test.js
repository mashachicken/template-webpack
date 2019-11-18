import { Years } from './../src/calculator.js';
describe('Years', () => {
  test('Should correctly calculate user`s age in mercury years', () => {
    let testAge = new Years(30);
    testAge.mercuryCount()
    expect(testAge.mercuryYears).toEqual(7.199999999999999);
  });
  test('Should correctly calculate user`s age in mercury years', () => {
    let testAge = new Years(30);
    testAge.venusCount()
    expect(testAge.venusYears).toEqual(18.6);
  });
  let testAge = new Years(20);
  testAge.marsCount()
  expect(testAge.marsYears).toEqual(17.599999999999994);
});
