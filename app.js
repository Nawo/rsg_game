let state = {
    playerWins: localStorage.getItem("PlayerWins") || 0,
    computerWins: localStorage.getItem("ComputerWins") || 0,
};

const playerWinsKey = "PlayerWins";
const computerWinsKey = "ComputerWins";

const renderScore = () => {
    const pointsElement = document.querySelector(".points");
    pointsElement.innerText = state.playerWins - state.computerWins;
};

const init = () => {
    renderScore();
};

init();