const numberslist = document.getElementById('numbers-list');
const form = document.getElementById('answers-form');
const inputs = document.querySelectorAll('input');
const countdown = document.getElementById('countdown');
const message = document.getElementById('message');
const instructions = document.getElementById('instructions');
const button = document.getElementById('button');

const generateRandomNumbers = (min, max) => {
  const random = [];

  while(random.length < 5){
    const number = Math.floor(Math.random() * (max - min +1)) + min;

    if (random.includes(number) === false){
      random.push(number);
    }
  }
  return random;
}


const numbers = generateRandomNumbers(1,30);
console.log(number);   

let time = 10;

for(let i=0; i<numbers.length; i++);{
  numberslist.innerHTML += `<li class="list-item">${numbers[i]}</li>`;
}


countdownelemnt.innertext = time;

const countdown = setInterval(() => {
time--;
countdownelemnt.innertext =time;

if(time === 0){
  clearInterval(countdown);

  form.classList.remove('d-none');

  numberslist.classList.add('d-none');
  instructions.innertext = 'inserire i numeri'
}

},1000);

const confirm = (e) =>{
  e.preventDefault();

  const userNumebers = [];

  for(let i=0; i<inputs.length; i++){
    userNumbers.push(inputs[i].value)
  }
}