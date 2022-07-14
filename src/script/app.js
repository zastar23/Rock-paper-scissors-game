"use strict";

const playButtons = document.querySelector(".main--controls");
const rulesButton = document.querySelector(".rules--btn");

const gameMode = document.querySelector("#mode").value;

const closeRules = document.querySelector(".rules--modal--icon-close");

const bgTriangle = document.querySelector(".bg-triangle");
let score = document.querySelector(".game-score-value");
const playerField = document.querySelector(".main--player--choice");
const modal = document.querySelector(".winner--modal");
const modalHeading = document.querySelector(".winner--modal--heading");

const resetBtn = document.querySelector(".modal--restart");

let playerChoice;
let cpChoice;

//  Toggle Rules modal

rulesButton.addEventListener("click", () => {
	document.querySelector(".rules--modal").classList.toggle("display");
});

closeRules.addEventListener("click", () => {
	document.querySelector(".rules--modal").classList.add("display");
});

//  Game logic

playButtons.addEventListener("click", (e) => {
	if (!e.target.classList.contains("delegation")) return;

	if (e.target.classList.contains("down")) {
		playButtons.classList.remove("scale-in-center");
		playButtons.classList.add("scale-out-center");
		setTimeout(() => {
			playerField.insertAdjacentHTML(
				"afterbegin",
				`<button class="main--controls--btn-paper delegation down scale-in-center" >
					<img
						src="./images/icon-paper.svg"
						alt="paper icon"
						width="100"
						height="100"
            class="sign"
					/>`
			);
		}, 2000);
		computerPick();
		pickWinner();
	}

	if (e.target.classList.contains("diagonal")) {
		playButtons.classList.remove("scale-in-center");
		playButtons.classList.add("scale-out-center");
		setTimeout(() => {
			playerField.insertAdjacentHTML(
				"afterbegin",
				`<button class="main--controls--btn-scissors delegation diagonal column scale-in-center">
					<img
						src="./images/icon-scissors.svg"
						alt="scissors icon"
						width="100"
						height="100"
            class="sign"
					/>`
			);
		}, 2000);
		computerPick();
		pickWinner();
	}

	if (e.target.classList.contains("left")) {
		playButtons.classList.remove("scale-in-center");
		playButtons.classList.add("scale-out-center");
		setTimeout(() => {
			playerField.insertAdjacentHTML(
				"afterbegin",
				`<button class="main--controls--btn-rock delegation left column-rock scale-in-center">
					<img
						src="./images/icon-rock.svg"
						alt="rock icon"
						width="100"
						height="100"
            class="sign"
					/>
				</button>`
			);
		}, 2000);
		computerPick();
		pickWinner();
	}
	playerChoice = e.target;
	return playerChoice;
});

const computerPick = function () {
	const choices = document.querySelectorAll("#select");
	cpChoice = Math.floor(Math.random() * choices.length);
	if (cpChoice === 0) {
		setTimeout(() => {
			playerField.insertAdjacentHTML(
				"afterbegin",
				`<button class="main--controls--btn-paper delegation down scale-in-center cp-column" >
					<img
						src="./images/icon-paper.svg"
						alt="paper icon"
						width="100"
						height="100"
            class="sign"
					/>`
			);
		}, 3000);
	}

	if (cpChoice === 1) {
		setTimeout(() => {
			playerField.insertAdjacentHTML(
				"afterbegin",
				`<button class="main--controls--btn-scissors delegation diagonal column scale-in-center cp-column">
					<img
						src="./images/icon-scissors.svg"
						alt="scissors icon"
						width="100"
						height="100"
            class="sign"
					/>`
			);
		}, 3000);
	}

	if (cpChoice === 2) {
		setTimeout(() => {
			playerField.insertAdjacentHTML(
				"afterbegin",
				`<button class="main--controls--btn-rock delegation left column scale-in-center cp-column-rock">
					<img
						src="./images/icon-rock.svg"
						alt="rock icon"
						width="100"
						height="100"
            class="sign"
					/>
				</button>`
			);
		}, 3000);
	}
	restartGame();
	return cpChoice;
};

const pickWinner = function () {
	const title = document.querySelector(".winner--modal--heading");
	setTimeout(() => {
		const roundSigns = playerChoice.dataset.nr + cpChoice;

		switch (roundSigns) {
			case "00":
				modal.classList.add("scale-in-center");
				modal.style.display = "block";
				modalHeading.innerHTML = `It's a Draw!`;
				break;

			case "01":
				modal.classList.add("scale-in-center");
				modal.style.display = "block";
				modalHeading.innerHTML = `You Lost this round!`;
				Number(score.innerHTML--);
				break;

			case "02":
				modal.classList.add("scale-in-center");
				modal.style.display = "block";
				modalHeading.innerHTML = `You Win this round!`;
				Number(score.innerHTML++);
				break;

			case "11":
				modal.classList.add("scale-in-center");
				modal.style.display = "block";
				modalHeading.innerHTML = `It's a Draw!`;
				break;

			case "10":
				modal.classList.add("scale-in-center");
				modal.style.display = "block";
				modalHeading.innerHTML = "You Win this round!";
				Number(score.innerHTML++);
				break;

			case "12":
				modal.classList.add("scale-in-center");
				modal.style.display = "block";
				modalHeading.innerHTML = "You Lost this round!";
				Number(score.innerHTML--);
				break;

			case "22":
				modal.classList.add("scale-in-center");
				modal.style.display = "block";
				modalHeading.innerHTML = `It's a Draw!`;
				break;

			case "21":
				modal.classList.add("scale-in-center");
				modal.style.display = "block";
				modalHeading.innerHTML = "You Win this round!";
				Number(score.innerHTML++);
				break;

			case "20":
				modal.classList.add("scale-in-center");
				modal.style.display = "block";
				modalHeading.innerHTML = "You Lost this round!";
				Number(score.innerHTML--);
				break;
		}
	}, 3500);
};

const restartGame = function () {
	resetBtn.addEventListener("click", () => {
		modal.style.display = "none";
		modalHeading.innerHTML = "";
		playButtons.classList.remove("scale-out-center");
		playButtons.classList.add("scale-in-center");
		playerField.innerHTML = "";
	});
};
