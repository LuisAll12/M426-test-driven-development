export function play(player1: string, player2: string): number {
  const valideMoves = ["rock", "paper", "scissors"];


  // Inputs in uppercase und ohne leerzeichen formatieren
  player1 = player1.trim().toLowerCase();
  player2 = player2.trim().toLowerCase();

  // Validate inputs
  if (!valideMoves.includes(player1) || !valideMoves.includes(player2)) {
    throw new Error("Invalid move")
  }

  if (player1 === player2) {
    return 0
  }

  // Determine winner
  const winRes: { [key: string]: string } = { // Neues Objekt erstellen
    rock: "scissors", // rock schlägt schere
    paper: "rock", // paper schlägt stein
    scissors: "paper" // scissors schlägt paper
  }

  return winRes[player1] === player2 ? 1 : 2
  // player1 gewinnt, wenn der Wert des Objekts gleich dem zweiten Spieler ist
  // player2 gewinnt, wenn der Wert des Objekts ungleich dem zweiten Spieler ist
}
