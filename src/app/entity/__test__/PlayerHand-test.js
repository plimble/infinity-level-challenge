import { assert } from 'chai';
import Player from '../Player';
import PlayerHand from '../PlayerHand';
import Card, { S, CU, B } from '../Card';
import { ENVIDO, PASSES, IWANT, DONTWANT } from '../Hand';

describe('PlayerHand', () => {
  describe('New PlayerHand', () => {
    it('should have player name', () => {
      const playerHand = new PlayerHand(new Player('A'));

      assert.equal('A', playerHand.name);
      assert.deepEqual([], playerHand.cards);
      assert.equal(0, playerHand.point);
    });
  });

  describe('draw 1-S 7-S 2-CU (2 same suite 1 diffrent)', () => {
    it('should have 3 card on hand and point is 28', () => {
      const playerHand = new PlayerHand(new Player('A'));

      playerHand.draw([new Card(S, 1), new Card(S, 7), new Card(CU, 2)]);

      assert.equal(3, playerHand.cards.length);
      assert.equal(28, playerHand.point);
    });
  });

  describe('draw 1-S 7-S 6-S (3 same suite)', () => {
    it('should have 3 card on hand and point is 33', () => {
      const playerHand = new PlayerHand(new Player('A'));

      playerHand.draw([new Card(S, 1), new Card(S, 6), new Card(S, 7)]);

      assert.equal(3, playerHand.cards.length);
      assert.equal(33, playerHand.point);
    });
  });

  describe('draw 1-S 7-CU 6-B (all diffrent suite)', () => {
    it('should have 3 card on hand and point is 7', () => {
      const playerHand = new PlayerHand(new Player('A'));

      playerHand.draw([new Card(S, 1), new Card(CU, 6), new Card(B, 7)]);

      assert.equal(3, playerHand.cards.length);
      assert.equal(7, playerHand.point);
    });
  });

  describe('envido', () => {
    it('should call Envido when point is more than 27', () => {
      const playerHand = new PlayerHand(new Player('A'));

      playerHand.point = 29;
      const call = playerHand.envido(false, 27);

      assert.equal(ENVIDO, call);
    });

    it('should call Passes when point is less than 27', () => {
      const playerHand = new PlayerHand(new Player('A'));

      playerHand.point = 14;
      const call = playerHand.envido(false, 27);

      assert.equal(PASSES, call);
    });
  });

  describe('answer', () => {
    it('should call I want when point is more than 27', () => {
      const playerHand = new PlayerHand(new Player('A'));

      playerHand.point = 29;
      const call = playerHand.answer(false, 27);

      assert.equal(IWANT, call);
    });

    it('should call I don\'t want when point is less than 27', () => {
      const playerHand = new PlayerHand(new Player('A'));

      playerHand.point = 14;
      const call = playerHand.answer(27);

      assert.equal(DONTWANT, call);
    });
  });
});
