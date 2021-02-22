let passwordArea = document.querySelector('.password');
let passwordLength = document.querySelector('#pass-length');
let uppercaseCheck = document.querySelector('#uppercase');
let lowercaseCheck = document.querySelector('#lowercase');
let symbolsCheck = document.querySelector('#symbols');
let numbersCheck = document.querySelector('#numbers');
let generateBtn = document.querySelector('.btn');
let form = document.querySelector('.my-form');
let msgArea = document.querySelector('.msg');
let msgShow = document.querySelector('.check-alert');
let msgLimitShow = document.querySelector('.limit-alert');
msgShow.style.display = 'none';
msgLimitShow.style.display = 'none'

let availNums = ['1','2','3','4','5','6','7','8','9','0'];
let availUpperCase = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
let availLowerCase = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','x'];
let availSymbols = ['!','@','#','$','%','^','&','*','(',')','?','/','.','>','<',';','|','[',']','{', '}'];


let finalPassword = '';

form.addEventListener('submit', generatePassword);

function generatePassword(e) {
	e.preventDefault();
	let a = passwordLength.value;
	if(a==''){
		msgLimitShow.style.display = 'block'
	}
	if(uppercaseCheck.checked==false && lowercaseCheck.checked==false && symbolsCheck.checked==false && numbersCheck.checked==false) {
		msgShow.style.display = 'block';
	}
	else{
		getPassword();	
		//Copy button
		if(a!=''){
			console.log(document.querySelector('.asdf').children)
			if(document.querySelector('.asdf').children.length > 1){
				document.querySelector('.asdf').removeChild(document.querySelector('.asdf').chldNodes[1])			
			}

			let buttonCopy = document.createElement('button');
			buttonCopy.classList.add('btn');
			buttonCopy.classList.add('btn-primary');
			buttonCopy.appendChild(document.createTextNode('copy'));
			document.querySelector('.asdf').appendChild(buttonCopy);
			buttonCopy.addEventListener('click', (e)=>{
			e.preventDefault();
			let textCopy = document.querySelector('.password');
			textCopy.select();
			textCopy.setSelectionRange(0, 99999); //for mobile devices
			document.execCommand('copy');
			});
		}
		
	}
	
}
function getPassword() {
	passwordArea.value = ''
	let shuffled = '';
	let password = '';
	if(uppercaseCheck.checked && !lowercaseCheck.checked && !symbolsCheck.checked && !numbersCheck.checked){
		randomUppercase();
		passShow();
	}
	else if(lowercaseCheck.checked && !uppercaseCheck.checked && !symbolsCheck.checked && !numbersCheck.checked){
		randomLowercase();
		passShow();
	}
	else if(symbolsCheck.checked && !uppercaseCheck.checked && !lowercaseCheck.checked && !numbersCheck.checked){
		randomSymbols();
		passShow();
	}
	else if(numbersCheck.checked && !symbolsCheck.checked && !uppercaseCheck.checked && !lowercaseCheck.checked){
		randomNums();
		passShow();
	}
	//-----------UPPERCASE AND LOWERCASE
	else if(uppercaseCheck.checked && lowercaseCheck.checked && !symbolsCheck.checked && !numbersCheck.checked){
		randomUppercase();
		randomLowercase();

		passwordArea.value = shuffle(finalPassword).substring(0,passwordLength.value);
	}
	//-----------UPPERCASE AND SYMBOLS
	else if(uppercaseCheck.checked && symbolsCheck.checked && !lowercaseCheck.checked && !numbersCheck.checked){
		randomUppercase();
		randomSymbols();
		passwordArea.value = shuffle(finalPassword).substring(0,passwordLength.value);
	}
	//-----------UPPERCASE AND NUMBERS
	else if(uppercaseCheck.checked && numbersCheck.checked && !lowercaseCheck.checked && !symbolsCheck.checked){
		ranomUppercase();
		randomNums();
		passwordArea.value = shuffle(finalPassword).substring(0,passwordLength.value);
	}
	//--------------LOWERCASE AND SYMBOLS	
	else if(!uppercaseCheck.checked && symbolsCheck.checked && lowercaseCheck.checked && !numbersCheck.checked){
		randomLowercase();
		randomSymbols();
		passwordArea.value = shuffle(finalPassword).substring(0,passwordLength.value);
	}
	//---------------LOWERCASE AND NUMBERS
	else if(!uppercaseCheck.checked && !symbolsCheck.checked && lowercaseCheck.checked && numbersCheck.checked){
		randomLowercase();
		randomNums();
		passwordArea.value = shuffle(finalPassword).substring(0,passwordLength.value);
	}
	//---------------SYMBOLS AND NUMBERS
	else if(!uppercaseCheck.checked && symbolsCheck.checked && !lowercaseCheck.checked && numbersCheck.checked){
		randomSymbols();
		randomNums();
		passwordArea.value = shuffle(finalPassword).substring(0,passwordLength.value);
	}
	//---------------UPPERCASE, LOWERCASE AND SYMBOLS
	else if(uppercaseCheck.checked && symbolsCheck.checked && lowercaseCheck.checked && !numbersCheck.checked){
		randomUppercase();
		randomLowercase();
		randomSymbols();
		passwordArea.value = shuffle(finalPassword).substring(0,passwordLength.value);;
	}
	//---------------UPPERCASE, LOWERCASE AND NUMBERS
	else if(uppercaseCheck.checked && lowercaseCheck.checked && numbersCheck.checked && !symbolsCheck.checked){
		randomUppercase();
		randomLowercase();
		randomNums();
		passwordArea.value = shuffle(finalPassword).substring(0,passwordLength.value);	}
	//----------------SYMBOLS, NUMBERS, LOWERCASE
	else if(!uppercaseCheck.checked && lowercaseCheck.checked && numbersCheck.checked && symbolsCheck.checked){
		randomLowercase();
		randomNums();
		randomSymbols();
		passwordArea.value = shuffle(finalPassword).substring(0,passwordLength.value);
	}
	//----------------SYMBOLS, NUMBERS AND UPPERCASE
	else if(uppercaseCheck.checked && !lowercaseCheck.checked && numbersCheck.checked && symbolsCheck.checked){
		randomUppercase();
		randomNums();
		randomSymbols();
		passwordArea.value = shuffle(finalPassword).substring(0,passwordLength.value);
	}
	//----------------ALL
	else if(uppercaseCheck.checked && lowercaseCheck.checked && numbersCheck.checked && symbolsCheck.checked){
		randomLowercase();
		randomUppercase();
		randomSymbols();
		randomNums();
		passwordArea.value = shuffle(finalPassword).substring(0,passwordLength.value);
	}
}

const shuffle = x=>x.split('').sort(function(){return 0.5-Math.random()}).join('');

function passShow(){
	passwordArea.value = ''
	passwordArea.value = finalPassword
}

function randomNums() {
	finalPassword = '';
	for(i=0; i<passwordLength.value; i++){
		let s = Math.floor(Math.random()*10);
		finalPassword += availNums[s];
	}
}
function randomUppercase() {
	finalPassword = '';
	for(i=0; i<passwordLength.value; i++){
		finalPassword += availUpperCase[Math.floor(Math.random()*10)]
	}
}
function randomLowercase() {
	finalPassword = '';
	for(i=0; i<passwordLength.value; i++){
		finalPassword += availLowerCase[Math.floor(Math.random()*10)]
	}
}
function randomSymbols() {
	finalPassword = '';
	for(i=0; i<passwordLength.value; i++){
		finalPassword += availSymbols[Math.floor(Math.random()*10)]
	}
}

