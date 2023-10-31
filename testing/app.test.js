const { sum, ganjilGenap } = require("./app");

// BASIC UNIT TESTING
test("menjumlahkan angka", () => {
  expect(sum(2, 3)).toBe(5);
  expect(sum(2, 2)).toBe(4);
  expect(sum(1, 1)).toBe(2);
});
test("Ganjil Genap", () => {
  expect(ganjilGenap(0)).toBe("Genap");
  expect(ganjilGenap(1)).toBe("Ganjil");
  expect(ganjilGenap(5)).toBe("Ganjil");
  expect(ganjilGenap(10)).toBe("Genap");
  expect(ganjilGenap(14)).toBe("Genap");
});
