// src/darts.ts

export function calcPoints(input: string): number {
  const tokens = input.split(" ").map(Number);
  let score = 0;

  for (let i = 0; i < tokens.length; i += 2) {
    const multiplier = tokens[i];
    const value = tokens[i + 1];
    score += multiplier * value;
  }

  return score;
}


export function possibleCheckout(currentScore: number): string | null {
  const rest = 501 - currentScore;
  if (rest % 2 !== 0) return null;
  const doubleValue = rest / 2;
  if (doubleValue > 20) return null;
  return `Double ${doubleValue}`;
}
