import Player from '../entity/Player';
import Deck from '../entity/Deck';
import Hand, { PASSES, ENVIDO, IWANT, DONTWANT } from '../entity/Hand';
import Game from '../entity/Game';

export default class PlayGame {
  constructor(historyRepo, logger, minimumForEnvido, minimumForDontWant) {
    this.historyRepo = historyRepo;
    this.logger = logger;
    this.round = 1;
    this.deck = new Deck();
    this.minimumForEnvido = minimumForEnvido;
    this.minimumForDontWant = minimumForDontWant;
  }

  /*
  * endScore int
  * firstPlayerName string
  * secondPlayerName string
  */
  do(input) {
    const game = new Game(new Player(input.firstPlayerName), new Player(input.secondPlayerName), input.endScore);
    const hand = new Hand(this.round, game.player[0], game.player[1]);
    this._log(hand, 'Game starts!');
    this._start(game, hand, hand.player[0], hand.player[1]);

    // save to repository
    this.historyRepo.save(game);
  }

  _start(game, hand) {
    let firstPlayer = hand.player[0];
    let secondPlayer = hand.player[1];
    this._log(hand, `${hand.round} Hand:`);

    this.deck.shuffle();

    firstPlayer.draw(this.deck.getCards(0, 3));
    this._log(hand, `${firstPlayer.name}: ${firstPlayer.showCards()}`);

    secondPlayer.draw(this.deck.getCards(3, 6));
    this._log(hand, `${secondPlayer.name}: ${secondPlayer.showCards()}`);

    this._log(hand, `${firstPlayer.name} Starts:`);
    this._play(game, hand, firstPlayer, secondPlayer, false);
    this._log(hand, `${hand.winner.name}: Wins hand and gets ${hand.winner.point} points on global score.`);

    game.addScore(hand.winner.name, hand.winner.point);
    this._log(hand, `Global Score : ${game.player[0].name}: ${game.player[0].score} ${game.player[1].name}: ${game.player[1].score}`);

    game.addHand(hand);

    if (!game.hasWinnerOfGame(game)) {
      this._start(game, new Hand(++this.round, secondPlayer, firstPlayer));
      return;
    }

    this._log(hand, `The winner is ${game.winner.name} with score ${game.winner.score}`);
  }

  _play(game, hand, firstPlayer, secondPlayer, passed) {
    switch (firstPlayer.envido(passed, this.minimumForEnvido)) {
      case ENVIDO:
        this._log(hand, `${firstPlayer.name}: Calls Envido (his score is ${firstPlayer.point})`);

        switch (secondPlayer.answer(this.minimumForDontWant)) {
          case IWANT:
            this._log(hand, `${secondPlayer.name}: Answers I want`);
            this._log(hand, `${firstPlayer.name}: Announces Point of : ${firstPlayer.point}`);

            if (firstPlayer.point === secondPlayer.point) {
              this._log(hand, `${secondPlayer.name}: Announces that he has been defeated`);
            } else {
              this._log(hand, `${secondPlayer.name}: Announces Point of : ${secondPlayer.point}`);
            }

            return hand.getIWantWinner(firstPlayer, secondPlayer);
          case DONTWANT:
            this._log(hand, `${secondPlayer.name}: Don’t want (because his score is ${secondPlayer.point})`);
            return hand.getDontWantWinner(firstPlayer, secondPlayer);
        }

      case PASSES:
        this._log(hand, `${firstPlayer.name}: Passes`);
        return this._play(game, hand, secondPlayer, firstPlayer, true);
    }
  }

  _log(hand, txt) {
    hand.addLog(txt);
    this.logger.log(txt);
  }
}
