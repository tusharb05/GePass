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
				document.querySelector('.asdf').removeChild(document.querySelector('.asdf').childNodes[1])			
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
		let shuffled = shuffle(finalPassword)
		let password = shuffled.substring(0,passwordLength.value);
		passwordArea.value = password;
	}
	//-----------UPPERCASE AND SYMBOLS
	else if(uppercaseCheck.checked && symbolsCheck.checked && !lowercaseCheck.checked && !numbersCheck.checked){
		randomUppercase();
		randomSymbols();
		let shuffled = shuffle(finalPassword);
		let password = shuffled.substring(0, passwordLength.value);
		passwordArea.value = password;
	}
	//-----------UPPERCASE AND NUMBERS
	else if(uppercaseCheck.checked && numbersCheck.checked && !lowercaseCheck.checked && !symbolsCheck.checked){
		ranomUppercase();
		randomNums();
		let shuffled = shuffle(finalPassword);
		let password = shuffled.substring(0, passwordLength.value);
		passwordArea.value = password;
	}
	//--------------LOWERCASE AND SYMBOLS	
	else if(!uppercaseCheck.checked && symbolsCheck.checked && lowercaseCheck.checked && !numbersCheck.checked){
		randomLowercase();
		randomSymbols();
		let shuffled = shuffle(finalPassword);
		let password = shuffled.substring(0, passwordLength.value);
		passwordArea.value = password;
	}
	//---------------LOWERCASE AND NUMBERS
	else if(!uppercaseCheck.checked && !symbolsCheck.checked && lowercaseCheck.checked && numbersCheck.checked){
		randomLowercase();
		randomNums();
		let shuffled = shuffle(finalPassword);
		let password = shuffled.substring(0, passwordLength.value);
		passwordArea.value = password;
	}
	//---------------SYMBOLS AND NUMBERS
	else if(!uppercaseCheck.checked && symbolsCheck.checked && !lowercaseCheck.checked && numbersCheck.checked){
		randomSymbols();
		randomNums();
		let shuffled = shuffle(finalPassword);
		let password = shuffled.substring(0, passwordLength.value);
		passwordArea.value = password;
	}
	//---------------UPPERCASE, LOWERCASE AND SYMBOLS
	else if(uppercaseCheck.checked && symbolsCheck.checked && lowercaseCheck.checked && !numbersCheck.checked){
		randomUppercase();
		randomLowercase();
		randomSymbols();
		let shuffled = shuffle(finalPassword);
		let password = shuffled.substring(0, passwordLength.value);
		passwordArea.value = password;
	}
	//---------------UPPERCASE, LOWERCASE AND NUMBERS
	else if(uppercaseCheck.checked && lowercaseCheck.checked && numbersCheck.checked && !symbolsCheck.checked){
		randomUppercase();
		randomLowercase();
		randomNums();
		let shuffled = shuffle(finalPassword);
		let password = shuffled.substring(0, passwordLength.value);
		passwordArea.value = password;
	}
	//----------------SYMBOLS, NUMBERS, LOWERCASE
	else if(!uppercaseCheck.checked && lowercaseCheck.checked && numbersCheck.checked && symbolsCheck.checked){
		randomLowercase();
		randomNums();
		randomSymbols();
		let shuffled = shuffle(finalPassword);
		let password = shuffled.substring(0, passwordLength.value);
		passwordArea.value = password;
	}
	//----------------SYMBOLS, NUMBERS AND UPPERCASE
	else if(uppercaseCheck.checked && !lowercaseCheck.checked && numbersCheck.checked && symbolsCheck.checked){
		randomUppercase();
		randomNums();
		randomSymbols();
		let shuffled = shuffle(finalPassword);
		let password = shuffled.substring(0, passwordLength.value);
		passwordArea.value = password;
	}
	//----------------ALL
	else if(uppercaseCheck.checked && lowercaseCheck.checked && numbersCheck.checked && symbolsCheck.checked){
		randomLowercase();
		randomUppercase();
		randomSymbols();
		randomNums();
		let shuffled = shuffle(finalPassword);
		let password = shuffle(shuffled).substring(0, passwordLength.value);
		passwordArea.value = password;
	}
}

const shuffle = x=>x.split('').sort(function(){return 0.5-Math.random()}).join('');

function passShow(){
	passwordArea.value = ''
	passwordArea.value = finalPassword
}

function randomNums() {
	for(i=0; i<passwordLength.value; i++){
		let s = Math.floor(Math.random()*10);
		finalPassword += availNums[s];
	}
}
function randomUppercase() {
	for(i=0; i<passwordLength.value; i++){
		finalPassword += availUpperCase[Math.floor(Math.random()*10)]
	}
}
function randomLowercase() {
	for(i=0; i<passwordLength.value; i++){
		finalPassword += availLowerCase[Math.floor(Math.random()*10)]
	}
}
function randomSymbols() {
	for(i=0; i<passwordLength.value; i++){
		finalPassword += availSymbols[Math.floor(Math.random()*10)]
	}
}
