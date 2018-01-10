var add = function(number1, number2) {
  return number1 + number2;
};

var subtract = function(number1, number2) {
  return number1 - number2;
};

var multiply = function(number1, number2) {
  return number1 * number2;
};

var divide = function(number1, number2) {
  return number1 / number2;
};

$(document).ready(function (){
	$("#add").submit(function (event){
		event.preventDefault();

		var number1 = parseFloat($("#add1").val());
		var number2 = parseFloat($("#add2").val());
		$("#add1").val("");
		$("#add2").val("");
		$("#output-bar .output").text(add(number1, number2));
		$("#output-bar .num-in:first-child").text(number1);
		$("#output-bar .num-in:nth-child(2)").text(number2);
		$(".calc-output").show();
	});
});
