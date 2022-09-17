import { assert, expect } from 'chai';
import { describe } from 'mocha';
import { Circle, Rectangle, Triangle } from '../src';

describe('Circle', () => {
  expect(() => {
    new Circle(0);
  }).to.throw();

  it('(2) diameter should return 4', () => {
    const c = new Circle(2);
    assert.equal(c.diameter(), 4);
  });
});

describe('Rectangle', () => {
  expect(() => {
    new Rectangle(0, 4);
  }).to.throw();

  it('(2, 5) area should return 10', () => {
    const r = new Rectangle(2, 5);
    assert.equal(r.area(), 10);
  });
});

describe('Triangle', () => {
  expect(() => {
    new Triangle(15, 4, 5);
  }).to.throw();

  it('(3, 4, 5) area should return 6', () => {
    const t = new Triangle(3, 4, 5);
    assert.equal(t.area(), 6);
  });
});
