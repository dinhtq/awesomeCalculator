
//name input
	$(':text:first').focus();

	$('#hiUserbox').hide();
	$('#noUser').hide();


	$('#usernamebox').animate({left : '10%'});

	$('#custom-footer').animate({left : '30%'}, '50');






/*
operation key code
	add button = 1
	subtract button = 2
	multiply button = 3
	divide button = 4
*/
var operation = 0;

//building strings
var first_string = " ";
var second_string = " ";
var empty_string = " ";
var second_append = false;



//set variables for first and second number
var first ;
var second ;
var result ;

//for plus/minus sign
//true is plus
//false is minus



//checking users... 
// if there is a username key-value, then just prompt "Hi, user" or else enter name for localstorage div shows up

if (localStorage.getItem("username")) {

	var gotuser = localStorage.getItem("username");
	$('#hiUserbox').fadeIn("slow");	
	$("#hiUser").fadeIn("slow");

	$('#hiUser').html("Hi, " + gotuser);

} else {

	$('#noUser').fadeIn("slow");


}

$('#notyou').click(function(){

	$('#hiUserbox').hide();
	$('#noUser').fadeIn("slow");


});




$('#submitName').click(function(){

	var userstr = $('#username').val();

	localStorage.setItem("username",userstr);

	var gotuser = localStorage.getItem("username");

	$('#hiUserbox').fadeIn("slow");

	$('#hiUser').fadeIn("slow").html("Hi, " + gotuser);

	$('#noUser').hide();

}); 

function btnadd_clicked() {

	switch(operation) 
	{
		case 1: number = first + second;
				$('#value').html(number);
				



				first = number;
				break;
		case 2: number = first - second;
				$('#value').html(number);
				historystr = ('#value').val();
				first = number;
				break;
		case 3: number = first * second;
				$('#value').html(number);
				historystr = ('#value').val();
				first = number;
				break;
		case 4: number = first / second;
				$('#value').html(number);
				historystr = ('#value').val();
				first = number;
				break;

	}
	 
	
	operation = 1;
	second_append = false;

	$('#test').html("first =" + first + " <br>second= " + second + " <br>operation=" + operation + " <br>second_append=" + second_append);


}

function btnminus_clicked() {

	switch(operation) 
	{
		case 1: number = first + second;
				$('#value').html(number);
				first = number;
				break;
		case 2: number = first - second;
				$('#value').html(number);
				first = number;
				break;
		case 3: number = first * second;
				$('#value').html(number);
				first = number;
				break;
		case 4: number = first / second;
				$('#value').html(number);
				first = number;
				break;

	}

	operation = 2;
	second_append = false;

	$('#test').html("first =" + first + " <br>second= " + second + " <br>operation=" + operation + " <br>second_append=" + second_append);

}


function btnzero_clicked() {

	if (operation == 0) 	
		{ 
			
			$('#value').append("0");
			
			var output = $('#value').html();
			first = Number(output);
			
		
			
			
		} else {

			if (second_append == false) {
						document.getElementById('value').innerHTML = second_string;
						second_string = $('#value').append("0");
						var output = $('#value').html();
						second = Number(output);
						second_append = true;
					
					} else{
						second_string = $('#value').append("0");
						var output = $('#value').html();
						second = Number(output);
						
					}
			
			
			
		}
}



// keep count for local storage
var count = 0;

function btnequal_clicked() {

	switch(operation) 
	{ 
		case 1:  
			result = first + second;
			document.getElementById('value').innerHTML = result;

			//for history storage
			var resultstr = $('#value').html();
			$('#history').append("<p>" + first + " + " + second + " = " + resultstr + "</p>");

			first = result;

			break;

		case 2:
			result = first - second;
			document.getElementById('value').innerHTML = result;

			//for history storage
			var resultstr = $('#value').html();
			$('#history').append("<p>" + first + " - " + second + " = " + resultstr + "</p>");
			first = result;
			break;

		case 3:
			result = first * second;
			document.getElementById('value').innerHTML = result;
			//for history storage
			var resultstr = $('#value').html();
			$('#history').append("<p>" + first + " x " + second + " = " + resultstr + "</p>");
			first = result;
			break;

		case 4:
			result = first / second;
			document.getElementById('value').innerHTML = result;
			//for history storage
			var resultstr = $('#value').html();
			$('#history').append("<p>" + first + " / " + second + " = " + resultstr + "</p>");
			first = result;
			break;


		default: 
			str = Number(result);
			document.getElementById('value').innerHTML = empty_string;
			break;

	}

	if (operation != 0) {

		second = 0;
		second_string = " ";
	}



	
}


