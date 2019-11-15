
class Years {
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
  let venusYears = (this.userAge* .24);
  return mercuryYears
}
  marsCount() {
  let marsYears = (this.userAge * 1.88);
  return marsYears
}
  jupiterCount() {
  let jupiterYears = (this.userAge* 11.86);
  return jupiterYears
  }

};
$(document).ready(function(){
  $("#calculateYearsForm").submit(function(event){
    event.preventDefault()
    const userAge = $("#solar").val();
    let userYears = new Years (userAge)
    userYears.mercuryCount()
    $(".mercury").html(userYears.mercuryYears);

  })
})
