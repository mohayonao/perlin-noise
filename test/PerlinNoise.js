import assert from "power-assert";
import RandGen from "@mohayonao/randgen";
import PerlinNoise from "../src/PerlinNoise";

function closeTo(expected, actual, delta) {
  return Math.abs(expected - actual) <= delta;
}

describe("PerlinNoise", () => {
  describe("constructor(rand: function = Math.random)", () => {
    it("works", (done) => {
      let noise1 = new PerlinNoise(new RandGen(12345).random);

      setTimeout(() => {
        let noise2 = new PerlinNoise(new RandGen(12345).random);

        assert(noise1 instanceof PerlinNoise);
        assert(noise2 instanceof PerlinNoise);
        assert(noise1 !== noise2);
        assert(noise1.noise(1.618) === noise2.noise(1.618));

        done();
      }, 10);
    });
    it("works without rand", (done) => {
      let noise1 = new PerlinNoise();

      setTimeout(() => {
        let noise2 = new PerlinNoise();

        assert(noise1 instanceof PerlinNoise);
        assert(noise2 instanceof PerlinNoise);
        assert(noise1 !== noise2);
        assert(noise1.noise(1.618) !== noise2.noise(1.618));

        done();
      }, 10);
    });
  });
  describe("#noise(x: number): number", () => {
    it("works", () => {
      let noise1 = new PerlinNoise(new RandGen(12345).random);
      let noise2 = new PerlinNoise(new RandGen(12345).random);

      assert(closeTo(noise1.noise(0.01), 0.47971085, 1e-6));
      assert(closeTo(noise1.noise(0.02), 0.49198359, 1e-6));
      assert(closeTo(noise1.noise(0.03), 0.50475885, 1e-6));
      assert(closeTo(noise1.noise(0.04), 0.51736760, 1e-6));
      assert(closeTo(noise1.noise(0.05), 0.52928125, 1e-6));

      assert(noise1.noise(0.01) === noise2.noise(0.01));
      assert(noise1.noise(0.02) === noise2.noise(0.02));
      assert(noise1.noise(0.03) === noise2.noise(0.03));
      assert(noise1.noise(0.04) === noise2.noise(0.04));
      assert(noise1.noise(0.05) === noise2.noise(0.05));

      let noise = noise1.noise;

      assert(closeTo(noise(1.01), 0.45898178, 1e-6));
      assert(closeTo(noise(1.02), 0.44969848, 1e-6));
      assert(closeTo(noise(1.03), 0.44091918, 1e-6));
      assert(closeTo(noise(1.04), 0.43264568, 1e-6));
      assert(closeTo(noise(1.05), 0.42486249, 1e-6));
    });
  });
});
