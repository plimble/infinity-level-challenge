export default class Game {
  constructor(firstPlayer, secondPlayer, endScore) {
    this.player = [ firstPlayer, secondPlayer ];
    this.winner = null;
    this.endScore = endScore;
    this.hands = [];
  }

  addHand(hand) {
    this.hands.push(hand);
  }

  setWinner(player) {
    this.winner = { name: player.name, score: player.score };
  }

  addScore(playerName, score) {
    for (var i = 0; i < this.player.length; i++) {
      if (this.player[i].name === playerName) {
        this.player[i].score += score;
      }
    };
  }

  hasWinnerOfGame() {
    for (let i = 0; i < this.player.length; i++) {
      if (this.player[i].score >= this.endScore) {
        this.setWinner(this.player[i]);
        return true;
      }
    }

    return false;
  }
}
