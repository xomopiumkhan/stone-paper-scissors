const inputBtn = document.querySelectorAll(".img");
const outputBtn = document.querySelectorAll(".out");
const userScore = document.querySelector(".user-score");
const cScore = document.querySelector(".computer-score");
const result = document.querySelector(".game-result");
const reBtn = document.querySelector(".replay");
const modal = document.querySelector(".modal");
const modalCon = document.querySelector(".modal-container");
const modalImg = document.querySelector(".modal-image");
let userscore = 0;
let cscore = 0;
let number;
inputBtn.forEach(checkClick);
function checkClick(mybtn, i) {
	mybtn.addEventListener("click", function(){
		mybtn.style.background = "red";
		number = Math.floor(Math.random() * outputBtn.length)
		outputBtn[number].style.background = "red"

		if (i==0) {
			inputBtn[1].style.background = "#fff";
			inputBtn[2].style.background = "#fff";
		} else if (i==1) {
			inputBtn[0].style.background = "#fff";
			inputBtn[2].style.background = "#fff";
		} else if (i==2) {
			inputBtn[0].style.background = "#fff";
			inputBtn[1].style.background = "#fff";
		}

		if (number == 0) {
			outputBtn[1].style.background = "#fff";
			outputBtn[2].style.background = "#fff";
		} else if (number == 1) {
			outputBtn[0].style.background = "#fff";
			outputBtn[2].style.background = "#fff";
		} else if (number == 2) {
			outputBtn[0].style.background = "#fff";
			outputBtn[1].style.background = "#fff";
		}

		if (inputBtn[0].style.background == "red" & number == 2) {
			userscore++;
			userScore.innerHTML = userscore;
		} else if (inputBtn[0].style.background == "red" & number == 1) {
			cscore++;
			cScore.innerHTML = cscore;
		} else if (inputBtn[1].style.background == "red" & number == 0) {
			userscore++;
			userScore.innerHTML = userscore;
		} else if (inputBtn[1].style.background == "red" & number == 2) {
			cscore++;
			cScore.innerHTML = cscore;
		} else if (inputBtn[2].style.background == "red" & number == 1) {
			userscore++;
			userScore.innerHTML = userscore;
		} else if (inputBtn[2].style.background == "red" & number == 0) {
			cscore++;
			cScore.innerHTML = cscore;
		}


		if (userscore == 5) {
			modalCon.style.transform = "scale(1)";
			modalImg.setAttribute("src", "winner.png");
			result.innerHTML = "Some trees flourish, others die but, You Won";
			modal.style.background = "#91cc91";
			modal.style.borderColor = "#00d600";
		} else if (cscore == 5) {
			modalCon.style.transform = "scale(1)";
			modalImg.setAttribute("src", "lose.png");;
			result.innerHTML = "Our lives are already written, You Loose";
			modal.style.background = "#fa937f";
			modal.style.borderColor = "#E02401";
		}


	})

}


reBtn.addEventListener("click", function(){
	location.reload()
})