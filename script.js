var a = [
    [1, 2, 1, 24],
    [8, 11, 9, 4],
    [7, 0, 7, 27],
    [7, 4, 28, 14],
    [3, 10, 26, 7]
];
for (var i = 0; i < a.length; i++) {
    console.log("raw" + i);
    for (var j = 0; j < a[i].length; j++) {
        console.log(" " + a[i][j]);
    }
}
console.log("-----------------------------------");


let arr = [10, 20, 20, 30, 40, 50, 50];

a1 = arr.filter((item, index) => arr.indexOf(item) === index);

console.log(a1);


console.log("-----------------------------------");

for(var i =1; i<=10; i++){
    console.log(i);
}
console.log("-----------------------------------");
var number = 2;
var power = 3;
var result = 1;
for(var i =1; i<=power; i++){
    result*=number
}
console.log(number + " power of " + power + " is: " + result);


console.log("-----------------------------------");
var number = 6;
var result=1;
for(var i =1 ;i<=number; i++){
    result *=i;
}
console.log(" factorial of : " + number + " is " + result)
console.log("-----------------------------------");

// alert("Welcome to my first site");

console.log("-----------------------------------");
function exchangeEgyPound(EgyPound){
    var exchange= 31;
    var dollar = EgyPound/ exchange;
    return parseFloat(dollar.toFixed(1));
}
console.log(exchangeEgyPound(2000));
console.log(exchangeEgyPound(340));

console.log("-----------------------------------");

function printNumbers(){
for(var i = 1; i<=20; i++){
    if(i % 2 ==0){
        console.log("iam even");
    }
    else {
        console.log(i);
    }
}

}

console.log("-----------------------------------");

// const currentYear = new Date().getFullYear();

// const firstName = prompt("Enter your first name:");
// const birthYearInput = prompt("Enter your birth year:");
// const mobile = prompt("Enter your mobile number:");
// const color = prompt("Choose a color (red, green, or blue):").toLowerCase();

// let errors = [];

// if (!firstName || !isNaN(firstName)) {
//   errors.push("First name must contain only letters and not be empty.");
// }

// const birthYear = parseInt(birthYearInput);
// if (isNaN(birthYear) || birthYear <= 1900 || birthYear > currentYear) {
//   errors.push("Birth year must be a number greater than 1900 and not in the future.");
// }

// if (!/^\d{11}$/.test(mobile)) {
//   errors.push("Mobile number must be exactly 11 digits.");
// }

// if (!["red", "green", "blue"].includes(color)) {
//   errors.push("Color must be either red, green, or blue.");
// }

// if (errors.length > 0) {
//   document.writeln("<h2 style='color: red;'>Please correct the following:</h2>");
//   for (let err of errors) {
//     document.writeln("<p>" + err + "</p>");
//   }
// } else {
//   const age = currentYear - birthYear;
//   document.writeln(`
//     <div style="color: ${color};">
//       <h2>Welcome, ${firstName}!</h2>
//       <p><strong>Birth Year:</strong> ${birthYear}</p>
//       <p><strong>Age:</strong> ${age}</p>
//       <p><strong>Mobile:</strong> ${mobile}</p>
//       <p><strong>Favorite Color:</strong> ${color}</p>
//     </div>
//   `);
// }

///-----------------------------------------------------------
 // creat elemnts
// let container = document.createElement('div');
// let head = document.createElement('h2');
// let img= document.createElement('img');
// //add content to elemnts
// let content = document.createTextNode('hello menna');
// head.appendChild(content);
// img.src=('Task2.png');
// //add elemnts in dev
// container.appendChild(head);
// container.appendChild(img);
// document.body.appendChild(container);
// console.log(container)


// let names = ['ali', 'ahmed','menna','mariam','yousef'];
// let ages = ['20 years old','10 years old','50 years old','30 years old','60 years old'];

// let container = document.createElement('div');
// document.body.appendChild(container);
// container.style.textAlign = 'center';
// function elements(names,ages) {
//   let card = document.createElement('div');
//   let title = document.createElement('h2');
//   let age = document.createElement('p');
//   let img = document.createElement('img');
  
//   let head = document.createTextNode(names);
//   let ageContent= document.createTextNode(ages);


//   img.src = 'Task2.png';
//   title.appendChild(head);
//   age.appendChild(ageContent);
  

//   card.style.width = '300px';
//   card.style.padding= '20px';
//   card.style.backgroundColor = '#444';
//   card.style.color = 'white';
//   card.style.margin = '10px';
//   card.style.display = 'inline-block';
//   img.style.width ='100%';

//   card.appendChild(head);
//   card.appendChild(ageContent);
//   card.appendChild(img);
//   container.appendChild(card);

  
// }
// for(let i =0 ; i<10 ; i++){
//   elements(names[i],ages[i]);
// }

// let button = document.getElementById('button');
// //  button.onclick= function(){
// //   button.style.backgroundColor='red'
// //  }

// button.addEventListener('click',function(){
//   document.body.style.backgroundColor='blue';
// });
// button.addEventListener('click',function(){
//  button.style.backgroundColor='red';
// });
// button.addEventListener('click',function(){
//  button.style.color='white';
// });

let dollar= document.getElementById('dollar');
let pound= document.getElementById('egy');

dollar.onkeyup = function(){
  pound.value = dollar.value * 50 
}
pound.onkeyup = function(){
  dollar.value = pound.value / 50 
}