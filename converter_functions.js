//TEMPERATURE
function temperatureConverter(unitA, unitB, valueA, valueB){
	if (unitA!=unitB){
		if(unitA=="fahrenheit"){
			if(unitB=="kelvin"){
				valueB=((valueA-32)*(5/9)+273.15);
			}
			else if(unitB=="celsius"){
				valueB=(valueA-32)*(5/9);
			}
		else if(unitA=="celsius"){
			if(unitB=="fahrenheit"){
				valueB=((valueA*(9/5))+32);
			}
			else if(unitB=="kelvin"){
				valueB=(valueA+273.15);
			}	
		}
		else if(unitA=="kelvin"){
			if(unitB=="fahrenheit"){
				valueB=((valueA-273.15)*(9/5)+32);
			}
		}
			else if(unitB=="celsius"){
				valueB=(valueA-273.15);
			}	
		}
		document.getElementById('inputA').value=valueA;
		document.getElementById('inputB').value=valueB;
	}
	return;
}


//LENGTH
function lengthConverter(unitA, unitB, valueA, valueB){
	if (unitA!=unitB){
		if(unitA=="feet"){
			if(unitB=="yards"){
				valueB=valueA/3;
			}
			else if(unitB=="inches"){
				valueB=valueA*12;
			}
		}
		else if(unitA=="yards"){
			if(unitB=="inches"){
				valueB=valueA*36;
			}
			else if(unitB=="feet"){
				valueB=valueA*3;
			}	
		}
		else if(unitA=="inches"){
			if(unitB=="feet"){
				valueB=valueA/12;
			}
			else if(unitB=="yards"){
				valueB=valueA/36;
			}	
		}
		document.getElementById('inputA').value=valueA;
		document.getElementById('inputB').value=valueB;
	}
	return;
}


//MASS
function massConverter(unitA, unitB, valueA, valueB){
	if (unitA!=unitB){
		if(unitA=="pounds"){
			if(unitB=="grams"){
				valueB=valueA*453.592;
			}
			else if(unitB=="ounces"){
				valueB=valueA*16;
			}
		}
		else if(unitA=="grams"){
			if(unitB=="ounces"){
				valueB=valueA/28.35;
			}
			else if(unitB=="pounds"){
				valueB=valueA/453.592;
			}	
		}
		else if(unitA=="ounces"){
			if(unitB=="pounds"){
				valueB=valueA/16;
			}	
			else if(unitB=="grams"){
				valueB=valueA*28.35;
			}	
		}
		document.getElementById('inputA').value=valueA;
		document.getElementById('inputB').value=valueB;
	}
	return;
}

function revealOptions(measurement){
	revealOptionsA(measurement);
	revealOptionsB(measurement);
	return;
}

function unlockVar(unlockee){
	return true; 
}

function unlockTextFields(changedA,changedB){
	if(changedA==true&&changedB==true){
		document.getElementById('inputA').removeAttribute("disabled");
		document.getElementById('inputB').removeAttribute("disabled");
	}
	return true;
}

function revealOptionsA(measurement){
	if (measurement=="temperature"){
		document.getElementById('fahrenheitA').removeAttribute("disabled");
		document.getElementById('kelvinA').removeAttribute("disabled");
		document.getElementById('celsiusA').removeAttribute("disabled");
		document.getElementById('feetA').setAttribute("disabled","true");
		document.getElementById('yardsA').setAttribute("disabled","true");
		document.getElementById('inchesA').setAttribute("disabled","true");
		document.getElementById('poundsA').setAttribute("disabled","true");
		document.getElementById('ouncesA').setAttribute("disabled","true");
		document.getElementById('gramsA').setAttribute("disabled","true");
	}
	else if (measurement=="length"){
		document.getElementById('fahrenheitA').setAttribute("disabled","true");
		document.getElementById('kelvinA').setAttribute("disabled","true");
		document.getElementById('celsiusA').setAttribute("disabled","true");
		document.getElementById('feetA').removeAttribute("disabled");
		document.getElementById('yardsA').removeAttribute("disabled");
		document.getElementById('inchesA').removeAttribute("disabled");
		document.getElementById('poundsA').setAttribute("disabled","true");
		document.getElementById('ouncesA').setAttribute("disabled","true");
		document.getElementById('gramsA').setAttribute("disabled","true");
	}
	else if (measurement=="mass"){
		document.getElementById('fahrenheitA').setAttribute("disabled","true");
		document.getElementById('kelvinA').setAttribute("disabled","true");
		document.getElementById('celsiusA').setAttribute("disabled","true");
		document.getElementById('feetA').setAttribute("disabled","true");
		document.getElementById('yardsA').setAttribute("disabled","true");
		document.getElementById('inchesA').setAttribute("disabled","true");
		document.getElementById('poundsA').removeAttribute("disabled");
		document.getElementById('ouncesA').removeAttribute("disabled");
		document.getElementById('gramsA').removeAttribute("disabled");
	}
	return;
}

function revealOptionsB(measurement){
	if (measurement=="temperature"){
		document.getElementById('fahrenheitB').removeAttribute("disabled");
		document.getElementById('kelvinB').removeAttribute("disabled");
		document.getElementById('celsiusB').removeAttribute("disabled");
		document.getElementById('feetB').setAttribute("disabled","true");
		document.getElementById('yardsB').setAttribute("disabled","true");
		document.getElementById('inchesB').setAttribute("disabled","true");
		document.getElementById('poundsB').setAttribute("disabled","true");
		document.getElementById('ouncesB').setAttribute("disabled","true");
		document.getElementById('gramsB').setAttribute("disabled","true");
	}
	else if (measurement=="length"){
		document.getElementById('fahrenheitB').setAttribute("disabled","true");
		document.getElementById('kelvinB').setAttribute("disabled","true");
		document.getElementById('celsiusB').setAttribute("disabled","true");
		document.getElementById('feetB').removeAttribute("disabled");
		document.getElementById('yardsB').removeAttribute("disabled");
		document.getElementById('inchesB').removeAttribute("disabled");
		document.getElementById('poundsB').setAttribute("disabled","true");
		document.getElementById('ouncesB').setAttribute("disabled","true");
		document.getElementById('gramsB').setAttribute("disabled","true");
	}
	else if (measurement=="mass"){
		document.getElementById('fahrenheitB').setAttribute("disabled","true");
		document.getElementById('kelvinB').setAttribute("disabled","true");
		document.getElementById('celsiusB').setAttribute("disabled","true");
		document.getElementById('feetB').setAttribute("disabled","true");
		document.getElementById('yardsB').setAttribute("disabled","true");
		document.getElementById('inchesB').setAttribute("disabled","true");
		document.getElementById('poundsB').removeAttribute("disabled");
		document.getElementById('ouncesB').removeAttribute("disabled");
		document.getElementById('gramsB').removeAttribute("disabled");
	}
	return;
}

function converterHandler(measurement, unitA, unitB, inputA, inputB){
	if (measurement=="temperature"){
		temperatureConverter(unitA, unitB, inputA, inputB);
	}
	else if (measurement=="length"){
		lengthConverter(unitA, unitB, inputA, inputB);
	}
	else if (measurement=="mass"){
		massConverter(unitA, unitB, inputA, inputB);
	}
	return;
}

