export class Circle {
  constructor(readonly r: number) {
    if (r <= 0) throw new Error('Circle radius must be greater than 0');
    this.r = r;
  }

  diameter() {
    return 2 * this.r;
  }
}
