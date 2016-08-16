function Unicorn(other) {
	if (other === 'Dragons' ||
		other === 'TRex') {
		console.log('Unicorns Win!')
	} else {
		console.log(other + ' win!')
	}
}

function Wearwolves(other) {
	if (other === 'Dragons') {
		console.log('Wearwolves Win!')
	} else {
		console.log(other + ' win!');
	}
}

function Dragons(other) {
	if (other === 'Unicorns' ||
		other === 'TRex') {
		console.log('Dragons win!')
	} else {
		console.log(other + ' win!');
	}
}

function TRex(other) {
	if (other === 'Wearwolves') {
		console.log('TRex wins!');
	} else {
		console.log(other + " wins!");
	}
}

function monsterBattle() {

	var firstInput = document.getElementById('creatureOne').value;
	var secondInput = document.getElementById('creatureTwo').value;
	var result = document.getElementById('result');

	if (firstInput === secondInput) 
	{
	result.textContent = 'No one wins!';
	} else if (firstInput === "Unicorns" && secondInput === "Wearwolves" ||
			   firstInput === "Unicorns" && secondInput === "TRex") {
					result.textContent = 'Unicorns Win!';
	} else if (firstInput === "Unicorns" && secondInput === "Dragons") {
					result.textContent = "Dragons Win!";
	} else if (firstInput === "Wearwolves" && secondInput === "Unicorns" ||
			   firstInput === "Wearwolves" && secondInput === "TRex") {
					result.textContent = secondInput + " Win!";
	} else if (firstInput === "Wearwolves" && secondInput === "Dragons") {
					result.textContent = "Wearwolves Win!";
	} else if (firstInput === "Dragons" && secondInput === "Unicorns" ||
			   firstInput === "Dragons" && secondInput === "TRex") {
					result.textContent = "Dragons Win!";
	} else if (firstInput === "Dragons" && secondInput === "Wearwolves") {
					result.textContent = "Wearwolves Win!";
	} else if (firstInput === "TRex" && secondInput === "Unicorns" ||
			   firstInput === "TRex" && secondInput === "Dragons") {
					result.textContent = secondInput + " Wins!";
	} else if (firstInput === "TRex" && secondInput === "Wearwolves") {
					result.textContent = "TRex Wins!";
	}

}

submitButton.addEventListener('click', monsterBattle);