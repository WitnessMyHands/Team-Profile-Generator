const Intern = require("../script/Intern");

test("Can set school via constructor", () => {
  const testValue = "TEX";
  const e = new Intern("Subj", 1, "test@test.com", testValue);
  expect(e.school).toBe(testValue);
});

test("getRole() should return \"Intern\"", () => {
  const testValue = "Intern";
  const e = new Intern("Subj", 1, "test@test.com", "TEX");
  expect(e.getRole()).toBe(testValue);
});

test("Can get school via getSchool()", () => {
  const testValue = "TEX";
  const e = new Intern("Subj", 1, "test@test.com", testValue);
  expect(e.getSchool()).toBe(testValue);
});