// let text = "Hello Students";
// let pattern = /Students/;
// let pattern1 = /Students/i;
// let result = text.match(pattern);
// let result1 = pattern.test(text);
// let result2 = pattern.exec(text);
// console.log(result2);

// ==============g=====================global
// let text = "Hello Students";
// let pattern = /Students/g;

// =================m ================= multiline

// -----------------Groups-----------
//----------------------------------[abc]

// let text = "Is this but all there is?";
// let pattern = /[h]/gi;
// // /[h]/ this and /[h]/gim different things
// let result = text.match(pattern);
// console.log(result);

//==========================(X | Y) ============Alter
// let text = "Is this but all there is?";
// let pattern = /(is |)/gi;

// =========================meta characters=============
// *************************\w *********************************
// let text = "Give_100 %!";
// let pattern = /\w/g;
// let result = text.match(pattern);

// ************************************\d  -> for digits ******************
// let pattern = /\d/

//***************************************\D  -> for without non numeric */
// let pattern = /\D/

// *******************************************************************************************
// *******************************************************************************************
// *******************************************************************************************
// let text = "Heloo world ! hello college";
// let pattern = /o+/g;
// let result = text.match(pattern);
// console.log(result);

// let text = "Heloo world ! hello college";
// let pattern = /W+/g;
// let result = text.match(pattern);
// console.log(result);

// ================================ * =======================
// let text = "Heloo world ! hello college";
// let pattern = /Ho*/g;
// let result = text.match(pattern);
// console.log(result);

// ========================================================================
// let text = "10, 100, 1000 or 10000 ?";
// let pattern = /\d{3,4}/g;
// let result = text.match(pattern);

// let pattern = /p{3}/g;
var a = 10;
function first() {
  var b = 11;
  console.log(b);
  let second = () => {
    var c = 12;
    console.log(a, b, c);
  };
  return second;
}

let val = first();
console.log(typeof val);
// val();
// console.log(val);
