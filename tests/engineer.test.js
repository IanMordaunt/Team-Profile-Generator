const Engineer = require('../lib/Engineer')

describe("get Role", () => {
    it("getRole() should return \"Engineer\"", () => {
        const test = new Engineer();
        expect(test.getRole()).toEqual("Engineer");
    });
});

describe("get GitHub", () => {
    it("should return engineer's GitHub username", () => {
        const test = new Engineer("", "", "", "IanMordaunt");
        expect(test.getGitHub()).toEqual("IanMordaunt");
  });
});

describe("Can set GitHub via constructor", () => {
    it("should set GitHub account via constructor", () => {
        const test = new Engineer("", "", "", "IanMordaunt");
        expect(test.github).toEqual("IanMordaunt");
  });
});