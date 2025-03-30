import { formatDuration } from "./duration";

describe("formatting duration", () => {
    test("0 seconds should be formatted as 0s", () => {
        expect(formatDuration(0)).toBe("0s");
    });

    test("33 seconds should be formatted as 33s", () => {
        expect(formatDuration(33)).toBe("33s");
    });

    test("123 seconds should be formatted as 2m 3s", () => {
        expect(formatDuration(123)).toBe("2m 3s");
    });

    test("500 seconds should be formatted as 8m 20s", () => {
        expect(formatDuration(500)).toBe("8m 20s");
    });

    test("3600 seconds should be formatted as 1h", () => {
        expect(formatDuration(3600)).toBe("1h");
    });

    test("3999 seconds should be formatted as 1h 6m 39s", () => {
        expect(formatDuration(3999)).toBe("1h 6m 39s");
    });

    test("negative seconds should throw an error", () => {
        expect(() => formatDuration(-1)).toThrow("Negative duration is not allowed");
    });
    
    test("seconds with decimal places should be rounded", () => {
        expect(formatDuration(59.6)).toBe("1m");
        expect(formatDuration(1.4)).toBe("1s");
    });
});

describe("formatting duration with only hours", () => {
    test.each([
        [3600, "1h"],
        [7200, "2h"],
        [10800, "3h"],
        [14400, "4h"],
        [3999, "1h 6m 39s"]
    ])("formatDuration(%d) should be %s", (input, expected) => {
        expect(formatDuration(input)).toBe(expected);
    });
});