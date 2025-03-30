export function formatDuration(seconds: number): string {
  // Check if the input is a valid number
  if (seconds < 0) throw new Error("Negative duration is not allowed");
  if (seconds === 0) return "0s";

  seconds = Math.round(seconds); // Rounding

  const hours = Math.floor(seconds / 3600); // Total hours
  seconds %= 3600;
  
  const minutes = Math.floor(seconds / 60); // Total minutes
  seconds %= 60; 

  let result = ""; // Result string

  if (hours > 0) result += `${hours}h`;
  if (minutes > 0) result += `${result ? " " : ""}${minutes}m`; // Wenn stunden schon existieren, füge ein Leerzeichen hinzu 
  if (seconds > 0 || result === "") result += `${result ? " " : ""}${seconds}s`; // Wenn stunden und minuten schon existieren, füge ein Leerzeichen hinzu

  return result;
}
