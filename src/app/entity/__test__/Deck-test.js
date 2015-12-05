import { assert } from 'chai';
import Deck from '../Deck';
import Card, { S, B, CU, CO } from '../Card';

describe('Deck', () => {

  describe('New Deck', () => {
    const deck = new Deck();
    it('should have 40 cards', () => {
      assert.equal(40, deck.cards.length);
    });

    it('should have 1-7 and 10, 11, 12 S', () => {
      const cards = deck.cards.map((card) => {
        return card.name();
      });
      assert.isTrue(cards.includes('1-S'));
      assert.isTrue(cards.includes('2-S'));
      assert.isTrue(cards.includes('3-S'));
      assert.isTrue(cards.includes('4-S'));
      assert.isTrue(cards.includes('5-S'));
      assert.isTrue(cards.includes('6-S'));
      assert.isTrue(cards.includes('7-S'));
      assert.isTrue(cards.includes('10-S'));
      assert.isTrue(cards.includes('11-S'));
      assert.isTrue(cards.includes('12-S'));
    });

    it('should have 1-7 and 10, 11, 12 B', () => {
      const cards = deck.cards.map((card) => {
        return card.name();
      });
      assert.isTrue(cards.includes('1-B'));
      assert.isTrue(cards.includes('2-B'));
      assert.isTrue(cards.includes('3-B'));
      assert.isTrue(cards.includes('4-B'));
      assert.isTrue(cards.includes('5-B'));
      assert.isTrue(cards.includes('6-B'));
      assert.isTrue(cards.includes('7-B'));
      assert.isTrue(cards.includes('10-B'));
      assert.isTrue(cards.includes('11-B'));
      assert.isTrue(cards.includes('12-B'));
    });

    it('should have 1-7 and 10, 11, 12 CU', () => {
      const cards = deck.cards.map((card) => {
        return card.name();
      });
      assert.isTrue(cards.includes('1-CU'));
      assert.isTrue(cards.includes('2-CU'));
      assert.isTrue(cards.includes('3-CU'));
      assert.isTrue(cards.includes('4-CU'));
      assert.isTrue(cards.includes('5-CU'));
      assert.isTrue(cards.includes('6-CU'));
      assert.isTrue(cards.includes('7-CU'));
      assert.isTrue(cards.includes('10-CU'));
      assert.isTrue(cards.includes('11-CU'));
      assert.isTrue(cards.includes('12-CU'));
    });

    it('should have 1-7 and 10, 11, 12 CO', () => {
      const cards = deck.cards.map((card) => {
        return card.name();
      });
      assert.isTrue(cards.includes('1-CO'));
      assert.isTrue(cards.includes('2-CO'));
      assert.isTrue(cards.includes('3-CO'));
      assert.isTrue(cards.includes('4-CO'));
      assert.isTrue(cards.includes('5-CO'));
      assert.isTrue(cards.includes('6-CO'));
      assert.isTrue(cards.includes('7-CO'));
      assert.isTrue(cards.includes('10-CO'));
      assert.isTrue(cards.includes('11-CO'));
      assert.isTrue(cards.includes('12-CO'));
    });
  });

  describe('shuffle', () => {
    const deck = new Deck();
    it('should shuffled', () => {
      const cards = {...deck.cards};
      deck.shuffle();
      assert.notEqual(cards[0].name(), deck.cards[0].name());
    });
  });

  describe('getCards', () => {
    const deck = new Deck();
    it('pick 3 card from top', () => {
      const cards = deck.getCards(0, 3)
      assert.equal(40, deck.cards.length);
      for (var i = 0; i < 3; i++) {
        assert.equal(cards[i].name(), deck.cards[i].name());
      };
    });
  });
});
