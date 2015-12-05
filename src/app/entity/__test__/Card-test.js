import { assert } from 'chai';
import Card, { S, CU } from '../Card';

describe('Card', () => {
  describe('New Card 10-S', () => {
    it('should display 10-S and value is 0', () => {
      const card = new Card(S, 10);
      assert.equal('10-S', card.name());
      assert.equal(0, card.value);
    });
  });

  describe('New Card 7-CU', () => {
    it('should display 7-CU and value is 7', () => {
      const card = new Card(CU, 7);
      assert.equal('7-CU', card.name());
      assert.equal(7, card.value);
    });
  });
});