function btnone_clicked() {

	

	if (operation == 0) 	
		{ 
			
			$('#value').append("1");
			
			var output = $('#value').html();
			
			first = Number(output);
		
			
			
		} else {

					if (second_append == false) {
						document.getElementById('value').innerHTML = " ";
						$('#value').append("1");
						var output = $('#value').html();
						second = Number(output);
						second_append = true;
					
					} else{
						$('#value').append("1");
						var output = $('#value').html();
						second = Number(output);
						
					}
			
			
			
		}

		$('#test').html("first =" + first + " <br>second= " + second + " <br>operation=" + operation + " <br>second_append=" + second_append);


		
	
	
}

function btntwo_clicked() {

	if (operation == 0) 	
		{ 
			
			$('#value').append("2");
			var output = $('#value').html();
			
			first = Number(output);
			
		} 

		else {
					if (second_append == false) {
						document.getElementById('value').innerHTML = " ";
						$('#value').append("2");
						var output = $('#value').html();
						second = Number(output);
						second_append = true;
					
					} else{
						$('#value').append("2");
						var output = $('#value').html();
						second = Number(output);
						
					}
	
		}

		$('#test').html("first =" + first + " <br>second= " + second + " <br>operation=" + operation + " <br>second_append=" + second_append);
}


function btnthree_clicked() {

	if (operation == 0) 	
		{ 
			
			first_string = $('#value').append("3");
			var output = $('#value').html();
			
			first = Number(output);
			
		} else {
			if (second_append == false) {
						document.getElementById('value').innerHTML = " ";
						$('#value').append("3");
						var output = $('#value').html();
						second = Number(output);
						second_append = true;
					
					} else{
						$('#value').append("3");
						var output = $('#value').html();
						second = Number(output);
						
					}
			

			
			
		}
}

function btnfour_clicked() {

	if (operation == 0) 	
		{ 
			
			first_string = $('#value').append("4");
			var output = $('#value').html();
			
			first = Number(output);
			
		} else {

			if (second_append == false) {
						document.getElementById('value').innerHTML = " ";
						second_string = $('#value').append("4");
						var output = $('#value').html();
						second = Number(output);
						second_append = true;
					
					} else{
						second_string = $('#value').append("4");
						var output = $('#value').html();
						second = Number(output);
						
					} 
			

			
			
		}
}

function btnfive_clicked() {

	if (operation == 0) 	
		{ 
			
			$('#value').append("5");
			var output = $('#value').html();
			
			first = Number(output);
			
		} else {
			
			if (second_append == false) {
						document.getElementById('value').innerHTML = " ";
						$('#value').append("5");
						var output = $('#value').html();
						second = Number(output);
						second_append = true;
					
					} else{
						$('#value').append("5");
						var output = $('#value').html();
						second = Number(output);
						
					}
			

			
			
		}


		$('#test').html("first =" + first + " <br>second= " + second + " <br>operation=" + operation + " <br>second_append=" + second_append);
}

function btnsix_clicked() {

	if (operation == 0) 	
		{ 
			
			$('#value').append("6");
			var output = $('#value').html();
			
			first = Number(output);
		
		} else {
			
			if (second_append == false) {
						document.getElementById('value').innerHTML = " ";
						$('#value').append("6");
						var output = $('#value').html();
						second = Number(output);
						second_append = true;
					
					} else{
						$('#value').append("oops");
						var output = $('#value').html();
						second = Number(output);
						
					}
	
		}

		$('#test').html("first =" + first + " <br>second= " + second + " <br>operation=" + operation + " <br>second_append=" + second_append);
}

