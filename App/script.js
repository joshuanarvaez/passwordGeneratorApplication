// store all password options in arrays
  var lower = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
  var upper = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
  var num = ["0","1","2","3","4","5","6","7","8","9"];
  var sym= ["!","@","#","_","*","^","&","$","+","%","(",")",",","-","/",";","=","<",">","?","~"];

  // Invoke password function when "generate" button is clicked.This displays first prompt. Ensure that password is between 8 and 128 characters with conditional.

  function pwd(){
    var charCount = prompt("How many characters would you like to use?");

    if(charCount <8 || charCount>127){
      alert("Password length must be between 8 to 128 characters");
      charCount = prompt("How many characters would you like to use?");
    }
// Then, display other prompts to collect password requirements from user.
var confirmLower = confirm("Do you want to use lowercase letters?");
var confirmUpper = confirm("Do you want to use uppercase letters?");
var confirmNum = confirm("Do you want to use numbers?");
var confirmSym = confirm("Do you want to use symbols?");

// Create an object which holds the password options

var pwdOptions = {
  pwdLength: charCount,
  upperChar: confirmUpper,
  lowerChar: confirmLower,
  specialChar: confirmSym,
  numChar: confirmNum
}
// Create arrays to hold data. tempChar is an array. We grab characters from their first array and send them to the tempChar array. From there, we invoke a function which randomizes those characters and sends them to the finalChar array. The finalChar array is our password.

    var password=[];
    var tempChar = [];
    var finalChar = [];

    if(pwdOptions.lowerChar){
      tempChar = tempChar.concat(lower);
      finalChar.push(lower[Math.floor(Math.random() * lower.length)]);
      console.log("tempChar: "+tempChar);
      console.log("FinalChar: "+finalChar);
    }

    
    if(pwdOptions.upperChar){
      tempChar = tempChar.concat(upper);
      finalChar.push(upper[Math.floor(Math.random() * upper.length)]);
      console.log("tempChar: "+tempChar);
      console.log("FinalChar: "+finalChar);
    }

    if(pwdOptions.specialChar){
      tempChar = tempChar.concat(sym);
      finalChar.push(sym[Math.floor(Math.random() * sym.length)]);
      console.log("tempChar: "+tempChar);
      console.log("FinalChar: "+finalChar);
    }

    if(pwdOptions.numChar){
      tempChar = tempChar.concat(num);
      finalChar.push(num[Math.floor(Math.random() * num.length)]);
      console.log("tempChar: "+tempChar);
      console.log("FinalChar: "+finalChar);
    }

    for(var i=0;i<parseInt(charCount);i++){
      var temp = tempChar[Math.floor(Math.random() * tempChar.length)]
      password.push(temp);
      console.log("Password: "+password);
    }

    for(var i=0;i<finalChar.length;i++){
      password[i] = finalChar[i];
    }
// Here, we display the password in the specified text area. The id of the textarea is "password"
    document.getElementById("password").value = password.join("");
  }


// function to copy password to clipboard
function copyPassword(){

  document.getElementById("password").select();

  document.execCommand("Copy");

  alert("Password copied to clipboard!");

}

