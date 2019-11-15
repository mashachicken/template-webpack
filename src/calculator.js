import $ from 'jquery';
export class Years {
  constructor (userAge, mercuryYears, venusYears, marsYears, jupiterYears) {
    this.userAge = userAge,
    // this.mercuryYears =  mercuryYears,
    // this.venusYears =  venusYears,
    // this.marsYears = marsYears,
    // this.jupiterYears = jupiterYears
    this.mercuryYears = mercuryYears,
    this.venusYears = venusYears,
    this.marsYears =  marsYears,
    this.jupiterYears = jupiterYears
  }
  mercuryCount() {
  this.mercuryYears = (this.userAge * .24);
  }
  venusCount() {
  this.venusYears = (this.userAge * .24);
  }
  marsCount() {
  this.marsYears = (this.userAge * 1.88);
  }
  jupiterCount() {
  this.jupiterYears = (this.userAge * 11.86);
  }

};
