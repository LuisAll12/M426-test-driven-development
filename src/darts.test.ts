// src/darts.test.ts

import { calcPoints } from './darts';

describe('calcPoints', () => {
    it('berechnet einfache Kombination Triple 20, Single 17, Double 4 = 85', () => {
        expect(calcPoints("3 20 1 17 2 4")).toBe(85);
    });
    it('berechnet Double 15, Single 18, Triple 19 = 105', () => {
        expect(calcPoints("2 15 1 18 3 19")).toBe(105);
    });
    
    it('berechnet Triple 20, Single 5, ein Wurf daneben = 65', () => {
        expect(calcPoints("3 20 1 5")).toBe(65);
    });
    
    it('leere Eingabe ergibt 0 Punkte', () => {
        expect(calcPoints("")).toBe(0);
    });
});
