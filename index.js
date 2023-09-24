var randomNumber1 = Math.floor(Math.random()*6)+1

var randomImage = "dice"+randomNumber1+".png";

var randomImageSource = "images/" + randomImage;

var image1 = document.querySelectorAll("img")[0];

image1.setAttribute("src", randomImageSource);

var randomNumber2 = Math.floor(Math.random()*6)+1;

var randomImageA = "dice"+randomNumber2+".png";

var randomImageSourceA = "images/"+randomImageA;

document.querySelectorAll("img")[1].setAttribute("src", randomImageSourceA);

if(randomNumber1>randomNumber2){
    document.querySelector("h1").innerHTML="Player 1 Wins";
}
else if(randomNumber1<randomNumber2){
    document.querySelector("h1").innerHTML="Player 2 Wins";
}
else if(randomNumber1=randomNumber2){
    document.querySelector("h1").innerHTML="Draw";
}