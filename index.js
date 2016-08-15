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