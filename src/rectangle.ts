export class Rectangle {
  constructor(readonly w: number, readonly h: number) {
    if (w <= 0 || h <= 0) throw new Error('Invalid rectangle');
    this.w = w;
    this.h = h;
  }

  area(): number {
    return this.w * this.h;
  }
}
