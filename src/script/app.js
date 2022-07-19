"use strict";

const playButtons = document.querySelector(".main--controls");
const rulesButton = document.querySelector(".rules--btn");
const gameTitle = document.querySelector(".game-title");

const gameMode = document.querySelector("#mode");

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
					/>
					</button>`
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

	if (e.target.dataset.nr === "3") {
		playButtons.classList.remove("scale-in-center");
		playButtons.classList.add("scale-out-center");
		setTimeout(() => {
			playerField.insertAdjacentHTML(
				"afterbegin",
				`<button class="main--controls--btn-lizard delegation  scale-in-center lizard column-rock" data-nr='3'>
					<img
						src="./images/icon-lizard.svg"
						alt="rock icon"
						width="100"
						height="100"
            			class="sign"
						data-nr='3'
						
					/>
				</button>`
			);
		}, 2000);
		computerPick();
		pickWinner();
	}

	if (e.target.dataset.nr === "4") {
		playButtons.classList.remove("scale-in-center");
		playButtons.classList.add("scale-out-center");
		setTimeout(() => {
			playerField.insertAdjacentHTML(
				"afterbegin",
				`<button class="main--controls--btn-spock delegation scale-in-center lizard column-rock" data-nr='3'>
					<img
						src="./images/icon-spock.svg"
						alt="rock icon"
						width="100"
						height="100"
            			class="sign"
						data-nr='4'
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
					/></button>`
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
					/>
					</button>`
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

	if (cpChoice === 3) {
		setTimeout(() => {
			playerField.insertAdjacentHTML(
				"afterbegin",
				`<button class="main--controls--btn-lizard delegation  scale-in-center lizard cp-column-rock" data-nr='3'>
					<img
						src="./images/icon-lizard.svg"
						alt="lizard icon"
						width="100"
						height="100"
						id="select"
            class="sign"
					/>
				</button>`
			);
		}, 3000);
	}

	if (cpChoice === 4) {
		setTimeout(() => {
			playerField.insertAdjacentHTML(
				"afterbegin",
				`<button class="main--controls--btn-spock delegation  scale-in-center lizard cp-column-rock" data-nr='4'>
					<img
						src="./images/icon-spock.svg"
						alt="spock icon"
						width="100"
						height="100"
						id="select"
            class="sign"
					/>
				</button>`
			);
		}, 3000);
	}

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

			case "30":
				modal.classList.add("scale-in-center");
				modal.style.display = "block";
				modalHeading.innerHTML = "You Win this round!";
				Number(score.innerHTML++);
				break;

			case "03":
				modal.classList.add("scale-in-center");
				modal.style.display = "block";
				modalHeading.innerHTML = "You Lost this round!";
				Number(score.innerHTML--);
				break;

			case "31":
				modal.classList.add("scale-in-center");
				modal.style.display = "block";
				modalHeading.innerHTML = "You Lost this round!";
				Number(score.innerHTML--);
				break;

			case "13":
				modal.classList.add("scale-in-center");
				modal.style.display = "block";
				modalHeading.innerHTML = "You Win this round!";
				Number(score.innerHTML++);
				break;

			case "32":
				modal.classList.add("scale-in-center");
				modal.style.display = "block";
				modalHeading.innerHTML = "You Lost this round!";
				Number(score.innerHTML--);
				break;

			case "23":
				modal.classList.add("scale-in-center");
				modal.style.display = "block";
				modalHeading.innerHTML = "You Win this round!";
				Number(score.innerHTML++);
				break;

			case "33":
				modal.classList.add("scale-in-center");
				modal.style.display = "block";
				modalHeading.innerHTML = "It's a draw!";
				break;

			case "40":
				modal.classList.add("scale-in-center");
				modal.style.display = "block";
				modalHeading.innerHTML = "You Lost this round!";
				Number(score.innerHTML--);
				break;

			case "41":
				modal.classList.add("scale-in-center");
				modal.style.display = "block";
				modalHeading.innerHTML = "You Lost this round!";
				Number(score.innerHTML--);
				break;

			case "42":
				modal.classList.add("scale-in-center");
				modal.style.display = "block";
				modalHeading.innerHTML = "You Win this round!";
				Number(score.innerHTML++);
				break;

			case "43":
				modal.classList.add("scale-in-center");
				modal.style.display = "block";
				modalHeading.innerHTML = "You Lost this round!";
				Number(score.innerHTML--);
				break;

			case "44":
				modal.classList.add("scale-in-center");
				modal.style.display = "block";
				modalHeading.innerHTML = "It's a draw!";
				break;

			case "04":
				modal.classList.add("scale-in-center");
				modal.style.display = "block";
				modalHeading.innerHTML = "You Lost this round!";
				Number(score.innerHTML--);
				break;

			case "14":
				modal.classList.add("scale-in-center");
				modal.style.display = "block";
				modalHeading.innerHTML = "You Lost this round";
				Number(score.innerHTML--);
				break;

			case "24":
				modal.classList.add("scale-in-center");
				modal.style.display = "block";
				modalHeading.innerHTML = "You Lost this round!";
				Number(score.innerHTML--);
				break;

			case "34":
				modal.classList.add("scale-in-center");
				modal.style.display = "block";
				modalHeading.innerHTML = "You Win this round!";
				Number(score.innerHTML++);
				break;
		}
	}, 3500);
	restartGame();
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

