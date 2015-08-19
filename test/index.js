import assert from "power-assert";
import index from "../src";
import PerlinNoise from "../src/PerlinNoise";

describe("index", () => {
  it("exports", () => {
    assert(index === PerlinNoise);
  });
});
