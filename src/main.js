$(document).ready(function){
  ("#calculateYearsForm").submit(function(event{
    const userAge = ("#solar").val();
    let userYears = new Years (userAge)
    $("#mercury").html(userYears.mercuryCount());
  }))
}
