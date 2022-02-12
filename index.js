if (window.sessionStorage.refreshed === "true") {
   window.sessionStorage.setItem('refreshed', 'false'); // Save data in sessionstorage. If true, makes this block of code
   let playerOneNumb = randGen();
   let playerTwoNumb = randGen();

   winChange(playerOneNumb, playerTwoNumb);

   document.querySelector(".img1").setAttribute("src", "images/dice" + playerOneNumb + ".png");
   document.querySelector(".img2").setAttribute("src", "images/dice" + playerTwoNumb + ".png");


} else {
   window.sessionStorage.setItem('refreshed', 'true'); // Save data in sessionstorage. If false, makes this block of code
}

function randGen() {
   let rand = Math.random();
   let result = Math.floor(rand * 6) + 1; //Generates random number from one to six
   return result;
}

function winChange(a, b) {
   let headerText = document.querySelector("h1");
   let headerImgLeft = document.querySelector(".left-flag");
   let headerImgRight = document.querySelector(".right-flag");
   if (a > b) {
      headerText.innerText = "Player 1 wins!";
      headerImgLeft.classList.remove("invisible");  // Change header if one or two player wins
   } else if (a < b) {
      headerText.innerText = "Player 2 wins!";
      headerImgRight.classList.remove("invisible");
   } else {
      headerText.innerText = "Draw!";
   }
}


