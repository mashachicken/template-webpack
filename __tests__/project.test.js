import { Years } from './../src/calculator.js';
describe('Years', () => {
  test('Should correctly calculate user`s age in mercury years', () => {
    var testAge = new Years(20);
    userYears.mercuryCount()
    expect(testAge.mercuryYears).toEqual(50);
  });
});
