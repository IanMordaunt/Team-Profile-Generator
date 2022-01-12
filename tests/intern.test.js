const Intern = require('../lib/Intern')

describe("get Role", () => {
    it("getRole() should return \"Intern\"", () => {
        const test = new Intern();
        expect(test.getRole()).toEqual("Intern");
    });
});

describe("get School", () => {
    it("should return intern's school", () => {
        const test = new Intern("", "", "", "SDSU");
        expect(test.getSchool()).toEqual("SDSU");
  });
});

describe("Can set School via constructor", () => {
    it("should set School via constructor", () => {
        const test = new Intern("", "", "", "SDSU");
        expect(test.school).toEqual("SDSU");
  });
});