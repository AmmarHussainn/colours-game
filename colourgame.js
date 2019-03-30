var numSquares = 6;
var colors= generateRandomColors(numSquares);
var squares = document.querySelectorAll('.square ');
var pickedColor = pickColor();
var colorDisplay = document.getElementById('colorDisplay');
var messageDisplay = document.querySelector('#message');
var h1 = document.querySelector('h1');
var resetButton = document.querySelector('#reset');
var easybtn = document.querySelector('#easyBtn');
var hardbtn = document.querySelector('#hardBtn');

easybtn.addEventListener('click', function(){
    hardbtn.classList.remove('selected');
   easybtn.classList.add('selected');
   numSquares = 3;
   colors = generateRandomColors(numSquares);
   pickedColor = pickColor();
   colorDisplay.textContent = pickedColor;
   for(var i=0; i<squares.length; i++){
       if(colors[i]){
           squares[i].style.background = colors [i];
       }
       else{
           squares[i].style.display = 'none';
       }
   }
});


hardbtn.addEventListener('click', function(){
    easybtn.classList.remove('selected');
    hardbtn.classList.add('selected');
    numSquares = 6
    colors = generateRandomColors(numSquares);
    pickedColor = pickColor();
    colorDisplay.textContent = pickedColor;
    for(var i=0; i<squares.length; i++){
        
            squares[i].style.background = colors [i];
            squares[i].style.display = 'block';
        
    }
    });
resetButton.addEventListener('click', function(){
    // GENERATE ALL NEW COLORS
    colors= generateRandomColors(numSquares)
    // picked a new random color from array

    pickedColor = pickColor();
    // change color display to match color
    colorDisplay.textContent = pickedColor;
    resetButton.textContent = 'New colors'
    messageDisplay.textContent = '';

    // changge colors of the squares on the page
    for(var i=0; i< squares.length; i++){
        squares[i].style.background = colors[i];
    }
     h1.style.background = '#232323';
})

// colorDisplay.innerHTML = colors[ Math.floor(Math.random() * colors.length)];
colorDisplay.textContent = pickedColor;
for (var i=0; i<squares.length; i++){
    // add initial colours to squares
    squares[i].style.background = colors[i];
    // add click listners to squars
    squares[i].addEventListener('click' ,function(){

    //  grab color of clicked square
  var clickedColor = this.style.background;

    // compare colour to picked colour
    console.log(pickedColor , clickedColor);
    
    if(clickedColor === pickedColor){
      messageDisplay.textContent = 'Correct!';
      resetButton.textContent = 'Play Again ?'
      changeColors(clickedColor);
      h1.style.background = clickedColor;
    }
    else{
     this.style.background = '#232323';
     messageDisplay.textContent = 'Try Again';
    }
    }

    );
}

function changeColors(color){
// loopthrough all squares
for (var i=0; i <squares.length; i++){
// change each color to match given color
squares[i].style.background = color;
}
}
function pickColor(){
  var random =[Math.floor( Math.random() * changeColors.length)];
  return colors[random];
}
function generateRandomColors(num){
    // make an array
var arr = [];

    // repeat numm times
for (var i=0; i < num ; i++){


     // get random color to push into array
    arr.push(randomColor())
   

}
    // return that array
return arr;

}

function randomColor(){
    // pick a red from 0 -255

var r = Math.floor(Math.random() * 256);

    // pick a green from 0 -255

    var g = Math.floor(Math.random() * 256);
    // pick a blue from 0  -255

    var b = Math.floor(Math.random() * 256);

  return  'rgb('+ r + ', ' + g + ', ' + b + ')';
}