// Game mode change

gameMode.addEventListener("change", (e) => {
	if (e.target.value === "extra") {
		document.querySelector(".rules--modal--sketch").src =
			"./images/image-rules-bonus.svg";

		gameTitle.insertAdjacentHTML(
			"beforeend",
			`<span>Lizard</span><span>Spock</span>`
		);

		bgTriangle.src = "./images/bg-pentagon.svg";
		bgTriangle.classList.add("bg-pentagon");
		bgTriangle.classList.remove("bg-triangle");
		playButtons.insertAdjacentHTML(
			"beforeend",
			`<button class="main--controls--btn-lizard delegation  scale-in-center lizard-position" id="select" data-nr='3'>
					<img
						src="./images/icon-lizard.svg"
						alt="rock icon"
						width="100"
						height="100"
						data-nr="3"
	
            class="sign delegation"
					/>
				</button>`
		);

		playButtons.insertAdjacentHTML(
			"beforeend",
			`<button class="main--controls--btn-spock delegation column scale-in-center spock-position" id="select" data-nr='4'>
					<img
						src="./images/icon-spock.svg"
						alt="rock icon"
						width="100"
						height="100"
						data-nr="4"
						
            class="sign delegation"
					/>
				</button>`
		);
		document
			.querySelector(".main--controls--btn-paper")
			.classList.add("extra-paper-position");
		document
			.querySelector(".main--controls--btn-scissors")
			.classList.add("extra-scissors-position");
		document
			.querySelector(".main--controls--btn-rock")
			.classList.add("extra-rock-position");
	}
	if (e.target.value === "classic") {
		// change bg
		document.querySelector(".rules--modal--sketch").src =
			"./images/image-rules.svg";
		gameTitle.innerHTML = `<span>Rock</span><span>Paper</span><span>Scissors</span>`;
		bgTriangle.src = "./images/bg-triangle.svg";
		bgTriangle.classList.add("bg-triangle");
		bgTriangle.classList.remove("bg-pentagon");
		// change buttons
		document
			.querySelector(".main--controls--btn-paper")
			.classList.remove("extra-paper-position");
		document
			.querySelector(".main--controls--btn-scissors")
			.classList.remove("extra-scissors-position");
		document
			.querySelector(".main--controls--btn-rock")
			.classList.remove("extra-rock-position");

		document.querySelector(".main--controls--btn-spock").remove();
		document.querySelector(".main--controls--btn-lizard").remove();
	}
});
