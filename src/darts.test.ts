// src/darts.test.ts

import { calcPoints } from './darts';

describe('calcPoints', () => {
  it('berechnet einfache Kombination Triple 20, Single 17, Double 4 = 85', () => {
    expect(calcPoints("3 20 1 17 2 4")).toBe(85);
  });
});