function btnseven_clicked() {

	if (operation == 0) 	
		{ 
	
			first_string = $('#value').append("7");
			var output = $('#value').html();
			
			first = Number(output);
		
		} else {
			
			if (second_append == false) {
						document.getElementById('value').innerHTML = " ";
						second_string = $('#value').append("7");
						var output = $('#value').html();
						second = Number(output);
						second_append = true;
					
					} else{
						second_string = $('#value').append("7");
						var output = $('#value').html();
						second = Number(output);
						
					}
			

			
			
		}
}

function btneight_clicked() {

	if (operation == 0) 	
		{ 
			
			first_string = $('#value').append("8");
			var output = $('#value').html();
			
			first = Number(output);
			
		} else {
		
			if (second_append == false) {
						document.getElementById('value').innerHTML = " ";
						second_string = $('#value').append("8");
						var output = $('#value').html();
						second = Number(output);
						second_append = true;
					
					} else{
						second_string = $('#value').append("8");
						var output = $('#value').html();
						second = Number(output);
						
					}
			
			

			
			
		}
}


function btnnine_clicked() {

	if (operation == 0) 	
		{ 
			
			first_string = $('#value').append("9");
			var output = $('#value').html();
			
			first = Number(output);
			
		} else {
			if (second_append == false) {
						document.getElementById('value').innerHTML = " ";
						second_string = $('#value').append("9");
						var output = $('#value').html();
						second = Number(output);
						second_append = true;
					
					} else{
						second_string = $('#value').append("9");
						var output = $('#value').html();
						second = Number(output);
						
					}
			

			
			
		}
}

function btnclear_clicked() {
	document.getElementById('value').innerHTML = "";
	first = 0;
	second = 0;
	first_string = "";
	second_string = "";
	operation = 0;
	second_append = false;
}



function btndivide_clicked() {

	switch(operation) 
	{
		case 1: number = first + second;
				$('#value').html(number);
				first = number;
				break;
		case 2: number = first - second;
				$('#value').html(number);
				first = number;
				break;
		case 3: number = first * second;
				$('#value').html(number);
				first = number;
				break;
		case 4: number = first / second;
				$('#value').html(number);
				first = number;
				break;

	}

	operation = 4;
	second_append = false;

	
}

function btnmult_clicked() {

	switch(operation) 
	{
		case 1: number = first + second;
				$('#value').html(number);
				first = number;
				break;
		case 2: number = first - second;
				$('#value').html(number);
				first = number;
				break;
		case 3: number = first * second;
				$('#value').html(number);
				first = number;
				break;
		case 4: number = first / second;
				$('#value').html(number);
				first = number;
				break;

	}

	operation = 3;
	second_append = false;

	
}






function btndel_clicked() {

	var str = $('#value').html();

	if (operation == 0) {
		var temp = str.substr(0,str.length-1);
		$('#value').html(temp);
		first_string = temp;

	} else {
		var temp = str.substr(0,str.length-1);
		$('#value').html(temp);
		second_string = temp;
	}


	
	
}

function btndecimal_clicked() {
	if (operation == 0) 	
		{ 
			
			first_string = $('#value').append(".");
			var output = $('#value').html();
			
			first = Number(output);
			
		} else {
			if (second_append == false) {
						document.getElementById('value').innerHTML = " ";
						second_string = $('#value').append(".");
						var output = $('#value').html();
						second = Number(output);
						second_append = true;
					
					} else{
						second_string = $('#value').append(".");
						var output = $('#value').html();
						second = Number(output);
						
					}
			

			
			
		}

}

function btnplusminus_clicked() {

	var temp = $('#value').html();
		var tempnumber = temp * (-1);
		$('#value').html(tempnumber);

	if (operation == 0) 	
		{ 
			
			first = tempnumber;
			
		} else {
			
			second = tempnumber;
		}
	
	
		



}
	


function btnparen_clicked() {

	document.getElementById('value').innerHTML = "()";
}









