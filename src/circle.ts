export class Circle {
  /**
   * Radius
   */
  readonly r: number;
  /**
   * @param r Radius
   */
  constructor(r: number) {
    if (r <= 0) throw new Error('Circle radius must be greater than 0');
    this.r = r;
  }
  /**
   * @returns The diameter of the `Circle`
   */
  diameter() {
    return 2 * this.r;
  }
}
