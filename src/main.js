import $ from 'jquery';
import 'bootstrap';
import './styles.css';
import { Years } from './../src/calculator.js';
$(document).ready(function){
  ("#calculateYearsForm").submit(function(event{
    event.preventDefault()
    const userAge = ("#solar").val();
    let userYears = new Years (userAge)
    $("#mercury").html(userYears.mercuryCount());
  }))
}
