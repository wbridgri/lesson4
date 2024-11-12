// Boolean true false

var t = true
var f = false


console.log(t , f);



/* 
Boolean Operators

< less than 

> greater than

== is equal to

=== is strictly equal to 

<= less than or equal to

>= greater than or equal to



*/

console.log( 5 > 8); //false
console.log( 5 < 8); //true
console.log(5 == 5);
console.log( 5 === 5);

console.log(4 == 4) //true
console.log('four' == 'four') //true
console.log(4 === '4') //false looks at content and data type
console.log(4 == '4') //true ?? only looks at content and not data type, so it is true 
console.log(4 === 4) //true

console.log( 'four' > 'Four'); //true lower case has higher values 


/*
Logical Operators

&& and

|| or 

!= not

*/
console.clear()

console.log( t && t); //true
console.log(t || f); //true 
console.log( t && f); //false 
console.log(f && f); //false
console.log ( t || t); //false 
console.log ( f || f); //false 

console.log(!t); //false 
console.log(!f); //true 

console.log( (t || f) && (!t || !f));


/* 
Building the evil robot 

Conditionals

if statement

syntax:  if (condition) {
    //do stuff
}
*/

let num = 5;

if(num > 5) {
console.log(`${num} is greater than five`);
}
/**
 * if/else statement
 * 
 * syntax:
 *  if (condition) {
 *      //do stuff
 * } else {
 *      //do something else
 * }
 * 
 * 
 */

if ( num > 4) {
    console.log(`${num} is greater than 4.`);
}
else {
    console.log(`${num} is not greater than 4`);
}


/**
 * else if statement
 * 
 * syntax :
 * 
 *  if (condition) {
 *      //do stuff}
 * 
 * else if (another condition) {
 *      //do other stuff}
 * 
 *else {
    //do something else}
 * 
 * 
 */

    //write a program that tells if a number is odd or even
    if(typeof(num) != 'number') {
        console.log('not a number');
    }
    else {
        if (num  === 0) {
            console.log(`${num} is zero`);
        }
        else if (num % 2 === 1){
            console.log(`${num} is odd`);
            
        } else {
            console.log('even');
            
        }

    }


    //

    if (0) {
        console.log('hey');
        
    }
    else {
        console.log('you');
        
    }

    console.log( t + t);
    //0 , '', undefined, and null  are falsey and any other number is true


// write a program to tell if a number is positive or negative

if( num > 0) {
    console.log(`${num} is positive`);
    
}
else if (num < 0) {
    console.log(`${num} is negative`);
    
}
else {
    console.log(`${num} is zero`);
    
}

if(isNaN(num) !== 'number') {
    console.log('not a number');
}
else{
    if(num === 0) {
        console.log('zero');
    }
    else if (num > 0) {
        console.log(`positive`);
    }
    else {
        console.log('negative');
        
    }
}

/**
 * switch
 * 
 * syntax : 
 * 
 *      switch (expression) {
 *          case A:
 *              //do stuff
 *              break;
 *          case B:
 *              //do stuff
 *              break;
 *          case N:
 *          //do stuff
 *          break;
 *          default: 
 *          //do stuff
 *          break;
 *      }
 * 
 */

const now = new Date()
console.log(now.getMonth()); //10 repr`esents november because January is month 0

const today = new Date().getDay()

switch (today) {
    case 0:
        console.log('Sunday');
        break;

    case 1:
        console.log('Monday');
        break;
    case 2:
        console.log('Tuesday');
        break;
    case 3:
        console.log('Wednesday');
        break;
    case 4:
        console.log('Thursday');
        break;
    case 5:
        console.log('Friday');
        break;
    case 6:
        console.log('Saturday');
        break;
}

// ternary operator 

/**
 * Syntax: 
 * 
 *      condition ? do stuff : do something else
 */
console.clear();

let isGameActive = true;

isGameActive ? console.log('Game On') : console.log('Game Over');

/**
 * Build a new and improved tempereature converter.
 * 
 * Convert a temperature from celsiu to fahrenheit.  If the temperature is celsius is below freezing point, console "freezing"
 * 
 */

let cel = 0;
let fah;

fah = (cel * (9 / 5) + 32);

if(isNaN(fah)) {
    console.log('not a number');
}
else {
    if (fah < 32) {
        console.log('freezing');
        
    }
    else if (fah > 212) {
        console.log('boiling');
        
    }
    else {
        console.log(fah);
        
    }
}

//Build a light switch.  If the light is on; turn it off.  if the light is off, turn it on.

console.clear();
let light = true;

if (light) {
    light = false;
    console.log(`Light was on.  Now it's not`);
}
else {
    light = true;
    console.log(`Light was off. Now it's on`)
}





