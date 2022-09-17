export class Triangle {
  /**
   * First side
   */
  readonly a: number;
  /**
   * Second side
   */
  readonly b: number;
  /**
   * Third side
   */
  readonly c: number;
  /**
   * @param a First side
   * @param b Second side
   * @param c Third side
   */
  constructor(a: number, b: number, c: number) {
    if (a <= 0 || b <= 0 || c <= 0 || a + b < c || b + c < a || a + c < b)
      throw new Error('Invalid triangle');
    this.a = a;
    this.b = b;
    this.c = c;
  }

  /**
   * @returns The area of the `Triangle`
   */
  area(): number {
    const p = (this.a + this.b + this.c) / 2;
    return Math.sqrt(p * (p - this.a) * (p - this.b) * (p - this.c));
  }
}
