export class Rectangle {
  /**
   * Width
   */
  readonly w: number;
  /**
   * Height
   */
  readonly h: number;
  /**
   * @param w Width
   * @param h Height
   */
  constructor(w: number, h: number) {
    if (w <= 0 || h <= 0) throw new Error('Invalid rectangle');
    this.w = w;
    this.h = h;
  }

  /**
   * @returns The area of the `Rectangle`
   */
  area(): number {
    return this.w * this.h;
  }
}
