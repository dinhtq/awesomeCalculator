
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


function btnzero_clicked() {

	if (operation == 0) 	
		{ 
			
			first_string = $('#value').append("0");
			
			var output = $('#value').html();
			
		
			
			
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



function btnequal_clicked() {

	switch(operation) 
	{ 
		case 1:  
			result = first + second;
			document.getElementById('value').innerHTML = result;
			break;

		case 2:
			result = first - second;
			document.getElementById('value').innerHTML = result;
			break;

		case 3:
			result = first * second;
			document.getElementById('value').innerHTML = result;
			break;

		case 4:
			result = first / second;
			document.getElementById('value').innerHTML = result;
			break;


		default: 
			str = Number(result);
			document.getElementById('value').innerHTML = empty_string;
			break;

	}

	if (operation != 0) {
		first = second + first;
		second = 0;
		second_string = " ";
	}

	
}


function btnone_clicked() {

	

	if (operation == 0) 	
		{ 
			
			first_string = $('#value').append("1");
			
			var output = $('#value').html();
			
			first = Number(output);
		
			
			
		} else {

					if (second_append == false) {
						document.getElementById('value').innerHTML = second_string;
						second_string = $('#value').append("1");
						var output = $('#value').html();
						second = Number(output);
						second_append = true;
					
					} else{
						second_string = $('#value').append("1");
						var output = $('#value').html();
						second = Number(output);
						
					}
			
			
			
		}


		
	
	
}

function btntwo_clicked() {

	if (operation == 0) 	
		{ 
			
			first_string = $('#value').append("2");
			var output = $('#value').html();
			
			first = Number(output);
			
		} 

		else {
					if (second_append == false) {
						document.getElementById('value').innerHTML = second_string;
						second_string = $('#value').append("2");
						var output = $('#value').html();
						second = Number(output);
						second_append = true;
					
					} else{
						second_string = $('#value').append("2");
						var output = $('#value').html();
						second = Number(output);
						
					}

					

				
	
			
		}
}


function btnthree_clicked() {

	if (operation == 0) 	
		{ 
			
			first_string = $('#value').append("3");
			var output = $('#value').html();
			
			first = Number(output);
			
		} else {
			if (second_append == false) {
						document.getElementById('value').innerHTML = second_string;
						second_string = $('#value').append("3");
						var output = $('#value').html();
						second = Number(output);
						second_append = true;
					
					} else{
						second_string = $('#value').append("3");
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
						document.getElementById('value').innerHTML = second_string;
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
			
			first_string = $('#value').append("5");
			var output = $('#value').html();
			
			first = Number(output);
			
		} else {
			
			if (second_append == false) {
						document.getElementById('value').innerHTML = second_string;
						second_string = $('#value').append("5");
						var output = $('#value').html();
						second = Number(output);
						second_append = true;
					
					} else{
						second_string = $('#value').append("5");
						var output = $('#value').html();
						second = Number(output);
						
					}
			

			
			
		}
}

function btnsix_clicked() {

	if (operation == 0) 	
		{ 
			
			first_string = $('#value').append("6");
			var output = $('#value').html();
			
			first = Number(output);
		
		} else {
			
			if (second_append == false) {
						document.getElementById('value').innerHTML = second_string;
						second_string = $('#value').append("6");
						var output = $('#value').html();
						second = Number(output);
						second_append = true;
					
					} else{
						second_string = $('#value').append("6");
						var output = $('#value').html();
						second = Number(output);
						
					}
			

			
			
		}
}

function btnseven_clicked() {

	if (operation == 0) 	
		{ 
	
			first_string = $('#value').append("7");
			var output = $('#value').html();
			
			first = Number(output);
		
		} else {
			
			if (second_append == false) {
						document.getElementById('value').innerHTML = second_string;
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
						document.getElementById('value').innerHTML = second_string;
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
						document.getElementById('value').innerHTML = second_string;
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

function btnadd_clicked() {

	
	operation = 1;
	second_append = false;
	

}

function btndivide_clicked() {

	operation = 4;
	second_append = false;
}

function btnmult_clicked() {

	operation = 3;
	second_append = false;
}

function btndel_clicked() {

	document.getElementById('value').innerHTML = "DEL";
}

function btnminus_clicked() {

	operation = 2;
	second_append = false;
}



function btnparen_clicked() {

	document.getElementById('value').innerHTML = "()";
}









