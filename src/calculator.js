export class Years {
  constructor (userAge, lifeExpectancy, mercuryYears, venusYears, marsYears, jupiterYears) {
    this.userAge = userAge,
    this.lifeExpectancy = lifeExpectancy,
    this.mercuryYears = mercuryYears,
    this.venusYears = venusYears,
    this.marsYears = marsYears,
    this.jupiterYears = jupiterYears
  }
  mercuryCount() {
    this.mercuryYears = (this.userAge * .24);
  }
  venusCount() {
    this.venusYears = (this.userAge * .62);
  }
  marsCount() {
    this.marsYears = (this.userAge * 1.88);
  }
  jupiterCount() {
    this.jupiterYears = (this.userAge * 11.86);
  }
  yearsLeft() {
    let yearsLeftArray = [];
    yearsLeftArray.push((this.lifeExpectancy * .24) - this.mercuryYears)
    yearsLeftArray.push((this.lifeExpectancy * .62) - this.venusYears)
    yearsLeftArray.push((this.lifeExpectancy * 1.88) - this.marsYears)
    yearsLeftArray.push((this.lifeExpectancy * 11.86) - this.jupiterYears)
    return yearsLeftArray
  }
};
