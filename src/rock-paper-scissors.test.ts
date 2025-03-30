import {play} from "./rock-paper-scissors";

describe("rock-paper-scissors", () => {

    // test.each format
    test.each([
        ["rock", "scissors", 1],
        ["scissors", "rock", 2],
        ["paper", "rock", 1],
        ["rock", "paper", 2],
        ["scissors", "paper", 1],
        ["paper", "scissors", 2],
        ["rock", "rock", 0],
        ["paper", "paper", 0],
        ["scissors", "scissors", 0],
    ])('play("%s", "%s") should return %d', (player1, player2, expected) => {
        expect(play(player1, player2)).toBe(expected);
    });

    test("should handle case insensitivity and whitespace", () => {
        expect(play(" Rock ", "paPer")).toBe(2);
        expect(play(" SCISSORS", " rock ")).toBe(2);
    });

    // Invaliede inputs
    test.each([
        ["banana", "rock"],
        ["rock", "apple"],
        ["crocks", "paper"],
    ])('play("%s", "%s") should throw an error', (player1, player2) => {
        expect(() => play(player1, player2)).toThrow("Invalid move");
    });
});