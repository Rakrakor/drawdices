function randNum(){
	var randVal= Math.random();
	return Math.floor(randVal*7);
}

var img1_RandNum=randNum();
var img2_RandNum=randNum();

document.querySelector(".img1").setAttribute("src", "images/dice"+img1_RandNum+".png");
document.querySelector(".img2").setAttribute("src", "images/dice"+img2_RandNum+".png");

	var h1Tag=document.querySelector("h1");
	if (img1_RandNum < img2_RandNum){
		h1Tag.textContent="Player 2 Wins ! 🚩";
	}
	else if (img1_RandNum > img2_RandNum){
		h1Tag.textContent="🚩 Player 1 Wins !";
	}
	else{
		h1Tag.textContent="Draw!";

	}

