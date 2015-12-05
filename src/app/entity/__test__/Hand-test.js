import { assert } from 'chai';
import Player from '../Player';
import PlayerHand from '../PlayerHand';
import Hand from '../Hand';

describe('Hand', () => {
  describe('New Hand', () => {
    it('should have 2 player in hand 1', () => {
      const a = new Player('A');
      const b = new Player('B');
      const hand = new Hand(1, a, b);

      assert.equal(1, hand.round);
      assert.deepEqual(new PlayerHand(a), hand.player[0]);
      assert.deepEqual(new PlayerHand(b), hand.player[1]);
      assert.deepEqual([], hand.logs);
      assert.deepEqual({}, hand.winner);
    });
  });

  describe('setWinner', () => {
    it('should have a winner in the hand with 10 score', () => {
      const a = new Player('A');
      const b = new Player('B');
      const hand = new Hand(1, a, b);

      hand.setWinner({name: 'A'}, 10);

      assert.equal('A', hand.winner.name);
      assert.equal(10, hand.winner.point);
    });
  });

  describe('addLog', () => {
    it('should have log in list', () => {
      const a = new Player('A');
      const b = new Player('B');
      const hand = new Hand(1, a, b);

      hand.addLog('1');
      assert.equal(1, hand.logs.length);
      hand.addLog('1');
      assert.equal(2, hand.logs.length);
    });
  });

  describe('getIWantWinner: when Player A has 30 point and Player B has 27 point', () => {
    it('should have winner is Player A and get 2 score', () => {
      const hand = new Hand(1, new Player('A'), new Player('B'));
      hand.player[0].point = 30;
      hand.player[1].point = 27;

      hand.getIWantWinner(hand.player[0], hand.player[1]);
    });
  });
});
