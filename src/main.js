import $ from 'jquery';
import 'bootstrap';
import { Years } from './../src/calculator.js';
$(document).ready(function(){
  $("#calculateYearsForm").submit(function(event) {
    event.preventDefault()
    const userAge = $("#solar").val();
    const lifeExpectancy = $("#life").val();
    console.log(lifeExpectancy)
    let userYears = new Years (userAge, lifeExpectancy)
    userYears.mercuryCount()
    userYears.venusCount()
    userYears.marsCount()
    userYears.jupiterCount()
    console.log(userYears.yearsLeft())
    userYears.yearsLeft().forEach(function(year){
    $("#yearsleft").append("<li>" + year + "</li>")
  });

    $(".mercury").html(userYears.mercuryYears);
    $(".venus").html(userYears.venusYears);
    $(".mars").html(userYears.marsYears);
    $(".jupiter").html(userYears.jupiterYears);
});
});
