function randNum(){
	var randVal= Math.random();
	return Math.floor(randVal*7);
}

document.querySelector("h1").addEventListener("click", function(){
	document.querySelector("h1").classList.add("btnOpacity");
	window.location.reload();
	setTimeout(function(){
	document.querySelector("h1").classList.remove("btnOpacity");
	},0.100);

});

var img1_RandNum=randNum();
var img2_RandNum=randNum();

document.querySelector(".img1").setAttribute("src", "images/dice"+img1_RandNum+".png");
document.querySelector(".img2").setAttribute("src", "images/dice"+img2_RandNum+".png");

setTimeout(function(){}, 2000);
	var h1Tag=document.querySelector("h1");
	if (img1_RandNum < img2_RandNum){
		h1Tag.innerHTML="<em>Player 2 Wins !</em> 🚩</br> <p>Click here to reload</p>";
	}
	else if (img1_RandNum > img2_RandNum){
		h1Tag.innerHTML="🚩<em>Player 1 Wins !</em></br> <p>Click here to reload</p>";
	}
	else{
		h1Tag.innerHTML="Draw! </br> <p>Click here to reload</p>";

	}

