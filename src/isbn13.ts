// src/isbn13.ts
export function isValid(isbn: string): boolean {
  const cleaned = isbn.replace(/\D/g, ''); 
  if (cleaned.length !== 13) return false; 

  let sum = 0;
  for (let i = 0; i < 13; i++) {
    const digit = parseInt(cleaned[i], 10);
    const weight = i % 2 === 0 ? 1 : 3; 
    sum += digit * weight;
  }

  return sum % 10 === 0; 
}