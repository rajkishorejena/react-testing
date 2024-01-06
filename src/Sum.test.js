import Sum from "./Sum";

test("Test the sum of two number", () => {
  let a = 10;
  let b = 20;
  let result = 30;
  expect(Sum(a, b)).toBe(result);
});
