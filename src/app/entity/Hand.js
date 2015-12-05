import PlayerHand from './playerHand';

export const PASSES = 'Passes';
export const ENVIDO = 'Envido';
export const IWANT = 'I want';
export const DONTWANT = 'Dont\'t want';

export default class Hand {
  constructor(round, firstPlayer, secondPlayer) {
    this.round = round;
    this.player = [
      new PlayerHand(firstPlayer),
      new PlayerHand(secondPlayer),
    ];
    this.winner = {};
    this.logs = [];
  }

  setWinner(player, point) {
    this.winner = { name: player.name, point: point };
  }

  addLog(txt) {
    this.logs.push(txt);
  }

  getIWantWinner(firstPlayer, secondPlayer) {
    if ((firstPlayer.point > secondPlayer.point) || firstPlayer.point === secondPlayer.point)  {
      this.setWinner(firstPlayer, 2);
    } else {
      this.setWinner(secondPlayer, 2);
    }
  }

  getDontWantWinner(firstPlayer, secondPlayer) {
    this.setWinner(firstPlayer, 1);
  }

  nextPlayer() {
    return
  }
}
