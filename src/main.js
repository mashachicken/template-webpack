import $ from 'jquery';
import 'bootstrap';
import { Years } from './../src/calculator.js';
$(document).ready(function(){
  $("#calculateYearsForm").submit(function(event) {
    event.preventDefault()
    const userAge = $("#solar").val();
    let userYears = new Years (userAge)
    userYears.mercuryCount()
    userYears.venusCount()
    userYears.marsCount()
    userYears.jupiterCount()
    $(".mercury").html(userYears.mercuryYears);
    $(".venus").html(userYears.venusYears);
    $(".mars").html(userYears.marsYears);
    $(".jupiter").html(userYears.jupiterYears);
});
});
