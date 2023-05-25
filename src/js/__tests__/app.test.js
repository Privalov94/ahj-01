import demo from "../app";

test("return", () => {
  const result = demo("Hello");

  expect(result).toEqual("Hello");
});
