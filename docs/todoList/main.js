const dodajDugme = document.querySelector('.dodajDugme');
var unos = document.querySelector('.unos');
const kontejner = document.querySelector('.kontejner');

class predmet{
	constructor(imePredmeta){
		// Kreira 'predmet' div
		this.createDiv(imePredmeta);
	}

	createDiv(imePredmeta){
		let input = document.createElement('input');
		input.value = imePredmeta;
		input.disabled = true;
		input.classList.add('unos_predmeta');
		input.type = "text";

		let itemBox = document.createElement('div');
		itemBox.classList.add('predmet');

		let editButton = document.createElement('button');
		editButton.innerHTML = "Izmeni"
		editButton.classList.add('izmenaDugme');

		let removeButton = document.createElement('button');
		removeButton.innerHTML = "Obrisi"
		removeButton.classList.add('ukloniDugme');

		kontejner.appendChild(itemBox);

		itemBox.appendChild(input);
		itemBox.appendChild(editButton);
		itemBox.appendChild(removeButton);

		editButton.addEventListener('click', ()=> this.edit(input));
		
		removeButton.addEventListener('click', ()=> this.remove(itemBox));

	}

	edit(input){
		input.disabled = !input.disabled;
	}

	remove(item){
		kontejner.removeChild(item);
	}
}

function check(){
	if (unos.value != "") {
		new predmet(unos.value);
		unos.value = "";
	}
}

dodajDugme.addEventListener('click', check);
window.addEventListener('keydown',(e)=>{
	if (e.which == 13) {
		check();
	}
})