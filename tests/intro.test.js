import { describe, test, expect, it } from "vitest";
import { max } from "../src/intro.js";

describe("max", () => {
  it("should return the first argument if it is greater", () => {
    expect(max(2, 1)).toBe(2);
  });
});
