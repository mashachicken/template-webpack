class Years {
  constructor (userYears) {
    this.years = userYears
    // this.mercuryYears =  mercuryYears,
    // this.venusYears =  venusYears,
    // this.marsYears = marsYears,
    // this.jupiterYears = jupiterYears
  }
  mercuryCount() {
  let mercuryYears = (userYears * .24);
  return mercuryYears
  }
  venusCount() {
  let mercuryYears = (userYears * .24);
  return mercuryYears
}
  marsCount() {
  let marsYears = (userYears * 1.88);
  return marsYears
}
  jupiterCount() {
  let jupiterYears = (userYears * 11.86);
  return jupiterYears
  }

};
