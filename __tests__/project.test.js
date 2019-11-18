import { Years } from './../src/calculator.js';
describe('Years', () => {
  test('Should correctly calculate user`s age in mercury years', () => {
    let testAge = new Years(20);
    testAge.mercuryCount()
    expect(testAge.mercuryYears).toEqual("50");
  });
});
