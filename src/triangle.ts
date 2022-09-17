export class Triangle {
  constructor(readonly a: number, readonly b: number, readonly c: number) {
    if (a <= 0 || b <= 0 || c <= 0 || a + b < c || b + c < a || a + c < b)
      throw new Error('Triangle is out of bounds');
    this.a = a;
    this.b = b;
    this.c = c;
  }

  area(): number {
    const p = (this.a + this.b + this.c) / 2;
    return Math.sqrt(p * (p - this.a) * (p - this.b) * (p - this.c));
  }
}
