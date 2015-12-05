import { PASSES, ENVIDO, IWANT, DONTWANT } from './Hand';

export default class PlayerHand {
  constructor(player) {
    this.name = player.name;
    this.cards = [];
    this.point = 0;
  }

  draw(cards) {
    this.cards = cards;
    this.point = this._getCardValue();
  }

  showCards() {
    return `${this.cards[0].name()} ${this.cards[1].name()} ${this.cards[2].name()}`;
  }

  envido(passed, minimumForEnvido) {
    if (passed) {
      return ENVIDO;
    }

    return this.point < minimumForEnvido ? PASSES : ENVIDO;
  }

  answer(minimumForDontWant) {
    return this.point < minimumForDontWant ? DONTWANT : IWANT;
  }

  _getCardValue() {
    const cards = this._sortCards(this.cards);

    if (cards[0].type === cards[1].type && cards[0].type == cards[2].type) {
      return cards[0].value + cards[1].value + 20;
    }

    if (cards[0].type === cards[1].type) {
      return cards[0].value + cards[1].value + 20;
    }

    if (cards[0].type === cards[2].type) {
      return cards[0].value + cards[2].value + 20;
    }

    if (cards[1].type === cards[2].type) {
      return cards[1].value + cards[2].value + 20;
    }

    return cards[0].value;
  }

  _sortCards(cards) {
    return cards.sort((a, b) => {
      if (a.value > b.value) {
        return -1;
      } else if (a.value < b.value) {
        return 1;
      }

      return 0;
    });
  }
}
