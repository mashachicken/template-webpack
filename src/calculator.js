class Years {
  constructor (userAge) {
    this.userAge = userAge
    // this.mercuryYears =  mercuryYears,
    // this.venusYears =  venusYears,
    // this.marsYears = marsYears,
    // this.jupiterYears = jupiterYears
  }
  mercuryCount() {
  let mercuryYears = (userAge * .24);
  return mercuryYears
  }
  venusCount() {
  let mercuryYears = (userAge* .24);
  return mercuryYears
}
  marsCount() {
  let marsYears = (userAge * 1.88);
  return marsYears
}
  jupiterCount() {
  let jupiterYears = (userAge* 11.86);
  return jupiterYears
  }

};
