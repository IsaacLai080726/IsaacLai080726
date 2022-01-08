var myHeading = document.querySelector('h1');

function multiply(num1,num2){
    let result = num1 * num2;
    return result
}

document.querySelector('html').onclick = function() {
    alert('Ouch! Stop poking me!');
}

var myImage = document.querySelector('img');

myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/google-icon.png'){
        myImage.setAttribute ('src','images/google-icon-littleG.ico');
    } else {
        myImage.setAttribute ('src','images/google-icon.png');
    }
}

var myButton = document.querySelector('butoon');

var myHeading = document.querySelector('h1');

function setUserName() {
    let myName = prompt('Please enter your name.');
    if(!myName || myName === null) {
      setUserName();
    } else {
      localStorage.setItem('name', myName);
      myHeading.innerHTML = 'Google is cool, ' + myName;
    }
  }

if(!localStorage.getItem('name')) {
    setuserName();
} else {
    let storedName = localStorage.getItem('name');
    myHeading.innerHTML = 'Google is cool, ' + storedName;
}

myButton.onclick = function() {
    setuserName();
}
