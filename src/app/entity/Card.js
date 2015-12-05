export const S = 'S';
export const B = 'B';
export const CU = 'CU';
export const CO = 'CO';

export default class Card {
  constructor(type, number) {
    this.type = type;
    this.number = number;
    this.value = this.number < 8 ? number : 0;
  }

  name() {
    return `${this.number}-${this.type}`
  }
}
