import { assert } from 'chai';
import Game from '../Game';
import Player from '../Player';
import Hand from '../Hand';

describe('Game', () => {
  describe('New Game', () => {
    it('should have 2 player and 10 end score', () => {
      const game = new Game(new Player('A'), new Player('B'), 10);

      assert.equal('A', game.player[0].name);
      assert.equal('B', game.player[1].name);
      assert.equal(10, game.endScore);
    });
  });

  describe('addHand', () => {
    it('should have hand in the game', () => {
      const game = new Game(new Player('A'), new Player('B'), 10);

      game.addHand(new Hand(1, new Player('A'), new Player('A')));
      assert.equal(1, game.hands.length);

      game.addHand(new Hand(1, new Player('A'), new Player('A')));
      assert.equal(2, game.hands.length);
    });
  });

  describe('setWinner: when set winner is Player A', () => {
    it('should have Player is winner in the game', () => {
      const game = new Game(new Player('A'), new Player('B'), 10);

      game.setWinner({name: 'A', score: 10});

      assert.equal('A', game.winner.name);
      assert.equal(10, game.winner.score);
    });
  });

  describe('addScore', () => {
    it('should have 10 score in Player A', () => {
      const game = new Game(new Player('A'), new Player('B'), 10);

      game.addScore('A', 5);
      game.addScore('A', 5);

      assert.equal(10, game.player[0].score);
    });
  });

  describe('hasWinnerOfGame: when Player A 30 score reached', () => {
    it('should end of game and Player A is winner', () => {
      const game = new Game(new Player('A'), new Player('B'), 30);
      game.addScore('A', 30);

      const has = game.hasWinnerOfGame();

      assert.isTrue(has);
      assert.ok(game.winner);
      assert.deepEqual({ name: 'A', score: 30 }, game.winner);
    });
  });

  describe('hasWinnerOfGame: when Player A 26 score', () => {
    it('should continue the game', () => {
      const game = new Game(new Player('A'), new Player('B'), 30);
      game.addScore('A', 26);

      const has = game.hasWinnerOfGame();

      assert.isFalse(has);
      assert.notOk(game.winner);
    });
  });
});
