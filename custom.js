
// ////////////////////////////////////////FIRST EXERCISE ////////////////////////////////////////////////////

/*let firstNumber = Number (prompt("First Number"));
let secondNumber = Number (prompt("Second Number"));

if (firstNumber > secondNumber) {
    alert("Greater one is  " + firstNumber);
    
}else if (secondNumber > firstNumber) {
    alert("Greater one is " + secondNumber);
    
}else{
    alert("The numbers are equal !");
}*/


/*//////////////////////////////////////////////SECOND EXERCISE////////////////////////////////////////////*/

/*let aNumber = Number (prompt ("What is the first number?"));
let bNumber = Number (prompt ("What is the second number?"));
let cNumber = Number (prompt ("What is the third number?"));

if (aNumber==bNumber==cNumber) {
    alert("All the numbers should be different from eachother !");
}else if (aNumber==bNumber) {
    alert("All the numbers should be different from eachother !");
}else if (bNumber==cNumber) {
    alert("All the numbers should be different from eachother !");
}else if (aNumber==cNumber) {
    alert("All the numbers should be different from eachother !");
}else if (aNumber > bNumber && aNumber > cNumber && bNumber > cNumber) {
    console.log(aNumber , bNumber, cNumber);
}else if (aNumber > bNumber && aNumber < cNumber && bNumber > cNumber) {
    console.log(bNumber, cNumber, aNumber);
}else if (bNumber > aNumber && bNumber > cNumber && aNumber > cNumber) {
    console.log(bNumber, aNumber, cNumber);
}else if (bNumber > aNumber && bNumber > cNumber && aNumber < cNumber) {
    console.log(bNumber, cNumber, aNumber);
}else if (cNumber > aNumber && cNumber > bNumber && aNumber > bNumber) { 
    console.log(cNumber, aNumber, bNumber);
}else { 
    console.log(cNumber, bNumber, aNumber); //Bu tabiki de uzun yolu ve benim kendi yaptığım yol ! 
}*/
    
// Mehmet'in çözüm yolu aşağıda; 

/*let x = Number (prompt("X?"));
let y = Number (prompt("Y?"));
let z = Number (prompt("Z?"));

if (x===y || x===z || y===z) {
    console.log ("numbers should be different");
} else if (x > y && x > z) {
    if (y > z) {
        console.log (x,y,z);
    } else {
        console.log (x,z,y);
    }
} else if (y > x && y > z) {
    if (x > z) {
        console.log (y, x, z);
    } else  {
        console.log (y, z, x);
    }
}else{
    if (x > y) {
        console.log (z, x, y);
    } else {
        console.log (z, y, x);
    }
}*/

/*////////////////////////////////////THIRD EXERCISE//////////////////////////////////////////*/

 // console.log(Math.floor(Math.random() * 3) + 1 ); // asla sıfır olmayacak ve en fazla 3 e kadar çıkacak random sayılar oluşturma !
 
/*////////////////////////////////////FOURTH EXERCISE//////////////////////////////////////////*/ 
let randomNumber = Math.random() * 3;
let roundedRandomNumber = Math.floor(randomNumber + 1);

console.log(roundedRandomNumber);

let stringNumber;

if ( roundedRandomNumber === 1 ) {
    stringNumber = 'one';
} else if ( roundedRandomNumber === 2 ) {
    stringNumber= 'two';
} else {
    stringNumber = 'three';
}

console.log(stringNumber);
