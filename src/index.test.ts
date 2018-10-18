import { toClosestUnit } from "./index";

test("basic", () => {
  expect(toClosestUnit(1000000)).toEqual({
    value: 1,
    size: "MB"
  });
});
