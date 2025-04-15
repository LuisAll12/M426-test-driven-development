// src/isbn13.test.ts
import { isValid } from './isbn13';

describe('isValid', () => {
  it('gültige ISBN-13 mit Bindestrichen', () => {
    expect(isValid('978-3-16-148410-0')).toBe(true);
  });

  it('gültige ISBN-13 ohne Bindestriche', () => {
    expect(isValid('9783161484100')).toBe(true);
  });

  it('ungültige Prüfziffer', () => {
    expect(isValid('9783161484101')).toBe(false);
  });

  it('falsche Länge nach Bereinigung', () => {
    expect(isValid('9783')).toBe(false);
    expect(isValid('97831614841000')).toBe(false);
  });

  it('alle Nullen', () => {
    expect(isValid('0000000000000')).toBe(true);
  });

  it('ignoriert Nicht-Ziffern-Zeichen', () => {
    expect(isValid('978-3aA16-14b8410-0')).toBe(true);
    expect(isValid('1234567890128')).toBe(true);
  });
});