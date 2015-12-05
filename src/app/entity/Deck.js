import Card, { S, B, CU, CO } from './card';
import _ from 'underscore';

export default class Deck {
  constructor() {
    this.cards = [];

    for (let i = 1; i < 13; i++) {
      if (i === 8 || i === 9) {
        continue;
      }

      this.cards.push(new Card(S, i));
      this.cards.push(new Card(B, i));
      this.cards.push(new Card(CU, i));
      this.cards.push(new Card(CO, i));
    }
  }

  shuffle() {
    this.cards = _.shuffle(this.cards);
  }

  getCards(srcIndex, destIndex) {
    return this.cards.slice(srcIndex, destIndex);
  }
}
