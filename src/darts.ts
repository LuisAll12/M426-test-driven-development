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


export function possibleCheckout(x: number): string {
  console.log(x);
  throw new Error("not implemented yet");
}
