import { generateRateVariations } from './helpers';

describe('/utils', function () {
  describe('generateRateVariations', function () {
    it('generates 2x2 uniform dictionaries correctly', function () {
      expect(
        generateRateVariations([
          [6, 4],
          [6, 4],
        ])
      ).toStrictEqual({
        0: 36,
        1: 24,
        2: 24,
        3: 16,
      });
    });

    it('generates 3x3 uniform dictionaries correctly', function () {
      expect(
        generateRateVariations([
          [5, 3, 2],
          [5, 3, 2],
        ])
      ).toStrictEqual({
        0: 25,
        1: 15,
        2: 10,
        3: 15,
        4: 9,
        5: 6,
        6: 10,
        7: 6,
        8: 4,
      });
    });
    it('generates 4x4 uniform dictionaries correctly', function () {
      expect(
        generateRateVariations([
          [4, 3, 2, 1],
          [4, 3, 2, 1],
        ])
      ).toStrictEqual({
        0: 16, // 4 x 4
        1: 12, // 4 x 3
        2: 8, // 4 x 2
        3: 4, // 4 x 1
        4: 12, // 3 x 4
        5: 9, // 3 x 3
        6: 6, // 3 x 2
        7: 3, // 3 x 1
        8: 8, // 2 x 4
        9: 6, // 2 x 3
        10: 4, // 2 x 2
        11: 2, // 2 x 1
        12: 4, // 1 x 4
        13: 3, // 1 x 3
        14: 2, // 1 x 2
        15: 1, // 1 x 1
      });
    });

    it('generates 1x4 dictionaries correctly', function () {
      expect(generateRateVariations([[10], [4, 3, 2, 1]])).toStrictEqual({
        0: 40,
        1: 30,
        2: 20,
        3: 10,
      });
    });

    it('generates 2x4 dictionaries correctly', function () {
      expect(
        generateRateVariations([
          [6, 4],
          [4, 3, 2, 1],
        ])
      ).toStrictEqual({
        0: 24,
        1: 18,
        2: 12,
        3: 6,
        4: 16,
        5: 12,
        6: 8,
        7: 4,
      });
    });

    it('generates 3x4 dictionaries correctly', function () {
      expect(
        generateRateVariations([
          [5, 3, 2],
          [4, 3, 2, 1],
        ])
      ).toStrictEqual({
        0: 20,
        1: 15,
        2: 10,
        3: 5,
        4: 12,
        5: 9,
        6: 6,
        7: 3,
        8: 8,
        9: 6,
        10: 4,
        11: 2,
      });
    });
  });
});
